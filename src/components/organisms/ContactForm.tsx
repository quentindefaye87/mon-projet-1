"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/atoms/Field";
import { getProduct } from "@/data/products";
import { contactSchema, type ContactInput } from "@/lib/quote";

const subjects = ["projet", "rendez-vous", "documentation", "sav", "autre"] as const;

export function ContactForm() {
  const params = useSearchParams();
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const subjectParam = params.get("sujet");
  const product = getProduct(params.get("produit") ?? "");
  const subject = subjects.find((s) => s === subjectParam) ?? "projet";
  const prefill =
    subject === "documentation" && product
      ? `Bonjour, je souhaite recevoir la brochure technique du modèle ${product.name}.`
      : subject === "rendez-vous" && product
        ? `Bonjour, je souhaite une consultation au sujet du modèle ${product.name}.`
        : "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject, message: prefill },
  });

  const onSubmit = async (data: ContactInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error ?? "Une erreur est survenue.");
      }
      setDone(true);
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Une erreur est survenue.");
    }
  };

  if (done) {
    return (
      <div role="status" className="py-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest-500" strokeWidth={1.3} aria-hidden />
        <h2 className="mt-6 font-display text-2xl font-semibold text-charcoal-900">Message envoyé.</h2>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-slate-600">
          Merci ! Notre équipe vous répond sous 24 heures ouvrées.
        </p>
      </div>
    );
  }

  const err = (name: keyof ContactInput) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `c-${name}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name" required>
            Nom complet
          </Label>
          <Input id="c-name" autoComplete="name" {...register("name")} {...err("name")} />
          <FieldError id="c-name-error" message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="c-email" required>
            E-mail
          </Label>
          <Input id="c-email" type="email" autoComplete="email" {...register("email")} {...err("email")} />
          <FieldError id="c-email-error" message={errors.email?.message} />
        </div>
        <div>
          <Label htmlFor="c-phone">Téléphone</Label>
          <Input id="c-phone" type="tel" autoComplete="tel" {...register("phone")} {...err("phone")} />
          <FieldError id="c-phone-error" message={errors.phone?.message} />
        </div>
        <div>
          <Label htmlFor="c-subject" required>
            Sujet
          </Label>
          <Select id="c-subject" {...register("subject")}>
            <option value="projet">Un projet de menuiseries</option>
            <option value="rendez-vous">Prendre rendez-vous / consultation</option>
            <option value="documentation">Recevoir une documentation</option>
            <option value="sav">Service après-vente</option>
            <option value="autre">Autre demande</option>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="c-message" required>
          Message et détails du projet
        </Label>
        <Textarea id="c-message" {...register("message")} {...err("message")} />
        <FieldError id="c-message-error" message={errors.message?.message} />
      </div>
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="c-website">Ne pas remplir</label>
        <input id="c-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-forest-600" {...register("consent")} {...err("consent")} />
          <span>
            J&apos;accepte que mes données soient utilisées pour répondre à ma demande (
            <Link href="/confidentialite" className="text-charcoal-900 underline underline-offset-4">
              en savoir plus
            </Link>
            ).
          </span>
        </label>
        <FieldError id="c-consent-error" message={errors.consent?.message} />
      </div>
      {serverError && (
        <p role="alert" className="rounded border border-red-800/20 bg-red-50 px-4 py-3 text-sm text-red-900">
          {serverError}
        </p>
      )}
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
        {isSubmitting ? "Envoi…" : "Envoyer le message"}
        {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />}
      </Button>
    </form>
  );
}
