import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "villa-des-pins-arcachon",
    title: "Villa des Pins",
    location: "Arcachon, Gironde",
    year: "2025",
    propertyType: "Résidentiel",
    style: "Contemporain",
    windowType: "Baies coulissantes",
    cover: { variant: "slider", tone: "forest", alt: "Villa des Pins : baies coulissantes ouvertes sur la pinède" },
    before: { variant: "grid", tone: "stone", alt: "Villa des Pins avant travaux : menuiseries vieillissantes" },
    after: { variant: "slider", tone: "forest", alt: "Villa des Pins après travaux : baies Horizon de 5 mètres" },
    gallery: [
      { variant: "facade", tone: "forest", alt: "Façade sud de la Villa des Pins au crépuscule" },
      { variant: "interior", tone: "forest", alt: "Séjour ouvert sur la terrasse" },
      { variant: "frame", tone: "forest", alt: "Détail du seuil encastré" },
    ],
    summary: "Quatre baies Horizon de 5 mètres ouvrent le séjour sur la pinède, avec un seuil totalement encastré.",
    description: [
      "Les propriétaires souhaitaient effacer la frontière entre le séjour et la terrasse, tout en conservant un confort thermique irréprochable face aux vents du bassin.",
      "Nous avons installé quatre baies Horizon levantes-coulissantes en triple vitrage, avec un seuil encastré à fleur de sol et une motorisation pilotée depuis la domotique existante.",
      "Résultat : 38 % de surface vitrée en plus, et une consommation de chauffage réduite de 31 % sur le premier hiver.",
    ],
    testimonial: {
      quote: "On a l'impression que le jardin fait partie de la maison. Et l'hiver, on ne sent plus le moindre courant d'air.",
      author: "Claire et Mathieu D.",
    },
  },
  {
    slug: "immeuble-haussmannien-paris",
    title: "Rue de Rivoli",
    location: "Paris 1er",
    year: "2024",
    propertyType: "Patrimoine",
    style: "Haussmannien",
    windowType: "Fenêtres battantes",
    cover: { variant: "arch", tone: "bronze", alt: "Fenêtres Héritage restaurées dans un immeuble haussmannien" },
    before: { variant: "arch", tone: "stone", alt: "Fenêtres d'origine abîmées avant restauration" },
    after: { variant: "arch", tone: "bronze", alt: "Fenêtres Héritage en chêne après restauration" },
    gallery: [
      { variant: "interior", tone: "stone", alt: "Salon haussmannien lumineux" },
      { variant: "frame", tone: "bronze", alt: "Moulure restituée à l'identique" },
    ],
    summary: "Restitution à l'identique de 64 fenêtres en chêne, validée par les Architectes des Bâtiments de France.",
    description: [
      "Cette copropriété du 1er arrondissement devait remplacer ses menuiseries tout en respectant les prescriptions strictes du secteur sauvegardé.",
      "Nos menuisiers ont relevé chaque profil existant pour reproduire moulures, petits-bois et espagnolettes, en intégrant un double vitrage acoustique de 38 dB.",
      "Le chantier a été mené en site occupé, logement par logement, en moins de six semaines.",
    ],
    testimonial: {
      quote: "Un travail d'orfèvre. Même l'architecte des Bâtiments de France a salué la qualité de la restitution.",
      author: "Syndic de la copropriété",
    },
  },
  {
    slug: "siege-social-lyon",
    title: "Siège Confluence",
    location: "Lyon 2e",
    year: "2025",
    propertyType: "Commercial",
    style: "Tertiaire",
    windowType: "Oscillo-battantes",
    cover: { variant: "grid", tone: "sapphire", alt: "Siège Confluence : façade rythmée de fenêtres Cité" },
    before: { variant: "grid", tone: "stone", alt: "Façade avant rénovation énergétique" },
    after: { variant: "grid", tone: "sapphire", alt: "Façade après rénovation avec fenêtres Cité" },
    gallery: [
      { variant: "interior", tone: "sapphire", alt: "Plateau de bureaux en lumière naturelle" },
      { variant: "frame", tone: "stone", alt: "Ferrures invisibles" },
    ],
    summary: "412 fenêtres Cité certifiées Passivhaus pour la rénovation BBC d'un siège de 6 000 m².",
    description: [
      "Dans le cadre du décret tertiaire, ce siège social devait réduire de 40 % ses consommations d'énergie d'ici 2030.",
      "Nous avons fourni et posé 412 fenêtres Cité en triple vitrage, avec un planning phasé par étage pour maintenir l'activité des équipes.",
      "Le bâtiment a obtenu le label BBC Rénovation, avec un gain de 27 points sur le confort d'été grâce aux vitrages à contrôle solaire.",
    ],
    testimonial: {
      quote: "Planning tenu, zéro interruption d'activité et un interlocuteur unique du début à la fin.",
      author: "Direction de l'immobilier, groupe Veyrat",
    },
  },
  {
    slug: "maison-atelier-annecy",
    title: "Maison-atelier",
    location: "Annecy, Haute-Savoie",
    year: "2024",
    propertyType: "Résidentiel",
    style: "Montagne contemporaine",
    windowType: "Châssis fixes",
    cover: { variant: "picture", tone: "dusk", alt: "Grand châssis Panorama face aux montagnes" },
    before: { variant: "facade", tone: "stone", alt: "Maison avant l'agrandissement des ouvertures" },
    after: { variant: "picture", tone: "dusk", alt: "Châssis Panorama de 5 mètres face au lac" },
    gallery: [
      { variant: "picture", tone: "forest", alt: "Vue sur la forêt depuis l'atelier" },
      { variant: "facade", tone: "dusk", alt: "Façade de la maison-atelier" },
    ],
    summary: "Un châssis fixe de 5 mètres cadre le lac et les sommets depuis l'atelier d'une artiste.",
    description: [
      "Une peintre souhaitait transformer sa grange en atelier baigné de lumière du nord, avec une vue intacte sur le lac.",
      "Notre bureau d'études a conçu un châssis Panorama de 5 × 2,8 mètres, encastré dans la maçonnerie, avec un vitrage extra-clair pour un rendu fidèle des couleurs.",
    ],
    testimonial: {
      quote: "La lumière est exactement celle dont je rêvais. Le cadre a disparu, il ne reste que le paysage.",
      author: "Hélène R., artiste peintre",
    },
  },
  {
    slug: "hotel-boutique-biarritz",
    title: "Hôtel Les Embruns",
    location: "Biarritz, Pyrénées-Atlantiques",
    year: "2023",
    propertyType: "Commercial",
    style: "Balnéaire",
    windowType: "Bow-windows",
    cover: { variant: "bay", tone: "sapphire", alt: "Bow-windows d'un hôtel face à l'océan" },
    before: { variant: "bay", tone: "stone", alt: "Bow-windows d'origine dégradés par l'air salin" },
    after: { variant: "bay", tone: "sapphire", alt: "Bow-windows Belvédère restaurés face à l'océan" },
    gallery: [
      { variant: "interior", tone: "sapphire", alt: "Chambre avec vue sur l'océan" },
      { variant: "slider", tone: "sapphire", alt: "Baie coulissante du restaurant" },
    ],
    summary: "Rénovation de 28 bow-windows en aluminium marin, résistants aux embruns et au vent.",
    description: [
      "Cet hôtel classé Belle Époque subissait l'usure de l'air salin sur ses bow-windows d'origine.",
      "Nous avons conçu des Belvédère en aluminium à traitement marin, avec des vitrages acoustiques pour atténuer le bruit du ressac, tout en respectant la silhouette historique.",
    ],
  },
  {
    slug: "loft-bordeaux",
    title: "Loft des Chartrons",
    location: "Bordeaux, Gironde",
    year: "2025",
    propertyType: "Résidentiel",
    style: "Industriel",
    windowType: "Formes sur mesure",
    cover: { variant: "arch", tone: "forest", alt: "Verrière cintrée dans un ancien chai" },
    before: { variant: "arch", tone: "stone", alt: "Ouverture cintrée murée avant travaux" },
    after: { variant: "arch", tone: "forest", alt: "Verrière Signature cintrée réouverte" },
    gallery: [
      { variant: "interior", tone: "bronze", alt: "Loft en double hauteur" },
      { variant: "frame", tone: "dusk", alt: "Profil acier-look noir sablé" },
    ],
    summary: "Réouverture de six baies cintrées dans un chai du XIXe, avec des verrières Signature en noir sablé.",
    description: [
      "L'ancien chai avait vu ses arches murées au fil des décennies. Le projet consistait à les rouvrir pour retrouver la lumière d'origine.",
      "Chaque arc a été relevé au laser pour une fabrication millimétrée ; les verrières Signature reprennent l'esthétique des ateliers avec des performances actuelles.",
    ],
    testimonial: {
      quote: "Ils ont compris le lieu avant de dessiner quoi que ce soit. Le résultat est d'une justesse rare.",
      author: "Studio Aléas, architectes",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
