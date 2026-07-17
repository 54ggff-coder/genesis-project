import { Router, type IRouter } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db, usersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

const JWT_SECRET = process.env.SESSION_SECRET ?? "genesis-secret-key-change-in-prod";
const JWT_EXPIRES = "30d";

function sign(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { id: number; username: string; role: string };
}

// POST /api/auth/register
router.post("/auth/register", async (req, res) => {
  try {
    const { username, password, displayName } = req.body as {
      username: string;
      password: string;
      displayName: string;
    };

    if (!username || !password || !displayName) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (username.length < 3 || username.length > 30) {
      return res.status(400).json({ error: "Username must be 3–30 characters" });
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return res.status(400).json({ error: "Username can only contain letters, numbers, and underscores" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
