import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { BeforeAfter } from "@/components/organisms/BeforeAfter";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { Reveal } from "@/components/atoms/Reveal";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { categories } from "@/data/categories";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { VisualImage } from "@/components/atoms/VisualImage";
import { ImageReveal } from "@/components/motion/ImageReveal";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return pageMetadata({ title: `${project.title} — ${project.location}`, description: project.summary, path: `/realisations/${project.slug}` });
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const category = categories.find((c) => c.name === project.windowType);
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const facts = [
    ["Secteur", project.location],
    ["Année", project.year],
    ["Type de chantier", project.propertyType],
    ["Style", project.style],
    ["Solution", project.windowType],
  ].filter((f): f is [string, string] => Boolean(f[1]));

  return (
    <>
      <PageHero
        eyebrow={[project.propertyType, project.year].filter(Boolean).join(" · ")}
        title={project.title}
        description={project.summary}
        visual={project.cover}
        breadcrumbs={[
          { label: "Réalisations", href: "/realisations" },
          { label: project.title, href: `/realisations/${project.slug}` },
        ]}
      />

      <section aria-labelledby="project-story" className="section bg-cream-50">
        <div className="container grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <dl className="glass-light divide-y divide-charcoal-900/10 rounded-lg px-6 lg:sticky lg:top-28">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-4 text-sm">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="text-right font-medium text-charcoal-900">
                    {k === "Solution" && category ? (
                      <Link href={`/solutions/${category.slug}`} className="underline underline-offset-4 hover:text-brand-600">
                        {v}
                      </Link>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="space-y-16 lg:col-span-8">
            {project.before && project.after ? (
              <Reveal>
                <BeforeAfter before={project.before} after={project.after} />
              </Reveal>
            ) : (
              <ImageReveal className="aspect-[4/5] rounded-lg shadow-lift sm:aspect-[4/3]">
                <VisualImage visual={project.cover} sizes="(min-width: 1024px) 60vw, 100vw" />
              </ImageReveal>
            )}
            <div>
              <h2 id="project-story" className="font-display text-display-md font-semibold text-charcoal-900">
                Le projet
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                {project.description.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>
            {project.testimonial && (
              <Reveal>
                <figure className="bg-dark-section grain relative overflow-hidden rounded-lg p-10 sm:p-12">
                  <Quote className="relative z-10 h-8 w-8 text-brand-300" strokeWidth={1.2} aria-hidden />
                  <blockquote className="relative z-10 mt-6 font-display text-2xl font-medium leading-snug text-cream-50">
                    « {project.testimonial.quote} »
                  </blockquote>
                  <figcaption className="relative z-10 mt-6 text-slate-400">— {project.testimonial.author}</figcaption>
                </figure>
              </Reveal>
            )}
            {project.gallery.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal-900">Galerie</h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {project.gallery.map((v, i) => (
                  <Reveal as="li" key={`${v.variant}-${i}`} delay={i * 0.08} className={i === 0 ? "sm:col-span-2" : undefined}>
                    <ArtFrame visual={v} className={i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"} />
                  </Reveal>
                ))}
              </ul>
            </div>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="more-projects" className="section bg-cream-100">
        <div className="container">
          <SectionHeading id="more-projects" eyebrow="Continuer" title="Autres réalisations." />
          <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {others.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
