import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, CalendarDays, Check, Download, Ruler } from "lucide-react";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { ProductGallery } from "@/components/organisms/ProductGallery";
import { ProductConfigurator } from "@/components/organisms/ProductConfigurator";
import { FaqAccordion } from "@/components/molecules/FaqAccordion";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { ProductCard } from "@/components/molecules/ProductCard";
import { Reveal } from "@/components/atoms/Reveal";
import { ButtonLink } from "@/components/atoms/Button";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { getCategory } from "@/data/categories";
import { getProduct, products } from "@/data/products";
import { JsonLd, faqSchema, pageMetadata, productSchema } from "@/lib/seo";
import { formatPrice } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return pageMetadata({
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
    path: `/produits/${product.slug}`,
  });
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const highlights = product.specs.slice(0, 4);

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd data={faqSchema(product.faqs)} />

      <section className="bg-dark-section grain relative overflow-hidden">
        <div className="container relative z-10 pb-20 pt-32 sm:pt-36">
          <Breadcrumbs
            light
            items={[
              { label: "Collections", href: "/collections" },
              ...(category ? [{ label: category.name, href: `/collections/${category.slug}` }] : []),
              { label: product.name, href: `/produits/${product.slug}` },
            ]}
          />
          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ProductGallery visuals={product.visuals} name={product.name} />
            </div>
            <div className="lg:col-span-5">
              {category && <Eyebrow light>{category.name}</Eyebrow>}
              <h1 className="mt-5 text-display-md font-semibold text-cream-50 sm:text-display-lg">{product.name}</h1>
              <p className="mt-3 font-display text-xl text-bronze-300">{product.tagline}</p>
              <p className="mt-6 leading-relaxed text-slate-300">{product.description}</p>
              <p className="mt-8 text-sm text-slate-400">
                À partir de <span className="font-display text-2xl font-semibold text-cream-50">{formatPrice(product.basePrice)}</span>{" "}
                TTC, pose comprise*
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
                {highlights.map((s) => (
                  <div key={s.label} className="bg-charcoal-950/70 p-4">
                    <dt className="text-xs uppercase tracking-wider text-slate-400">{s.label}</dt>
                    <dd className="mt-1.5 font-medium text-cream-50">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#configurer" size="lg" className="flex-auto">
                  Configurer & ajouter au devis
                  <ArrowDown className="h-4 w-4" aria-hidden />
                </ButtonLink>
                <ButtonLink href={`/contact?sujet=rendez-vous&produit=${product.slug}`} size="lg" variant="ghost-light" className="flex-auto">
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  Consultation
                </ButtonLink>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <Link href={`/contact?sujet=documentation&produit=${product.slug}`} className="inline-flex items-center gap-2 text-slate-300 hover:text-cream-50">
                  <Download className="h-4 w-4" aria-hidden /> Brochure technique
                </Link>
                <Link href="/guide-mesure" className="inline-flex items-center gap-2 text-slate-300 hover:text-cream-50">
                  <Ruler className="h-4 w-4" aria-hidden /> Comment mesurer
                </Link>
              </div>
              <p className="mt-6 text-xs text-slate-500">*Prix indicatif pour une menuiserie de 1 200 × 1 400 mm, hors aides.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="configurer" aria-labelledby="config-title" className="section scroll-mt-20 bg-cream-50">
        <div className="container">
          <SectionHeading
            id="config-title"
            eyebrow="Configurateur"
            title={`Composez votre ${product.name}.`}
            description="Chaque choix met à jour l'aperçu et l'estimation en temps réel."
          />
          <div className="mt-14">
            <ProductConfigurator product={product} />
          </div>
        </div>
      </section>

      <section aria-labelledby="specs-title" className="section bg-light-section">
        <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading id="specs-title" eyebrow="Caractéristiques" title="Fiche technique." />
            <Reveal>
              <table className="mt-10 w-full text-left text-[0.9375rem]">
                <caption className="sr-only">Caractéristiques techniques de {product.name}</caption>
                <tbody className="divide-y divide-charcoal-900/10 border-y border-charcoal-900/10">
                  {product.specs.map((s) => (
                    <tr key={s.label}>
                      <th scope="row" className="py-4 pr-6 font-normal text-slate-500">
                        {s.label}
                      </th>
                      <td className="py-4 font-medium text-charcoal-900">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
          <div>
            <SectionHeading eyebrow="Avantages" title={`Pourquoi ${product.name} ?`} />
            <Reveal>
              <ul className="mt-10 space-y-5">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-500/10 text-forest-600">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="leading-relaxed text-charcoal-800">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="glass-light mt-12 flex items-start gap-5 rounded-lg p-6">
                <Ruler className="mt-1 h-6 w-6 shrink-0 text-bronze-500" strokeWidth={1.4} aria-hidden />
                <div>
                  <h3 className="font-display font-semibold text-charcoal-900">Comment mesurer vos ouvertures ?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Trois mesures suffisent pour une première estimation. Notre technicien réalise ensuite un métré laser précis.
                  </p>
                  <Link href="/guide-mesure" className="mt-3 inline-block text-sm font-medium text-forest-600 hover:underline">
                    Lire le guide de mesure →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="section bg-cream-50">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions fréquentes." />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={product.faqs} />
          </div>
        </div>
      </section>

      <section aria-labelledby="related-title" className="section bg-cream-100">
        <div className="container">
          <SectionHeading id="related-title" eyebrow="À découvrir aussi" title="Autres modèles." />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
