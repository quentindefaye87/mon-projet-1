import Image from "next/image";
import { WindowArt } from "@/components/atoms/WindowArt";
import { cn } from "@/lib/utils";
import type { Visual } from "@/types";

interface VisualImageProps {
  visual: Visual;
  className?: string;
  decorative?: boolean;
  priority?: boolean;
  sizes?: string;
}

/** Affiche la photo d'un visuel si elle existe, sinon son illustration vectorielle. */
export function VisualImage({ visual, className, decorative, priority, sizes = "(min-width: 1024px) 50vw, 100vw" }: VisualImageProps) {
  if (visual.src) {
    return (
      <Image
        src={visual.src}
        alt={decorative ? "" : visual.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
        style={visual.position ? { objectPosition: visual.position } : undefined}
      />
    );
  }
  return <WindowArt variant={visual.variant} tone={visual.tone} alt={visual.alt} decorative={decorative} className={className} />;
}
