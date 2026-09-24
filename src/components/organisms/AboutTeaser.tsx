import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { stats } from "@/data/content";
import { site } from "@/lib/site";

export function AboutTeaser() {
  return (
    <section aria-labelledby="about-title" className="section bg-light-section overflow-hidden">
      <div className="container grid items-center gap-20 lg:grid-cols-2 lg:gap-24">
        <div className="relative pb-10 pr-6 sm:pr-10">
          <ImageReveal className="aspect-[4/5] rounded-lg shadow-lift">
            <Image
              src="/images/porte-fenetre-alu-grange.jpg"
              alt="Porte-fenêtre aluminium anthracite posée par SCAL dans une grange en pierre"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "50% 40%" }}
            />
          </ImageReveal>
          <Reveal delay={0.5} className="absolute -bottom-2 right-0 w-48 sm:w-60">
            <div className="rounded-lg border border-charcoal-900/5 bg-cream-50 p-6 shadow-lift">
              <p className="font-display text-5xl font-semibold tracking-tight text-brand-600">
                <CountUp value={site.foundedYear} plain />
              </p>
              <p className="mt-2 text-sm leading-snug text-slate-600">Une entreprise familiale, installée à Aixe-sur-Vienne.</p>
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            id="about-title"
            eyebrow="L'entreprise"
            title={
              <>
                Le savoir-faire d&apos;une famille, <span className="accent text-brand-600">au service de votre maison.</span>
              </>
            }
            description="SCAL est une entreprise familiale spécialisée dans les menuiseries PVC et aluminium, les vérandas et toutes les fermetures de l'habitat. Nos techniciens maîtrisent la fabrication comme la pose : c'est ce qui nous permet de répondre précisément à vos besoins et à vos attentes."
          />
          <Reveal delay={0.1}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.slice(1).map((s) => (
                <div key={s.label} className="flex flex-col-reverse border-l-2 border-brand-500/70 pl-5">
                  <dt className="mt-2 text-sm leading-snug text-slate-600">{s.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
                    <CountUp value={s.value} />
                    <span className="text-brand-600">{s.suffix}</span>
                  </dd>
                </div>
              ))}
              <div className="flex flex-col-reverse border-l-2 border-brand-500/70 pl-5">
                <dt className="mt-2 text-sm leading-snug text-slate-600">Qualification pour la rénovation énergétique</dt>
                <dd className="font-display text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">RGE</dd>
              </div>
            </dl>
            <ButtonLink href="/a-propos" variant="ghost" className="mt-12">
              Découvrir l&apos;entreprise
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
