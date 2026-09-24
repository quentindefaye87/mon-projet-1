import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, author, role, company, location, rating, type } = testimonial;
  return (
    <figure className="glass relative flex h-full flex-col rounded-lg p-8">
      <Quote className="h-7 w-7 text-bronze-300/70" strokeWidth={1.2} aria-hidden />
      <div className="mt-5 flex gap-0.5" aria-label={`Note : ${rating} sur 5`} role="img">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-bronze-300 text-bronze-300" aria-hidden />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-cream-100">« {quote} »</blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
        <span
          aria-hidden
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-bronze-300 to-bronze-600 font-display text-sm font-semibold text-charcoal-950"
        >
          {initials(author)}
        </span>
        <div className="min-w-0">
          <p className="font-medium text-cream-50">{author}</p>
          <p className="truncate text-sm text-slate-400">
            {role}
            {company ? ` · ${company}` : ""} — {location}
          </p>
        </div>
        <span className="ml-auto rounded-full border border-white/15 px-2.5 py-1 text-[0.6875rem] uppercase tracking-wider text-slate-300">
          {type === "commercial" ? "Pro" : "Particulier"}
        </span>
      </figcaption>
    </figure>
  );
}
