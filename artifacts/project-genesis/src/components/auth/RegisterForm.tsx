import { useState } from "react";
import { Link, useLocation } from "wouter";
import { api } from "@/lib/api";
import { useAuthContext } from "@/context/AuthContext";
import { useI18n } from "@/lib/i18n";

export default function RegisterForm() {
  const [, setLocation] = useLocation();
  const { login } = useAuthContext();
  const { t } = useI18n();
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { token, user } = await api.auth.register(username.trim(), password, displayName.trim());
      login(token, user);
      setLocation("/dashboard");
    } catch (err: any) {
      setError(err.message ?? t("error_generic"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">{t("auth_register_title")}</h1>
        <p className="text-muted-foreground mt-1.5">{t("auth_register_subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="flex items-center gap-2.5 bg-destructive/8 border border-destructive/20 text-destructive rounded-xl px-4 py-3 text-sm">
            <span>⚠</span> {error}
