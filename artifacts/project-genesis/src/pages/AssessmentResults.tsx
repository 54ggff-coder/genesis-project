import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBanner from "@/components/PremiumBanner";
import AdBanner from "@/components/AdBanner";
import { useI18n } from "@/lib/i18n";

export default function AssessmentResults() {
  const { t } = useI18n();
  return (
    <>
      <Navbar />
      <main className="container-page py-10 max-w-3xl">
        {/* Success */}
        <div className="text-center py-12 bg-card border border-border rounded-2xl mb-6">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-extrabold text-foreground mb-3">{t("assess_complete")}</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("assess_complete_msg")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard" className="px-8 py-3 bg-secondary text-foreground font-semibold rounded-xl hover:bg-secondary/70 transition-colors">
              {t("assess_next")}
            </Link>
            <Link href="/report" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity">
              {t("assess_view_report")} →
            </Link>
          </div>
        </div>

        <PremiumBanner />
        <AdBanner slot="horizontal" />
      </main>
      <Footer />
    </>
  );
}
