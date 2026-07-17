import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border mt-20">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-lg">Genesis</span>
            </div>
            <p className="text-sm text-sidebar-foreground/60 max-w-xs leading-relaxed">
              {t("footer_tagline")}
            </p>
          </div>
          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-sidebar-foreground/80 mb-3 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/assessment", label: t("nav_assessment") },
                { href: "/dashboard", label: t("nav_dashboard") },
                { href: "/report", label: t("nav_report") },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-sidebar-foreground/80 mb-3 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: t("footer_about") },
                { href: "/contact", label: t("footer_contact") },
                { href: "/faq", label: t("footer_faq") },
                { href: "/privacy", label: t("footer_privacy") },
                { href: "/terms", label: t("footer_terms") },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-sidebar-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-sidebar-foreground/40">{t("footer_rights")}</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-sidebar-foreground/40">Built with ❤️ for those who seek growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
