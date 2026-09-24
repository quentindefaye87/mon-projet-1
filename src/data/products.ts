import type { Product, ProductOption } from "@/types";

// Caractéristiques et prix « à partir de » indicatifs, à ajuster avec les gammes réellement distribuées.

const colors: ProductOption[] = [
  { id: "anthracite", label: "Gris anthracite RAL 7016", swatch: "#383e42", priceDelta: 0 },
  { id: "blanc", label: "Blanc RAL 9016", swatch: "#f1f0ea", priceDelta: 0 },
  { id: "noir", label: "Noir sablé RAL 9005", swatch: "#141416", priceDelta: 40 },
  { id: "rouge", label: "Rouge rubis RAL 3003", swatch: "#8d1d2c", priceDelta: 60 },
  { id: "gris-clair", label: "Gris clair RAL 7035", swatch: "#c5c7c4", priceDelta: 30 },
  { id: "chene", label: "Chêne doré (plaxé)", swatch: "#a8753f", priceDelta: 80 },
];

const windowGlazing: ProductOption[] = [
  { id: "double", label: "Double vitrage 4/16/4 argon — Ug 1,1", swatch: "#a9c1dc", priceDelta: 0 },
  { id: "double-plus", label: "Double vitrage renforcé warm-edge — Ug 1,0", swatch: "#b3cbe0", priceDelta: 45 },
  { id: "triple", label: "Triple vitrage — Ug 0,6", swatch: "#9fc2ae", priceDelta: 150 },
  { id: "acoustique", label: "Vitrage acoustique feuilleté", swatch: "#c2c8cc", priceDelta: 110 },
  { id: "securite", label: "Vitrage retardateur d'effraction", swatch: "#8f9ba5", priceDelta: 130 },
];

const windowHardware: ProductOption[] = [
  { id: "standard", label: "Poignée standard", priceDelta: 0 },
  { id: "design", label: "Poignée design inox", priceDelta: 35 },
  { id: "cle", label: "Poignée à clé", priceDelta: 50 },
  { id: "volet", label: "Volet roulant intégré motorisé", priceDelta: 390 },
];

const commonFaqs = [
  {
    question: "Le devis et le déplacement sont-ils gratuits ?",
    answer:
      "Oui. Nous nous déplaçons gratuitement à Limoges et dans toute la Haute-Vienne pour étudier votre projet, prendre les cotes et vous remettre un devis détaillé, sans engagement.",
  },
  {
    question: "Qui réalise la pose ?",
    answer:
      "Nos propres techniciens. La même équipe maîtrise la fabrication et la pose, ce qui garantit des finitions soignées et un interlocuteur unique du premier rendez-vous au réglage final.",
  },
  {
    question: "Quelles garanties accompagnent vos travaux ?",
    answer:
      "Nos poses sont couvertes par la garantie décennale, et chaque produit bénéficie en plus de la garantie de son fabricant. Nous vous remettons le détail avec votre devis.",
  },
];

const renovationFaq = {
  question: "Puis-je bénéficier d'aides pour mes fenêtres ?",
  answer:
    "SCAL est qualifiée RGE Qualibat. Selon votre situation et la nature des travaux, le remplacement de menuiseries peut ouvrir droit à la TVA à taux réduit et à certaines aides à la rénovation énergétique. Nous vous indiquons les dispositifs mobilisables lors du devis.",
};

type Base = Omit<Product, "faqs"> & { faqs?: Product["faqs"] };

function make({ faqs, ...p }: Base): Product {
  return { ...p, faqs: [...(faqs ?? []), ...commonFaqs] };
}

export const products: Product[] = [
  // — Menuiseries aluminium —
  make({
    slug: "lumiere-fenetre-aluminium",
    categorySlug: "menuiseries-aluminium",
    name: "Lumière",
    tagline: "Fenêtres et portes-fenêtres aluminium aux lignes affinées.",
    description:
      "Lumière réunit la finesse de l'aluminium et la performance d'une rupture de pont thermique. Ses montants réduits laissent entrer davantage de lumière, et sa rigidité autorise les grandes hauteurs avec impostes, comme dans cette grange en pierre rénovée en Haute-Vienne.",
    visuals: [
      {
        variant: "frame",
        tone: "stone",
        alt: "Porte-fenêtre aluminium anthracite avec imposte, posée dans une grange en pierre",
        src: "/images/porte-fenetre-alu-grange.jpg",
        position: "50% 40%",
      },
      { variant: "frame", tone: "dusk", alt: "Détail d'un profil aluminium anthracite" },
      { variant: "interior", tone: "stone", alt: "Séjour lumineux ouvert par des portes-fenêtres aluminium" },
    ],
    basePrice: 790,
    materials: [
      { id: "alu", label: "Aluminium à rupture de pont thermique", priceDelta: 0 },
      { id: "alu-bicolore", label: "Aluminium bicolore (intérieur blanc)", priceDelta: 70 },
    ],
    finishes: colors,
    glazing: windowGlazing,
    hardware: windowHardware,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 1,3 W/m².K" },
      { label: "Ouvertures", value: "Battant, oscillo-battant, fixe, imposte" },
      { label: "Matériau", value: "Aluminium à rupture de pont thermique" },
      { label: "Teintes", value: "Plus de 200 teintes RAL, finitions texturées" },
      { label: "Vitrage", value: "Double ou triple vitrage" },
      { label: "Pose", value: "Neuf, rénovation ou dépose totale" },
    ],
    benefits: [
      "Montants fins pour un clair de vitrage maximal",
      "Grandes dimensions et impostes, idéales en rénovation de bâti ancien",
      "Teintes texturées inaltérables, entretien minimal",
      "Fabrication et pose par nos propres équipes",
    ],
    faqs: [
      {
        question: "L'aluminium isole-t-il bien ?",
        answer:
          "Oui, grâce à la rupture de pont thermique : une barrette isolante sépare les faces intérieure et extérieure du profil. Associé à un double vitrage performant, l'aluminium offre aujourd'hui une isolation comparable aux autres matériaux.",
      },
      renovationFaq,
    ],
  }),
  make({
    slug: "horizon-baie-coulissante",
    categorySlug: "menuiseries-aluminium",
    name: "Horizon",
    tagline: "La baie coulissante qui ouvre grand sur le jardin.",
    description:
      "Horizon fait glisser de grands vantaux vitrés sur des rails à roulements, avec une manœuvre douce et silencieuse. Deux, trois ou quatre vantaux, en applique ou en galandage, pour effacer la limite entre séjour et terrasse.",
    visuals: [
      { variant: "slider", tone: "ember", alt: "Grande baie coulissante aluminium ouverte sur un jardin au couchant" },
      { variant: "interior", tone: "stone", alt: "Séjour prolongé par une baie coulissante" },
      { variant: "frame", tone: "dusk", alt: "Détail du montant central d'une baie coulissante" },
    ],
    basePrice: 2390,
    materials: [
      { id: "alu", label: "Aluminium à rupture de pont thermique", priceDelta: 0 },
      { id: "alu-bicolore", label: "Aluminium bicolore (intérieur blanc)", priceDelta: 120 },
    ],
    finishes: colors,
    glazing: windowGlazing,
    hardware: [
      { id: "standard", label: "Poignée cuvette standard", priceDelta: 0 },
      { id: "cle", label: "Poignée à clé", priceDelta: 60 },
      { id: "galandage", label: "Pose en galandage (vantaux dans le mur)", priceDelta: 900 },
      { id: "volet", label: "Volet roulant motorisé", priceDelta: 620 },
    ],
    dimensions: { width: [1400, 6000, 2400], height: [1800, 2600, 2150] },
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 1,4 W/m².K" },
      { label: "Vantaux", value: "2, 3 ou 4 vantaux, sur 2 ou 3 rails" },
      { label: "Largeur max.", value: "jusqu'à 6 m" },
      { label: "Seuil", value: "Seuil plat possible" },
      { label: "Sécurité", value: "Fermeture multipoints" },
    ],
    benefits: [
      "Glisse souple sur roulements, même sur les grands vantaux",
      "Seuil plat pour un passage de plain-pied",
      "Version galandage : les vantaux disparaissent dans la cloison",
      "Volet roulant intégré en option",
    ],
    faqs: [renovationFaq],
  }),

  // — Vérandas —
  make({
    slug: "veranda-signature",
    categorySlug: "verandas",
    name: "Véranda Signature",
    tagline: "La véranda aluminium à toit pans, lumineuse en toute saison.",
    description:
      "Structure aluminium anthracite, toiture multipans isolante et grandes baies coulissantes : la Véranda Signature crée une véritable pièce à vivre, dessinée sur mesure pour s'intégrer à l'architecture de votre maison.",
    visuals: [
      {
        variant: "bay",
        tone: "stone",
        alt: "Véranda aluminium anthracite à toit quatre pans adossée à une maison, au milieu d'un jardin",
        src: "/images/veranda-alu-anthracite.jpg",
        position: "50% 55%",
      },
      { variant: "bay", tone: "dusk", alt: "Véranda éclairée à la tombée de la nuit" },
      { variant: "interior", tone: "stone", alt: "Intérieur d'une véranda aménagée en salon" },
    ],
    basePrice: 24900,
    materials: [{ id: "alu", label: "Aluminium à rupture de pont thermique", priceDelta: 0 }],
    finishes: colors.filter((c) => c.id !== "chene"),
    glazing: [
      { id: "panneaux", label: "Toiture en panneaux isolants", swatch: "#8f9ba5", priceDelta: 0 },
      { id: "vitree", label: "Toiture vitrée à contrôle solaire", swatch: "#b3cbe0", priceDelta: 2400 },
      { id: "mixte", label: "Toiture mixte vitrée et isolante", swatch: "#a9c1dc", priceDelta: 1200 },
    ],
    hardware: [
      { id: "aucun", label: "Sans équipement", priceDelta: 0 },
      { id: "led", label: "Éclairage LED intégré", priceDelta: 850 },
      { id: "store", label: "Stores de toiture", priceDelta: 2200 },
      { id: "volets", label: "Volets roulants motorisés", priceDelta: 3100 },
    ],
    optionLabels: { materials: "Structure", finishes: "Teinte", glazing: "Toiture", hardware: "Équipements" },
    dimensions: { width: [2500, 8000, 4000], height: [2000, 5000, 3000], labels: ["Largeur (façade)", "Profondeur"] },
    specs: [
      { label: "Structure", value: "Aluminium à rupture de pont thermique" },
      { label: "Toiture", value: "Multipans, panneaux isolants ou vitrée" },
      { label: "Façades", value: "Baies coulissantes ou fixes" },
      { label: "Conception", value: "100 % sur mesure" },
      { label: "Démarches", value: "Accompagnement pour la déclaration de travaux" },
    ],
    benefits: [
      "Une pièce supplémentaire utilisable toute l'année",
      "Toiture isolante pour limiter la surchauffe l'été",
      "Structure anthracite fine et élégante",
      "Étude, fabrication et pose par une seule équipe",
    ],
    faqs: [
      {
        question: "Faut-il une autorisation pour construire une véranda ?",
        answer:
          "Selon la surface créée et le document d'urbanisme de votre commune, une déclaration préalable ou un permis de construire est nécessaire. Nous vous accompagnons dans la constitution du dossier.",
      },
    ],
  }),
  make({
    slug: "veranda-contemporaine",
    categorySlug: "verandas",
    name: "Véranda Contemporaine",
    tagline: "Toit plat et lignes tendues pour une extension design.",
    description:
      "Avec son toit plat ceinturé d'un bandeau aluminium, la Véranda Contemporaine s'apparente à une véritable extension de la maison. Idéale pour agrandir une cuisine ou un séjour avec une architecture sobre et actuelle.",
    visuals: [
      { variant: "picture", tone: "dusk", alt: "Extension vitrée à toit plat ouverte sur le jardin" },
      { variant: "interior", tone: "stone", alt: "Cuisine prolongée par une véranda à toit plat" },
      { variant: "slider", tone: "stone", alt: "Façade coulissante d'une véranda contemporaine" },
    ],
    basePrice: 29900,
    materials: [{ id: "alu", label: "Aluminium à rupture de pont thermique", priceDelta: 0 }],
    finishes: colors.filter((c) => c.id !== "chene"),
    glazing: [
      { id: "panneaux", label: "Toit plat isolant", swatch: "#8f9ba5", priceDelta: 0 },
      { id: "puits", label: "Toit plat avec puits de lumière", swatch: "#b3cbe0", priceDelta: 1800 },
    ],
    hardware: [
      { id: "aucun", label: "Sans équipement", priceDelta: 0 },
      { id: "led", label: "Spots LED dans le bandeau", priceDelta: 950 },
      { id: "volets", label: "Volets roulants motorisés", priceDelta: 3100 },
    ],
    optionLabels: { materials: "Structure", finishes: "Teinte", glazing: "Toiture", hardware: "Équipements" },
    dimensions: { width: [2500, 8000, 4000], height: [2000, 5000, 3000], labels: ["Largeur (façade)", "Profondeur"] },
    specs: [
      { label: "Structure", value: "Aluminium à rupture de pont thermique" },
      { label: "Toiture", value: "Toit plat isolant, puits de lumière en option" },
      { label: "Bandeau", value: "Aluminium, éclairage intégrable" },
      { label: "Conception", value: "100 % sur mesure" },
    ],
    benefits: [
      "Aspect d'extension maçonnée, lumière d'une véranda",
      "Toit plat isolant pour un confort optimal",
      "Bandeau périphérique pour intégrer l'éclairage",
      "Accompagnement administratif",
    ],
  }),

  // — Portes d'entrée —
  make({
    slug: "porte-entree-cadence",
    categorySlug: "portes-entree",
    name: "Cadence",
    tagline: "La porte d'entrée aluminium à hublots, affirmée et sûre.",
    description:
      "Cadence rythme sa façade de hublots vitrés alignés et d'une poignée design. Son panneau aluminium isolant et sa serrure multipoints conjuguent sécurité, isolation et caractère. Ici en rouge rubis, associée à un fixe latéral anthracite.",
    visuals: [
      {
        variant: "picture",
        tone: "ember",
        alt: "Porte d'entrée rouge à quatre hublots avec fixe latéral vitré anthracite",
        src: "/images/porte-entree-rouge.jpg",
        position: "50% 45%",
      },
      { variant: "frame", tone: "ember", alt: "Détail d'une poignée de porte d'entrée" },
      { variant: "facade", tone: "dusk", alt: "Maison au crépuscule avec porte d'entrée éclairée" },
    ],
    basePrice: 2890,
    materials: [
      { id: "alu", label: "Panneau aluminium isolant", priceDelta: 0 },
      { id: "alu-monobloc", label: "Aluminium monobloc haut de gamme", priceDelta: 650 },
    ],
    finishes: colors.filter((c) => c.id !== "chene"),
    glazing: [
      { id: "hublots", label: "Hublots en verre dépoli", swatch: "#c2c8cc", priceDelta: 0 },
      { id: "plein", label: "Panneau plein", swatch: "#8f9ba5", priceDelta: -120 },
      { id: "fixe", label: "Hublots + fixe latéral vitré", swatch: "#a9c1dc", priceDelta: 780 },
    ],
    hardware: [
      { id: "5-points", label: "Serrure 5 points", priceDelta: 0 },
      { id: "auto", label: "Serrure automatique", priceDelta: 290 },
      { id: "connectee", label: "Serrure connectée ou lecteur d'empreinte", priceDelta: 690 },
    ],
    optionLabels: { materials: "Panneau", finishes: "Teinte", glazing: "Vitrage", hardware: "Serrure" },
    dimensions: { width: [800, 1400, 900], height: [1900, 2400, 2150] },
    specs: [
      { label: "Panneau", value: "Aluminium, âme isolante" },
      { label: "Sécurité", value: "Serrure multipoints, paumelles renforcées" },
      { label: "Vitrage", value: "Feuilleté retardateur d'effraction" },
      { label: "Teintes", value: "Unies, bicolores ou texturées" },
      { label: "Options", value: "Fixe latéral, imposte, serrure connectée" },
    ],
    benefits: [
      "Serrure multipoints en standard",
      "Panneau isolant pour une entrée sans courant d'air",
      "Teintes affirmées ou discrètes, bicoloration possible",
      "Fixe latéral vitré pour éclairer l'entrée",
    ],
  }),
  make({
    slug: "porte-entree-serenite",
    categorySlug: "portes-entree",
    name: "Sérénité",
    tagline: "La porte d'entrée PVC isolante au meilleur prix.",
    description:
      "Sérénité offre une excellente isolation thermique grâce à son panneau PVC multi-couches et son dormant renforcé. Sobre et lumineuse avec son vitrage décoratif, elle convient aussi bien à la rénovation qu'à la construction neuve.",
    visuals: [
      {
        variant: "picture",
        tone: "stone",
        alt: "Porte d'entrée blanche vitrée sous un auvent, sur une façade en pierre",
        src: "/images/maison-pierre-volets-battants.jpg",
        position: "58% 70%",
      },
      { variant: "picture", tone: "stone", alt: "Porte d'entrée PVC blanche avec vitrage décoratif" },
      { variant: "frame", tone: "stone", alt: "Détail du dormant d'une porte PVC" },
    ],
    basePrice: 1690,
    materials: [
      { id: "pvc", label: "Panneau PVC isolant", priceDelta: 0 },
      { id: "pvc-plaxe", label: "PVC plaxé effet bois", priceDelta: 220 },
    ],
    finishes: colors,
    glazing: [
      { id: "decoratif", label: "Vitrage décoratif sablé", swatch: "#c2c8cc", priceDelta: 0 },
      { id: "plein", label: "Panneau plein", swatch: "#8f9ba5", priceDelta: -90 },
    ],
    hardware: [
      { id: "5-points", label: "Serrure 5 points", priceDelta: 0 },
      { id: "auto", label: "Serrure automatique", priceDelta: 290 },
    ],
    optionLabels: { materials: "Panneau", finishes: "Teinte", glazing: "Vitrage", hardware: "Serrure" },
    dimensions: { width: [800, 1200, 900], height: [1900, 2300, 2150] },
    specs: [
      { label: "Panneau", value: "PVC multi-couches isolant" },
      { label: "Sécurité", value: "Serrure 5 points" },
      { label: "Seuil", value: "Aluminium à rupture de pont thermique" },
      { label: "Pose", value: "Neuf ou rénovation" },
    ],
    benefits: ["Très bonne isolation thermique", "Entretien facile", "Serrure 5 points de série", "Prix maîtrisé"],
  }),

  // — Menuiseries PVC —
  make({
    slug: "clarte-fenetre-pvc",
    categorySlug: "menuiseries-pvc",
    name: "Clarté",
    tagline: "La fenêtre PVC performante pour toute la maison.",
    description:
      "Clarté associe un profil PVC multi-chambres à un double vitrage à isolation renforcée. Blanche, teintée ou plaxée effet bois, elle s'adapte à tous les styles et réduit durablement vos besoins de chauffage.",
    visuals: [
      {
        variant: "grid",
        tone: "stone",
        alt: "Fenêtres blanches à petits-bois sur une maison en pierre",
        src: "/images/maison-pierre-volets-battants.jpg",
        position: "15% 45%",
      },
      { variant: "interior", tone: "stone", alt: "Chambre lumineuse avec fenêtre PVC" },
      { variant: "frame", tone: "stone", alt: "Coupe d'un profil PVC multi-chambres" },
    ],
    basePrice: 490,
    materials: [
      { id: "pvc", label: "PVC blanc multi-chambres", priceDelta: 0 },
      { id: "pvc-teinte", label: "PVC teinté dans la masse", priceDelta: 70 },
      { id: "pvc-plaxe", label: "PVC plaxé (teinte ou effet bois)", priceDelta: 110 },
    ],
    finishes: colors,
    glazing: windowGlazing,
    hardware: windowHardware,
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 1,1 W/m².K" },
      { label: "Profil", value: "PVC multi-chambres" },
      { label: "Ouvertures", value: "Battant, oscillo-battant, fixe" },
      { label: "Vitrage", value: "Double ou triple vitrage" },
      { label: "Pose", value: "Rénovation sur dormant ou dépose totale" },
    ],
    benefits: [
      "Excellente isolation thermique et phonique",
      "Aucun entretien hormis le nettoyage",
      "Large choix de teintes et de plaxés",
      "Rapport performance-prix imbattable",
    ],
    faqs: [renovationFaq],
  }),
  make({
    slug: "harmonie-porte-fenetre-pvc",
    categorySlug: "menuiseries-pvc",
    name: "Harmonie",
    tagline: "Portes-fenêtres et coulissants PVC pour s'ouvrir sur l'extérieur.",
    description:
      "Harmonie décline la performance du PVC en portes-fenêtres battantes et en coulissants. Seuil abaissé, soubassement plein ou vitré, volet roulant intégré : chaque ouverture se compose selon vos usages.",
    visuals: [
      {
        variant: "slider",
        tone: "stone",
        alt: "Portes-fenêtres blanches à petits-bois ouvrant sur une terrasse en pierre",
        src: "/images/maison-pierre-volets-battants.jpg",
        position: "85% 70%",
      },
      { variant: "slider", tone: "stone", alt: "Porte-fenêtre PVC ouverte sur une terrasse" },
      { variant: "interior", tone: "stone", alt: "Salle à manger ouverte par une porte-fenêtre PVC" },
    ],
    basePrice: 890,
    materials: [
      { id: "pvc", label: "PVC blanc multi-chambres", priceDelta: 0 },
      { id: "pvc-plaxe", label: "PVC plaxé (teinte ou effet bois)", priceDelta: 150 },
    ],
    finishes: colors,
    glazing: windowGlazing,
    hardware: windowHardware,
    dimensions: { width: [700, 3000, 1400], height: [1800, 2400, 2150] },
    specs: [
      { label: "Coefficient Uw", value: "jusqu'à 1,2 W/m².K" },
      { label: "Ouvertures", value: "Battant, oscillo-battant, coulissant" },
      { label: "Seuil", value: "Seuil aluminium abaissé" },
      { label: "Options", value: "Soubassement, petits-bois, volet intégré" },
    ],
    benefits: ["Seuil abaissé pour un passage confortable", "Version coulissante disponible", "Volet roulant intégrable", "Entretien minimal"],
    faqs: [renovationFaq],
  }),

  // — Volets & protections solaires —
  make({
    slug: "volet-roulant",
    categorySlug: "volets-protections-solaires",
    name: "Volet roulant",
    tagline: "Motorisé, solaire ou manuel : isolation et sécurité au quotidien.",
    description:
      "Nos volets roulants à lames aluminium s'installent en rénovation avec coffre extérieur ou en neuf avec coffre tunnel. Motorisation filaire, radio ou solaire sans travaux électriques : pilotez vos ouvertures d'un geste ou depuis votre smartphone.",
    visuals: [
      { variant: "facade", tone: "dusk", alt: "Façade équipée de volets roulants au crépuscule" },
      { variant: "grid", tone: "stone", alt: "Fenêtres avec volets roulants à mi-hauteur" },
    ],
    basePrice: 590,
    materials: [
      { id: "alu", label: "Lames aluminium double paroi", priceDelta: 0 },
      { id: "pvc", label: "Lames PVC", priceDelta: -80 },
    ],
    finishes: colors.filter((c) => c.id !== "chene"),
    glazing: [
      { id: "manuel", label: "Manœuvre manuelle (treuil)", priceDelta: -140 },
      { id: "filaire", label: "Motorisation filaire", priceDelta: 0 },
      { id: "radio", label: "Motorisation radio", priceDelta: 90 },
      { id: "solaire", label: "Motorisation solaire", priceDelta: 190 },
    ],
    hardware: [
      { id: "renovation", label: "Coffre extérieur (rénovation)", priceDelta: 0 },
      { id: "tunnel", label: "Coffre tunnel (neuf)", priceDelta: 60 },
      { id: "connecte", label: "Box domotique et commande smartphone", priceDelta: 240 },
    ],
    optionLabels: { materials: "Tablier", finishes: "Teinte", glazing: "Manœuvre", hardware: "Pose & pilotage" },
    specs: [
      { label: "Tablier", value: "Lames aluminium double paroi isolées" },
      { label: "Manœuvre", value: "Manuelle, filaire, radio ou solaire" },
      { label: "Pose", value: "Coffre extérieur, tunnel ou intégré" },
      { label: "Pilotage", value: "Télécommande, horloge, smartphone" },
    ],
    benefits: [
      "Isolation renforcée l'hiver, fraîcheur l'été",
      "Motorisation solaire sans travaux électriques",
      "Dissuasif contre les effractions",
      "Pilotage centralisé en option",
    ],
  }),
  make({
    slug: "volet-battant-aluminium",
    categorySlug: "volets-protections-solaires",
    name: "Volet battant aluminium",
    tagline: "Le charme du volet traditionnel, sans l'entretien.",
    description:
      "Nos volets battants aluminium reprennent les codes du volet limousin, à barres et écharpe, persienné ou plein, tout en supprimant les lasures et peintures. Ils se motorisent pour s'ouvrir et se fermer d'un simple geste.",
    visuals: [
      {
        variant: "arch",
        tone: "stone",
        alt: "Volets battants blancs à barres et écharpe sur une maison en pierre",
        src: "/images/maison-pierre-volets-battants.jpg",
        position: "50% 40%",
      },
      { variant: "arch", tone: "stone", alt: "Fenêtre encadrée de volets battants sur une façade en pierre" },
      { variant: "facade", tone: "ember", alt: "Maison au crépuscule avec volets battants" },
    ],
    basePrice: 690,
    materials: [{ id: "alu", label: "Aluminium extrudé", priceDelta: 0 }],
    finishes: colors,
    glazing: [
      { id: "barres", label: "Plein à barres et écharpe", priceDelta: 0 },
      { id: "persienne", label: "Persienné", priceDelta: 90 },
      { id: "mixte", label: "Mi-persienné, mi-plein", priceDelta: 60 },
    ],
    hardware: [
      { id: "manuel", label: "Manœuvre manuelle", priceDelta: 0 },
      { id: "motorise", label: "Motorisation par bras articulés", priceDelta: 790 },
    ],
    optionLabels: { materials: "Matériau", finishes: "Teinte", glazing: "Modèle", hardware: "Manœuvre" },
    specs: [
      { label: "Matériau", value: "Aluminium, sans entretien" },
      { label: "Modèles", value: "Barres et écharpe, persienné, plein" },
      { label: "Ferrage", value: "Pentures et gonds assortis" },
      { label: "Motorisation", value: "En option" },
    ],
    benefits: ["Aspect traditionnel respecté", "Ni lasure ni peinture", "Motorisation possible", "Teintes au choix"],
  }),

  // — Portails & portes de garage —
  make({
    slug: "portail-aluminium",
    categorySlug: "portails-portes-garage",
    name: "Portail aluminium",
    tagline: "Battant ou coulissant, assorti à votre façade.",
    description:
      "Portails et portillons aluminium sur mesure, pleins, ajourés ou semi-ajourés. Ils se coordonnent à votre porte d'entrée et à vos clôtures, et se motorisent pour entrer chez vous sans descendre de voiture.",
    visuals: [
      {
        variant: "slider",
        tone: "ember",
        alt: "Portail aluminium battant plein à lames verticales, teinte brun, entre deux piliers enduits",
        src: "/images/portail-aluminium-battant.jpg",
        position: "50% 45%",
      },
      { variant: "slider", tone: "ember", alt: "Portail aluminium coulissant devant une maison" },
      { variant: "facade", tone: "stone", alt: "Entrée de propriété avec portail et portillon assortis" },
    ],
    basePrice: 2490,
    materials: [
      { id: "battant", label: "Portail battant", priceDelta: 0 },
      { id: "coulissant", label: "Portail coulissant", priceDelta: 450 },
    ],
    finishes: [...colors.filter((c) => c.id !== "chene"), { id: "brun", label: "Brun RAL 8011", swatch: "#5a3a29", priceDelta: 40 }],
    glazing: [
      { id: "plein", label: "Plein", priceDelta: 0 },
      { id: "semi", label: "Semi-ajouré", priceDelta: 120 },
      { id: "ajoure", label: "Ajouré", priceDelta: 80 },
    ],
    hardware: [
      { id: "aucune", label: "Sans motorisation", priceDelta: 0 },
      { id: "bras", label: "Motorisation à bras", priceDelta: 890 },
      { id: "enterree", label: "Motorisation enterrée", priceDelta: 1490 },
      { id: "portillon", label: "Portillon assorti", priceDelta: 990 },
    ],
    optionLabels: { materials: "Ouverture", finishes: "Teinte", glazing: "Style", hardware: "Motorisation & options" },
    dimensions: { width: [2500, 5000, 3500], height: [1000, 2000, 1500] },
    specs: [
      { label: "Matériau", value: "Aluminium, sans entretien" },
      { label: "Ouverture", value: "Battante ou coulissante" },
      { label: "Styles", value: "Plein, ajouré, semi-ajouré" },
      { label: "Motorisation", value: "À bras, enterrée ou coulissante" },
    ],
    benefits: ["Assorti à vos menuiseries", "Aluminium inaltérable", "Motorisation et visiophone en option", "Portillon et clôtures coordonnés"],
  }),
  make({
    slug: "porte-garage-sectionnelle",
    categorySlug: "portails-portes-garage",
    name: "Porte de garage sectionnelle",
    tagline: "Isolante, motorisée et discrète.",
    description:
      "La porte sectionnelle se replie au plafond pour libérer toute la largeur et la hauteur du garage. Ses panneaux isolants améliorent le confort des pièces attenantes, et sa motorisation la rend aussi pratique que sûre.",
    visuals: [
      { variant: "grid", tone: "dusk", alt: "Porte de garage sectionnelle anthracite" },
      { variant: "facade", tone: "stone", alt: "Maison avec porte de garage assortie aux menuiseries" },
    ],
    basePrice: 1890,
    materials: [
      { id: "sectionnelle", label: "Sectionnelle plafond", priceDelta: 0 },
      { id: "enroulable", label: "Enroulable", priceDelta: 150 },
      { id: "laterale", label: "Sectionnelle latérale", priceDelta: 490 },
    ],
    finishes: colors,
    glazing: [
      { id: "rainures", label: "Panneaux à rainures", priceDelta: 0 },
      { id: "lisse", label: "Panneaux lisses", priceDelta: 90 },
      { id: "cassettes", label: "Panneaux à cassettes", priceDelta: 120 },
    ],
    hardware: [
      { id: "motorise", label: "Motorisation et 2 télécommandes", priceDelta: 0 },
      { id: "portillon", label: "Portillon intégré", priceDelta: 690 },
      { id: "connecte", label: "Pilotage smartphone", priceDelta: 190 },
    ],
    optionLabels: { materials: "Type", finishes: "Teinte", glazing: "Finition", hardware: "Motorisation & options" },
    dimensions: { width: [2000, 5000, 2400], height: [1800, 3000, 2000] },
    specs: [
      { label: "Panneaux", value: "Acier double paroi isolant" },
      { label: "Types", value: "Sectionnelle, enroulable, latérale" },
      { label: "Motorisation", value: "Incluse, pilotage smartphone en option" },
      { label: "Sécurité", value: "Anti-pince-doigts, parachute" },
    ],
    benefits: ["Libère tout l'espace devant le garage", "Panneaux isolants", "Motorisation incluse", "Assortie à la façade"],
  }),
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}
