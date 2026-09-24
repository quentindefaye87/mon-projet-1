import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

interface LogoMarkProps {
  light?: boolean;
  tagline?: boolean;
  className?: string;
}

/**
 * Logo SCAL redessiné en SVG : lettrage italique rouge et vantail ouvert devant le dormant gris.
 * Au survol du lien parent (.group), le vantail s'ouvre un peu plus.
 */
export function LogoMark({ light, tagline, className }: LogoMarkProps) {
  const grey = light ? "#c2c2c2" : "#4d4d4d";
  return (
    <svg
      viewBox={tagline ? "0 0 440 250" : "0 0 440 200"}
      className={cn("h-auto", className)}
      aria-hidden
      focusable="false"
    >
      <text
        x="18"
        y="152"
        fill="#b93538"
        fontFamily="var(--font-display), 'Arial Black', Arial, sans-serif"
        fontSize="124"
        fontWeight="800"
        letterSpacing="-3"
        transform="skewX(-14) translate(36 0)"
      >
        SCAL
      </text>
      {/* Dormant gris */}
      <path d="M362 40 H410 V176 H336" fill="none" stroke={grey} strokeWidth="6" strokeLinejoin="miter" />
      {/* Vantail rouge ouvert */}
      <g className="origin-[362px_110px] transition-transform duration-700 ease-premium group-hover:[transform:perspective(400px)_rotateY(-18deg)]">
        <path d="M300 46 L362 20" stroke="#b93538" strokeWidth="6" strokeLinecap="square" />
        <path d="M362 20 V200" stroke="#b93538" strokeWidth="9" strokeLinecap="square" />
        <path d="M310 176 L362 200" stroke="#b93538" strokeWidth="6" strokeLinecap="square" />
      </g>
      {tagline && (
        <text
          x="220"
          y="240"
          textAnchor="middle"
          fill={light ? "#efefef" : "#2b2b2b"}
          fontFamily="var(--font-display), Arial, sans-serif"
          fontSize="24"
          fontWeight="700"
          textLength="404"
          lengthAdjust="spacingAndGlyphs"
        >
          DES OUVERTURES À VOS MESURES
        </text>
      )}
    </svg>
  );
}

export function Logo({ light, className, tagline }: { light?: boolean; className?: string; tagline?: boolean }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center", className)} aria-label={`${site.name} — accueil`}>
      <LogoMark light={light} tagline={tagline} className={tagline ? "w-44" : "w-[92px] sm:w-[104px]"} />
    </Link>
  );
}
