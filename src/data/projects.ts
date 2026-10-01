import type { Project } from "@/types";

// Réalisations : simples photos de chantier, comme sur le site historique scal87.fr (pas de titre, de date ni de description).
// Photos issues de l'ancien site (réutilisation à valider avec SCAL).

export const projects: Project[] = [
  {
    slug: "porte-fenetre-aluminium-grange-pierre",
    windowType: "Menuiseries aluminium",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Menuiseries aluminium", src: "/images/porte-fenetre-alu-grange.jpg", position: "50% 40%" },
  },
  {
    slug: "veranda-aluminium-toit-pans",
    windowType: "Vérandas",
    cover: { variant: "bay", tone: "stone", alt: "Réalisation SCAL — Vérandas", src: "/images/veranda-alu-anthracite.jpg", position: "50% 55%" },
  },
  {
    slug: "porte-entree-rouge-fixe-lateral",
    windowType: "Portes d'entrée",
    cover: { variant: "picture", tone: "ember", alt: "Réalisation SCAL — Portes d'entrée", src: "/images/porte-entree-rouge.jpg", position: "50% 45%" },
  },
  {
    slug: "maison-pierre-volets-battants-blancs",
    windowType: "Volets & protections solaires",
    cover: { variant: "facade", tone: "stone", alt: "Réalisation SCAL — Volets & protections solaires", src: "/images/maison-pierre-volets-battants.jpg", position: "50% 50%" },
  },
  {
    slug: "portail-aluminium-battant-brun",
    windowType: "Portails & portes de garage",
    cover: { variant: "slider", tone: "ember", alt: "Réalisation SCAL — Portails & portes de garage", src: "/images/portail-aluminium-battant.jpg", position: "50% 45%" },
  },
  {
    slug: "veranda-brune-terrasse-balcon",
    windowType: "Vérandas",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Vérandas", src: "/images/veranda-brune-terrasse.jpg", position: "50% 50%" },
  },
  {
    slug: "veranda-verte-pierre",
    windowType: "Vérandas",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Vérandas", src: "/images/veranda-verte-pierre.jpg", position: "50% 50%" },
  },
  {
    slug: "veranda-bordeaux-soubassement-pierre",
    windowType: "Vérandas",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Vérandas", src: "/images/veranda-bordeaux.jpg", position: "50% 50%" },
  },
  {
    slug: "veranda-toit-plat-anthracite",
    windowType: "Vérandas",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Vérandas", src: "/images/veranda-toit-plat-anthracite.jpg", position: "50% 50%" },
  },
  {
    slug: "porte-entree-anthracite-demi-lune",
    windowType: "Portes d'entrée",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Portes d'entrée", src: "/images/porte-entree-anthracite-moderne.jpg", position: "50% 50%" },
  },
  {
    slug: "porte-entree-rouge-vitrage-ferronnerie",
    windowType: "Portes d'entrée",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Portes d'entrée", src: "/images/porte-entree-rouge-classique.jpg", position: "50% 50%" },
  },
  {
    slug: "porte-entree-cintree-blanche",
    windowType: "Portes d'entrée",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Portes d'entrée", src: "/images/porte-entree-cintree-blanche.jpg", position: "50% 50%" },
  },
  {
    slug: "porte-entree-double-vantail-anthracite",
    windowType: "Portes d'entrée",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Portes d'entrée", src: "/images/porte-entree-double-anthracite.jpg", position: "50% 50%" },
  },
  {
    slug: "porte-fenetre-pvc-petits-bois",
    windowType: "Menuiseries PVC",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Menuiseries PVC", src: "/images/porte-fenetre-pvc-petits-bois.jpg", position: "50% 50%" },
  },
  {
    slug: "facade-pierre-fenetres-pvc-blanches",
    windowType: "Menuiseries PVC",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Menuiseries PVC", src: "/images/facade-pierre-fenetres-pvc.jpg", position: "50% 50%" },
  },
  {
    slug: "fenetres-pvc-volets-roulants-beige",
    windowType: "Menuiseries PVC",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Menuiseries PVC", src: "/images/fenetres-pvc-volets-roulants.jpg", position: "50% 50%" },
  },
  {
    slug: "fenetre-pvc-volet-roulant-pierre",
    windowType: "Volets & protections solaires",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Volets & protections solaires", src: "/images/fenetre-pvc-volet-roulant-pierre.jpg", position: "50% 50%" },
  },
  {
    slug: "maison-volets-battants-rouges",
    windowType: "Volets & protections solaires",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Volets & protections solaires", src: "/images/maison-volets-battants-rouges.jpg", position: "50% 50%" },
  },
  {
    slug: "maison-garage-porte-battante-volets",
    windowType: "Portails & portes de garage",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Portails & portes de garage", src: "/images/maison-garage-porte-battante.jpg", position: "50% 50%" },
  },
  {
    slug: "porte-garage-sectionnelle-hublots",
    windowType: "Portails & portes de garage",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Portails & portes de garage", src: "/images/porte-garage-blanche-hublots.jpg", position: "50% 50%" },
  },
  {
    slug: "portail-anthracite-motifs-ajoures",
    windowType: "Portails & portes de garage",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Portails & portes de garage", src: "/images/portail-anthracite-motifs.jpg", position: "50% 50%" },
  },
  {
    slug: "baie-coulissante-grand-volume",
    windowType: "Menuiseries aluminium",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Menuiseries aluminium", src: "/images/baie-coulissante-interieur-1.jpg", position: "50% 50%" },
  },
  {
    slug: "baie-coulissante-grand-volume-2",
    windowType: "Menuiseries aluminium",
    cover: { variant: "frame", tone: "stone", alt: "Réalisation SCAL — Menuiseries aluminium", src: "/images/baie-coulissante-interieur-2.jpg", position: "50% 50%" },
  },
];
