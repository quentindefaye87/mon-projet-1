"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const ALL = "Tous";

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap items-center gap-2">
      <span className="mr-2 text-sm text-slate-500">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(o)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm transition-all duration-300",
            value === o
              ? "border-charcoal-900 bg-charcoal-900 text-cream-50"
              : "border-charcoal-900/15 text-slate-600 hover:border-charcoal-900/40 hover:text-charcoal-900",
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function PortfolioGrid() {
  const [type, setType] = useState(ALL);
  const [windowType, setWindowType] = useState(ALL);

  const propertyTypes = useMemo(() => [ALL, ...new Set(projects.map((p) => p.propertyType))], []);
  const windowTypes = useMemo(() => [ALL, ...new Set(projects.map((p) => p.windowType))], []);

  const filtered = projects.filter(
    (p) => (type === ALL || p.propertyType === type) && (windowType === ALL || p.windowType === windowType),
  );

  return (
    <div>
      <div className="space-y-4 border-b border-charcoal-900/10 pb-8">
        <FilterGroup label="Type de bien" options={propertyTypes} value={type} onChange={setType} />
        <FilterGroup label="Menuiserie" options={windowTypes} value={windowType} onChange={setWindowType} />
      </div>
      <p className="sr-only" role="status">
        {filtered.length} réalisation{filtered.length > 1 ? "s" : ""} affichée{filtered.length > 1 ? "s" : ""}
      </p>
      <motion.ul layout className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.li
              layout
              key={p.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {filtered.length === 0 && (
        <p className="mt-12 text-center text-slate-500">Aucune réalisation ne correspond à ces critères pour le moment.</p>
      )}
    </div>
  );
}
