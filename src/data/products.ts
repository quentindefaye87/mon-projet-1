import type { Product, ProductOption } from "@/types";

const materials: ProductOption[] = [
  { id: "aluminium", label: "Aluminium à rupture de pont thermique", priceDelta: 0 },
  { id: "bois-alu", label: "Bois-aluminium (chêne intérieur)", priceDelta: 180 },
  { id: "bois", label: "Chêne massif lamellé-collé", priceDelta: 140 },
  { id: "pvc", label: "PVC haute performance", priceDelta: -90 },
];

const finishes: ProductOption[] = [
  { id: "anthracite", label: "Anthracite RAL 7016", swatch: "#383e42", priceDelta: 0 },
  { id: "noir", label: "Noir sablé 2100", swatch: "#141416", priceDelta: 30 },
  { id: "blanc", label: "Blanc satiné RAL 9016", swatch: "#eeede6", priceDelta: 0 },
  { id: "bronze", label: "Bronze anodisé", swatch: "#8a663f", priceDelta: 70 },
  { id: "vert", label: "Vert forêt", swatch: "#2f4d41", priceDelta: 40 },
  { id: "chene", label: "Chêne naturel huilé", swatch: "#a8835a", priceDelta: 90 },
];

const glazing: ProductOption[] = [
  { id: "double", label: "Double vitrage 4/16/4 argon — Ug 1,1", swatch: "#a9c1dc", priceDelta: 0 },
  { id: "triple", label: "Triple vitrage warm-edge — Ug 0,6", swatch: "#9fc2ae", priceDelta: 160 },
  { id: "acoustique", label: "Acoustique feuilleté — jusqu'à 42 dB", swatch: "#c2c8cc", priceDelta: 120 },
  { id: "securite", label: "Retardateur d'effraction P4A", swatch: "#8f9ba5", priceDelta: 140 },
  { id: "solaire", label: "Contrôle solaire — g 0,28", swatch: "#e3c29a", priceDelta: 90 },
];

const hardware: ProductOption[] = [
  { id: "linea", label: "Poignée Linea — inox brossé", priceDelta: 0 },
  { id: "arc", label: "Poignée Arc — laiton patiné", priceDelta: 45 },
  { id: "cle", label: "Poignée à clé sécurisée", priceDelta: 60 },
  { id: "motor", label: "Motorisation connectée", priceDelta: 420 },
];

const commonFaqs = [
  {
    question: "Quels sont les délais de fabrication ?",
    answer:
      "Comptez 5 à 7 semaines entre la validation technique et la pose pour les modèles standards, 8 à 10 semaines pour les formes spéciales et les grandes dimensions.",
  },
  {
    question: "Ma pose est-elle éligible aux aides à la rénovation ?",
    answer:
      "Oui, sous conditions. Nos menuiseries atteignent les seuils de performance exigés (Uw ≤ 1,3 et Sw ≥ 0,3) et nos équipes sont certifiées RGE Qualibat. Nous vous accompagnons dans le montage du dossier.",
  },
  {
    question: "Quelle garantie offrez-vous ?",
    answer:
      "10 ans sur les profils et l'étanchéité, 10 ans sur les vitrages (hors casse), 5 ans sur la quincaillerie et 2 ans sur la motorisation. Un contrat d'entretien optionnel prolonge la couverture.",
  },
];

function make(p: Omit<Product, "materials" | "finishes" | "glazing" | "hardware" | "faqs"> & { faqs?: Product["faqs"]; noMotor?: boolean }): Product {
  const { noMotor, faqs, ...rest } = p;
  return {
    ...rest,
    materials,
    finishes,
    glazing,
    hardware: noMotor ? hardware.filter((h) => h.id !== "motor") : hardware,
    faqs: [...(faqs ?? []), ...commonFaqs],
  };
}

export const products: Product[] = [
  make({
    slug: "atelier-battant",
    categorySlug: "fenetres-battantes",
    name: "Atelier",
    tagline: "La fenêtre battante aux lignes affinées.",
    description:
      "Atelier réinterprète la fenêtre à la française avec un profil de 68 mm de vue seulement. Ses parcloses biseautées et son battement central affiné laissent entrer jusqu'à 18 % de lumière supplémentaire par rapport à une menuiserie standard.",
    visuals: [
      { variant: "frame", tone: "bronze", alt: "Angle du profil Atelier en finition bronze" },
      { variant: "interior", tone: "bronze", alt: "Séjour lumineux équipé de fenêtres Atelier" },
      { variant: "facade", tone: "dusk", alt: "Façade contemporaine avec fenêtres Atelier éclairées" },
      { variant: "frame", tone: "stone", alt: "Détail de la quincaillerie Linea en inox brossé" },
    ],
    basePrice: 890,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 0,78 W/m².K" },
      { label: "Affaiblissement acoustique", value: "jusqu'à 42 dB" },
      { label: "Profondeur de dormant", value: "78 mm" },
      { label: "Vue de profil", value: "68 mm" },
      { label: "Dimensions max.", value: "1 600 × 2 400 mm par vantail" },
      { label: "Étanchéité", value: "A*4 E*9A V*C3" },
      { label: "Vitrage", value: "Double ou triple, jusqu'à 48 mm" },
      { label: "Certifications", value: "NF, CSTB, Acotherm" },
    ],
    benefits: [
      "Profil affiné pour un clair de vitrage maximal",
      "Triple joint périphérique pour une étanchéité durable",
      "Ferrures invisibles et crémone multipoints",
      "Compatible avec la rénovation sur dormant existant",
    ],
    noMotor: true,
    faqs: [
      {
        question: "Atelier peut-elle être posée en rénovation ?",
        answer:
          "Oui. Nous proposons une pose en rénovation sur dormant existant (sans travaux de maçonnerie) ou une dépose totale pour une performance optimale.",
      },
    ],
  }),
  make({
    slug: "heritage-battant",
    categorySlug: "fenetres-battantes",
    name: "Héritage",
    tagline: "Le chêne massif au service du patrimoine.",
    description:
      "Pensée pour les immeubles anciens et les secteurs sauvegardés, Héritage reproduit les moulures et les petits-bois traditionnels tout en intégrant un double vitrage performant et un chêne certifié PEFC.",
    visuals: [
      { variant: "arch", tone: "bronze", alt: "Fenêtre Héritage en chêne dans un appartement ancien" },
      { variant: "frame", tone: "dusk", alt: "Moulure de la fenêtre Héritage" },
      { variant: "interior", tone: "stone", alt: "Salon haussmannien équipé de fenêtres Héritage" },
    ],
    basePrice: 1140,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 1,1 W/m².K" },
      { label: "Essence", value: "Chêne PEFC lamellé-collé" },
      { label: "Profondeur de dormant", value: "68 mm" },
      { label: "Petits-bois", value: "Collés ou intégrés, profils 26 à 45 mm" },
      { label: "Dimensions max.", value: "1 400 × 2 600 mm par vantail" },
      { label: "Conformité", value: "Validation ABF sur dossier" },
    ],
    benefits: [
      "Dessins conformes aux exigences des Architectes des Bâtiments de France",
      "Bois certifié et finitions à l'huile naturelle",
      "Espagnolette traditionnelle en option",
      "Restitution à l'identique des menuiseries existantes",
    ],
    noMotor: true,
  }),
  make({
    slug: "horizon-coulissant",
    categorySlug: "baies-coulissantes",
    name: "Horizon",
    tagline: "La baie coulissante aux montants invisibles.",
    description:
      "Horizon repousse les limites avec des vantaux jusqu'à 3 mètres de large et un montant central de seulement 25 mm. Son seuil encastré offre une continuité parfaite entre intérieur et terrasse.",
    visuals: [
      { variant: "slider", tone: "forest", alt: "Baie Horizon ouverte sur un jardin" },
      { variant: "interior", tone: "forest", alt: "Séjour ouvert grâce à la baie Horizon" },
      { variant: "frame", tone: "forest", alt: "Détail du montant central de 25 mm" },
      { variant: "facade", tone: "forest", alt: "Maison contemporaine avec baies Horizon" },
    ],
    basePrice: 3450,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 0,9 W/m².K" },
      { label: "Montant central", value: "25 mm en vue" },
      { label: "Poids de vantail max.", value: "400 kg" },
      { label: "Dimensions max.", value: "6 000 × 3 200 mm (2 vantaux)" },
      { label: "Seuil", value: "Encastré PMR, 0 mm" },
      { label: "Étanchéité", value: "A*4 E*7B V*C3" },
      { label: "Motorisation", value: "Optionnelle, compatible domotique" },
    ],
    benefits: [
      "Montant central quasi invisible",
      "Seuil encastré accessible PMR",
      "Glisse sur roulements inox, manœuvre d'un doigt",
      "Motorisation silencieuse en option",
    ],
    faqs: [
      {
        question: "Quelle est la différence entre coulissant et levant-coulissant ?",
        answer:
          "Le levant-coulissant soulève légèrement le vantail pour le libérer de ses joints avant de coulisser : l'étanchéité est supérieure et la manœuvre plus douce sur les grandes dimensions.",
      },
    ],
  }),
  make({
    slug: "horizon-levant",
    categorySlug: "baies-coulissantes",
    name: "Horizon Levant",
    tagline: "Le levant-coulissant pour les très grandes ouvertures.",
    description:
      "Version levante-coulissante d'Horizon, conçue pour les vantaux jusqu'à 600 kg. Une étanchéité renforcée et une manœuvre souple, même sur des ouvertures de plus de 12 mètres.",
    visuals: [
      { variant: "slider", tone: "sapphire", alt: "Baie levante-coulissante face à la mer" },
      { variant: "picture", tone: "sapphire", alt: "Vue panoramique depuis une baie Horizon Levant" },
      { variant: "frame", tone: "sapphire", alt: "Détail du rail encastré" },
    ],
    basePrice: 4980,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 0,8 W/m².K" },
      { label: "Poids de vantail max.", value: "600 kg" },
      { label: "Dimensions max.", value: "12 000 × 3 500 mm" },
      { label: "Seuil", value: "Encastré, 0 mm" },
      { label: "Étanchéité", value: "A*4 E*9A V*C4" },
    ],
    benefits: [
      "Ouvertures jusqu'à 12 mètres",
      "Étanchéité supérieure grâce au levage",
      "Configuration en angle sans poteau",
      "Motorisation intégrée au dormant",
    ],
  }),
  make({
    slug: "cite-oscillo",
    categorySlug: "oscillo-battantes",
    name: "Cité",
    tagline: "L'oscillo-battant pensé pour le tertiaire exigeant.",
    description:
      "Cité combine performances passives, ferrures invisibles et sécurité renforcée. Un choix privilégié par les promoteurs et architectes pour les logements collectifs et les bureaux.",
    visuals: [
      { variant: "grid", tone: "sapphire", alt: "Immeuble de bureaux équipé de fenêtres Cité" },
      { variant: "frame", tone: "stone", alt: "Ferrures invisibles de la fenêtre Cité" },
      { variant: "interior", tone: "sapphire", alt: "Espace de travail baigné de lumière" },
    ],
    basePrice: 760,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 0,72 W/m².K" },
      { label: "Ferrures", value: "Invisibles, charge 150 kg" },
      { label: "Sécurité", value: "RC2 en standard, RC3 en option" },
      { label: "Dimensions max.", value: "1 500 × 2 600 mm" },
      { label: "Étanchéité", value: "A*4 E*9A V*C4" },
      { label: "Label", value: "Composant certifié Passivhaus" },
    ],
    benefits: [
      "Ventilation sécurisée en position soufflet",
      "Compas anti-fausse-manœuvre",
      "Certifiée composant Passivhaus",
      "Tarifs dégressifs pour les programmes immobiliers",
    ],
    noMotor: true,
  }),
  make({
    slug: "panorama-fixe",
    categorySlug: "chassis-fixes",
    name: "Panorama",
    tagline: "Le vitrage fixe, sans compromis.",
    description:
      "Panorama encastre le vitrage dans un profil de 20 mm dissimulé en maçonnerie. Le résultat : une vue totalement dégagée, comme si le mur s'était effacé.",
    visuals: [
      { variant: "picture", tone: "dusk", alt: "Châssis Panorama cadrant un paysage au coucher du soleil" },
      { variant: "picture", tone: "forest", alt: "Vue sur la forêt depuis un châssis Panorama" },
      { variant: "interior", tone: "dusk", alt: "Salon avec grand châssis fixe" },
    ],
    basePrice: 1280,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 0,6 W/m².K" },
      { label: "Vue de profil", value: "20 mm (encastré)" },
      { label: "Dimensions max.", value: "3 200 × 6 000 mm" },
      { label: "Vitrage", value: "Triple, feuilleté 44.2 intérieur" },
      { label: "Pose", value: "Tableau, applique ou angle vitré" },
    ],
    benefits: [
      "Profil dissimulé dans la maçonnerie",
      "Angles vitrés sans montant",
      "Performance thermique maximale",
      "Vitrages extra-clairs disponibles",
    ],
    noMotor: true,
  }),
  make({
    slug: "belvedere-bow",
    categorySlug: "bow-windows",
    name: "Belvédère",
    tagline: "Le bow-window qui invite la lumière à s'asseoir.",
    description:
      "Belvédère crée une avancée vitrée à trois ou cinq pans, avec une structure autoportante et une couverture zinc ou aluminium. Parfait pour une banquette ou un coin repas.",
    visuals: [
      { variant: "bay", tone: "stone", alt: "Bow-window Belvédère sur une maison claire" },
      { variant: "bay", tone: "bronze", alt: "Bow-window Belvédère au crépuscule" },
      { variant: "interior", tone: "stone", alt: "Banquette de lecture dans un bow-window" },
    ],
    basePrice: 5900,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 1,0 W/m².K" },
      { label: "Configurations", value: "3 ou 5 pans, 30° à 45°" },
      { label: "Saillie max.", value: "900 mm" },
      { label: "Couverture", value: "Zinc, aluminium ou toiture végétalisée" },
      { label: "Structure", value: "Autoportante acier-bois" },
    ],
    benefits: [
      "Gain d'espace et de lumière immédiat",
      "Sous-face isolée et banquette intégrable",
      "Étude de structure incluse",
      "Démarches d'urbanisme accompagnées",
    ],
    noMotor: true,
  }),
  make({
    slug: "signature-cintre",
    categorySlug: "sur-mesure",
    name: "Signature",
    tagline: "Toutes les formes, une même exigence.",
    description:
      "Signature est notre programme de menuiserie sur plan. Cintres, trapèzes, œils-de-bœuf, verrières : notre bureau d'études modélise chaque pièce en 3D et fabrique un prototype d'angle pour validation.",
    visuals: [
      { variant: "arch", tone: "sapphire", alt: "Fenêtre cintrée Signature à petits-bois rayonnants" },
      { variant: "arch", tone: "forest", alt: "Porte-fenêtre cintrée donnant sur un parc" },
      { variant: "frame", tone: "bronze", alt: "Prototype d'angle en bois-aluminium" },
    ],
    basePrice: 2100,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 0,9 W/m².K" },
      { label: "Formes", value: "Cintre, anse de panier, trapèze, rond, ogive" },
      { label: "Rayon min.", value: "350 mm" },
      { label: "Conception", value: "Modélisation 3D + prototype" },
      { label: "Délai", value: "8 à 12 semaines" },
    ],
    benefits: [
      "Conception sur plan par notre bureau d'études",
      "Prototype d'angle validé avant fabrication",
      "Compatibilité avec toutes nos gammes",
      "Suivi par un chef de projet dédié",
    ],
  }),
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}
