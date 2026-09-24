"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { testimonials } from "@/data/content";
import { cn } from "@/lib/utils";

type Filter = "all" | "residential" | "commercial";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "residential", label: "Particuliers" },
  { id: "commercial", label: "Professionnels" },
];

export function TestimonialsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = testimonials.filter((t) => filter === "all" || t.type === filter);
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    update();
    embla.on("select", update).on("reInit", update);
    return () => {
      embla.off("select", update).off("reInit", update);
    };
  }, [embla, update]);

  useEffect(() => {
    embla?.reInit();
    embla?.scrollTo(0, true);
  }, [filter, embla]);

  return (
    <section aria-labelledby="testimonials-title" className="section bg-dark-section grain relative overflow-hidden">
      <div aria-hidden className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-bronze-400/15 blur-[120px]" />
      <div className="container relative z-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            id="testimonials-title"
            light
            eyebrow="Ils témoignent"
            title="La confiance, fenêtre après fenêtre."
            description="Particuliers, architectes, promoteurs : ce qu'ils disent de leur expérience avec nos équipes."
          />
          <div className="flex flex-wrap items-center gap-4">
            <div role="group" aria-label="Filtrer les témoignages" className="glass flex rounded-full p-1">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    filter === f.id ? "bg-cream-50 text-charcoal-900 shadow-soft" : "text-slate-300 hover:text-cream-50",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => embla?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Témoignage précédent"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream-50 transition-all hover:border-white/40 hover:bg-white/5 disabled:opacity-30"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => embla?.scrollNext()}
                disabled={!canNext}
                aria-label="Témoignage suivant"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream-50 transition-all hover:border-white/40 hover:bg-white/5 disabled:opacity-30"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden" ref={emblaRef} role="region" aria-roledescription="carrousel" aria-label="Témoignages clients">
          <ul className="-ml-5 flex">
            {items.map((t, i) => (
              <li
                key={t.author}
                aria-roledescription="diapositive"
                aria-label={`${i + 1} sur ${items.length}`}
                className="min-w-0 flex-[0_0_100%] pl-5 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
