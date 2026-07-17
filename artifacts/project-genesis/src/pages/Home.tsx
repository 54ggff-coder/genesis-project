import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AdBanner from "@/components/AdBanner";
import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";

function PricingSection() {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-foreground mb-3">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">Start free, upgrade when you're ready.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">{t("free")}</div>
            <div className="text-4xl font-extrabold text-foreground mb-1">$0</div>
            <p className="text-muted-foreground text-sm mb-6">Forever free, no credit card</p>
            <ul className="space-y-3 mb-8">
              {["1 free assessment", "Basic skill overview", "Community access", "Growth checklist"].map(i => (
                <li key={i} className="flex items-center gap-2.5 text-sm">
                  <span className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">✓</span>
                  {i}
                </li>
              ))}
            </ul>
            <Link href="/register" className="block text-center py-2.5 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-colors">
              Get Started Free
            </Link>
          </div>
          {/* Premium */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 end-4 text-xs font-bold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">POPULAR</div>
            <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-4">{t("premium")}</div>
            <div className="text-4xl font-extrabold mb-1">$9.99</div>
            <p className="opacity-70 text-sm mb-6">per month, cancel anytime</p>
            <ul className="space-y-3 mb-8">
              {["Unlimited assessments", "Full career report PDF", "Personalized growth plan", "Priority support", "Advanced insights"].map(i => (
                <li key={i} className="flex items-center gap-2.5 text-sm">
                  <span className="w-4 h-4 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-bold">✓</span>
                  {i}
                </li>
              ))}
            </ul>
            <Link href="/register" className="block text-center py-2.5 bg-primary-foreground text-primary font-semibold rounded-xl hover:opacity-90 transition-opacity">
              {t("premium_cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="container-page">
          <AdBanner slot="horizontal" className="my-4" />
        </div>
        <Features />
        <PricingSection />
        <div className="container-page">
          <AdBanner slot="horizontal" className="my-8" />
        </div>
      </main>
      <Footer />
    </>
  );
}
