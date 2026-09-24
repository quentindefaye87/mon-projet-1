import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    slug: "choisir-double-ou-triple-vitrage",
    title: "Double ou triple vitrage : comment choisir ?",
    excerpt:
      "Le triple vitrage n'est pas toujours le meilleur choix. Orientation, climat et poids des vantaux : nos conseils pour arbitrer.",
    cover: { variant: "frame", tone: "sapphire", alt: "Coupe d'un triple vitrage" },
    category: "Performance",
    date: "2026-09-02",
    readTime: "6 min",
    author: "Julie Ferrand, ingénieure thermicienne",
    content: [
      {
        body: "Le triple vitrage est souvent présenté comme la solution ultime. Il isole mieux, c'est indéniable : un Ug de 0,6 contre 1,1 pour un double vitrage performant. Mais il laisse aussi passer moins de chaleur solaire gratuite, et pèse près de 50 % de plus.",
      },
      {
        heading: "Tenir compte de l'orientation",
        body: "Sur une façade sud, les apports solaires d'hiver sont précieux : un double vitrage à facteur solaire élevé peut afficher un bilan énergétique supérieur à un triple vitrage. Au nord, en revanche, le triple vitrage s'impose.",
      },
      {
        heading: "Le climat et l'altitude",
        body: "Au-delà de 800 mètres d'altitude ou dans les régions aux hivers rigoureux, le triple vitrage devient rapidement rentable. Sur la façade atlantique, un double vitrage performant suffit souvent.",
      },
      {
        heading: "Notre recommandation",
        body: "Nous réalisons une simulation thermique pour chaque projet, façade par façade. Il n'est pas rare de combiner les deux solutions dans une même maison pour optimiser confort et budget.",
      },
    ],
  },
  {
    slug: "entretenir-menuiseries-aluminium",
    title: "Entretenir ses menuiseries aluminium en 4 gestes",
    excerpt: "Quelques minutes par an suffisent à préserver l'éclat et l'étanchéité de vos fenêtres pendant des décennies.",
    cover: { variant: "slider", tone: "stone", alt: "Baie coulissante en aluminium clair" },
    category: "Entretien",
    date: "2026-08-18",
    readTime: "4 min",
    author: "Marc Delorme, responsable SAV",
    content: [
      {
        body: "L'aluminium thermolaqué est un matériau remarquablement durable. Un entretien simple, deux fois par an, garantit son aspect et le bon fonctionnement des ouvrants.",
      },
      {
        heading: "1. Nettoyer les profils",
        body: "Une eau tiède additionnée de savon au pH neutre et une éponge douce suffisent. Proscrivez les produits abrasifs, solvants et nettoyeurs haute pression.",
      },
      {
        heading: "2. Dégager les rails et les drainages",
        body: "Aspirez les rails des coulissants et vérifiez que les orifices de drainage ne sont pas obstrués : c'est la clé d'une étanchéité durable.",
      },
      {
        heading: "3. Lubrifier la quincaillerie",
        body: "Une goutte d'huile sans acide sur les points de fermeture et les paumelles, une fois par an, préserve la souplesse de manœuvre.",
      },
      {
        heading: "4. Contrôler les joints",
        body: "Un joint qui durcit ou se fissure doit être remplacé. Nos équipes peuvent intervenir dans le cadre du contrat d'entretien.",
      },
    ],
  },
  {
    slug: "tendances-menuiseries-2026",
    title: "Tendances 2026 : la fenêtre comme élément d'architecture",
    excerpt: "Profils affinés, teintes minérales et angles vitrés : ce que les architectes dessinent cette année.",
    cover: { variant: "facade", tone: "bronze", alt: "Façade contemporaine aux menuiseries bronze" },
    category: "Design",
    date: "2026-07-29",
    readTime: "5 min",
    author: "Élise Moreau, directrice artistique",
    content: [
      {
        body: "La fenêtre n'est plus un simple composant technique : elle devient une signature architecturale. Trois tendances se dessinent nettement cette année.",
      },
      {
        heading: "Des profils toujours plus fins",
        body: "La recherche du clair de vitrage maximal pousse les profils sous la barre des 70 mm. Les montants centraux de 25 mm transforment les baies en véritables tableaux.",
      },
      {
        heading: "Le retour des teintes minérales",
        body: "Après l'omniprésence du gris anthracite, les bronzes anodisés, verts profonds et beiges sablés font leur retour, en écho aux matériaux naturels.",
      },
      {
        heading: "L'angle vitré",
        body: "Supprimer le poteau d'angle pour ouvrir deux façades à la fois : une prouesse technique désormais accessible aux projets résidentiels.",
      },
    ],
  },
  {
    slug: "aides-renovation-fenetres",
    title: "Aides à la rénovation : ce qui change pour vos fenêtres",
    excerpt: "MaPrimeRénov', CEE, TVA à 5,5 % : le point complet sur les dispositifs mobilisables pour changer vos menuiseries.",
    cover: { variant: "grid", tone: "forest", alt: "Façade rénovée avec des fenêtres performantes" },
    category: "Guides",
    date: "2026-06-12",
    readTime: "7 min",
    author: "Thomas Girard, conseiller énergie",
    content: [
      {
        body: "Le remplacement des fenêtres reste éligible à plusieurs dispositifs d'aide, à condition de respecter des seuils de performance précis et de faire appel à un professionnel RGE.",
      },
      {
        heading: "Les critères techniques",
        body: "Les fenêtres doivent présenter un Uw ≤ 1,3 W/m².K et un Sw ≥ 0,3, ou un Uw ≤ 1,7 et un Sw ≥ 0,36. Toutes nos gammes respectent ces seuils.",
      },
      {
        heading: "Les dispositifs cumulables",
        body: "La TVA à taux réduit de 5,5 %, les primes CEE et, dans le cadre d'une rénovation d'ampleur, MaPrimeRénov' peuvent se combiner selon vos revenus.",
      },
      {
        heading: "Notre accompagnement",
        body: "Nos conseillers vérifient votre éligibilité lors de la visite technique et préparent les justificatifs nécessaires à votre dossier.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
