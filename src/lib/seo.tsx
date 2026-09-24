import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { BlogPost, Product } from "@/types";

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: "fr_FR",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:30",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1200" },
    sameAs: site.socials.map((s) => s.href),
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} — ${product.tagline}`,
    description: product.description,
    brand: { "@type": "Brand", name: site.name },
    url: `${site.url}/produits/${product.slug}`,
    category: "Fenêtres et menuiseries",
    additionalProperty: product.specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: product.basePrice,
      availability: "https://schema.org/MadeToOrder",
      seller: { "@id": `${site.url}/#organization` },
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/journal/${post.slug}`,
    inLanguage: "fr-FR",
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
}
