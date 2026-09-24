import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { JsonLd, breadcrumbSchema } from "@/lib/seo";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items, light, className }: { items: Crumb[]; light?: boolean; className?: string }) {
  const all = [{ label: "Accueil", href: "/" }, ...items];
  return (
    <nav aria-label="Fil d'Ariane" className={className}>
      <JsonLd data={breadcrumbSchema(all)} />
      <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", light ? "text-slate-300" : "text-slate-500")}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={light ? "text-cream-50" : "text-charcoal-900"}>
                  {c.label}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="link-underline transition-colors hover:text-current">
                    {c.label}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
