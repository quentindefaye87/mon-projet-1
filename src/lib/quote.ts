import { z } from "zod";

const phoneRegex = /^[+0-9 ().-]{8,20}$/;

export const quoteSchema = z.object({
  firstName: z.string().trim().min(2, "Merci d'indiquer votre prénom"),
  lastName: z.string().trim().min(2, "Merci d'indiquer votre nom"),
  email: z.string().trim().email("Adresse e-mail invalide"),
  phone: z.string().trim().regex(phoneRegex, "Numéro de téléphone invalide"),
  postalCode: z.string().trim().regex(/^\d{5}$/, "Code postal à 5 chiffres"),
  category: z.string().min(1, "Choisissez un type de produit"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
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
