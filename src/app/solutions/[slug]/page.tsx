import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { CategoryCard } from "@/components/molecules/CategoryCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { ButtonLink } from "@/components/atoms/Button";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { categories, getCategory } from "@/data/categories";
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
  return pageMetadata({ title: `${category.name} sur mesure`, description: category.description, path: `/solutions/${category.slug}` });
}

export default function CategoryPage({ params }: Props) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const related = projects.filter((p) => p.windowType === category.name).slice(0, 3);
  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Nos solutions"
        title={category.name}
        description={category.description}
        visual={category.visual}
        breadcrumbs={[
          { label: "Nos solutions", href: "/solutions" },
          { label: category.name, href: `/solutions/${category.slug}` },
        ]}
      >
        <ButtonLink href={`/devis?solution=${category.slug}`} size="lg">
          Demander un devis gratuit
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </ButtonLink>
      </PageHero>

      {related.length > 0 && (
        <section aria-labelledby="related-projects" className="section bg-cream-50">
          <div className="container">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHeading id="related-projects" eyebrow="Réalisations" title="En situation." />
              <Reveal>
                <ButtonLink href="/realisations" variant="ghost">
                  Toutes les réalisations <ArrowRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
              </Reveal>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="other-collections" className="section bg-light-section">
        <div className="container">
          <SectionHeading id="other-collections" eyebrow="Explorer" title="Nos autres solutions" />
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
