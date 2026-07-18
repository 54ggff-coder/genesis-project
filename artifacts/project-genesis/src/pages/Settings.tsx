import AuthGuard from "@/components/auth/AuthGuard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useAuthContext } from "@/context/AuthContext";
import { useI18n } from "@/lib/i18n";
import { useLocation } from "wouter";

export default function Settings() {
  const { user, logout } = useAuthContext();
  const { t } = useI18n();
  const [, setLocation] = useLocation();

  function handleLogout() {
    logout();
    setLocation("/");
  }

  return (
    <>
      <Navbar />
      <AuthGuard>
        <main className="container-page py-10 max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-foreground">{t("settings_title")}</h1>
            <p className="text-muted-foreground mt-1">{t("settings_subtitle")}</p>
          </div>

          <div className="space-y-4">
            {/* Account */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">{t("settings_account")}</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{t("profile_username")}</span>
                  <span className="text-sm font-semibold text-foreground">@{user?.username}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">{t("profile_display")}</span>
                  <span className="text-sm font-semibold text-foreground">{user?.displayName}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">Plan</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${user?.isPremium ? "bg-accent/20 text-accent-foreground" : "bg-secondary text-muted-foreground"}`}>
                    {user?.isPremium ? "⭐ Premium" : t("free")}
                  </span>
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">{t("settings_language")}</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Display Language</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Choose between English and Arabic</p>
                </div>
                <LanguageSwitcher />
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">{t("settings_security")}</h2>
              <p className="text-sm text-muted-foreground">Your data is encrypted and never shared with third parties. We use industry-standard security practices to protect your account.</p>
            </div>

            {/* Sign out */}
            <div className="bg-card border border-destructive/20 rounded-2xl p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-destructive mb-3">{t("settings_signout")}</h2>
              <p className="text-sm text-muted-foreground mb-4">{t("settings_signout_desc")}</p>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm font-semibold text-destructive border border-destructive/30 rounded-xl hover:bg-destructive/8 transition-colors"
              >
                {t("settings_signout_btn")}
              </button>
            </div>
          </div>
        </main>
      </AuthGuard>
      <Footer />
    </>
  );
}
