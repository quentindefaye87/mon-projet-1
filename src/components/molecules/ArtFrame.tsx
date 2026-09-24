import { WindowArt } from "@/components/atoms/WindowArt";
import { cn } from "@/lib/utils";
import type { Visual } from "@/types";

interface ArtFrameProps {
  visual: Visual;
  className?: string;
  hoverZoom?: boolean;
  decorative?: boolean;
  children?: React.ReactNode;
}

export function ArtFrame({ visual, className, hoverZoom, decorative, children }: ArtFrameProps) {
  return (
    <div className={cn("grain relative overflow-hidden rounded-lg bg-charcoal-900", className)}>
      <div className={cn("absolute inset-0", hoverZoom && "transition-transform duration-[1.2s] ease-premium group-hover:scale-[1.04]")}>
        <WindowArt variant={visual.variant} tone={visual.tone} alt={visual.alt} decorative={decorative} />
      </div>
      {children}
    </div>
  );
}
