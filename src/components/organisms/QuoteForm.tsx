"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/atoms/Field";
import { categories } from "@/data/categories";
import { quoteSchema, type QuoteInput } from "@/lib/quote";

type Status = "idle" | "success" | "error";

export function QuoteForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { category: params.get("solution") ?? "" },
  });

  const onSubmit = async (data: QuoteInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error ?? "Une erreur est survenue.");
      }
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setStatus("error");
      setServerError(e instanceof Error ? e.message : "Une erreur est survenue.");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="glass-light rounded-lg p-10 text-center sm:p-14">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-500" strokeWidth={1.3} aria-hidden />
        <h2 className="mt-6 font-display text-2xl font-semibold text-charcoal-900">Merci, votre demande est bien reçue.</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-600">
          Nous vous recontactons rapidement.
        </p>
        <Link href="/realisations" className="mt-8 inline-flex items-center gap-2 font-medium text-brand-600 hover:underline">
          En attendant, découvrez nos réalisations <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    );
  }

  const err = (name: keyof QuoteInput) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-12">
      <fieldset className="space-y-6">
        <legend className="font-display text-xl font-semibold text-charcoal-900">Vos coordonnées</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName" required>
              Prénom
            </Label>
            <Input id="firstName" autoComplete="given-name" {...register("firstName")} {...err("firstName")} />
            <FieldError id="firstName-error" message={errors.firstName?.message} />
          </div>
          <div>
            <Label htmlFor="lastName" required>
              Nom
            </Label>
            <Input id="lastName" autoComplete="family-name" {...register("lastName")} {...err("lastName")} />
            <FieldError id="lastName-error" message={errors.lastName?.message} />
          </div>
          <div>
            <Label htmlFor="email" required>
              E-mail
            </Label>
            <Input id="email" type="email" autoComplete="email" {...register("email")} {...err("email")} />
            <FieldError id="email-error" message={errors.email?.message} />
          </div>
          <div>
            <Label htmlFor="phone" required>
              Téléphone
            </Label>
            <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} {...err("phone")} />
            <FieldError id="phone-error" message={errors.phone?.message} />
          </div>
          <div>
            <Label htmlFor="postalCode" required>
              Code postal du chantier
            </Label>
            <Input id="postalCode" inputMode="numeric" autoComplete="postal-code" {...register("postalCode")} {...err("postalCode")} />
            <FieldError id="postalCode-error" message={errors.postalCode?.message} />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-display text-xl font-semibold text-charcoal-900">Votre projet</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="category" required>
              Votre projet
            </Label>
            <Select id="category" {...register("category")} {...err("category")}>
              <option value="">Sélectionnez…</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
              <option value="plusieurs">Plusieurs / je ne sais pas</option>
            </Select>
            <FieldError id="category-error" message={errors.category?.message} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Décrivez brièvement votre projet…"
              {...register("message")}
            />
          </div>
        </div>
      </fieldset>

      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-charcoal-900/20 accent-brand-600"
            {...register("consent")}
            {...err("consent")}
          />
          <span>
            J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la{" "}
            <Link href="/confidentialite" className="text-charcoal-900 underline underline-offset-4">
              politique de confidentialité
            </Link>
            .
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent?.message} />
      </div>

      {serverError && (
        <p role="alert" className="rounded border border-red-800/20 bg-red-50 px-4 py-3 text-sm text-red-900">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
        {isSubmitting ? "Envoi en cours…" : "Recevoir mon devis gratuit"}
        {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />}
      </Button>
    </form>
  );
}
