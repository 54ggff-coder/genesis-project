import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function Terms() {
  const { t } = useI18n();
  return (
    <>
      <Navbar />
      <main className="container-page py-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">{t("terms_title")}</h1>
        <p className="text-muted-foreground mb-10">Last updated: July 2026</p>
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
          {[
            { title: "Acceptance of Terms", body: "By accessing Project Genesis, you agree to these Terms of Service. If you do not agree, please do not use our platform." },
            { title: "User Accounts", body: "You are responsible for maintaining the security of your account credentials. You must not share your account or use another person's account without authorization." },
            { title: "Acceptable Use", body: "You agree not to misuse the platform, attempt to access unauthorized data, or interfere with the service's normal operation. Violations may result in account termination." },
            { title: "Assessment Results", body: "Assessment results are provided for informational purposes only and do not constitute professional career counseling. They are tools to help you reflect, not definitive judgments." },
            { title: "Premium Subscriptions", body: "Premium subscriptions are billed monthly. You may cancel at any time. Refunds are handled on a case-by-case basis — contact us within 7 days of a charge if you believe there is an error." },
            { title: "Changes to Terms", body: "We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the updated terms." },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-foreground mb-2">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
