"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-charcoal-900/10 border-y border-charcoal-900/10", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-medium text-charcoal-900 transition-colors hover:text-forest-600"
              >
                {item.question}
                <Plus
                  className={cn("h-5 w-5 shrink-0 text-slate-500 transition-transform duration-500 ease-premium", isOpen && "rotate-45")}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-premium",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" aria-hidden={!isOpen}>
                <p className="max-w-3xl pb-6 leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
