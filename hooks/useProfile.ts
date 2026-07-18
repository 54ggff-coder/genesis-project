"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import type { Profile } from "@/lib/profile";

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const { data: userData, error: userErr } =
          await supabaseBrowser.auth.getUser();
        if (userErr) throw userErr;

        if (!userData.user) {
          if (mounted) {
            setProfile(null);
            setLoading(false);
          }
          return;
        }

        const { data, error: dbErr } = await supabaseBrowser
          .from("profiles")
          .select("*")
          .eq("id", userData.user.id)
          .single();

        if (dbErr) throw dbErr;

        if (mounted) {
          setProfile((data as Profile) ?? null);
        }
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Failed to load profile.";
        if (mounted) setError(message);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    const { data: sub } = supabaseBrowser.auth.onAuthStateChange(() => {
      load();
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return { profile, loading, error, refetch: () => {} };
}
