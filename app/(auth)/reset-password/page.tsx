"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

function ResetPasswordInner() {
  const searchParams = useSearchParams();

  // Supabase PKCE flow يضع ?code=... في الـredirect URL
  const code = searchParams.get("code") ?? "";

  return (
    <div className="max-w-md mx-auto mt-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
      <ResetPasswordForm code={code} />
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="max-w-md mx-auto mt-20">Loading...</div>}>
      <ResetPasswordInner />
    </Suspense>
  );
}
