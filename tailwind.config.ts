import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        charcoal: {
          950: "#0b0c0d",
          900: "#121315",
          800: "#1b1d20",
          700: "#26292d",
          600: "#34383d",
        },
        slate: {
          50: "#f7f8f8",
          100: "#eef0f1",
          200: "#dde1e3",
          300: "#c2c8cc",
          400: "#9aa2a8",
          500: "#727b82",
          600: "#565f66",
          700: "#414951",
          800: "#2d3339",
          900: "#1c2126",
        },
        cream: {
          50: "#fdfcfa",
          100: "#faf8f4",
          200: "#f3efe6",
          300: "#e9e2d3",
        },
        forest: {
          400: "#4f7a68",
          500: "#3c6152",
          600: "#2f4d41",
          700: "#243b32",
        },
        sapphire: {
          400: "#5b83b0",
          500: "#3f6690",
          600: "#325273",
        },
        bronze: {
          300: "#d8b48a",
          400: "#c79a68",
          500: "#ab7f4f",
          600: "#8a663f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-xl": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["2.125rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 18, 20, 0.06), 0 12px 32px -12px rgba(15, 18, 20, 0.10)",
        lift: "0 8px 24px -8px rgba(15, 18, 20, 0.14), 0 24px 60px -20px rgba(15, 18, 20, 0.18)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -15px rgba(60, 97, 82, 0.35)",
        "inner-glass": "inset 0 1px 0 0 rgba(255,255,255,0.14)",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(63,102,144,0.16), transparent 60%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(11,12,13,0.15) 0%, rgba(11,12,13,0.55) 55%, rgba(11,12,13,0.92) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1s ease forwards",
        marquee: "marquee 32s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
