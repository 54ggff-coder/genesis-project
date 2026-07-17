"use client";
import { supabaseBrowser } from "@/lib/supabase/client";

export async function signIn(email: string, password: string) {
  return supabaseBrowser.auth.signInWithPassword({ email, password });
}

export async function signUp(email: string, password: string) {
  return supabaseBrowser.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: `${window.location.origin}/dashboard` },
  });
}

export async function signOut() {
  return supabaseBrowser.auth.signOut();
}

export async function getCurrentUser() {
  const { data } = await supabaseBrowser.auth.getUser();
  return data.user;
}

export async function resetPassword(email: string) {
  return supabaseBrowser.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
}
