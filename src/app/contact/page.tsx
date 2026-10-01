import { Suspense } from "react";
import { Facebook, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { ContactForm } from "@/components/organisms/ContactForm";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact et accès",
  description: `Contactez ${site.name} à Aixe-sur-Vienne : ${site.phoneDisplay}, ${site.email}. Plan d'accès et itinéraire.`,
  path: "/contact",
});

export default function ContactPage() {
  const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
  const q = encodeURIComponent(site.maps.query);
  const mapSrc = `https://www.google.com/maps?q=${q}&output=embed`;
  const itineraries = [
    { label: "Google Maps", href: `https://www.google.com/maps/dir/?api=1&destination=${q}` },
    { label: "Waze", href: `https://waze.com/ul?q=${q}&navigate=yes` },
    { label: "Plans (Apple)", href: `https://maps.apple.com/?daddr=${q}` },
  ];
  const tel = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Nous <span className="accent text-brand-400">trouver.</span>
          </>
        }
        description="Appelez-nous, écrivez-nous ou venez nous voir à Aixe-sur-Vienne."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        visual={{ variant: "bay", tone: "stone", alt: "", src: "/images/veranda-alu-anthracite.jpg", position: "50% 50%" }}
      />

      <section aria-labelledby="access-title" className="section bg-cream-50">
        <div className="container grid items-stretch gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-lg border border-charcoal-900/10 shadow-lift">
              <iframe
                title={`Plan d'accès — ${site.name}, ${addressLine}`}
                src={mapSrc}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <h2 id="access-title" className="font-display text-2xl font-semibold text-charcoal-900">
              SCAL · Aixe-sur-Vienne
            </h2>
            <div className="mt-6 flex items-start gap-4">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full border border-brand-500/60 motion-reduce:hidden" />
                <MapPin className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </span>
              <address className="pt-1 text-lg not-italic leading-snug text-charcoal-900">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </address>
            </div>

            <p className="mt-10 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-slate-500">
              <Navigation className="h-4 w-4" aria-hidden /> Itinéraire
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {itineraries.map((it, i) => (
                <li key={it.label}>
                  <ButtonLink href={it.href} external variant={i === 0 ? "primary" : "ghost"}>
                    {it.label}
                  </ButtonLink>
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-4 border-t border-charcoal-900/10 pt-8">
              <li>
                <a href={tel} className="group inline-flex items-center gap-4 font-medium text-charcoal-900 hover:text-brand-600">
                  <Phone className="h-5 w-5 text-brand-600 transition-transform group-hover:-rotate-12" strokeWidth={1.5} aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-4 font-medium text-charcoal-900 hover:text-brand-600">
                  <Mail className="h-5 w-5 text-brand-600 transition-transform group-hover:-translate-y-0.5" strokeWidth={1.5} aria-hidden />
                  {site.email}
                </a>
              </li>
              {site.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 font-medium text-charcoal-900 hover:text-brand-600"
                  >
                    <Facebook className="h-5 w-5 text-brand-600" strokeWidth={1.5} aria-hidden />
                    {s.name}
                    <span className="sr-only">(nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="form-title" className="section bg-light-section pt-0 sm:pt-0 lg:pt-0">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 id="form-title" className="font-display text-2xl font-semibold text-charcoal-900">
              Écrivez-nous
            </h2>
            <div className="mt-8">
              <Suspense fallback={<div className="h-[480px] animate-pulse rounded-lg bg-charcoal-900/[0.04]" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
