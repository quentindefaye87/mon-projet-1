import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { JsonLd, organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Fenêtres et baies vitrées sur mesure haut de gamme`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "fenêtres sur mesure",
    "baie coulissante",
    "menuiserie aluminium",
    "fenêtre bois-alu",
    "fenêtre oscillo-battante",
    "rénovation fenêtres",
    "menuisier Lyon",
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
  themeColor: "#0b0c0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cream-50 focus:px-4 focus:py-2 focus:text-charcoal-900 focus:shadow-lift"
        >
          Aller au contenu
        </a>
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
