import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsShowcase() {
  const [first, second, third] = projects;
  return (
    <section aria-labelledby="projects-title" className="section bg-cream-100">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="projects-title"
            eyebrow="Réalisations"
            title={
              <>
                Nos chantiers <span className="accent text-brand-600">parlent pour nous.</span>
              </>
            }
            description="Granges en pierre, maisons limousines, extensions : quelques réalisations de nos équipes en Haute-Vienne."
          />
          <Reveal>
            <ButtonLink href="/realisations" variant="ghost" className="shrink-0">
              Voir toutes les réalisations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-8">
          {first && (
            <Reveal className="md:row-span-2">
              <ProjectCard project={first} tall />
            </Reveal>
          )}
          {second && (
            <Reveal delay={0.1}>
              <ProjectCard project={second} />
            </Reveal>
          )}
          {third && (
            <Reveal delay={0.2}>
              <ProjectCard project={third} />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
