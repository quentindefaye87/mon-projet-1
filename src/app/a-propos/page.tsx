import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { FrameDraw } from "@/components/motion/FrameDraw";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { stats } from "@/data/content";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "L'entreprise",
  description: `Entreprise familiale installée à Aixe-sur-Vienne depuis ${site.foundedYear}, SCAL fabrique et pose menuiseries PVC et aluminium, vérandas et fermetures à Limoges et en Haute-Vienne.`,
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="L'entreprise"
        title={
          <>
            Une entreprise familiale, <span className="accent text-brand-400">depuis {site.foundedYear}.</span>
          </>
        }
        description="SCAL est installée à Aixe-sur-Vienne et intervient à Limoges et dans toute la Haute-Vienne."
        breadcrumbs={[{ label: "L'entreprise", href: "/a-propos" }]}
        visual={{ variant: "frame", tone: "stone", alt: "", src: "/images/porte-fenetre-alu-grange.jpg", position: "50% 30%" }}
      />

      <section aria-labelledby="mission-title" className="section bg-cream-50">
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <ImageReveal className="aspect-[4/5] rounded-lg shadow-lift">
            <Image
              src="/images/veranda-alu-anthracite.jpg"
              alt="Véranda réalisée par SCAL"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "50% 55%" }}
            />
          </ImageReveal>
          <div>
            <SectionHeading
              id="mission-title"
              eyebrow="Notre métier"
              title={
                <>
                  Fabriquer et poser, <span className="accent text-brand-600">avec la même équipe.</span>
                </>
              }
              description="Menuiseries PVC et aluminium, vérandas, volets, stores, portails et portes de garage : le savoir-faire de nos techniciens, de la fabrication à la pose, nous permet de répondre à vos besoins."
            />
            <Reveal delay={0.1}>
              <dl className="mt-12 grid grid-cols-3 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse border-l-2 border-brand-500/70 pl-4">
                    <dt className="mt-1 text-sm leading-snug text-slate-600">{s.label}</dt>
                    <dd className="font-display text-3xl font-semibold text-charcoal-900">
                      <CountUp value={s.value} plain={"plain" in s} />
                      <span className="text-brand-600">{s.suffix}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative mt-12 flex items-center gap-5 overflow-hidden rounded-lg border border-charcoal-900/[0.07] bg-white p-6 shadow-soft">
                <FrameDraw className="absolute -right-3 -top-3 w-20 opacity-50" />
                <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-md bg-[#1d9ad6] text-white">
                  <span className="text-[0.55rem] font-bold uppercase leading-none">RGE</span>
                  <ShieldCheck className="mt-1 h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <div className="relative">
                  <p className="font-display text-lg font-semibold text-charcoal-900">Qualifié RGE Qualibat</p>
                  <p className="text-sm text-slate-600">Reconnu Garant de l&apos;Environnement.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner title="Venez nous rencontrer." description={`Retrouvez-nous ${site.address.street.replace("Rue", "rue")} à ${site.address.city}.`} />
    </>
  );
}
