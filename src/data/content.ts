import { site } from "@/lib/site";

export const yearsOfExperience = new Date().getFullYear() - site.foundedYear;

export const processSteps = [
  { number: "01", title: "Contact", description: "Par téléphone, par e-mail ou en nous rendant visite : vous nous présentez votre projet." },
  { number: "02", title: "Devis", description: "Nous étudions votre demande et vous remettons un devis gratuit." },
  { number: "03", title: "Fabrication", description: "Vos menuiseries sont fabriquées à vos mesures par nos équipes." },
  { number: "04", title: "Pose", description: "Nos propres techniciens installent vos ouvertures." },
  { number: "05", title: "Suivi", description: "Nous restons à votre disposition après la pose." },
] as const;

export const stats = [
  { value: site.foundedYear, suffix: "", label: "création de l'entreprise familiale", plain: true },
  { value: yearsOfExperience, suffix: " ans", label: "de savoir-faire" },
  { value: 6, suffix: "", label: "familles de produits sur mesure" },
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
  "Stores",
];
