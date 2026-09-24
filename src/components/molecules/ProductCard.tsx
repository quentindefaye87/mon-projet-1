import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const [cover] = product.visuals;
  const uw = product.specs.find((s) => s.label === "Coefficient Uw")?.value;
  return (
    <Link
      href={`/produits/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-charcoal-900/[0.06] bg-white/60 shadow-soft backdrop-blur transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift"
    >
      {cover && <ArtFrame visual={cover} hoverZoom decorative className="aspect-[4/3] rounded-none" />}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-charcoal-900">{product.name}</h3>
          <p className="text-sm text-slate-500">
            dès <span className="font-semibold text-charcoal-900">{formatPrice(product.basePrice)}</span>
          </p>
        </div>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">{product.tagline}</p>
        {uw && <p className="mt-4 text-xs font-medium uppercase tracking-wider text-forest-600">Uw {uw}</p>}
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-charcoal-900">
          Découvrir le modèle
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
