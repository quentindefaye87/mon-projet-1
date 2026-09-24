import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/collections", "/realisations", "/processus", "/a-propos", "/journal", "/devis", "/contact", "/guide-mesure"];
  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...categories.map((c) => ({ url: `${site.url}/collections/${c.slug}`, lastModified: now, priority: 0.8 })),
    ...products.map((p) => ({ url: `${site.url}/produits/${p.slug}`, lastModified: now, priority: 0.9 })),
    ...projects.map((p) => ({ url: `${site.url}/realisations/${p.slug}`, lastModified: now, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}`, lastModified: new Date(p.date), priority: 0.5 })),
  ];
}
