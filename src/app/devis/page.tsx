import { Suspense } from "react";
import Link from "next/link";
import { BadgeCheck, Clock, Home, Phone } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { QuoteForm } from "@/components/organisms/QuoteForm";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { FaqAccordion } from "@/components/molecules/FaqAccordion";
import { Reveal } from "@/components/atoms/Reveal";
import { generalFaqs, priceFactors } from "@/data/content";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Devis gratuit",
  description:
    "Demandez votre devis gratuit et sans engagement pour vos fenêtres et baies vitrées sur mesure. Visite technique et métré laser offerts, réponse sous 48 h.",
  path: "/devis",
});

const reassurance = [
  { icon: Home, text: "Visite technique et métré laser offerts" },
  { icon: Clock, text: "Réponse sous 48 heures ouvrées" },
  { icon: BadgeCheck, text: "Devis détaillé, sans engagement" },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Devis gratuit"
        title="Votre projet, chiffré avec précision."
        description="Chaque menuiserie est fabriquée sur mesure : nos prix le sont aussi. Décrivez votre projet, un conseiller vous recontacte pour une visite technique gratuite."
        breadcrumbs={[{ label: "Devis gratuit", href: "/devis" }]}
        visual={{ variant: "slider", tone: "bronze", alt: "" }}
      />

      <section aria-label="Formulaire de demande de devis" className="section bg-cream-50">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-[900px] animate-pulse rounded-lg bg-charcoal-900/[0.04]" />}>
              <QuoteForm />
            </Suspense>
          </div>
          <aside className="space-y-6 lg:col-span-5">
            <div className="lg:sticky lg:top-28 lg:space-y-6">
              <div className="bg-dark-section grain relative overflow-hidden rounded-lg p-8">
                <ul className="relative z-10 space-y-4">
                  {reassurance.map(({ icon: IconCmp, text }) => (
                    <li key={text} className="flex items-center gap-4 text-cream-100">
                      <IconCmp className="h-5 w-5 shrink-0 text-bronze-300" strokeWidth={1.5} aria-hidden />
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="relative z-10 mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-400">Vous préférez en parler ?</p>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 inline-flex items-center gap-2 font-display text-xl font-semibold text-cream-50 hover:text-bronze-300">
                    <Phone className="h-5 w-5" aria-hidden />
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="glass-light mt-6 rounded-lg p-8 lg:mt-0">
                <h2 className="font-display text-lg font-semibold text-charcoal-900">Estimation instantanée</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Configurez un modèle pour obtenir une fourchette de prix, puis ajoutez-le à cette demande en un clic.
                </p>
                <Link href="/collections" className="mt-4 inline-block text-sm font-medium text-forest-600 hover:underline">
                  Ouvrir le configurateur →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="pricing-title" className="section bg-light-section">
        <div className="container">
          <SectionHeading
            id="pricing-title"
            eyebrow="Tarification"
            title="Ce qui détermine le prix de vos fenêtres."
            description="Pas de grille tarifaire opaque : votre devis détaille chaque poste, pour que vous sachiez exactement ce que vous financez."
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-charcoal-900/10 bg-charcoal-900/10 sm:grid-cols-2 lg:grid-cols-5">
            {priceFactors.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 0.06} className="bg-cream-50 p-7">
                <span className="font-display text-sm font-semibold text-bronze-500">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-charcoal-900">{f.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">{f.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="quote-faq" className="section bg-cream-50">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="quote-faq" eyebrow="FAQ" title="Questions fréquentes." />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={generalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
