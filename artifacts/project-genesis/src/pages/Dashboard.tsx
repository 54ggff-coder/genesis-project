import { useEffect, useState } from "react";
import { Link } from "wouter";
import AuthGuard from "@/components/auth/AuthGuard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import PremiumBanner from "@/components/PremiumBanner";
import { useAuthContext } from "@/context/AuthContext";
import { useI18n } from "@/lib/i18n";
import { api } from "@/lib/api";

type Stats = { assessmentCount: number; skillsDiscovered: number; progress: number; isPremium: boolean };

function StatCard({ icon, label, value, sub }: { icon: string; label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 card-hover">
      <div className="text-2xl mb-3">{icon}</div>
      <div className="text-3xl font-extrabold text-foreground mb-1">{value}</div>
      <div className="text-sm font-medium text-foreground/80">{label}</div>
      {sub && <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>}
    </div>
  );
}

export default function Dashboard() {
  const { user } = useAuthContext();
  const { t } = useI18n();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    api.users.stats().then(setStats).catch(() => {});
  }, []);

  return (
    <>
      <Navbar />
      <AuthGuard>
        <main className="container-page py-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-foreground">
              {t("dash_welcome")}, {user?.displayName} 👋
