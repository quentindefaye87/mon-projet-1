import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { WindowArt } from "@/components/atoms/WindowArt";
import { site } from "@/lib/site";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Parlons de votre projet.",
  description = "Visite technique, métré laser et devis détaillé : gratuits et sans engagement. Réponse sous 48 heures ouvrées.",
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-cream-100 py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-xl bg-charcoal-950 shadow-lift">
            <div className="absolute inset-0 opacity-60">
              <WindowArt variant="interior" tone="forest" alt="" decorative />
            </div>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-950/20" />
            <div className="relative z-10 max-w-2xl px-8 py-16 sm:px-14 sm:py-20">
              <h2 id="cta-title" className="text-display-md font-semibold text-cream-50 sm:text-display-lg">
                {title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">{description}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/devis" size="lg">
                  Demander un devis gratuit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </ButtonLink>
                <ButtonLink href={`tel:${site.phone.replace(/\s/g, "")}`} external size="lg" variant="glass">
                  <Phone className="h-4 w-4" aria-hidden />
                  {site.phoneDisplay}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
