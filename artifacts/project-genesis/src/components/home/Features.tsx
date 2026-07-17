import { useI18n, type TranslationKey } from "@/lib/i18n";

type Feature = {
  icon: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  accent: string;
};

const features: Feature[] = [
  { icon: "🔍", titleKey: "feat1_title", descKey: "feat1_desc", accent: "bg-primary/10 text-primary" },
  { icon: "🗺️", titleKey: "feat2_title", descKey: "feat2_desc", accent: "bg-accent/15 text-accent-foreground" },
  { icon: "📈", titleKey: "feat3_title", descKey: "feat3_desc", accent: "bg-blue-500/10 text-blue-600" },
  { icon: "⏱️", titleKey: "feat4_title", descKey: "feat4_desc", accent: "bg-purple-500/10 text-purple-600" },
  { icon: "👥", titleKey: "feat5_title", descKey: "feat5_desc", accent: "bg-rose-500/10 text-rose-600" },
  { icon: "📄", titleKey: "feat6_title", descKey: "feat6_desc", accent: "bg-teal-500/10 text-teal-600" },
];

export default function Features() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {t("features_title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("features_subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.titleKey}
              className="group bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${f.accent}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{t(f.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
