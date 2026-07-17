import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuthContext } from "@/context/AuthContext";
import { useI18n } from "@/lib/i18n";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  const { user, loading } = useAuthContext();
  const { t } = useI18n();

  useEffect(() => {
    if (!loading && user === null) {
      setLocation("/login");
    }
  }, [loading, user, setLocation]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">{t("loading")}</p>
        </div>
      </div>
    );
  }

  if (!user) return null;
  return <>{children}</>;
}
