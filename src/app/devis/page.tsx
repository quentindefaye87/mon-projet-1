import { Suspense } from "react";
import Link from "next/link";
import { Phone, Ruler } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { QuoteForm } from "@/components/organisms/QuoteForm";
import { Reveal } from "@/components/atoms/Reveal";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Devis gratuit",
  description: "Demandez votre devis gratuit pour vos menuiseries, véranda, porte d'entrée, volets ou portail à Limoges et en Haute-Vienne.",
  path: "/devis",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Devis gratuit"
        title={
          <>
            Parlez-nous de <span className="accent text-brand-400">votre projet.</span>
          </>
        }
        description="Remplissez le formulaire : nous vous recontactons pour établir votre devis gratuit."
        breadcrumbs={[{ label: "Devis gratuit", href: "/devis" }]}
        visual={{ variant: "picture", tone: "ember", alt: "", src: "/images/porte-entree-rouge.jpg", position: "50% 40%" }}
      />

      <section aria-label="Formulaire de demande de devis" className="section bg-cream-50">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-[620px] animate-pulse rounded-lg bg-charcoal-900/[0.04]" />}>
              <QuoteForm />
            </Suspense>
          </div>
          <aside className="lg:col-span-5">
            <Reveal className="space-y-5 lg:sticky lg:top-28">
              <div className="bg-dark-section grain relative overflow-hidden rounded-lg p-8">
                <p className="relative z-10 text-sm text-slate-400">Vous préférez en parler ?</p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="relative z-10 mt-2 inline-flex items-center gap-3 font-display text-2xl font-semibold text-cream-50 hover:text-brand-300"
                >
                  <Phone className="h-6 w-6" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </div>
              <Link
                href="/guide-mesure"
                className="glass-light group flex items-center gap-4 rounded-lg p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Ruler className="h-6 w-6 shrink-0 text-brand-600" strokeWidth={1.5} aria-hidden />
                <span>
                  <span className="block font-display font-semibold text-charcoal-900">Comment mesurer vos ouvertures ?</span>
                  <span className="text-sm text-slate-600">Notre petit guide, pas à pas.</span>
                </span>
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
