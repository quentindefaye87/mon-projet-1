import type { WindowCategory } from "@/types";

export const categories: WindowCategory[] = [
  {
    slug: "menuiseries-aluminium",
    name: "Menuiseries aluminium",
    shortDescription: "Des profils fins, de grands clairs de vitrage, une élégance durable.",
    description:
      "Fenêtres, portes-fenêtres et baies coulissantes en aluminium à rupture de pont thermique. Des montants affinés pour faire entrer un maximum de lumière, des teintes texturées inaltérables et une rigidité qui autorise les très grandes dimensions, jusque dans les granges et longères en pierre.",
    visual: {
      variant: "frame",
      tone: "stone",
      alt: "Porte-fenêtre aluminium anthracite posée dans une ouverture de grange en pierre",
      src: "/images/porte-fenetre-alu-grange.jpg",
      position: "50% 40%",
    },
    bestFor: ["Grandes ouvertures", "Rénovation de granges", "Architecture contemporaine"],
  },
  {
    slug: "verandas",
    name: "Vérandas",
    shortDescription: "Une pièce à vivre en plus, baignée de lumière toute l'année.",
    description:
      "Vérandas aluminium conçues sur mesure pour prolonger votre maison : salon, salle à manger ou jardin d'hiver. Structure aluminium à rupture de pont thermique, toiture isolante et menuiseries coulissantes, pour une pièce confortable en toute saison.",
    visual: {
      variant: "bay",
      tone: "stone",
      alt: "Véranda aluminium anthracite à toit quatre pans adossée à une maison",
      src: "/images/veranda-alu-anthracite.jpg",
      position: "50% 55%",
    },
    bestFor: ["Extension de séjour", "Jardin d'hiver", "Salle à manger"],
  },
  {
    slug: "portes-entree",
    name: "Portes d'entrée",
    shortDescription: "La première impression de votre maison, sûre et isolante.",
    description:
      "Portes d'entrée aluminium et PVC, pleines ou vitrées, avec ou sans fixe latéral. Serrures multipoints, panneaux isolants et un large choix de teintes, du rouge signature à l'anthracite, pour une entrée qui vous ressemble.",
    visual: {
      variant: "picture",
      tone: "ember",
      alt: "Porte d'entrée rouge à quatre hublots avec fixe latéral vitré anthracite",
      src: "/images/porte-entree-rouge.jpg",
      position: "50% 45%",
    },
    bestFor: ["Sécurité", "Isolation", "Façade"],
  },
  {
    slug: "menuiseries-pvc",
    name: "Menuiseries PVC",
    shortDescription: "Isolation, facilité d'entretien et excellent rapport qualité-prix.",
    description:
      "Fenêtres et portes-fenêtres PVC multi-chambres, en blanc, en teinte ou en plaxé bois. Une isolation thermique et phonique de haut niveau, un entretien réduit au minimum et une pose adaptée à la rénovation comme au neuf.",
    visual: { variant: "grid", tone: "stone", alt: "Façade claire équipée de fenêtres PVC blanches" },
    bestFor: ["Rénovation", "Maisons individuelles", "Budget maîtrisé"],
  },
  {
    slug: "volets-protections-solaires",
    name: "Volets & protections solaires",
    shortDescription: "Volets roulants, battants, stores : maîtrisez lumière et chaleur.",
    description:
      "Volets roulants motorisés ou solaires, volets battants aluminium, stores bannes et protections solaires. Ils renforcent l'isolation, la sécurité et le confort d'été de votre maison, avec une commande manuelle, filaire ou connectée.",
    visual: { variant: "facade", tone: "dusk", alt: "Façade de maison équipée de volets roulants au crépuscule" },
    bestFor: ["Confort d'été", "Sécurité", "Motorisation"],
  },
  {
    slug: "portails-portes-garage",
    name: "Portails & portes de garage",
    shortDescription: "Des accès assortis à vos menuiseries, motorisables.",
    description:
      "Portails battants ou coulissants, portillons, clôtures et portes de garage sectionnelles ou enroulables. Coordonnés à vos menuiseries et à votre porte d'entrée, ils se motorisent pour un confort d'usage au quotidien.",
    visual: { variant: "slider", tone: "ember", alt: "Portail aluminium coulissant devant une maison" },
    bestFor: ["Motorisation", "Harmonie de façade", "Sécurité"],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
