import { VisualImage } from "@/components/atoms/VisualImage";
import { FrameDraw } from "@/components/motion/FrameDraw";
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
        <div className="absolute inset-0 animate-fade-in">
          <VisualImage visual={visual} decorative priority sizes="100vw" />
        </div>
      )}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/55 to-charcoal-950/15" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-transparent to-charcoal-950/30" />
      <div aria-hidden className="absolute left-1/4 top-0 h-[360px] w-[600px] rounded-full bg-brand-600/20 blur-[120px]" />
      <FrameDraw light delay={0.4} className="absolute bottom-10 right-[6%] z-10 hidden w-28 opacity-80 lg:block xl:w-36" />
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
