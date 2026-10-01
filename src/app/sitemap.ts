import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/solutions", "/realisations", "/a-propos", "/actualites", "/devis", "/contact", "/guide-mesure"];
  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...categories.map((c) => ({ url: `${site.url}/solutions/${c.slug}`, lastModified: now, priority: 0.8 })),
  ];
}
