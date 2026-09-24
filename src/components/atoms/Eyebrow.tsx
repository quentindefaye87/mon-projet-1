import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, light }: { children: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={cn("eyebrow inline-flex items-center gap-3", light ? "text-bronze-300" : "text-bronze-600", className)}>
      <span aria-hidden className={cn("h-px w-8", light ? "bg-bronze-300/60" : "bg-bronze-500/60")} />
      {children}
    </p>
  );
}
