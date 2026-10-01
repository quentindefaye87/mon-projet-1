import { expertise } from "@/data/content";

function Row({ items, reverse, big }: { items: string[]; reverse?: boolean; big?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <ul
        className={
          (reverse ? "animate-marquee-reverse" : "animate-marquee") +
          " flex w-max items-center motion-reduce:animate-none " +
          (big ? "gap-10 py-2" : "gap-8 py-1")
        }
      >
        {doubled.map((name, i) => (
          <li key={`${name}-${i}`} aria-hidden={i >= items.length} className="flex items-center gap-10 whitespace-nowrap">
            <span
              className={
                big
                  ? "font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                  : "text-sm font-medium uppercase tracking-[0.2em] text-white/75"
              }
            >
              {name}
            </span>
            <svg viewBox="0 0 20 24" className={big ? "h-7 w-6" : "h-4 w-3"} aria-hidden>
              <path d="M12 3 V21 M3 6 L12 3 M4 18 L12 21" stroke="#ffffff" strokeWidth="2.2" fill="none" />
              <path d="M12 5 H18 V19 H9" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" fill="none" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExpertiseBand() {
  return (
    <section aria-label="Nos savoir-faire" className="relative overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 py-9">
      <h2 className="sr-only">Nos savoir-faire</h2>
      <Row items={expertise} big />
      <p className="container mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
        Limoges · Aixe-sur-Vienne · Haute-Vienne
      </p>
    </section>
  );
}
