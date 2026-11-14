import { createHash, randomBytes } from "crypto";
import type { Types } from "mongoose";

import connectToDatabase from "@/lib/mongodb";
import { Session } from "@/database";

const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000;

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

// Create a new session
export async function createSession(userId: Types.ObjectId) {
  await connectToDatabase();

  const token = randomBytes(32).toString("hex");
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + SESSION_DURATION);

  await Session.create({
    userId,
    tokenHash,
    expiresAt,
  });

  return {
    token,
    expiresAt,
  };
}

// Validate an existing session
export async function validateSession(token: string) {
  if (!token) return null;

  await connectToDatabase();

  const tokenHash = hashToken(token);

  const session = await Session.findOne({
    tokenHash,
    expiresAt: { $gt: new Date() },
  });

  return session;
}

// Delete a session
export async function deleteSession(token: string) {
  if (!token) return;

  await connectToDatabase();

  const tokenHash = hashToken(token);

  await Session.deleteOne({ tokenHash });
}
