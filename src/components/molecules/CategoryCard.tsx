import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import type { WindowCategory } from "@/types";
import { cn } from "@/lib/utils";

export function CategoryCard({ category, className, large }: { category: WindowCategory; className?: string; large?: boolean }) {
  return (
    <Link
      href={`/collections/${category.slug}`}
      className={cn("group block h-full rounded-lg shadow-soft transition-shadow duration-500 hover:shadow-lift", className)}
    >
      <ArtFrame
        visual={category.visual}
        hoverZoom
        decorative
        className={cn("h-full", large ? "min-h-[420px] lg:min-h-[560px]" : "min-h-[340px]")}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-5 sm:bottom-5">
          <div className="glass-dark flex items-end justify-between gap-4 rounded-md p-5">
            <div>
              <h3 className="font-display text-xl font-semibold text-cream-50">{category.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{category.shortDescription}</p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-cream-50 transition-all duration-500 ease-premium group-hover:rotate-45 group-hover:border-bronze-300 group-hover:bg-bronze-400 group-hover:text-charcoal-950">
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </span>
          </div>
        </div>
      </ArtFrame>
    </Link>
  );
}
