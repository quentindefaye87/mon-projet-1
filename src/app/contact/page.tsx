import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { ContactForm } from "@/components/organisms/ContactForm";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contactez ${site.name} à Aixe-sur-Vienne : ${site.phoneDisplay}, ${site.email}. Devis gratuit pour vos menuiseries, vérandas et fermetures à Limoges et en Haute-Vienne.`,
  path: "/contact",
});

export default function ContactPage() {
  const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de <span className="accent text-brand-400">vos ouvertures.</span>
          </>
        }
        description="Une question, un projet, un besoin de service après-vente ? Appelez-nous ou écrivez-nous, notre équipe vous répond rapidement."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        visual={{ variant: "bay", tone: "stone", alt: "", src: "/images/veranda-alu-anthracite.jpg", position: "50% 50%" }}
      />

      <section aria-label="Formulaire et coordonnées" className="section bg-cream-50">
        <div className="container grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-charcoal-900">Écrivez-nous</h2>
            <div className="mt-8">
              <Suspense fallback={<div className="h-[560px] animate-pulse rounded-lg bg-charcoal-900/[0.04]" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-dark-section grain relative overflow-hidden rounded-lg p-8 sm:p-10">
              <h2 className="relative z-10 font-display text-xl font-semibold text-cream-50">SCAL · Aixe-sur-Vienne</h2>
              <ul className="relative z-10 mt-8 space-y-6 text-slate-300">
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" strokeWidth={1.5} aria-hidden />
                  <div>
                    <p className="text-sm text-slate-400">Téléphone</p>
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium text-cream-50 hover:text-brand-300">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" strokeWidth={1.5} aria-hidden />
                  <div>
                    <p className="text-sm text-slate-400">E-mail</p>
                    <a href={`mailto:${site.email}`} className="font-medium text-cream-50 hover:text-brand-300">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" strokeWidth={1.5} aria-hidden />
                  <div>
                    <p className="text-sm text-slate-400">Adresse</p>
                    <address className="font-medium not-italic text-cream-50">{addressLine}</address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" strokeWidth={1.5} aria-hidden />
                  <div>
                    <p className="text-sm text-slate-400">Horaires</p>
                    <dl className="mt-1 space-y-1 text-sm">
                      {site.hours.map((h) => (
                        <div key={h.days} className="flex flex-wrap gap-x-2">
                          <dt className="text-cream-50">{h.days}</dt>
                          <dd>{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-charcoal-900/10 shadow-soft">
              <iframe
                title={`Plan d'accès — ${site.name}, ${addressLine}`}
                src={mapSrc}
                className="h-72 w-full grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
