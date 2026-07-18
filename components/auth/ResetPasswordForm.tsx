"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";

type Status =
  | "verifying"
  | "ready"
  | "updating"
  | "done"
  | "error"
  | "noCode";

export default function ResetPasswordForm({ code }: { code: string }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<Status>(code ? "verifying" : "noCode");
  const [message, setMessage] = useState<string | null>(
    code ? null : "Invalid or missing recovery code."
  );

  useEffect(() => {
    let mounted = true;

    async function startSession() {
      if (!code) {
        if (mounted) {
          setStatus("noCode");
          setMessage("Invalid or missing recovery code.");
        }
        return;
      }

      try {
        const { error } = await supabaseBrowser.auth.verifyOtp({
          type: "recovery",
          token_hash: code,
        });

        if (error) throw error;

        if (mounted) {
          setStatus("ready");
          setMessage("الرمز صالح. من فضلك اختر كلمة مرور جديدة.");
        }
      } catch (err: unknown) {
        const text =
          err instanceof Error ? err.message : "Failed to verify recovery code.";
        if (mounted) {
          setStatus("error");
          setMessage(text);
        }
      }
    }

    startSession();

    return () => {
      mounted = false;
    };
  }, [code]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (newPassword.length < 8) {
      setMessage("يجب أن تكون كلمة المرور 8 أحرف على الأقل.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("كلمتا المرور غير متطابقتين.");
      return;
    }

    setStatus("updating");
    try {
      const { error } = await supabaseBrowser.auth.updateUser({
        password: newPassword,
      });
      if (error) throw error;

      setStatus("done");
      setMessage("تم تغيير كلمة المرور بنجاح. يمكنك الآن تسجيل الدخول.");
    } catch (err: unknown) {
      const text =
        err instanceof Error ? err.message : "Failed to update password.";
      setStatus("error");
      setMessage(text);
    }
  }

  const disabled =
    status === "updating" || status === "done" || status === "noCode";

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-disabled={disabled}>
      <div className="space-y-1">
        <label htmlFor="newPassword" className="block text-sm font-medium">
          New Password
        </label>
        <input
          id="newPassword"
          type="password"
          required
          minLength={8}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
          placeholder="At least 8 characters"
          autoComplete="new-password"
          disabled={disabled}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="confirmPassword" className="block text-sm font-medium">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          required
          minLength={8}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
          placeholder="Repeat password"
          autoComplete="new-password"
          disabled={disabled}
        />
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="w-full rounded-md bg-black text-white py-2 px-4 disabled:opacity-60"
      >
        {status === "updating"
          ? "Updating..."
          : status === "verifying"
            ? "Verifying..."
            : "Update password"}
      </button>

      {message && (
        <p
          className={
            status === "error" || status === "noCode"
              ? "text-sm text-red-600"
              : status === "done"
                ? "text-sm text-green-700"
                : "text-sm text-gray-700"
          }
        >
          {message}
        </p>
      )}
    </form>
  );
}
