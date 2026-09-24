export const site = {
  name: "Lumen & Cadre",
  legalName: "Lumen & Cadre SAS",
  tagline: "Menuiseries d'exception",
  description:
    "Fenêtres, baies coulissantes et menuiseries sur mesure, conçues et fabriquées en France. Performance thermique, acoustique et design architectural pour les particuliers et les professionnels.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lumen-cadre.fr",
  phone: "+33 1 84 60 42 10",
  phoneDisplay: "01 84 60 42 10",
  email: "contact@lumen-cadre.fr",
  address: {
    street: "18 rue des Artisans",
    postalCode: "69007",
    city: "Lyon",
    country: "FR",
  },
  geo: { lat: 45.7445, lng: 4.8416 },
  hours: [
    { days: "Lundi – Vendredi", time: "8h30 – 18h30" },
    { days: "Samedi", time: "9h00 – 13h00 (showroom sur RDV)" },
    { days: "Dimanche", time: "Fermé" },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Pinterest", href: "https://pinterest.com" },
  ],
} as const;

export const mainNav = [
  { label: "Collections", href: "/collections" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Notre démarche", href: "/processus" },
  { label: "Maison", href: "/a-propos" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;
