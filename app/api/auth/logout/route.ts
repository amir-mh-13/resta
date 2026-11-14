import { NextResponse } from "next/server";

import { getSessionCookie, deleteSessionCookie } from "@/lib/cookie";
import { deleteSession } from "@/lib/session";

export async function POST() {
  try {
    const token = await getSessionCookie();

    if (token) {
      await deleteSession(token);
    }

    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );

    await deleteSessionCookie(response);

    return response;
  } catch (error) {
    console.error("Logout error:", error);

    return NextResponse.json(
      { message: "خطایی در خروج از حساب رخ داده است" },
      { status: 500 }
    );
  }
}
