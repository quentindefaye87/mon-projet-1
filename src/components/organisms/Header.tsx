"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { ButtonLink } from "@/components/atoms/Button";
import { mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        solid
          ? "border-b border-charcoal-900/[0.06] bg-cream-50/85 py-3 shadow-soft backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between gap-6">
        <Logo light={!solid} className="relative z-50" />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                    solid ? "text-slate-600 hover:text-charcoal-900" : "text-cream-100/80 hover:text-cream-50",
                    isActive(item.href) && (solid ? "text-charcoal-900" : "text-cream-50"),
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span aria-hidden className="absolute inset-x-3.5 -bottom-0.5 h-px bg-bronze-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className={cn(
              "hidden items-center gap-2 px-3 text-sm font-medium transition-colors xl:inline-flex",
              solid ? "text-slate-600 hover:text-charcoal-900" : "text-cream-100/80 hover:text-cream-50",
            )}
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            {site.phoneDisplay}
          </a>
          <ButtonLink href="/devis" size="sm" variant={solid ? "primary" : "light"} className="hidden sm:inline-flex">
            Devis gratuit
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={cn(
              "relative z-50 inline-flex h-10 w-10 items-center justify-center rounded transition-colors lg:hidden",
              solid ? "text-charcoal-900 hover:bg-charcoal-900/5" : "text-cream-50 hover:bg-white/10",
            )}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-dark-section grain fixed inset-0 z-40 flex flex-col px-6 pb-10 pt-28 lg:hidden"
          >
            <nav aria-label="Navigation mobile" className="relative z-10 flex-1">
              <ul className="space-y-1">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="block border-b border-white/10 py-4 font-display text-3xl font-medium text-cream-50"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="relative z-10 space-y-3">
              <ButtonLink href="/devis" size="lg" className="w-full">
                Demander un devis gratuit
              </ButtonLink>
              <ButtonLink href={`tel:${site.phone.replace(/\s/g, "")}`} external variant="ghost-light" size="lg" className="w-full">
                <Phone className="h-4 w-4" aria-hidden /> {site.phoneDisplay}
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
