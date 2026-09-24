import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, light }: { children: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={cn("eyebrow inline-flex items-center gap-3", light ? "text-brand-300" : "text-brand-600", className)}>
      <span aria-hidden className={cn("h-px w-8", light ? "bg-brand-300/60" : "bg-brand-500/60")} />
      {children}
    </p>
  );
}
