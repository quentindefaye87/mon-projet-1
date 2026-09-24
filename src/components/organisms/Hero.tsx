import { ArrowRight, Star } from "lucide-react";
import { WindowArt } from "@/components/atoms/WindowArt";
import { ButtonLink } from "@/components/atoms/Button";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal-950">
      <div className="absolute inset-0 animate-fade-in">
        <WindowArt
          variant="facade"
          tone="dusk"
          alt="Maison contemporaine aux grandes baies vitrées illuminées au crépuscule"
          className="scale-105"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-hero-gradient" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal-950/75 via-charcoal-950/25 to-transparent" />
      <div aria-hidden className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-bronze-400/20 blur-[120px]" />

      <div className="container relative z-10 pb-16 pt-40 sm:pb-24 lg:pb-28">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow animate-fade-up text-bronze-300 opacity-0" style={delay(150)}>
              Menuiseries d&apos;exception · Fabriquées à Lyon
            </p>
            <h1
              id="hero-title"
              className="mt-6 animate-fade-up text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.025em] text-cream-50 opacity-0 sm:text-display-xl lg:text-display-2xl"
              style={delay(300)}
            >
              Façonner la lumière.
              <br />
              <span className="text-gradient">Sublimer la vue.</span>
            </h1>
            <p
              className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-300 opacity-0 sm:text-xl"
              style={delay(500)}
            >
              Fenêtres, baies coulissantes et formes sur mesure, dessinées pour durer. Performance thermique
              passive, finitions architecturales et pose certifiée, pour votre maison comme pour vos projets
              professionnels.
            </p>
            <div className="mt-10 flex animate-fade-up flex-col gap-3 opacity-0 sm:flex-row" style={delay(700)}>
              <ButtonLink href="/collections" size="lg">
                Explorer les collections
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/devis" size="lg" variant="ghost-light">
                Configurer & estimer
              </ButtonLink>
            </div>
          </div>

          <div className="animate-fade-up opacity-0 lg:col-span-4" style={delay(900)}>
            <div className="glass rounded-lg p-6 shadow-glow">
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-bronze-300 text-bronze-300" />
                  ))}
                </div>
                <p className="text-sm text-cream-100">
                  <span className="font-semibold">4,9/5</span> · 1 200 avis vérifiés
                </p>
              </div>
              <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  ["0,6", "Uw min. W/m².K"],
                  ["42 dB", "Isolation acoustique"],
                  ["10 ans", "Garantie"],
                ].map(([v, l]) => (
                  <div key={l} className="flex flex-col-reverse justify-end">
                    <dt className="mt-1 text-xs leading-snug text-slate-400">{l}</dt>
                    <dd className="font-display text-xl font-semibold text-cream-50">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
