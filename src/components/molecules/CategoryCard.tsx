import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import type { WindowCategory } from "@/types";
import { cn } from "@/lib/utils";

export function CategoryCard({ category, className, large, index }: { category: WindowCategory; className?: string; large?: boolean; index?: number }) {
  return (
    <Link
      href={`/solutions/${category.slug}`}
      className={cn("frame-hover group block h-full rounded-lg shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift", className)}
    >
      <ArtFrame
        visual={category.visual}
        hoverZoom
        decorative
        sizes={large ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"}
        className={cn("h-full", large ? "min-h-[420px] lg:min-h-[600px]" : "min-h-[340px]")}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
        {index !== undefined && (
          <span className="glass-dark absolute left-4 top-4 z-10 rounded-full px-3 py-1 font-display text-xs font-semibold text-cream-50">
            {String(index).padStart(2, "0")}
          </span>
        )}
        <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-5 sm:bottom-5">
          <div className="glass-dark flex items-end justify-between gap-4 rounded-md p-5">
            <div>
              <h3 className="font-display text-xl font-semibold text-cream-50">{category.name}</h3>
              <p className="mt-1.5 max-h-0 overflow-hidden text-sm leading-relaxed text-slate-300 opacity-0 transition-all duration-500 ease-premium group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100 max-lg:max-h-24 max-lg:opacity-100">
                {category.shortDescription}
              </p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-cream-50 transition-all duration-500 ease-premium group-hover:rotate-45 group-hover:border-brand-500 group-hover:bg-brand-600">
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </span>
          </div>
        </div>
      </ArtFrame>
    </Link>
  );
}
