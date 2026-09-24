import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
  id?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "left", light, as = "h2", className, id }: SectionHeadingProps) {
  const Heading = as;
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={cn(
          "mt-5 text-display-md font-semibold sm:text-display-lg",
          light ? "text-cream-50" : "text-charcoal-900",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed", light ? "text-slate-300" : "text-slate-600")}>{description}</p>
      )}
    </Reveal>
  );
}
