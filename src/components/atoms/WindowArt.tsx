import type { ArtTone, ArtVariant } from "@/types";
import { cn } from "@/lib/utils";

interface Palette {
  skyTop: string;
  skyBottom: string;
  sun: string;
  wall: string;
  wallLight: string;
  frame: string;
  glassTop: string;
  glassBottom: string;
  interior: string;
  ground: string;
}

const palettes: Record<ArtTone, Palette> = {
  dusk: {
    skyTop: "#15171a",
    skyBottom: "#5a4a40",
    sun: "#e8b98a",
    wall: "#1f2124",
    wallLight: "#2b2e32",
    frame: "#0e0f10",
    glassTop: "#3a4550",
    glassBottom: "#c79a68",
    interior: "#f3d9b4",
    ground: "#101112",
  },
  forest: {
    skyTop: "#0f1714",
    skyBottom: "#4f7a68",
    sun: "#d9e8d0",
    wall: "#18211d",
    wallLight: "#223029",
    frame: "#0b0f0d",
    glassTop: "#2f4d41",
    glassBottom: "#9fc2ae",
    interior: "#f1e6cc",
    ground: "#0c110f",
  },
  sapphire: {
    skyTop: "#0d131b",
    skyBottom: "#4a73a0",
    sun: "#d6e2f2",
    wall: "#161c24",
    wallLight: "#1f2833",
    frame: "#0a0d12",
    glassTop: "#325273",
    glassBottom: "#a9c1dc",
    interior: "#f5e7cf",
    ground: "#0b0f14",
  },
  bronze: {
    skyTop: "#1c1510",
    skyBottom: "#ab7f4f",
    sun: "#f5d6ae",
    wall: "#221b15",
    wallLight: "#2e241c",
    frame: "#120d09",
    glassTop: "#5a4330",
    glassBottom: "#e3c29a",
    interior: "#fbe8c8",
    ground: "#140f0b",
  },
  ember: {
    skyTop: "#150d0d",
    skyBottom: "#8c1a1c",
    sun: "#f2c7b8",
    wall: "#1d1515",
    wallLight: "#2a1d1d",
    frame: "#0f0a0a",
    glassTop: "#4a2a2a",
    glassBottom: "#dc6a6d",
    interior: "#fbe3d6",
    ground: "#110b0b",
  },
  stone: {
    skyTop: "#dfe5ea",
    skyBottom: "#efe7d8",
    sun: "#ffffff",
    wall: "#d9d2c3",
    wallLight: "#ebe5d8",
    frame: "#34383d",
    glassTop: "#8f9ba5",
    glassBottom: "#e3e8ec",
    interior: "#fff4e0",
    ground: "#b9b3a6",
  },
};

function ridge(baseY: number, amp: number, seed: number, x0 = 0, x1 = 800, bottom = 600) {
  const pts: string[] = [];
  for (let x = x0; x <= x1; x += 40) {
    const y = baseY + Math.sin(x * 0.011 + seed) * amp + Math.sin(x * 0.029 + seed * 2.3) * amp * 0.45;
    pts.push(`${x} ${y.toFixed(1)}`);
  }
  return `M${x0} ${bottom} L${pts.join(" L")} L${x1} ${bottom} Z`;
}

export interface WindowArtProps {
  variant: ArtVariant;
  tone: ArtTone;
  alt: string;
  className?: string;
  frameColor?: string;
  glassTint?: string;
  decorative?: boolean;
}

export function WindowArt({ variant, tone, alt, className, frameColor, glassTint, decorative }: WindowArtProps) {
  const p = { ...palettes[tone] };
  if (frameColor) p.frame = frameColor;
  if (glassTint) p.glassBottom = glassTint;
  const id = `wa-${variant}-${tone}-${(frameColor ?? "").replace("#", "")}${(glassTint ?? "").replace("#", "")}`;
  const u = (name: string) => `url(#${id}-${name})`;

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : alt}
    >
      {!decorative && <title>{alt}</title>}
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.skyTop} />
          <stop offset="100%" stopColor={p.skyBottom} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={p.sun} stopOpacity="0.85" />
          <stop offset="35%" stopColor={p.sun} stopOpacity="0.25" />
          <stop offset="100%" stopColor={p.sun} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor={p.glassTop} />
          <stop offset="100%" stopColor={p.glassBottom} />
        </linearGradient>
        <linearGradient id={`${id}-warm`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.glassTop} stopOpacity="0.9" />
          <stop offset="70%" stopColor={p.interior} stopOpacity="0.75" />
          <stop offset="100%" stopColor={p.interior} stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-spill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.sun} stopOpacity="0.28" />
          <stop offset="100%" stopColor={p.sun} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={p.frame} />
          <stop offset="50%" stopColor={p.sun} stopOpacity="0.9" />
          <stop offset="100%" stopColor={p.frame} />
        </linearGradient>
        <pattern id={`${id}-brush`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
      </defs>

      {variant === "facade" && (
        <g>
          <rect width="800" height="600" fill={u("sky")} />
          <circle cx="640" cy="150" r="280" fill={u("glow")} />
          <path d={ridge(420, 18, 1.2)} fill={p.wall} opacity="0.55" />
          <rect x="280" y="138" width="470" height="12" fill={p.frame} />
          <rect x="300" y="150" width="430" height="110" fill={p.wallLight} />
          <rect x="330" y="168" width="370" height="78" fill={u("warm")} />
          {[422, 514, 606].map((x) => (
            <rect key={x} x={x} y="168" width="4" height="78" fill={p.frame} />
          ))}
          <rect x="110" y="258" width="600" height="222" fill={p.wall} />
          <rect x="140" y="286" width="320" height="176" fill={u("warm")} />
          {[218, 298, 378].map((x) => (
            <rect key={x} x={x} y="286" width="4" height="176" fill={p.frame} />
          ))}
          <rect x="140" y="286" width="320" height="176" fill={u("sheen")} />
          <rect x="530" y="292" width="36" height="170" fill={u("glass")} />
          <rect x="600" y="292" width="80" height="4" fill={p.frame} opacity="0.6" />
          <rect x="0" y="480" width="800" height="120" fill={p.ground} />
          <rect x="140" y="484" width="320" height="60" fill={u("warm")} opacity="0.12" />
          <rect x="0" y="480" width="800" height="1.5" fill="#ffffff" opacity="0.08" />
        </g>
      )}

      {variant === "interior" && (
        <g>
          <rect width="800" height="600" fill={p.wallLight} />
          <rect x="140" y="70" width="520" height="390" fill={u("sky")} />
          <circle cx="520" cy="180" r="220" fill={u("glow")} />
          <path d={ridge(360, 22, 2.1, 140, 660, 460)} fill={p.wall} opacity="0.7" />
          <path d={ridge(395, 14, 4.4, 140, 660, 460)} fill={p.ground} opacity="0.85" />
          <rect x="140" y="70" width="520" height="390" fill={u("sheen")} />
          <rect x="140" y="70" width="520" height="390" fill="none" stroke={p.frame} strokeWidth="12" />
          <rect x="312" y="70" width="6" height="390" fill={p.frame} />
          <rect x="484" y="70" width="6" height="390" fill={p.frame} />
          <rect x="140" y="148" width="520" height="5" fill={p.frame} />
          <polygon points="0,600 800,600 800,460 0,460" fill={p.wall} />
          <polygon points="146,460 654,460 800,600 0,600" fill={u("spill")} />
          <rect x="70" y="486" width="300" height="46" rx="10" fill={p.frame} opacity="0.92" />
          <rect x="84" y="470" width="120" height="26" rx="8" fill={p.frame} opacity="0.75" />
          <rect x="560" y="420" width="10" height="112" fill={p.frame} opacity="0.85" />
          <ellipse cx="565" cy="410" rx="46" ry="38" fill={p.frame} opacity="0.8" />
        </g>
      )}

      {variant === "frame" && (
        <g>
          <rect width="800" height="600" fill={p.wall} />
          <circle cx="720" cy="80" r="360" fill={u("glow")} opacity="0.55" />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={90 + i * 34}
              y={70 + i * 34}
              width="900"
              height="800"
              rx="6"
              fill={i % 2 === 0 ? p.frame : p.wallLight}
              opacity={i % 2 === 0 ? 1 : 0.9}
            />
          ))}
          <rect x="90" y="70" width="900" height="800" rx="6" fill={u("brush")} />
          <rect x="226" y="206" width="900" height="800" rx="4" fill={u("glass")} />
          <circle cx="620" cy="260" r="260" fill={u("glow")} opacity="0.5" />
          <polygon points="300,206 420,206 250,600 226,600 226,380" fill="#ffffff" opacity="0.07" />
          <polygon points="460,206 500,206 330,600 290,600" fill="#ffffff" opacity="0.05" />
          <rect x="226" y="206" width="900" height="800" rx="4" fill="none" stroke="#000" strokeOpacity="0.5" strokeWidth="3" />
          <rect x="148" y="300" width="30" height="74" rx="14" fill={u("metal")} />
          <rect x="155" y="328" width="16" height="150" rx="8" fill={u("metal")} />
          <rect x="90" y="70" width="900" height="2" fill="#ffffff" opacity="0.18" />
        </g>
      )}

      {variant === "slider" && (
        <g>
          <rect width="800" height="600" fill={u("sky")} />
          <circle cx="600" cy="210" r="260" fill={u("glow")} />
          <path d={ridge(360, 20, 0.6)} fill={p.wall} opacity="0.6" />
          <path d={ridge(410, 12, 3.1)} fill={p.ground} opacity="0.9" />
          <rect x="0" y="0" width="800" height="80" fill={p.wallLight} />
          <rect x="0" y="0" width="50" height="600" fill={p.wallLight} />
          <rect x="750" y="0" width="50" height="600" fill={p.wallLight} />
          <rect x="50" y="80" width="370" height="420" fill={u("glass")} opacity="0.28" />
          <rect x="50" y="80" width="370" height="420" fill="none" stroke={p.frame} strokeWidth="14" />
          <rect x="388" y="86" width="362" height="414" fill="#000" opacity="0.12" />
          <rect x="380" y="80" width="370" height="420" fill={u("glass")} opacity="0.22" />
          <rect x="380" y="80" width="370" height="420" fill={u("sheen")} />
          <rect x="380" y="80" width="370" height="420" fill="none" stroke={p.frame} strokeWidth="14" />
          <rect x="396" y="250" width="6" height="120" rx="3" fill={u("metal")} />
          <rect x="0" y="500" width="800" height="100" fill={p.wall} />
          <rect x="44" y="498" width="712" height="8" fill={p.frame} />
          <polygon points="57,506 743,506 800,600 0,600" fill={u("spill")} />
        </g>
      )}

      {variant === "arch" && (
        <g>
          <rect width="800" height="600" fill={p.wallLight} />
          <clipPath id={`${id}-archclip`}>
            <path d="M250 520 V270 A150 150 0 0 1 550 270 V520 Z" />
          </clipPath>
          <g clipPath={`url(#${id}-archclip)`}>
            <rect x="240" y="110" width="320" height="420" fill={u("sky")} />
            <circle cx="470" cy="230" r="200" fill={u("glow")} />
            <path d={ridge(420, 16, 1.7, 240, 560, 530)} fill={p.wall} opacity="0.7" />
            <rect x="240" y="110" width="320" height="420" fill={u("sheen")} />
          </g>
          <path d="M250 520 V270 A150 150 0 0 1 550 270 V520 Z" fill="none" stroke={p.frame} strokeWidth="12" />
          <rect x="250" y="266" width="300" height="6" fill={p.frame} />
          <rect x="397" y="120" width="6" height="400" fill={p.frame} />
          <rect x="250" y="390" width="300" height="5" fill={p.frame} />
          {[-60, -30, 30, 60].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <line
                key={a}
                x1="400"
                y1="270"
                x2={(400 + Math.sin(r) * 150).toFixed(1)}
                y2={(270 - Math.cos(r) * 150).toFixed(1)}
                stroke={p.frame}
                strokeWidth="4"
              />
            );
          })}
          <rect x="226" y="520" width="348" height="16" rx="2" fill={p.frame} />
          <polygon points="256,536 544,536 700,600 100,600" fill={u("spill")} />
        </g>
      )}

      {variant === "grid" && (
        <g>
          <rect width="800" height="600" fill={u("sky")} />
          <circle cx="160" cy="80" r="260" fill={u("glow")} opacity="0.8" />
          <rect x="40" y="70" width="720" height="530" fill={p.wall} />
          {[0, 1, 2].map((row) => (
            <rect key={`s${row}`} x="40" y={90 + row * 160 - 8} width="720" height="6" fill={p.frame} opacity="0.7" />
          ))}
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => {
              const x = 80 + col * 172;
              const y = 100 + row * 160;
              const lit = (row + col) % 3 === 0;
              const tilted = row === 0 && col === 3;
              return (
                <g key={`${row}-${col}`}>
                  <rect x={x} y={y} width="120" height="128" fill={lit ? u("warm") : u("glass")} />
                  <rect x={x} y={y} width="120" height="128" fill={u("sheen")} />
                  {tilted && <polygon points={`${x + 6},${y + 6} ${x + 114},${y + 6} ${x + 104},${y + 40} ${x + 16},${y + 40}`} fill="#000" opacity="0.25" />}
                  <rect x={x} y={y} width="120" height="128" fill="none" stroke={p.frame} strokeWidth="6" />
                  <rect x={x + 58} y={y} width="4" height="128" fill={p.frame} />
                </g>
              );
            }),
          )}
          <rect x="0" y="560" width="800" height="40" fill={p.ground} />
        </g>
      )}

      {variant === "bay" && (
        <g>
          <rect width="800" height="600" fill={p.wallLight} />
          <clipPath id={`${id}-bayclip`}>
            <polygon points="200,178 300,150 500,150 600,178 600,490 500,470 300,470 200,490" />
          </clipPath>
          <g clipPath={`url(#${id}-bayclip)`}>
            <rect x="190" y="140" width="420" height="360" fill={u("sky")} />
            <circle cx="420" cy="230" r="200" fill={u("glow")} />
            <path d={ridge(400, 16, 2.7, 190, 610, 500)} fill={p.wall} opacity="0.7" />
          </g>
          <polygon points="200,178 300,150 300,470 200,490" fill="#000" opacity="0.28" />
          <polygon points="500,150 600,178 600,490 500,470" fill="#000" opacity="0.18" />
          <polygon points="300,150 500,150 500,470 300,470" fill={u("sheen")} />
          <g fill="none" stroke={p.frame} strokeWidth="8">
            <polygon points="200,178 300,150 300,470 200,490" />
            <polygon points="300,150 500,150 500,470 300,470" />
            <polygon points="500,150 600,178 600,490 500,470" />
          </g>
          <rect x="397" y="150" width="6" height="320" fill={p.frame} />
          <line x1="300" y1="224" x2="500" y2="224" stroke={p.frame} strokeWidth="5" />
          <line x1="200" y1="250" x2="300" y2="226" stroke={p.frame} strokeWidth="5" />
          <line x1="500" y1="226" x2="600" y2="250" stroke={p.frame} strokeWidth="5" />
          <polygon points="180,172 300,132 500,132 620,172 600,182 500,150 300,150 200,182" fill={p.frame} />
          <polygon points="200,490 300,470 500,470 600,490 600,540 200,540" fill={p.wall} />
          <polygon points="200,540 600,540 760,600 40,600" fill={u("spill")} />
        </g>
      )}

      {variant === "picture" && (
        <g>
          <rect width="800" height="600" fill={p.wallLight} />
          <rect x="90" y="90" width="620" height="350" fill={u("sky")} />
          <circle cx="560" cy="210" r="210" fill={u("glow")} />
          <path d={ridge(300, 36, 0.3, 90, 710, 440)} fill={p.wall} opacity="0.45" />
          <path d={ridge(340, 26, 2.4, 90, 710, 440)} fill={p.wall} opacity="0.7" />
          <path d={ridge(385, 14, 5.1, 90, 710, 440)} fill={p.ground} opacity="0.95" />
          <rect x="90" y="410" width="620" height="30" fill={p.glassBottom} opacity="0.25" />
          <rect x="90" y="90" width="620" height="350" fill={u("sheen")} />
          <rect x="90" y="90" width="620" height="350" fill="none" stroke={p.frame} strokeWidth="8" />
          <rect x="60" y="440" width="680" height="14" fill={p.frame} />
          <polygon points="96,454 704,454 800,600 0,600" fill={u("spill")} />
          <rect x="120" y="500" width="220" height="30" rx="6" fill={p.frame} opacity="0.85" />
        </g>
      )}
    </svg>
  );
}
