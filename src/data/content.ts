import type { Testimonial } from "@/types";

export const features = [
  {
    icon: "thermometer",
    title: "Performance thermique",
    description: "Jusqu'à Uw 0,6 W/m².K avec nos triples vitrages warm-edge. Jusqu'à 30 % d'économies de chauffage.",
  },
  {
    icon: "shield",
    title: "Sécurité certifiée",
    description: "Ferrures multipoints, vitrages retardateurs d'effraction P4A et certification RC2 en standard.",
  },
  {
    icon: "volume",
    title: "Silence absolu",
    description: "Des vitrages acoustiques feuilletés jusqu'à 42 dB pour un intérieur apaisé, même en centre-ville.",
  },
  {
    icon: "leaf",
    title: "Fabrication responsable",
    description: "Aluminium bas carbone, chêne PEFC et atelier alimenté à 100 % en énergie renouvelable.",
  },
  {
    icon: "ruler",
    title: "Sur mesure au millimètre",
    description: "Chaque menuiserie est fabriquée à la commande, dans nos ateliers lyonnais, d'après vos cotes.",
  },
  {
    icon: "award",
    title: "Garantie 10 ans",
    description: "Profils, étanchéité et vitrages garantis 10 ans. Pose certifiée RGE Qualibat.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Un conseiller vient à votre rencontre, à domicile ou en showroom, pour comprendre votre projet, vos usages et vos contraintes.",
    duration: "Semaine 1",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Métré laser, choix des matériaux et finitions, simulation thermique. Vous recevez un devis détaillé et des plans d'exécution.",
    duration: "Semaines 2 – 3",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Vos menuiseries sont usinées, assemblées et contrôlées une à une dans nos ateliers de Lyon, avec un suivi en temps réel.",
    duration: "Semaines 4 – 8",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Nos poseurs salariés, certifiés RGE, installent vos fenêtres en site protégé et laissent le chantier impeccable.",
    duration: "1 à 3 jours",
  },
  {
    number: "05",
    title: "Accompagnement",
    description:
      "Réglage à 6 mois offert, contrat d'entretien optionnel et service client joignable pendant toute la durée de garantie.",
    duration: "10 ans et plus",
  },
] as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "De la première visite à la pose, tout a été d'une précision remarquable. Nos baies coulissantes glissent d'un doigt et la maison n'a jamais été aussi silencieuse.",
    author: "Claire Dumont",
    role: "Propriétaire",
    location: "Arcachon",
    rating: 5,
    type: "residential",
  },
  {
    quote:
      "Nous travaillons avec Lumen & Cadre sur tous nos programmes haut de gamme. Leur bureau d'études anticipe les problèmes avant qu'ils n'arrivent sur le chantier.",
    author: "Antoine Veyrat",
    role: "Directeur technique",
    company: "Veyrat Immobilier",
    location: "Lyon",
    rating: 5,
    type: "commercial",
  },
  {
    quote:
      "La restitution de nos fenêtres haussmanniennes est bluffante. Le confort acoustique côté rue a totalement changé notre quotidien.",
    author: "Julien Marchal",
    role: "Président du conseil syndical",
    location: "Paris 1er",
    rating: 5,
    type: "residential",
  },
  {
    quote:
      "Un partenaire rare : exigeant sur le dessin, rigoureux sur les délais. Nos clients architectes nous demandent désormais leurs menuiseries par leur nom.",
    author: "Sophie Laurent",
    role: "Architecte associée",
    company: "Studio Aléas",
    location: "Bordeaux",
    rating: 5,
    type: "commercial",
  },
  {
    quote:
      "Le configurateur nous a permis d'avoir une première idée du budget en quelques minutes. Le devis final était cohérent, sans aucune surprise.",
    author: "Nadia Benali",
    role: "Propriétaire",
    location: "Annecy",
    rating: 5,
    type: "residential",
  },
  {
    quote:
      "412 fenêtres posées en site occupé, sans un jour de retard. Une organisation de chantier exemplaire.",
    author: "Marc Olivier",
    role: "Directeur de l'immobilier",
    company: "Groupe Veyrat",
    location: "Lyon",
    rating: 5,
    type: "commercial",
  },
];

export const stats = [
  { value: "32", suffix: " ans", label: "de savoir-faire menuisier" },
  { value: "14 000", suffix: "+", label: "menuiseries posées chaque année" },
  { value: "4,9", suffix: "/5", label: "satisfaction client (1 200 avis)" },
  { value: "100", suffix: " %", label: "fabriqué dans nos ateliers lyonnais" },
] as const;

export const clientLogos = ["Veyrat Immobilier", "Studio Aléas", "Nexity", "Atelier Nord", "Bouygues Immobilier", "Maison Brun"];

export const priceFactors = [
  { title: "Dimensions", description: "La surface vitrée et le nombre de vantaux influencent directement le prix." },
  { title: "Matériau", description: "Aluminium, bois-alu, chêne massif ou PVC : chaque matériau a son esthétique et son budget." },
  { title: "Vitrage", description: "Double, triple, acoustique ou sécurité : le vitrage représente 25 à 40 % du coût." },
  { title: "Finitions & quincaillerie", description: "Teintes spéciales, bicoloration, poignées et motorisation." },
  { title: "Pose", description: "Rénovation sur dormant existant ou dépose totale, accessibilité du chantier, étage." },
] as const;

export const generalFaqs = [
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer: "Oui. La visite technique, le métré et le devis détaillé sont gratuits et sans engagement.",
  },
  {
    question: "Intervenez-vous partout en France ?",
    answer:
      "Nos équipes de pose couvrent la région Auvergne-Rhône-Alpes, l'Île-de-France et la Nouvelle-Aquitaine. Pour les projets professionnels, nous intervenons sur tout le territoire.",
  },
  {
    question: "Proposez-vous des conditions pour les professionnels ?",
    answer:
      "Oui : tarifs dédiés pour les architectes, promoteurs et entreprises générales, bureau d'études à disposition et chef de projet unique.",
  },
];
