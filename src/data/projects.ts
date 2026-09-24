import type { Project } from "@/types";

// Réalisations issues des photos de chantier SCAL. Lieux et années à préciser avec l'entreprise.

export const projects: Project[] = [
  {
    slug: "porte-fenetre-aluminium-grange-pierre",
    title: "Une grange en pierre ouverte sur la lumière",
    location: "Haute-Vienne",
    propertyType: "Rénovation",
    style: "Bâti ancien",
    windowType: "Menuiseries aluminium",
    cover: {
      variant: "frame",
      tone: "stone",
      alt: "Porte-fenêtre aluminium anthracite à deux vantaux et imposte vitrée, posée sous un linteau en bois dans un mur en pierre",
      src: "/images/porte-fenetre-alu-grange.jpg",
      position: "50% 40%",
    },
    gallery: [],
    summary:
      "Une grande porte-fenêtre aluminium anthracite avec impostes vitrées, ajustée au millimètre dans l'ancienne ouverture d'une grange.",
    description: [
      "L'ouverture d'origine de la grange, sous un linteau en chêne, offrait une hauteur généreuse mais irrégulière. L'objectif : faire entrer un maximum de lumière sans dénaturer le caractère de la pierre.",
      "Nous avons conçu un ensemble aluminium anthracite sur mesure : une porte-fenêtre à deux vantaux encadrée de châssis fixes, surmontée de trois impostes vitrées. Les profils fins laissent toute la place au verre, et la teinte sombre dialogue avec la pierre et le bois.",
      "Fabrication et pose ont été réalisées par nos équipes, avec un calfeutrement adapté à la maçonnerie ancienne.",
    ],
  },
  {
    slug: "veranda-aluminium-toit-pans",
    title: "Une véranda pour vivre au jardin",
    location: "Haute-Vienne",
    propertyType: "Extension",
    style: "Traditionnel",
    windowType: "Vérandas",
    cover: {
      variant: "bay",
      tone: "stone",
      alt: "Véranda aluminium anthracite à toit quatre pans, adossée à une maison, au milieu d'un jardin vallonné",
      src: "/images/veranda-alu-anthracite.jpg",
      position: "50% 55%",
    },
    gallery: [],
    summary:
      "Une véranda aluminium anthracite à toit pans, adossée à la maison, qui ajoute une pièce de vie tournée vers la campagne.",
    description: [
      "Les propriétaires souhaitaient profiter de la vue sur la vallée en toute saison, avec une pièce lumineuse directement reliée à la maison.",
      "La véranda a été dessinée sur mesure : structure aluminium anthracite, toiture multipans isolante et grands vitrages sur trois côtés. Elle s'adosse au pignon existant sans masquer la fenêtre de l'étage.",
      "Le résultat : un salon de jardin couvert, baigné de lumière, utilisable du printemps à l'hiver.",
    ],
  },
  {
    slug: "porte-entree-rouge-fixe-lateral",
    title: "Une entrée rouge qui signe la façade",
    location: "Haute-Vienne",
    propertyType: "Rénovation",
    style: "Contemporain",
    windowType: "Portes d'entrée",
    cover: {
      variant: "picture",
      tone: "ember",
      alt: "Porte d'entrée aluminium rouge à quatre hublots, avec un fixe latéral vitré anthracite, dans une façade en granit",
      src: "/images/porte-entree-rouge.jpg",
      position: "50% 45%",
    },
    gallery: [],
    summary:
      "Une porte d'entrée aluminium rouge rubis à hublots, associée à un fixe latéral anthracite qui éclaire le hall.",
    description: [
      "L'ancienne porte n'isolait plus et assombrissait l'entrée. Les propriétaires voulaient une porte sûre, isolante et qui donne du caractère à leur façade en granit.",
      "Nous avons posé une porte aluminium rouge rubis à quatre hublots dépolis, avec serrure multipoints, et un fixe latéral vitré en anthracite pour apporter de la lumière naturelle dans le hall.",
      "Le contraste du rouge et de l'anthracite sur la pierre grise donne à la maison une entrée affirmée et chaleureuse.",
    ],
  },
  {
    slug: "maison-pierre-volets-battants-blancs",
    title: "Une maison en pierre habillée de blanc",
    location: "Haute-Vienne",
    propertyType: "Rénovation",
    style: "Maison en pierre",
    windowType: "Volets & protections solaires",
    cover: {
      variant: "facade",
      tone: "stone",
      alt: "Maison en pierre équipée de fenêtres, portes-fenêtres et d'une porte d'entrée blanches, avec volets battants blancs à barres et écharpe",
      src: "/images/maison-pierre-volets-battants.jpg",
      position: "50% 50%",
    },
    gallery: [],
    summary:
      "Fenêtres et portes-fenêtres à petits-bois, porte d'entrée vitrée et volets battants à barres et écharpe : une façade en pierre entièrement rhabillée de blanc.",
    description: [
      "Sur cette maison en pierre, l'enjeu était de remplacer l'ensemble des ouvertures sans perdre le charme de la façade : petits-bois, volets traditionnels, proportions d'origine.",
      "Nous avons posé des fenêtres et portes-fenêtres blanches à petits-bois, une porte d'entrée vitrée sous l'auvent existant et des volets battants à barres et écharpe, dans l'esprit des volets limousins.",
      "Le blanc des menuiseries et des volets fait ressortir la pierre et le granit, pour une façade lumineuse et cohérente.",
    ],
  },
  {
    slug: "portail-aluminium-battant-brun",
    title: "Un portail qui se fond dans le jardin",
    location: "Haute-Vienne",
    propertyType: "Aménagement extérieur",
    style: "Traditionnel",
    windowType: "Portails & portes de garage",
    cover: {
      variant: "slider",
      tone: "ember",
      alt: "Portail aluminium battant plein à lames verticales, teinte brun, posé entre deux piliers enduits blancs",
      src: "/images/portail-aluminium-battant.jpg",
      position: "50% 45%",
    },
    gallery: [],
    summary:
      "Un portail aluminium battant à deux vantaux, plein à lames verticales, dans une teinte brune qui s'accorde aux haies et au jardin.",
    description: [
      "Les propriétaires cherchaient un portail sans entretien, qui préserve l'intimité de la cour tout en restant discret au milieu de la végétation.",
      "Nous avons posé un portail aluminium à deux vantaux, plein à lames verticales, entre les piliers existants. Sa teinte brune rappelle le bois sans ses contraintes de lasure.",
      "L'aluminium ne rouille pas et ne se déforme pas : le portail garde son aspect d'origine, saison après saison.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
