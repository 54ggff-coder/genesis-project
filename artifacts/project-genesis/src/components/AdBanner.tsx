// Ad Banner — replace the inner content with your actual Google AdSense or other ad network code.
// To activate: sign up at ads.google.com, get your publisher ID, and replace the placeholder below.

type AdBannerProps = {
  slot?: "horizontal" | "square" | "vertical";
  className?: string;
};

export default function AdBanner({ slot = "horizontal", className = "" }: AdBannerProps) {
  const sizes = {
    horizontal: "w-full min-h-[90px]",
    square: "w-full min-h-[250px]",
    vertical: "w-full min-h-[600px]",
  };

  return (
    <div
      className={`ad-container flex items-center justify-center ${sizes[slot]} ${className}`}
      role="complementary"
      aria-label="Advertisement"
    >
      {/* ── REPLACE THIS BLOCK WITH YOUR AD CODE ──────────────────────
           Example for Google AdSense:
           <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXX"
                data-ad-format="auto"
                data-full-width-responsive="true" />
           <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
         ─────────────────────────────────────────────────────────────── */}
      <div className="text-center px-4 py-6 opacity-40">
        <p className="text-xs text-muted-foreground font-medium">Advertisement</p>
      </div>
    </div>
  );
}
