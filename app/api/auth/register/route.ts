import connectDB from "@/lib/mongodb";
import User from "@/database/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    let body: unknown;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { message: "Invalid JSON format" },
        { status: 400 },
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 },
      );
    }

    const { firstName, lastName, email, password } = body as Record<
      string,
      unknown
    >;

    const errors: Record<string, string> = {};

    if (typeof firstName !== "string" || !firstName.trim()) {
      errors.firstName = "نام را وارد کنید";
    }

    if (typeof lastName !== "string" || !lastName.trim()) {
      errors.lastName = "نام خانوادگی را وارد کنید";
    }

    if (typeof email !== "string" || !email.trim()) {
      errors.email = "ایمیل را وارد کنید";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "فرمت ایمیل صحیح نیست";
    }

    if (typeof password !== "string" || !password) {
      errors.password = "رمز عبور را وارد کنید";
    } else if (password.length < 8) {
      errors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 },
      );
    }

    const normalizedEmail = (email as string).trim().toLowerCase();

    await connectDB();

    const existingUser = await User.exists({
      email: normalizedEmail,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: {
            email: "این ایمیل قبلاً ثبت شده است",
          },
        },
        { status: 409 },
      );
    }

    const userData = {
      firstName: (firstName as string).trim(),
      lastName: (lastName as string).trim(),
      email: normalizedEmail,
      password: password as string,
    };

    const passwordHash = await bcrypt.hash(userData.password, 12);

    const createdUser = await User.create({
      email: userData.email,
      passwordHash,
      profile: {
        firstName: userData.firstName,
        lastName: userData.lastName,
      },
    });

    return NextResponse.json(
      {
        message: "Account created successfully",
        user: {
          id: createdUser._id,
          email: createdUser.email,
          profile: createdUser.profile,
          role: createdUser.role,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);

    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === 11000
    ) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: {
            email: "این ایمیل قبلاً ثبت شده است",
          },
        },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { message: "خطایی در سرور رخ داده است" },
      { status: 500 },
    );
  }
}
