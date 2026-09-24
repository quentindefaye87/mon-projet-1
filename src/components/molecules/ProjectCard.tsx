import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className, tall }: { project: Project; className?: string; tall?: boolean }) {
  return (
    <Link href={`/realisations/${project.slug}`} className={cn("group flex h-full flex-col", className)}>
      <ArtFrame
        visual={project.cover}
        sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
        hoverZoom
        decorative
        className={cn(
          "shadow-soft transition-shadow duration-500 group-hover:shadow-lift",
          tall ? "aspect-[4/5] md:aspect-auto md:min-h-[480px] md:flex-1" : "aspect-[4/3]",
        )}
      >
        <div className="absolute inset-0 bg-charcoal-950/0 transition-colors duration-500 group-hover:bg-charcoal-950/40" />
        <div className="absolute inset-x-5 bottom-5 z-10 translate-y-3 opacity-0 transition-all duration-500 ease-premium group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <p className="glass-dark rounded-md p-4 text-sm leading-relaxed text-cream-100">{project.summary}</p>
        </div>
        <span className="glass-dark absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-medium text-cream-50">
          {project.windowType}
        </span>
      </ArtFrame>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-charcoal-900">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {[project.location, project.propertyType, project.year].filter(Boolean).join(" · ")}
          </p>
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-charcoal-900"
          aria-hidden
        />
      </div>
    </Link>
  );
}
