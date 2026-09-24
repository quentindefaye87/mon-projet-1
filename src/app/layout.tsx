import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Manrope } from "next/font/google";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { JsonLd, organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Menuiseries PVC & alu, vérandas et fermetures à Limoges (87)`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "menuiserie Limoges",
    "fenêtre PVC Haute-Vienne",
    "menuiserie aluminium Limoges",
    "véranda Limoges",
    "porte d'entrée Haute-Vienne",
    "volet roulant Limoges",
    "portail aluminium",
    "Aixe-sur-Vienne",
    "artisan RGE Qualibat",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cream-50 focus:px-4 focus:py-2 focus:text-charcoal-900 focus:shadow-lift"
        >
          Aller au contenu
        </a>
        <ScrollProgress />
        <JsonLd data={organizationSchema()} />
        <Header />
        <main id="contenu" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
