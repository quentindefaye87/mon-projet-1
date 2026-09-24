import { ArrowRight, ChevronDown, Hammer, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { WordsReveal } from "@/components/motion/WordsReveal";
import { HeroMedia } from "@/components/organisms/HeroMedia";
import { site } from "@/lib/site";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-light-section relative overflow-hidden">
      <div aria-hidden className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-brand-400/15 blur-[140px]" />
      <div aria-hidden className="absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-brand-300/15 blur-[120px]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(43,43,43,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(43,43,43,0.7)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_40%,#000,transparent)]"
      />

      <div className="container relative z-10 grid min-h-[100svh] items-center gap-16 pb-24 pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-32">
        <div className="lg:col-span-7">
          <p className="eyebrow flex animate-fade-up items-center gap-3 text-brand-600 opacity-0" style={delay(100)}>
            <span aria-hidden className="h-px w-10 bg-brand-500" />
            Aixe-sur-Vienne · Haute-Vienne · Depuis {site.foundedYear}
          </p>
          <h1
            id="hero-title"
            className="mt-7 text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.03em] text-charcoal-900 sm:text-display-xl lg:text-[5rem]"
          >
            <WordsReveal
              delay={0.2}
              lines={[{ text: "Des ouvertures" }, { text: "à vos mesures.", className: "accent text-brand-600" }]}
            />
          </h1>
          <p className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-600 opacity-0 sm:text-xl" style={delay(700)}>
            Menuiseries PVC et aluminium, vérandas, portes d&apos;entrée, volets et portails, dessinés sur mesure
            et posés par nos propres équipes à Limoges et dans toute la Haute-Vienne.
          </p>
          <div className="mt-11 flex animate-fade-up flex-col gap-3 opacity-0 sm:flex-row sm:items-center" style={delay(900)}>
            <Magnetic>
              <ButtonLink href="/devis" size="lg">
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/solutions" size="lg" variant="ghost">
              Découvrir nos solutions
            </ButtonLink>
          </div>

          <ul className="mt-14 flex animate-fade-up flex-wrap gap-x-8 gap-y-4 text-sm text-slate-600 opacity-0" style={delay(1100)}>
            <li className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-900/10 bg-white shadow-soft">
                <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full border border-brand-500/60 motion-reduce:hidden" />
                <ShieldCheck className="h-5 w-5 text-brand-600" strokeWidth={1.5} aria-hidden />
              </span>
              <span>
                <span className="block font-semibold text-charcoal-900">RGE Qualibat</span>
                Rénovation énergétique
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-900/10 bg-white shadow-soft">
                <Hammer className="h-5 w-5 text-brand-600" strokeWidth={1.5} aria-hidden />
              </span>
              <span>
                <span className="block font-semibold text-charcoal-900">Fabrication & pose</span>
                Par nos techniciens
              </span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-5">
          <HeroMedia />
        </div>
      </div>

      <a
        href="#solutions"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-charcoal-900 lg:flex"
      >
        Défiler
        <ChevronDown className="h-4 w-4 animate-bounce motion-reduce:animate-none" aria-hidden />
      </a>
    </section>
  );
}
