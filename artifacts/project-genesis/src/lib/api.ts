const BASE = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

function getToken(): string | null {
  return localStorage.getItem("genesis_token");
}

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, { ...options, headers });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data as T;
}

export type AuthUser = {
  id: number;
  username: string;
  displayName: string;
  role: string;
  isPremium: boolean;
  createdAt: string;
};

export const api = {
  auth: {
    register: (username: string, password: string, displayName: string) =>
      request<{ token: string; user: AuthUser }>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, password, displayName }),
      }),

    login: (username: string, password: string) =>
      request<{ token: string; user: AuthUser }>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      }),

    me: () => request<{ user: AuthUser }>("/api/auth/me"),
  },

  users: {
    stats: () =>
      request<{
        assessmentCount: number;
        isPremium: boolean;
        skillsDiscovered: number;
        progress: number;
      }>("/api/users/stats"),

    updateProfile: (displayName: string) =>
      request<{ user: AuthUser }>("/api/users/profile", {
        method: "PATCH",
        body: JSON.stringify({ displayName }),
      }),
  },
};
