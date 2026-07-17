import { useAuthContext } from "@/context/AuthContext";

export default function ProfileCard() {
  const { user } = useAuthContext();

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <h2 className="text-base font-bold text-foreground mb-4">Account Information</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Username</span>
          <span className="font-medium text-foreground">@{user?.username ?? "—"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Display Name</span>
          <span className="font-medium text-foreground">{user?.displayName ?? "—"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Member Since</span>
          <span className="font-medium text-foreground">
            {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Plan</span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${user?.isPremium ? "bg-accent/20 text-accent-foreground" : "bg-secondary text-muted-foreground"}`}>
            {user?.isPremium ? "⭐ Premium" : "Free"}
          </span>
        </div>
      </div>
    </div>
  );
}
