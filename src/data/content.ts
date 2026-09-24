import { site } from "@/lib/site";

export const yearsOfExperience = new Date().getFullYear() - site.foundedYear;

export const features = [
  {
    icon: "thermometer",
    title: "Isolation performante",
    description: "Profils à rupture de pont thermique, vitrages à isolation renforcée : moins de déperditions, plus de confort.",
  },
  {
    icon: "shield",
    title: "Sécurité renforcée",
    description: "Serrures multipoints, vitrages retardateurs d'effraction et volets motorisés pour protéger votre maison.",
  },
  {
    icon: "volume",
    title: "Confort acoustique",
    description: "Vitrages feuilletés acoustiques et joints périphériques pour un intérieur au calme, même côté rue.",
  },
  {
    icon: "award",
    title: "Qualifié RGE Qualibat",
    description: "Une qualification reconnue pour la rénovation énergétique, qui peut vous ouvrir droit aux aides selon vos travaux.",
  },
  {
    icon: "ruler",
    title: "100 % sur mesure",
    description: "Chaque ouverture est mesurée chez vous et fabriquée à vos cotes exactes : des ouvertures à vos mesures.",
  },
  {
    icon: "users",
    title: "Une seule équipe",
    description: "Nos techniciens maîtrisent la fabrication comme la pose : un interlocuteur unique, du devis au réglage final.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Rencontre",
    description:
      "Par téléphone, à l'atelier d'Aixe-sur-Vienne ou directement chez vous : nous écoutons votre projet, vos envies et vos contraintes.",
    duration: "Premier contact",
  },
  {
    number: "02",
    title: "Métré & devis",
    description:
      "Un technicien prend les cotes précises sur place, vous conseille sur les matériaux et teintes, puis vous remet un devis détaillé et gratuit.",
    duration: "Visite technique",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Vos menuiseries sont fabriquées sur mesure à vos dimensions exactes, avec les finitions et options choisies ensemble.",
    duration: "Sur mesure",
  },
  {
    number: "04",
    title: "Pose",
    description:
      "Nos propres équipes installent vos ouvertures avec soin, protègent votre intérieur et laissent le chantier propre.",
    duration: "Chantier",
  },
  {
    number: "05",
    title: "Suivi",
    description:
      "Réglages, conseils d'entretien, service après-vente : nous restons à vos côtés bien après la pose. Nous sommes à quelques kilomètres.",
    duration: "Après la pose",
  },
] as const;

export const stats = [
  { value: site.foundedYear, suffix: "", label: "création de l'entreprise familiale", plain: true },
  { value: yearsOfExperience, suffix: " ans", label: "de savoir-faire en Haute-Vienne" },
  { value: 6, suffix: "", label: "familles de produits sur mesure" },
  { value: 1, suffix: " équipe", label: "de la fabrication jusqu'à la pose" },
] as const;

export const expertise = [
  "Menuiseries PVC",
  "Menuiseries aluminium",
  "Vérandas",
  "Portes d'entrée",
  "Volets roulants",
  "Volets battants",
  "Portails",
  "Portes de garage",
  "Protections solaires",
];

export const serviceArea = [
  "Limoges",
  "Aixe-sur-Vienne",
  "Saint-Junien",
  "Couzeix",
  "Isle",
  "Panazol",
  "Feytiat",
  "Le Palais-sur-Vienne",
  "Saint-Yrieix-la-Perche",
  "Rochechouart",
  "Nexon",
  "Bellac",
];

export const commitments = [
  {
    title: "Une entreprise familiale",
    text: `Depuis ${site.foundedYear}, SCAL est installée à Aixe-sur-Vienne. Vous traitez avec une équipe stable, qui connaît le bâti limousin et répond au téléphone.`,
  },
  {
    title: "Le conseil avant la vente",
    text: "Nous vous recommandons la solution adaptée à votre maison et à votre budget, pas la plus chère. Parfois, un simple réglage suffit.",
  },
  {
    title: "La pose, notre métier",
    text: "Une belle menuiserie mal posée ne tient pas ses promesses. Nos techniciens soignent chaque calfeutrement, chaque finition, chaque réglage.",
  },
] as const;

export const priceFactors = [
  { title: "Dimensions", description: "La surface de l'ouverture et le nombre de vantaux influencent directement le prix." },
  { title: "Matériau", description: "PVC ou aluminium : chaque matériau a son esthétique, ses performances et son budget." },
  { title: "Vitrage & isolation", description: "Double, triple, acoustique ou sécurité : le vitrage pèse fortement dans le coût final." },
  { title: "Teintes & options", description: "Teintes spéciales, bicoloration, volets intégrés, motorisation, serrures connectées." },
  { title: "Pose", description: "Rénovation sur dormant existant ou dépose totale, accessibilité et configuration du chantier." },
] as const;

export const generalFaqs = [
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer: "Oui. Le déplacement, la prise de cotes et le devis détaillé sont gratuits et sans engagement.",
  },
  {
    question: "Dans quel secteur intervenez-vous ?",
    answer: `Nous sommes basés à Aixe-sur-Vienne et intervenons à Limoges et dans toute la Haute-Vienne. Contactez-nous pour un projet situé en limite de département.`,
  },
  {
    question: "Puis-je obtenir des aides pour mes travaux ?",
    answer:
      "SCAL est qualifiée RGE Qualibat. Selon votre situation et la nature des travaux (remplacement de fenêtres, portes, volets isolants), certaines aides à la rénovation énergétique et la TVA à taux réduit peuvent s'appliquer. Nous vous orientons lors du devis.",
  },
];
