import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { ProductCard } from "@/components/molecules/ProductCard";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { CategoryCard } from "@/components/molecules/CategoryCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { ButtonLink } from "@/components/atoms/Button";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategory(params.slug);
  if (!category) return {};
  return pageMetadata({ title: `${category.name} sur mesure`, description: category.description, path: `/collections/${category.slug}` });
}

export default function CategoryPage({ params }: Props) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const items = getProductsByCategory(category.slug);
  const related = projects.filter((p) => p.windowType === category.name).slice(0, 2);
  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={category.name}
        description={category.description}
        visual={category.visual}
        breadcrumbs={[
          { label: "Collections", href: "/collections" },
          { label: category.name, href: `/collections/${category.slug}` },
        ]}
      >
        <ul className="flex flex-wrap gap-2" aria-label="Idéal pour">
          {category.bestFor.map((b) => (
            <li key={b} className="glass rounded-full px-4 py-1.5 text-sm text-cream-100">
              {b}
            </li>
          ))}
        </ul>
      </PageHero>

      <section aria-labelledby="models-title" className="section bg-cream-50">
        <div className="container">
          <SectionHeading
            id="models-title"
            eyebrow={`${items.length} modèle${items.length > 1 ? "s" : ""}`}
            title="Choisissez votre modèle."
            description="Chaque modèle est entièrement configurable : matériau, teinte, vitrage, quincaillerie et dimensions."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-projects" className="section bg-cream-100">
          <div className="container">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHeading id="related-projects" eyebrow="En situation" title="Réalisations avec cette collection." />
              <Reveal>
                <ButtonLink href="/realisations" variant="ghost">
                  Toutes les réalisations <ArrowRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-8">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="other-collections" className="section bg-light-section">
        <div className="container">
          <SectionHeading id="other-collections" eyebrow="Explorer" title="Autres collections" />
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug}>
                <CategoryCard category={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
