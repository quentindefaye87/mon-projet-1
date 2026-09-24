import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { features } from "@/data/content";

export function FeaturesSection() {
  return (
    <section aria-labelledby="features-title" className="section relative overflow-hidden bg-cream-100">
      <div aria-hidden className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand-300/15 blur-[140px]" />
      <div className="container relative z-10">
        <SectionHeading
          id="features-title"
          align="center"
          eyebrow="Pourquoi SCAL"
          title={
            <>
              L&apos;exigence, jusque dans <span className="accent text-brand-600">ce qui ne se voit pas.</span>
            </>
          }
          description="Isolation, sécurité, finitions : ce qui fait la différence d'une menuiserie se joue autant dans le produit que dans la qualité de sa pose."
        />
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 0.08}>
              <Spotlight
                color="rgba(185,53,56,0.10)"
                className="h-full rounded-lg border border-charcoal-900/[0.06] bg-white p-8 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lift lg:p-10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-all duration-500 group-hover/spot:scale-110 group-hover/spot:bg-brand-600 group-hover/spot:text-white">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-7 font-display text-lg font-semibold text-charcoal-900">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{f.description}</p>
              </Spotlight>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
