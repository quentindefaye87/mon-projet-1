import type { WindowCategory } from "@/types";

export const categories: WindowCategory[] = [
  {
    slug: "fenetres-battantes",
    name: "Fenêtres battantes",
    shortDescription: "L'élégance intemporelle d'une ouverture à la française.",
    description:
      "Nos fenêtres battantes associent des profils affinés à une étanchéité triple joint. Ouvrant vers l'intérieur, elles offrent une ventilation généreuse et un nettoyage facilité, dans un dessin qui respecte aussi bien l'haussmannien que le contemporain.",
    visual: { variant: "frame", tone: "bronze", alt: "Détail d'un profil de fenêtre battante en bois et aluminium bronze" },
    bestFor: ["Rénovation", "Chambres & séjours", "Façades classiques"],
  },
  {
    slug: "baies-coulissantes",
    name: "Baies coulissantes",
    shortDescription: "De grands vantaux qui effacent la frontière avec l'extérieur.",
    description:
      "Des vantaux jusqu'à 6 mètres, un seuil encastré et une glisse d'une fluidité remarquable. Nos baies coulissantes et levantes-coulissantes ouvrent le séjour sur le jardin avec des montants de seulement 25 mm en vue.",
    visual: { variant: "slider", tone: "forest", alt: "Grande baie coulissante ouvrant sur un jardin au crépuscule" },
    bestFor: ["Séjours", "Terrasses", "Architecture contemporaine"],
  },
  {
    slug: "oscillo-battantes",
    name: "Oscillo-battantes",
    shortDescription: "Aération sécurisée et polyvalence au quotidien.",
    description:
      "Une poignée, deux ouvertures : en soufflet pour une ventilation discrète et sécurisée, à la française pour l'entretien. Ferrures invisibles, compas anti-fausse-manœuvre et performances passives.",
    visual: { variant: "grid", tone: "sapphire", alt: "Façade d'immeuble rythmée de fenêtres oscillo-battantes" },
    bestFor: ["Tertiaire", "Logements collectifs", "Salles d'eau"],
  },
  {
    slug: "chassis-fixes",
    name: "Châssis fixes",
    shortDescription: "Cadrer le paysage comme une œuvre.",
    description:
      "Des vitrages de grandes dimensions, sans ouvrant, pour une lumière maximale et une vue sans interruption. Profils minimalistes encastrés, intégration en angle ou en toiture possible.",
    visual: { variant: "picture", tone: "dusk", alt: "Grand châssis fixe cadrant un paysage de montagnes" },
    bestFor: ["Vues panoramiques", "Cages d'escalier", "Doubles hauteurs"],
  },
  {
    slug: "bow-windows",
    name: "Bow-windows",
    shortDescription: "Une avancée lumineuse qui agrandit l'espace.",
    description:
      "Nos bow-windows et oriels créent un volume vitré en saillie, idéal pour une banquette de lecture ou un coin repas baigné de lumière. Structure autoportante et isolation renforcée en sous-face.",
    visual: { variant: "bay", tone: "stone", alt: "Bow-window à trois pans lumineux sur une façade claire" },
    bestFor: ["Maisons de ville", "Extensions", "Coins lecture"],
  },
  {
    slug: "sur-mesure",
    name: "Formes sur mesure",
    shortDescription: "Cintres, trapèzes, verrières : l'impossible, dessiné.",
    description:
      "Notre bureau d'études conçoit les formes singulières : fenêtres cintrées, œils-de-bœuf, verrières d'atelier, trapèzes sous rampant. Chaque pièce est tracée, prototypée et validée avec vous avant fabrication.",
    visual: { variant: "arch", tone: "sapphire", alt: "Fenêtre cintrée sur mesure avec petits-bois rayonnants" },
    bestFor: ["Patrimoine", "Projets d'architecte", "Pièces uniques"],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
