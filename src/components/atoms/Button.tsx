import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "ghost" | "ghost-light" | "light" | "glass";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-medium tracking-tight transition-all duration-300 ease-premium focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-600 text-cream-50 shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(47,77,65,0.6)] hover:bg-forest-500 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_12px_32px_-8px_rgba(47,77,65,0.7)] hover:-translate-y-px",
  dark: "bg-charcoal-900 text-cream-50 shadow-soft hover:bg-charcoal-700 hover:-translate-y-px",
  ghost: "border border-charcoal-900/15 bg-transparent text-charcoal-900 hover:border-charcoal-900/40 hover:bg-charcoal-900/[0.03]",
  "ghost-light": "border border-white/25 bg-transparent text-cream-50 hover:border-white/60 hover:bg-white/5",
  light: "bg-cream-50 text-charcoal-900 shadow-soft hover:bg-white hover:-translate-y-px",
  glass: "glass text-cream-50 hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-14 px-8 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref,
) {
  return (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
});

interface ButtonLinkProps extends CommonProps {
  href: string;
  external?: boolean;
  "aria-label"?: string;
}

export function ButtonLink({ variant = "primary", size = "md", className, children, href, external, ...rest }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
