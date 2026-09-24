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
        // Anthracite SCAL (#2b2b2b / #4d4d4d), volontairement éclairci
        charcoal: {
          950: "#1f1f21",
          900: "#27272a",
          800: "#313134",
          700: "#3c3c3f",
          600: "#4d4d4d",
        },
        slate: {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#dededf",
          300: "#c2c2c2",
          400: "#9a9a9c",
          500: "#737375",
          600: "#59595b",
          700: "#4d4d4d",
          800: "#363637",
          900: "#232324",
        },
        cream: {
          50: "#fcfbfa",
          100: "#f7f5f2",
          200: "#efebe6",
          300: "#e3ddd5",
        },
        // Rouge SCAL (logo et site historique : #b93538 / #a52e32 / #8c1a1c)
        brand: {
          50: "#fbefef",
          100: "#f5d9da",
          200: "#ebb4b6",
          300: "#dc6a6d",
          400: "#cc5357",
          500: "#b93538",
          600: "#a52e32",
          700: "#8c1a1c",
          800: "#6d1416",
          900: "#4a0e10",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
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
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -15px rgba(185, 53, 56, 0.35)",
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
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(185,53,56,0.16), transparent 60%)",
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
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1s ease forwards",
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
