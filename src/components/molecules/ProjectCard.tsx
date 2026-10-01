import Link from "next/link";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

/** Photo de réalisation, sans texte : renvoie vers la galerie complète. */
export function ProjectCard({ project, className, tall }: { project: Project; className?: string; tall?: boolean }) {
  return (
    <Link href="/realisations" className={cn("group block h-full", className)} aria-label="Voir toutes nos réalisations">
      <ArtFrame
        visual={project.cover}
        sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
        hoverZoom
        className={cn(
          "shadow-soft transition-shadow duration-500 group-hover:shadow-lift",
          tall ? "aspect-[4/5] md:aspect-auto md:h-full md:min-h-[480px]" : "aspect-[4/3]",
        )}
      />
    </Link>
  );
}
