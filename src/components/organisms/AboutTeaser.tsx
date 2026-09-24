import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { stats } from "@/data/content";

export function AboutTeaser() {
  return (
    <section aria-labelledby="about-title" className="section bg-light-section">
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <Reveal>
            <ArtFrame
              visual={{ variant: "frame", tone: "bronze", alt: "Détail d'assemblage d'un profil bois-aluminium dans notre atelier" }}
              className="aspect-[4/5] shadow-lift"
            />
          </Reveal>
          <Reveal delay={0.2} className="absolute -bottom-8 right-4 w-56 sm:-right-8 sm:w-64">
            <ArtFrame
              visual={{ variant: "interior", tone: "stone", alt: "Séjour lumineux équipé de nos menuiseries" }}
              className="aspect-square border-4 border-cream-100 shadow-lift"
            />
          </Reveal>
        </div>

        <div>
          <SectionHeading
            id="about-title"
            eyebrow="Notre maison"
            title="Trois décennies à dessiner la lumière."
            description="Fondé en 1994 par un compagnon menuisier, notre atelier lyonnais conçoit chaque fenêtre comme une pièce d'architecture. Nos 140 artisans, ingénieurs et poseurs partagent une même exigence : la justesse du détail, la durabilité des matériaux et la sincérité du conseil."
          />
          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse border-l border-bronze-400/50 pl-5">
                  <dt className="mt-2 text-sm leading-snug text-slate-600">{s.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
                    {s.value}
                    <span className="text-bronze-500">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="/a-propos" variant="ghost" className="mt-12">
              Découvrir notre histoire
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
