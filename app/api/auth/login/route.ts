import connectDB from "@/lib/mongodb";
import User from "@/database/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// هش ساختگی برای جلوگیری از timing attack وقتی کاربر پیدا نمی‌شود
const DUMMY_HASH =
  "$2a$12$C6UzMDM.H6dfI/f/IKcEeO5pQ1pQ8bX1m8mYb9m3q1g0Xn8m6y0eK";

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

    const { email, password } = body as Record<string, unknown>;

    const errors: Record<string, string> = {};

    if (typeof email !== "string" || !email.trim()) {
      errors.email = "ایمیل را وارد کنید";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "فرمت ایمیل صحیح نیست";
    }

    if (typeof password !== "string" || !password) {
      errors.password = "رمز عبور را وارد کنید";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { message: "Validation failed", errors },
        { status: 400 },
      );
    }

    const normalizedEmail = (email as string).trim().toLowerCase();

    await connectDB();

    const user = await User.findOne({ email: normalizedEmail }).select(
      "+passwordHash",
    );

    const isPasswordValid = await bcrypt.compare(
      password as string,
      user?.passwordHash ?? DUMMY_HASH,
    );

    if (!user || !isPasswordValid) {
      return NextResponse.json(
        { message: "ایمیل یا رمز عبور اشتباه است" },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id,
          email: user.email,
          profile: user.profile,
          role: user.role,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { message: "خطایی در سرور رخ داده است" },
      { status: 500 },
    );
  }
} 