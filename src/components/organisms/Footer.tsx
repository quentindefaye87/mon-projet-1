import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { categories } from "@/data/categories";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Collections",
    links: categories.map((c) => ({ label: c.name, href: `/collections/${c.slug}` })),
  },
  {
    title: "Maison",
    links: [
      { label: "Notre histoire", href: "/a-propos" },
      { label: "Notre démarche", href: "/processus" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Journal", href: "/journal" },
      { label: "Guide de mesure", href: "/guide-mesure" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Demander un devis", href: "/devis" },
      { label: "Prendre rendez-vous", href: "/contact" },
      { label: "Espace professionnels", href: "/devis?profil=professionnel" },
      { label: "Documentation", href: "/contact?sujet=documentation" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark-section grain relative text-slate-300">
      <div className="container relative z-10 pb-10 pt-20 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed text-slate-400">{site.description}</p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 hover:text-cream-50">
                  <Phone className="h-4 w-4 text-bronze-300" strokeWidth={1.5} aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:text-cream-50">
                  <Mail className="h-4 w-4 text-bronze-300" strokeWidth={1.5} aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-bronze-300" strokeWidth={1.5} aria-hidden />
                <address className="not-italic">
                  {site.address.street}, {site.address.postalCode} {site.address.city}
                </address>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="eyebrow text-cream-50">{col.title}</h2>
                <ul className="mt-6 space-y-3.5 text-[0.9375rem]">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="link-underline text-slate-400 transition-colors hover:text-cream-50">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. Fabriqué avec soin à Lyon.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/mentions-legales" className="hover:text-cream-50">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-cream-50">
                Confidentialité
              </Link>
            </li>
            {site.socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-cream-50">
                  {s.name}
                  <ArrowUpRight className="h-3 w-3" aria-hidden />
                  <span className="sr-only">(nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
