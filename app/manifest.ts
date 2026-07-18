import type { MetadataRoute } from "next";

export const manifest: MetadataRoute.Manifest = {
  name: "Project Genesis",
  short_name: "Genesis",
  description:
    "Discover your hidden skills, personality, future career paths.",
  start_url: "/",
  display: "standalone",
  background_color: "#0f172a",
  theme_color: "#0f172a",
  icons: [
    {
      src: "/icon-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icon-512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};
