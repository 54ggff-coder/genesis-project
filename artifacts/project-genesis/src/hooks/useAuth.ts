import { useState, useEffect, useCallback } from "react";
import { api, type AuthUser } from "@/lib/api";

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const token = localStorage.getItem("genesis_token");
    if (!token) { setUser(null); setLoading(false); return; }
    try {
      const { user } = await api.auth.me();
      setUser(user);
    } catch {
      localStorage.removeItem("genesis_token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  function login(token: string, userData: AuthUser) {
    localStorage.setItem("genesis_token", token);
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem("genesis_token");
    setUser(null);
  }

  return { user, loading, login, logout, refresh };
}
