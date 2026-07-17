// app/(auth)/forgot-password/page.tsx
"use client";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="max-w-md mx-auto mt-20 px-6">
      <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
      <ForgotPasswordForm />
    </div>
  );
}
