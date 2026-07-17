"use client";

import { useSearchParams } from "next/navigation";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const access_token = searchParams.get("access_token") || "";

  return (
    <div className="max-w-md mx-auto mt-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
      <ResetPasswordForm accessToken={access_token} />
    </div>
  );
}