import { Router, type IRouter } from "express";
import { db, usersTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { verifyToken } from "./auth";

const router: IRouter = Router();

function auth(req: any, res: any, next: any) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) return res.status(401).json({ error: "Unauthorized" });
  try {
    req.user = verifyToken(header.slice(7));
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

// PATCH /api/users/profile
router.patch("/users/profile", auth, async (req: any, res) => {
  try {
    const { displayName } = req.body as { displayName?: string };
    if (!displayName) return res.status(400).json({ error: "displayName required" });

    const [user] = await db
      .update(usersTable)
      .set({ displayName, updatedAt: new Date() })
      .where(eq(usersTable.id, req.user.id))
      .returning({
        id: usersTable.id,
        username: usersTable.username,
        displayName: usersTable.displayName,
        role: usersTable.role,
        isPremium: usersTable.isPremium,
      });

    res.json({ user });
  } catch (err) {
    req.log.error({ err }, "Update profile error");
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/users/stats
router.get("/users/stats", auth, async (req: any, res) => {
  const [user] = await db
    .select({
      assessmentCount: usersTable.assessmentCount,
      isPremium: usersTable.isPremium,
      createdAt: usersTable.createdAt,
    })
    .from(usersTable)
    .where(eq(usersTable.id, req.user.id))
    .limit(1);

  res.json({
    assessmentCount: user?.assessmentCount ?? 0,
    isPremium: user?.isPremium ?? false,
    skillsDiscovered: (user?.assessmentCount ?? 0) * 3,
    progress: Math.min((user?.assessmentCount ?? 0) * 10, 100),
  });
});

export default router;
