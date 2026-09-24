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
  geo: { lat: 45.7985, lng: 1.1372 },
  // À confirmer avec l'entreprise : horaires indicatifs.
  hours: [
    { days: "Lundi – Vendredi", time: "8h00 – 12h00 · 14h00 – 18h00" },
    { days: "Samedi", time: "Sur rendez-vous" },
    { days: "Dimanche", time: "Fermé" },
  ],
  certifications: [{ name: "RGE Qualibat", description: "Reconnu Garant de l'Environnement" }],
  socials: [{ name: "Facebook", href: "https://www.facebook.com/SCAL-348417098677628/" }],
} as const;

export const mainNav = [
  { label: "Nos solutions", href: "/solutions" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Notre méthode", href: "/processus" },
  { label: "L'entreprise", href: "/a-propos" },
  { label: "Conseils", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;
