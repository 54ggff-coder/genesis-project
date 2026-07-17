import { createContext, useContext, type ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { AuthUser } from "@/lib/api";

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
  refresh: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null, loading: true,
  login: () => {}, logout: () => {}, refresh: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
