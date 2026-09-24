import { WindowArt } from "@/components/atoms/WindowArt";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Breadcrumbs, type Crumb } from "@/components/molecules/Breadcrumbs";
import type { Visual } from "@/types";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs: Crumb[];
  visual?: Visual;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumbs, visual, children }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden bg-charcoal-950">
      {visual && (
        <div className="absolute inset-0 animate-fade-in opacity-70">
          <WindowArt variant={visual.variant} tone={visual.tone} alt={visual.alt} decorative />
        </div>
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/70 to-charcoal-950" />
      <div aria-hidden className="absolute left-1/4 top-0 h-[360px] w-[600px] rounded-full bg-sapphire-500/15 blur-[120px]" />
      <div className="container relative z-10 pb-20 pt-36 sm:pb-24 sm:pt-44">
        <Breadcrumbs items={breadcrumbs} light className="animate-fade-up opacity-0" />
        <div className="mt-10 max-w-3xl">
          {eyebrow && (
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
              <Eyebrow light>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1
            className="mt-5 animate-fade-up text-[2.5rem] font-semibold leading-[1.05] text-cream-50 opacity-0 sm:text-display-xl"
            style={{ animationDelay: "200ms" }}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300 opacity-0" style={{ animationDelay: "350ms" }}>
              {description}
            </p>
          )}
          {children && (
            <div className="mt-10 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
