/**
 * Database row types — DB schema is created via supabase/migrations/*.sql.
 * Keep this file's types in sync with the SQL definitions.
 */

export type UserRole = "user" | "admin" | "premium";

export interface UserRow {
  id: number;
  username: string;
  passwordHash: string;
  displayName: string;
  role: UserRole;
  isPremium: boolean;
  assessmentCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface InsertUser {
  username: string;
  passwordHash: string;
  displayName: string;
  role?: UserRole;
  isPremium?: boolean;
}

export type User = UserRow;
