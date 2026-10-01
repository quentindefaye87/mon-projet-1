export const site = {
  name: "SCAL",
  legalName: "SCAL 87",
  tagline: "Des ouvertures à vos mesures",
  description:
    "Menuiseries PVC et aluminium, vérandas, portes d'entrée, volets et portails sur mesure. Entreprise familiale installée à Aixe-sur-Vienne depuis 1978 : fabrication et pose à Limoges et en Haute-Vienne.",
  foundedYear: 1978,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://scal87.fr",
  phone: "+33 5 55 70 24 80",
  phoneDisplay: "05 55 70 24 80",
  email: "scal87700@gmail.com",
  address: {
    street: "Rue de Cognac",
    postalCode: "87700",
    city: "Aixe-sur-Vienne",
    country: "FR",
  },
  area: "Limoges et la Haute-Vienne",
  certifications: [{ name: "RGE Qualibat", description: "Reconnu Garant de l'Environnement" }],
  socials: [{ name: "Facebook", href: "https://www.facebook.com/SCAL-348417098677628/" }],
  /** Liens d'itinéraire vers des applications GPS (sans clé ni coordonnées : l'adresse suffit). */
  maps: {
    query: "Rue de Cognac, 87700 Aixe-sur-Vienne",
  },
} as const;

export const mainNav = [
  { label: "Nos solutions", href: "/solutions" },
  { label: "Réalisations", href: "/realisations" },
  { label: "L'entreprise", href: "/a-propos" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
] as const;
