import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000";

  const paths = [
    "/",
    "/assessment",
    "/pricing",
    "/about",
    "/features",
    "/blog",
  ];

  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
