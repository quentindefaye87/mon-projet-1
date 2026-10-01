export type ArtVariant = "facade" | "interior" | "frame" | "slider" | "arch" | "grid" | "bay" | "picture";
export type ArtTone = "dusk" | "forest" | "sapphire" | "bronze" | "stone" | "ember";

export interface Visual {
  variant: ArtVariant;
  tone: ArtTone;
  alt: string;
  /** Photo réelle (dans /public). Si absente, l'illustration vectorielle est utilisée. */
  src?: string;
  /** Cadrage de la photo (object-position), ex. "50% 30%". */
  position?: string;
}

export interface WindowCategory {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  visual: Visual;
  bestFor: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductOption {
  id: string;
  label: string;
  swatch?: string;
  priceDelta?: number;
}

export interface Product {
  slug: string;
  categorySlug: string;
  name: string;
  tagline: string;
  description: string;
  visuals: Visual[];
  basePrice: number;
  specs: ProductSpec[];
  materials: ProductOption[];
  finishes: ProductOption[];
  glazing: ProductOption[];
  hardware: ProductOption[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  /** Libellés des groupes d'options du configurateur (par défaut : Matériau, Finition, Vitrage, Quincaillerie). */
  optionLabels?: Partial<Record<"materials" | "finishes" | "glazing" | "hardware", string>>;
  /** Plages de dimensions du configurateur en mm : [min, max, valeur de référence du prix « à partir de »]. */
  dimensions?: { width: [number, number, number]; height: [number, number, number]; labels?: [string, string] };
}

/** Réalisation : une photo de chantier rattachée à une famille de solutions (aucun texte, comme sur le site historique). */
export interface Project {
  slug: string;
  windowType: string;
  cover: Visual;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: { heading?: string; body: string }[];
  cover: Visual;
  category: string;
  date: string;
  readTime: string;
  author: string;
}
