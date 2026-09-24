export type ArtVariant = "facade" | "interior" | "frame" | "slider" | "arch" | "grid" | "bay" | "picture";
export type ArtTone = "dusk" | "forest" | "sapphire" | "bronze" | "stone";

export interface Visual {
  variant: ArtVariant;
  tone: ArtTone;
  alt: string;
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
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  propertyType: "Résidentiel" | "Commercial" | "Patrimoine";
  style: string;
  windowType: string;
  cover: Visual;
  before: Visual;
  after: Visual;
  gallery: Visual[];
  summary: string;
  description: string[];
  testimonial?: { quote: string; author: string };
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  location: string;
  rating: number;
  type: "residential" | "commercial";
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
