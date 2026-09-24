"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Download, Minus, Plus, CalendarDays } from "lucide-react";
import { WindowArt } from "@/components/atoms/WindowArt";
import { Button, ButtonLink } from "@/components/atoms/Button";
import { useQuoteList } from "@/hooks/useQuoteList";
import { estimatePrice } from "@/lib/quote";
import { cn, formatPrice } from "@/lib/utils";
import type { Product, ProductOption } from "@/types";

type GroupKey = "materials" | "finishes" | "glazing" | "hardware";

const groups: { key: GroupKey; label: string }[] = [
  { key: "materials", label: "Matériau" },
  { key: "finishes", label: "Finition" },
  { key: "glazing", label: "Vitrage" },
  { key: "hardware", label: "Quincaillerie" },
];

function OptionGroup({
  name,
  label,
  options,
  value,
  onChange,
}: {
  name: string;
  label: string;
  options: ProductOption[];
  value: string;
  onChange: (id: string) => void;
}) {
  const swatches = options.every((o) => o.swatch) && name === "finishes";
  return (
    <fieldset>
      <legend className="flex w-full items-baseline justify-between text-sm font-medium text-charcoal-900">
        {label}
        <span className="font-normal text-slate-500">{options.find((o) => o.id === value)?.label}</span>
      </legend>
      <div className={cn("mt-3", swatches ? "flex flex-wrap gap-3" : "grid gap-2 sm:grid-cols-2")}>
        {options.map((o) => {
          const id = `${name}-${o.id}`;
          const checked = value === o.id;
          return (
            <div key={o.id}>
              <input
                type="radio"
                id={id}
                name={name}
                value={o.id}
                checked={checked}
                onChange={() => onChange(o.id)}
                className="peer sr-only"
              />
              {swatches ? (
                <label
                  htmlFor={id}
                  title={o.label}
                  className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-charcoal-900/15 shadow-soft transition-all duration-300 hover:scale-105 peer-checked:ring-2 peer-checked:ring-forest-500 peer-checked:ring-offset-2 peer-checked:ring-offset-cream-50 peer-focus-visible:ring-2 peer-focus-visible:ring-sapphire-500 peer-focus-visible:ring-offset-2"
                  style={{ backgroundColor: o.swatch }}
                >
                  <span className="sr-only">{o.label}</span>
                  {checked && <Check className={cn("h-4 w-4", o.id === "blanc" ? "text-charcoal-900" : "text-white")} aria-hidden />}
                </label>
              ) : (
                <label
                  htmlFor={id}
                  className="flex h-full cursor-pointer items-start justify-between gap-3 rounded border border-charcoal-900/10 bg-white/60 px-4 py-3 text-sm text-slate-700 transition-all duration-300 hover:border-charcoal-900/30 peer-checked:border-forest-500 peer-checked:bg-forest-500/[0.06] peer-checked:text-charcoal-900 peer-focus-visible:ring-2 peer-focus-visible:ring-sapphire-500"
                >
                  <span>{o.label}</span>
                  {o.priceDelta ? (
                    <span className="shrink-0 text-xs text-slate-500">
                      {o.priceDelta > 0 ? "+" : "−"}
                      {formatPrice(Math.abs(o.priceDelta))}
                    </span>
                  ) : null}
                </label>
              )}
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}

function Dimension({
  id,
  label,
  value,
  min,
  max,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-charcoal-900">
          {label}
        </label>
        <output htmlFor={id} className="font-display text-sm font-semibold tabular-nums text-charcoal-900">
          {value.toLocaleString("fr-FR")} mm
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={10}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-forest-600"
      />
    </div>
  );
}

export function ProductConfigurator({ product }: { product: Product }) {
  const [selection, setSelection] = useState<Record<GroupKey, string>>({
    materials: product.materials[0]?.id ?? "",
    finishes: product.finishes[0]?.id ?? "",
    glazing: product.glazing[0]?.id ?? "",
    hardware: product.hardware[0]?.id ?? "",
  });
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1400);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useQuoteList();

  const picked = useMemo(
    () =>
      Object.fromEntries(
        groups.map(({ key }) => [key, product[key].find((o) => o.id === selection[key])]),
      ) as Record<GroupKey, ProductOption | undefined>,
    [product, selection],
  );

  const estimate = estimatePrice({
    basePrice: product.basePrice,
    width,
    height,
    quantity,
    deltas: groups.map(({ key }) => picked[key]?.priceDelta ?? 0),
  });

  const previewVisual = product.visuals[0];
  const summary = groups.map(({ key }) => picked[key]?.label).filter(Boolean).join(" · ");

  const addToQuote = () => {
    add({ productSlug: product.slug, productName: product.name, summary, width, height, quantity, estimate });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 4000);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-6">
        <div className="lg:sticky lg:top-28">
          <div className="grain relative aspect-[4/3] overflow-hidden rounded-lg bg-charcoal-900 shadow-lift">
            {previewVisual && (
              <WindowArt
                variant={previewVisual.variant}
                tone={previewVisual.tone}
                frameColor={picked.finishes?.swatch}
                glassTint={picked.glazing?.swatch}
                alt={`Aperçu de ${product.name} en finition ${picked.finishes?.label ?? ""}`}
              />
            )}
            <div className="glass absolute inset-x-4 bottom-4 z-10 rounded-md px-4 py-3 text-xs leading-relaxed text-cream-50">
              <span className="font-semibold">Aperçu en direct</span> — {picked.finishes?.label}, {picked.glazing?.label.split("—")[0]}
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Rendu indicatif. Des échantillons de teintes et de profils sont disponibles en showroom ou envoyés gratuitement.
          </p>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="space-y-9">
          {groups.map(({ key, label }) => (
            <OptionGroup
              key={key}
              name={key}
              label={label}
              options={product[key]}
              value={selection[key]}
              onChange={(id) => setSelection((s) => ({ ...s, [key]: id }))}
            />
          ))}

          <fieldset className="space-y-6">
            <legend className="text-sm font-medium text-charcoal-900">Dimensions (tableau)</legend>
            <Dimension id="cfg-width" label="Largeur" value={width} min={400} max={3000} onChange={setWidth} />
            <Dimension id="cfg-height" label="Hauteur" value={height} min={400} max={3000} onChange={setHeight} />
            <p className="text-sm text-slate-500">
              Pas encore vos cotes ?{" "}
              <Link href="/guide-mesure" className="font-medium text-forest-600 underline-offset-4 hover:underline">
                Consultez notre guide de mesure
              </Link>
              .
            </p>
          </fieldset>

          <div className="flex items-center justify-between gap-6">
            <span id="qty-label" className="text-sm font-medium text-charcoal-900">
              Quantité
            </span>
            <div role="group" aria-labelledby="qty-label" className="flex items-center rounded border border-charcoal-900/15 bg-white/70">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Diminuer la quantité"
                className="flex h-11 w-11 items-center justify-center text-slate-600 hover:text-charcoal-900"
              >
                <Minus className="h-4 w-4" aria-hidden />
              </button>
              <output aria-live="polite" className="w-10 text-center font-semibold tabular-nums">
                {quantity}
              </output>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                aria-label="Augmenter la quantité"
                className="flex h-11 w-11 items-center justify-center text-slate-600 hover:text-charcoal-900"
              >
                <Plus className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="glass-light rounded-lg p-6">
            <p className="text-sm text-slate-600">Estimation indicative, pose comprise (TTC)</p>
            <p className="mt-2 font-display text-3xl font-semibold tabular-nums text-charcoal-900" aria-live="polite">
              {formatPrice(estimate.low)} – {formatPrice(estimate.high)}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Le prix définitif est établi après visite technique gratuite. Éligible TVA 5,5 % et aides à la rénovation selon conditions.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button onClick={addToQuote} className="flex-1">
                {added ? <Check className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
                {added ? "Ajouté au devis" : "Ajouter au devis"}
              </Button>
              <ButtonLink href={`/contact?sujet=rendez-vous&produit=${product.slug}`} variant="ghost" className="flex-1">
                <CalendarDays className="h-4 w-4" aria-hidden />
                Consultation
              </ButtonLink>
            </div>
            <AnimatePresence>
              {added && (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-sm text-forest-600"
                >
                  Configuration enregistrée.{" "}
                  <Link href="/devis" className="font-medium underline underline-offset-4">
                    Finaliser ma demande de devis
                  </Link>
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <Link
            href={`/contact?sujet=documentation&produit=${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-900 underline-offset-4 hover:underline"
          >
            <Download className="h-4 w-4" aria-hidden />
            Recevoir la brochure technique {product.name} (PDF)
          </Link>
        </div>
      </div>
    </div>
  );
}
