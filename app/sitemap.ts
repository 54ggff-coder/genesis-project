import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return ["/", "/assessment", "/pricing", "/about"]
    .map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
