"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { error } = await supabaseBrowser.auth.resetPasswordForEmail(email, {
        // في كثير من المشاريع لا تحتاج هذا الخيار
        // لكن إن عندك domain مخصص للـ reset على Frontend حطّه هنا
        // redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setMessage("تم إرسال رابط تغيير كلمة المرور إلى بريدك الإلكتروني.");
    } catch (err: any) {
      setMessage(err?.message || "حدث خطأ أثناء إرسال البريد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-black text-white py-2 px-4 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send reset link"}
      </button>

      {message && <p className="text-sm text-gray-700">{message}</p>}
    </form>
  );
}