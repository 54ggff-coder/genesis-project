import { Link } from "wouter";
import RegisterForm from "@/components/auth/RegisterForm";
import { useI18n } from "@/lib/i18n";

export default function Register() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background flex">
      <div className="hidden lg:flex lg:w-1/2 bg-sidebar flex-col justify-between p-12">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">G</span>
          </div>
          <span className="font-bold text-lg text-sidebar-foreground">Genesis</span>
        </Link>
        <div>
          <h2 className="text-3xl font-extrabold text-sidebar-foreground mb-4 leading-tight">
            Your journey starts<br />with knowing yourself.
          </h2>
          <ul className="space-y-3">
            {["Discover skills you didn't know you had", "Get matched with your ideal career path", "Build a personalized growth plan"].map(i => (
              <li key={i} className="flex items-center gap-3 text-sidebar-foreground/70 text-sm">
                <span className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center text-primary text-xs font-bold">✓</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-sidebar-foreground/30">{t("footer_rights")}</p>
      </div>
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-lg text-foreground">Genesis</span>
            </Link>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
