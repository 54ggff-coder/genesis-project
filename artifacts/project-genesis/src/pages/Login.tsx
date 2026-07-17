import { Link } from "wouter";
import LoginForm from "@/components/auth/LoginForm";
import { useI18n } from "@/lib/i18n";

export default function Login() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel — decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-sidebar flex-col justify-between p-12">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">G</span>
          </div>
          <span className="font-bold text-lg text-sidebar-foreground">Genesis</span>
        </Link>
        <div>
          <blockquote className="text-sidebar-foreground/80 text-xl leading-relaxed mb-4">
            "Understanding yourself is the first step toward a career that truly fits."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center text-sm font-bold text-primary">A</div>
            <div>
              <div className="text-sm font-semibold text-sidebar-foreground">Ahmed M.</div>
              <div className="text-xs text-sidebar-foreground/50">Software Engineer, found his path via Genesis</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-sidebar-foreground/30">{t("footer_rights")}</p>
      </div>

      {/* Right panel — form */}
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
