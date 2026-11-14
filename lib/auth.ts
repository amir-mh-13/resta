import "server-only";

import { User } from "@/database";
import { getSessionCookie } from "@/lib/cookie";
import { deleteSession, validateSession } from "@/lib/session";

export async function getCurrentUser() {
  const token = await getSessionCookie();

  if (!token) return null;

  const session = await validateSession(token);

  if (!session) return null;

  const user = await User.findById(session.userId).select(
    "email profile role hostStatus isEmailVerified"
  );

  if (!user) {
    await deleteSession(token);
    return null;
  }

  return user;
}