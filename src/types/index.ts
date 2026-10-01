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
}

/** Réalisation : une photo de chantier rattachée à une famille de solutions (aucun texte, comme sur le site historique). */
export interface Project {
  slug: string;
  windowType: string;
  cover: Visual;
}
