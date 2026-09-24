import { VisualImage } from "@/components/atoms/VisualImage";
import { cn } from "@/lib/utils";
import type { Visual } from "@/types";

interface ArtFrameProps {
  visual: Visual;
  className?: string;
  hoverZoom?: boolean;
  decorative?: boolean;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}

export function ArtFrame({ visual, className, hoverZoom, decorative, priority, sizes, children }: ArtFrameProps) {
  return (
    <div className={cn("grain relative overflow-hidden rounded-lg bg-charcoal-900", className)}>
      <div className={cn("absolute inset-0", hoverZoom && "transition-transform duration-[1.2s] ease-premium group-hover:scale-[1.05]")}>
        <VisualImage visual={visual} decorative={decorative} priority={priority} sizes={sizes} />
      </div>
      {children}
    </div>
  );
}
