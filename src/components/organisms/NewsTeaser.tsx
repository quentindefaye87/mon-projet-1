import { ArrowRight, Facebook } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";

export function NewsTeaser() {
  return (
    <section aria-labelledby="news-title" className="section bg-cream-50">
      <div className="container">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl border border-charcoal-900/[0.07] bg-white p-8 shadow-soft sm:p-12 md:flex-row md:items-center">
            <div className="flex items-start gap-5">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1877f2] text-white">
                <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full border border-[#1877f2]/60 motion-reduce:hidden" />
                <Facebook className="h-7 w-7" aria-hidden />
              </span>
              <div>
                <h2 id="news-title" className="font-display text-2xl font-semibold text-charcoal-900">
                  Suivez notre actualité
                </h2>
                <p className="mt-2 max-w-lg text-slate-600">Nos dernières publications et nos chantiers, sur la page Facebook de SCAL.</p>
              </div>
            </div>
            <ButtonLink href="/actualites" className="shrink-0">
              Voir l&apos;actualité
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
