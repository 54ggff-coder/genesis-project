"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function ResetPasswordForm({
  accessToken,
}: {
  accessToken: string;
}) {
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // لو الرمز غير موجود، أعرض رسالة بدل ما نخرب الـ reset
    if (!accessToken) {
      setMessage("Invalid or missing access token.");
    }
  }, [accessToken]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!accessToken) throw new Error("Missing access token.");

      // في Supabase reset flow:
      // - نحتاج session مبنية على access_token
      // - ثم نستخدم updateUser({ password })
      const { error: sessionError } = await supabaseBrowser.auth.setSession({
        access_token: accessToken,
        // بعض flows لا تعطي refresh_token، فنمرّر نفس access_token مؤقتاً
        // (Supabase قد يعتمد على وجود refresh_token حسب إعداد المشروع)
        refresh_token: accessToken,
      });

      if (sessionError) throw sessionError;

      const { error: updateError } = await supabaseBrowser.auth.updateUser({
        password: newPassword,
      });

      if (updateError) throw updateError;

      setMessage("تم تغيير كلمة المرور بنجاح. يمكنك تسجيل الدخول الآن.");
    } catch (err: any) {
      setMessage(err?.message || "حدث خطأ أثناء تغيير كلمة المرور.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium">New Password</label>
        <input
          type="password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
          placeholder="Enter a new password"
          autoComplete="new-password"
        />
      </div>

      <button
        type="submit"
        disabled={loading || !accessToken}
        className="w-full rounded-md bg-black text-white py-2 px-4 disabled:opacity-60"
      >
        {loading ? "Updating..." : "Update password"}
      </button>

      {message && <p className="text-sm text-gray-700">{message}</p>}
    </form>
  );
}