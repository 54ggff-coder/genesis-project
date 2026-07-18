"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function RegisterForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);

    try {
      if (password.length < 8) {
        throw new Error("Password must be at least 8 characters.");
      }

      const { data, error } = await supabaseBrowser.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: { full_name: fullName },
        },
      });

      if (error) throw error;

      if (data.session) {
        router.push("/dashboard");
        router.refresh();
        return;
      }

      // Supabase مفعّل فيه "Confirm email" — نخبر المستخدم
      setInfo(
        "تم إنشاء الحساب. من فضلك افتح بريدك الإلكتروني لتفعيل الحساب قبل تسجيل الدخول."
      );
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "حدث خطأ غير متوقع.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded-xl p-3"
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl p-3"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl p-3"
            placeholder="At least 8 characters"
            autoComplete="new-password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white w-full rounded-xl p-3 disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        {error && (
          <p className="text-sm text-red-600 mt-2" role="alert">
            {error}
          </p>
        )}
        {info && (
          <p className="text-sm text-green-700 mt-2" role="status">
            {info}
          </p>
        )}
      </form>
    </div>
  );
}
