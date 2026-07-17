import { useI18n, type Language } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-0.5 bg-secondary rounded-lg p-0.5 border border-border">
      {(["en", "ar"] as Language[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
            lang === l
              ? "bg-card text-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l === "en" ? "EN" : "ع"}
        </button>
      ))}
    </div>
  );
}
