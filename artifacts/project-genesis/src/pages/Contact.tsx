import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Navbar />
      <main className="container-page py-16 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">{t("contact_title")}</h1>
        <p className="text-muted-foreground mb-10">Have a question or feedback? We read every message.</p>

        {sent ? (
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-foreground mb-2">{t("contact_sent")}</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border rounded-2xl p-8">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact_name")}</label>
              <input
                type="text" required
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact_message")}</label>
              <textarea
                required rows={5}
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity">
              {t("contact_send")}
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
