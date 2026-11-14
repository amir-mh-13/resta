import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

const COOKIE_NAME = "resta_session";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 7 * 24 * 60 * 60,
};

export async function setSessionCookie(
  response: NextResponse,
  token: string
) {
  response.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);
}

export async function getSessionCookie() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value ?? null;
}

export async function deleteSessionCookie(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, "", {
    ...COOKIE_OPTIONS,
    maxAge: 0,
  });
}
