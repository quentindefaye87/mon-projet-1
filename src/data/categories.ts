import type { WindowCategory } from "@/types";

export const categories: WindowCategory[] = [
  {
    slug: "menuiseries-aluminium",
    name: "Menuiseries aluminium",
    shortDescription: "Fenêtres, portes-fenêtres et baies en aluminium.",
    description:
      "Fenêtres, portes-fenêtres, baies et portes en aluminium, fabriquées à vos mesures et posées par nos équipes.",
    visual: {
      variant: "frame",
      tone: "stone",
      alt: "Porte-fenêtre aluminium anthracite posée dans une ouverture de grange en pierre",
      src: "/images/porte-fenetre-alu-grange.jpg",
      position: "50% 40%",
    },
  },
  {
    slug: "verandas",
    name: "Vérandas",
    shortDescription: "Une pièce de vie en plus, sur mesure.",
    description:
      "Des vérandas sur mesure : design, matériaux et agencement choisis pour s'accorder à votre habitation.",
    visual: {
      variant: "bay",
      tone: "stone",
      alt: "Véranda aluminium anthracite à toit quatre pans adossée à une maison",
      src: "/images/veranda-alu-anthracite.jpg",
      position: "50% 55%",
    },
  },
  {
    slug: "portes-entree",
    name: "Portes d'entrée",
    shortDescription: "Des portes d'entrée sur mesure.",
    description:
      "Des portes d'entrée sur mesure, en PVC ou en aluminium, pleines ou vitrées.",
    visual: {
      variant: "picture",
      tone: "ember",
      alt: "Porte d'entrée rouge à quatre hublots avec fixe latéral vitré anthracite",
      src: "/images/porte-entree-rouge.jpg",
      position: "50% 45%",
    },
  },
  {
    slug: "menuiseries-pvc",
    name: "Menuiseries PVC",
    shortDescription: "Fenêtres et portes en PVC.",
    description:
      "Fenêtres, portes-fenêtres et portes en PVC, fabriquées à vos mesures et posées par nos équipes.",
    visual: {
      variant: "grid",
      tone: "stone",
      alt: "Maison en pierre équipée de fenêtres et portes-fenêtres blanches à petits-bois",
      src: "/images/maison-pierre-volets-battants.jpg",
      position: "0% 40%",
    },
  },
  {
    slug: "volets-protections-solaires",
    name: "Volets & protections solaires",
    shortDescription: "Volets roulants, volets battants et stores.",
    description:
      "Volets roulants, volets battants, stores intérieurs et stores extérieurs : fabrication et pose par SCAL.",
    visual: {
      variant: "facade",
      tone: "dusk",
      alt: "Volets battants blancs à barres et écharpe sur une façade en pierre",
      src: "/images/maison-pierre-volets-battants.jpg",
      position: "100% 75%",
    },
  },
  {
    slug: "portails-portes-garage",
    name: "Portails & portes de garage",
    shortDescription: "Portails et portes de garage.",
    description:
      "Portails et portes de garage sur mesure, posés par nos équipes.",
    visual: {
      variant: "slider",
      tone: "ember",
      alt: "Portail aluminium battant plein à lames verticales, teinte brun, entre deux piliers",
      src: "/images/portail-aluminium-battant.jpg",
      position: "50% 45%",
    },
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
