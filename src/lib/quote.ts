import { z } from "zod";

const phoneRegex = /^[+0-9 ().-]{8,20}$/;

export const quoteSchema = z.object({
  profile: z.enum(["particulier", "professionnel"]),
  firstName: z.string().trim().min(2, "Merci d'indiquer votre prénom"),
  lastName: z.string().trim().min(2, "Merci d'indiquer votre nom"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Adresse e-mail invalide"),
  phone: z.string().trim().regex(phoneRegex, "Numéro de téléphone invalide"),
  postalCode: z.string().trim().regex(/^\d{5}$/, "Code postal à 5 chiffres"),
  projectType: z.enum(["renovation", "construction", "extension", "tertiaire"]),
  category: z.string().min(1, "Choisissez un type de menuiserie"),
  quantity: z.coerce.number().int().min(1, "Au moins 1").max(500, "Pour plus de 500 unités, contactez-nous"),
  timeline: z.enum(["urgent", "3mois", "6mois", "reflexion"]),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  configuration: z.string().max(1000).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Votre accord est nécessaire pour vous recontacter" }) }),
  website: z.string().max(0).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom"),
  email: z.string().trim().email("Adresse e-mail invalide"),
  phone: z.string().trim().regex(phoneRegex, "Numéro de téléphone invalide").optional().or(z.literal("")),
  subject: z.enum(["projet", "rendez-vous", "documentation", "sav", "autre"]),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Votre accord est nécessaire pour vous répondre" }) }),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function estimatePrice({
  basePrice,
  width,
  height,
  deltas,
  quantity,
}: {
  basePrice: number;
  width: number;
  height: number;
  deltas: number[];
  quantity: number;
}) {
  const area = (width / 1000) * (height / 1000);
  const referenceArea = 1.2 * 1.4;
  const sizeFactor = Math.max(0.7, Math.pow(area / referenceArea, 0.85));
  const unit = basePrice * sizeFactor + deltas.reduce((a, b) => a + b, 0);
  const total = unit * quantity;
  return { low: Math.round((total * 0.9) / 10) * 10, high: Math.round((total * 1.15) / 10) * 10 };
}
