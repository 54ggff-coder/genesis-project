import { createSupabaseServerClient } from "@/lib/supabase/server";

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  updated_at: string;
}

export async function getProfile(userId: string) {
  const supabase = await createSupabaseServerClient();
  return supabase.from("profiles").select("*").eq("id", userId).single();
}

export async function updateProfile(userId: string, values: Partial<Profile>) {
  const supabase = await createSupabaseServerClient();
  return supabase.from("profiles").update(values).eq("id", userId);
}
