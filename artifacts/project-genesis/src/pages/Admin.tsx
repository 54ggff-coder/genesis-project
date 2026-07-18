import AuthGuard from "@/components/auth/AuthGuard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthContext } from "@/context/AuthContext";
import { useI18n } from "@/lib/i18n";
import { useLocation } from "wouter";
import { useEffect } from "react";

function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthContext();
  const [, setLocation] = useLocation();
  useEffect(() => {
    if (!loading && user && user.role !== "admin") setLocation("/dashboard");
  }, [user, loading, setLocation]);
  if (user?.role !== "admin") return null;
  return <>{children}</>;
}

export default function Admin() {
  const { t } = useI18n();

  const stats = [
    { label: t("admin_users"), value: "—", icon: "👥" },
    { label: t("admin_premium"), value: "—", icon: "⭐" },
    { label: t("admin_assessments"), value: "—", icon: "📝" },
  ];

  return (
    <>
      <Navbar />
      <AuthGuard>
        <AdminGuard>
          <main className="container-page py-10">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-foreground">{t("admin_title")}</h1>
              <p className="text-muted-foreground mt-1">Platform management and analytics</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className="text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-bold text-foreground mb-4">{t("admin_manage")}</h2>
              <div className="text-center py-12 text-muted-foreground">
                <div className="text-4xl mb-3">🔧</div>
                <p className="text-sm">User management panel coming soon.</p>
              </div>
            </div>
          </main>
        </AdminGuard>
      </AuthGuard>
      <Footer />
    </>
  );
}
