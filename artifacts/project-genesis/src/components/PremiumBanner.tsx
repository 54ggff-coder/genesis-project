import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { useAuthContext } from "@/context/AuthContext";

export default function PremiumBanner() {
  const { t } = useI18n();
  const { user } = useAuthContext();

  if (user?.isPremium) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/8 to-primary/8 p-6 my-6">
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="text-lg">⭐</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Premium</span>
              <span className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-medium">
                {t("premium_price")}
              </span>
            </div>
            <h3 className="font-bold text-foreground mb-1">{t("premium_unlock")}</h3>
            <p className="text-sm text-muted-foreground">{t("premium_desc")}</p>
          </div>
          <Link
            href="/settings"
            className="flex-shrink-0 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            {t("upgrade")}
          </Link>
        </div>
      </div>
    </div>
  );
}
