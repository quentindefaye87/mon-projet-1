import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { features } from "@/data/content";

export function FeaturesSection() {
  return (
    <section aria-labelledby="features-title" className="section bg-dark-section grain relative overflow-hidden">
      <div aria-hidden className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[140px]" />
      <div className="container relative z-10">
        <SectionHeading
          id="features-title"
          light
          align="center"
          eyebrow="Pourquoi SCAL"
          title={
            <>
              L&apos;exigence, jusque dans <span className="accent text-brand-400">ce qui ne se voit pas.</span>
            </>
          }
          description="Isolation, sécurité, finitions : ce qui fait la différence d'une menuiserie se joue autant dans le produit que dans la qualité de sa pose."
        />
        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 0.08} className="bg-charcoal-950">
              <Spotlight className="h-full p-8 lg:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-brand-300 shadow-inner-glass transition-all duration-500 group-hover/spot:scale-110 group-hover/spot:border-brand-500/60 group-hover/spot:text-brand-400">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-7 font-display text-lg font-semibold text-cream-50">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{f.description}</p>
              </Spotlight>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
