import { clientLogos } from "@/data/content";

export function LogoBand() {
  const items = [...clientLogos, ...clientLogos];
  return (
    <section aria-label="Ils nous font confiance" className="border-b border-charcoal-900/[0.06] bg-cream-50 py-10">
      <div className="container flex flex-col items-center gap-8 md:flex-row">
        <p className="shrink-0 text-sm text-slate-500 md:max-w-[180px]">Partenaire des architectes et promoteurs exigeants</p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee gap-14 motion-reduce:animate-none">
            {items.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= clientLogos.length}
                className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-slate-400"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
