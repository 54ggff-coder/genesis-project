import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { useI18n } from "@/lib/i18n";

const FAQS = [
  { q: "How does the assessment work?", a: "Our assessment is a series of behavioral questions designed to reveal your natural strengths, thinking styles, and personality traits. It takes about 10 minutes to complete." },
  { q: "Do I need to create an account?", a: "You can start the assessment without an account. However, creating a free account lets you save your results and track your progress over time." },
  { q: "How is this different from a personality test?", a: "While personality tests focus on who you are, Genesis focuses on what you're capable of and where your hidden skills lie — then maps those to real career opportunities." },
  { q: "Is my data private?", a: "Absolutely. Your responses and results are encrypted and never shared with third parties. See our Privacy Policy for full details." },
  { q: "What do I get with the free plan?", a: "The free plan includes one full assessment and a basic overview of your top skills. Premium unlocks unlimited assessments, full career reports, and personalized growth plans." },
  { q: "Can I retake the assessment?", a: "Yes! Premium users can retake assessments as many times as they like. Free users get one assessment. Retaking after growth or life changes can reveal new insights." },
  { q: "How accurate are the results?", a: "Our assessments are based on validated behavioral science frameworks. They are most accurate when answered honestly and without overthinking — trust your first instinct." },
];

export default function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="container-page py-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">{t("faq_title")}</h1>
        <p className="text-muted-foreground mb-10">Everything you need to know about Project Genesis.</p>

        <div className="space-y-3 mb-10">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-start"
              >
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                <span className={`text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}>▾</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <AdBanner slot="horizontal" />
      </main>
      <Footer />
    </>
  );
}
