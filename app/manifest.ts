import type { MetadataRoute } from "next";

export const manifest: MetadataRoute.Manifest = {
  name: "App",
  short_name: "App",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  icons: [],
};