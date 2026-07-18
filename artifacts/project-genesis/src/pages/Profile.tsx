import { useState } from "react";
import AuthGuard from "@/components/auth/AuthGuard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthContext } from "@/context/AuthContext";
import { useI18n } from "@/lib/i18n";
import { api } from "@/lib/api";

const SKILLS = [
  { name: "Problem Solving", level: 80 },
  { name: "Communication", level: 65 },
  { name: "Creativity", level: 72 },
  { name: "Leadership", level: 55 },
  { name: "Analytical Thinking", level: 68 },
];

export default function Profile() {
  const { user, refresh } = useAuthContext();
  const { t } = useI18n();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName ?? "");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function handleSave() {
    setSaving(true);
    try {
      await api.users.updateProfile(displayName);
      await refresh();
      setEditing(false);
      setMsg("Profile updated!");
      setTimeout(() => setMsg(null), 3000);
    } catch (e: any) {
      setMsg(e.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Navbar />
      <AuthGuard>
        <main className="container-page py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-foreground">{t("profile_title")}</h1>
            <p className="text-muted-foreground mt-1">{t("profile_subtitle")}</p>
          </div>

          {msg && (
            <div className="mb-4 bg-primary/10 border border-primary/20 text-primary rounded-xl px-4 py-3 text-sm">{msg}</div>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {/* Account info */}
            <div className="md:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-extrabold text-primary">
                    {(user?.displayName?.[0] ?? "U").toUpperCase()}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-center text-foreground">{user?.displayName}</h2>
                <p className="text-sm text-muted-foreground text-center">@{user?.username}</p>
                {user?.isPremium && (
                  <div className="mt-2 flex justify-center">
                    <span className="text-xs bg-accent/20 text-accent-foreground px-2.5 py-1 rounded-full font-bold">⭐ Premium</span>
                  </div>
                )}

                <hr className="my-5 border-border" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("profile_username")}</span>
                    <span className="font-medium text-foreground">@{user?.username}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("profile_member_since")}</span>
                    <span className="font-medium text-foreground">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => { setEditing(!editing); setDisplayName(user?.displayName ?? ""); }}
                  className="mt-5 w-full py-2 text-sm font-medium border border-border rounded-xl hover:bg-secondary transition-colors"
                >
                  {editing ? t("profile_cancel") : t("profile_edit")}
                </button>

                {editing && (
                  <div className="mt-3 space-y-2">
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder={t("auth_display_placeholder")}
                    />
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="w-full py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-xl disabled:opacity-50"
                    >
                      {saving ? t("loading") : t("profile_save")}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Skills & Goals */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-base font-bold text-foreground mb-5">{t("profile_skills")}</h3>
                <div className="space-y-4">
                  {SKILLS.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-1.5 text-sm">
                        <span className="font-medium text-foreground">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${s.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">Complete more assessments to unlock additional skills.</p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-base font-bold text-foreground mb-4">{t("profile_goals")}</h3>
                <ul className="space-y-3">
                  {["Complete the full skill assessment", "Explore recommended career paths", "Review your personalized growth plan", "Share results with a mentor"].map((g, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full border-2 border-border flex-shrink-0" />
                      <span className="text-sm text-foreground">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </AuthGuard>
      <Footer />
    </>
  );
}
