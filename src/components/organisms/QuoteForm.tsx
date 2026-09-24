"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/atoms/Field";
import { categories } from "@/data/categories";
import { getProduct } from "@/data/products";
import { useQuoteList } from "@/hooks/useQuoteList";
import { quoteSchema, type QuoteInput } from "@/lib/quote";
import { cn, formatPrice } from "@/lib/utils";

type Status = "idle" | "success" | "error";

export function QuoteForm() {
  const params = useSearchParams();
  const { items, remove, clear } = useQuoteList();
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const productParam = params.get("produit");
  const initialCategory = (productParam && getProduct(productParam)?.categorySlug) || "";

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      profile: params.get("profil") === "professionnel" ? "professionnel" : "particulier",
      projectType: "renovation",
      category: initialCategory,
      quantity: 1,
      timeline: "3mois",
    },
  });

  const profile = watch("profile");

  useEffect(() => {
    if (items.length === 0) return;
    setValue(
      "configuration",
      items.map((i) => `${i.quantity}× ${i.productName} ${i.width}×${i.height} mm — ${i.summary}`).join("\n"),
    );
    setValue(
      "quantity",
      items.reduce((n, i) => n + i.quantity, 0),
    );
    const first = items[0] && getProduct(items[0].productSlug);
    if (first) setValue("category", first.categorySlug);
  }, [items, setValue]);

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
      clear();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setStatus("error");
      setServerError(e instanceof Error ? e.message : "Une erreur est survenue.");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="glass-light rounded-lg p-10 text-center sm:p-14">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest-500" strokeWidth={1.3} aria-hidden />
        <h2 className="mt-6 font-display text-2xl font-semibold text-charcoal-900">Merci, votre demande est bien reçue.</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-600">
          Un conseiller vous recontacte sous 48 heures ouvrées pour organiser la visite technique gratuite.
        </p>
        <Link href="/realisations" className="mt-8 inline-flex items-center gap-2 font-medium text-forest-600 hover:underline">
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
      {items.length > 0 && (
        <section aria-labelledby="selection-title" className="glass-light rounded-lg p-6">
          <h2 id="selection-title" className="font-display text-lg font-semibold text-charcoal-900">
            Votre sélection ({items.length})
          </h2>
          <ul className="mt-4 divide-y divide-charcoal-900/10">
            {items.map((i) => (
              <li key={i.id} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-medium text-charcoal-900">
                    {i.quantity}× {i.productName} · {i.width} × {i.height} mm
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{i.summary}</p>
                  <p className="mt-1 text-sm text-forest-600">
                    Estimation : {formatPrice(i.estimate.low)} – {formatPrice(i.estimate.high)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(i.id)}
                  aria-label={`Retirer ${i.productName} de la sélection`}
                  className="rounded p-2 text-slate-400 transition-colors hover:bg-charcoal-900/5 hover:text-charcoal-900"
                >
                  <Trash2 className="h-4 w-4" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <fieldset className="space-y-6">
        <legend className="font-display text-xl font-semibold text-charcoal-900">1. Vos coordonnées</legend>
        <div role="radiogroup" aria-label="Vous êtes" className="inline-flex rounded-full border border-charcoal-900/10 bg-white/60 p-1">
          {(["particulier", "professionnel"] as const).map((p) => (
            <label
              key={p}
              className={cn(
                "cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sapphire-500",
                profile === p ? "bg-charcoal-900 text-cream-50 shadow-soft" : "text-slate-600 hover:text-charcoal-900",
              )}
            >
              <input type="radio" value={p} className="sr-only" {...register("profile")} />
              {p === "particulier" ? "Particulier" : "Professionnel"}
            </label>
          ))}
        </div>
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
          {profile === "professionnel" && (
            <div className="sm:col-span-2">
              <Label htmlFor="company">Société / agence</Label>
              <Input id="company" autoComplete="organization" {...register("company")} />
            </div>
          )}
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
        <legend className="font-display text-xl font-semibold text-charcoal-900">2. Votre projet</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="projectType" required>
              Type de projet
            </Label>
            <Select id="projectType" {...register("projectType")}>
              <option value="renovation">Rénovation</option>
              <option value="construction">Construction neuve</option>
              <option value="extension">Extension / surélévation</option>
              <option value="tertiaire">Tertiaire / programme immobilier</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="category" required>
              Menuiserie envisagée
            </Label>
            <Select id="category" {...register("category")} {...err("category")}>
              <option value="">Sélectionnez…</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
              <option value="plusieurs">Plusieurs types / je ne sais pas</option>
            </Select>
            <FieldError id="category-error" message={errors.category?.message} />
          </div>
          <div>
            <Label htmlFor="quantity" required>
              Nombre de menuiseries
            </Label>
            <Input id="quantity" type="number" min={1} max={500} {...register("quantity")} {...err("quantity")} />
            <FieldError id="quantity-error" message={errors.quantity?.message} />
          </div>
          <div>
            <Label htmlFor="timeline" required>
              Échéance souhaitée
            </Label>
            <Select id="timeline" {...register("timeline")}>
              <option value="urgent">Dès que possible</option>
              <option value="3mois">Sous 3 mois</option>
              <option value="6mois">Sous 6 mois</option>
              <option value="reflexion">En réflexion</option>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message">Précisions sur votre projet</Label>
            <Textarea
              id="message"
              placeholder="Style de la maison, contraintes particulières, étage, accès…"
              {...register("message")}
            />
          </div>
        </div>
      </fieldset>

      <input type="hidden" {...register("configuration")} />
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-charcoal-900/20 accent-forest-600"
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
