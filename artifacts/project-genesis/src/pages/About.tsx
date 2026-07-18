import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 bg-secondary/40">
          <div className="container-page max-w-3xl text-center">
            <h1 className="text-5xl font-extrabold text-foreground mb-5">{t("about_title")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe every person has untapped potential waiting to be discovered. Project Genesis gives you the tools to find it.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-page max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border rounded-2xl p-8 card-hover">
                <div className="text-3xl mb-4">🎯</div>
                <h2 className="text-xl font-bold text-foreground mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">To empower every person with the self-knowledge and tools needed to chart a meaningful career path and personal growth journey — regardless of their background.</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 card-hover">
                <div className="text-3xl mb-4">🔬</div>
                <h2 className="text-xl font-bold text-foreground mb-3">Our Approach</h2>
                <p className="text-muted-foreground leading-relaxed">We use evidence-based behavioral science assessments to surface insights about your personality, strengths, and potential that most people never discover on their own.</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { value: "12,000+", label: "Active Users" },
                { value: "50,000+", label: "Assessments Completed" },
                { value: "94%", label: "Users Found Their Path" },
              ].map((s) => (
                <div key={s.label} className="text-center bg-card border border-border rounded-2xl p-6">
                  <div className="text-3xl font-extrabold text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <AdBanner slot="horizontal" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
