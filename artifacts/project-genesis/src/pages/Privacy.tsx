import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function Privacy() {
  const { t } = useI18n();
  return (
    <>
      <Navbar />
      <main className="container-page py-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">{t("privacy_title")}</h1>
        <p className="text-muted-foreground mb-10">Last updated: July 2026</p>
        <div className="prose prose-sm max-w-none text-foreground">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            {[
              { title: "Information We Collect", body: "We collect only the information necessary to provide our service: your username, display name, hashed password, and your assessment responses. We do not collect email addresses or personal identifiers beyond what you provide." },
              { title: "How We Use Your Data", body: "Your data is used solely to generate your skills report and personalized recommendations. We do not sell, share, or rent your personal data to any third parties." },
              { title: "Data Security", body: "All passwords are hashed using bcrypt before storage. Connections are encrypted via TLS/HTTPS. We regularly review and update our security practices." },
              { title: "Cookies", body: "We use only essential cookies required for session management. We do not use tracking cookies or third-party analytics cookies without your consent." },
              { title: "Your Rights", body: "You can request deletion of your account and all associated data at any time by contacting us. We will process such requests within 30 days." },
              { title: "Contact", body: "For privacy-related questions, use the Contact page. We take all privacy concerns seriously and respond within 48 hours." },
            ].map((s) => (
              <div key={s.title}>
                <h2 className="text-base font-bold text-foreground mb-2">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
