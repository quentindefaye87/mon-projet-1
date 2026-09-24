import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", light ? "text-cream-50" : "text-charcoal-900", className)}
      aria-label={`${site.name} — accueil`}
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <rect x="3" y="3" width="26" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 3v26M3 13h26" stroke="currentColor" strokeWidth="1.6" />
        <rect x="17.5" y="4.5" width="10" height="7" fill="#c79a68" opacity="0.9" className="transition-opacity duration-500 group-hover:opacity-100" />
      </svg>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">
        Lumen <span className="font-normal text-bronze-500">&amp;</span> Cadre
      </span>
    </Link>
  );
}
