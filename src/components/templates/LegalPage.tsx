import { PageHero } from "@/components/templates/PageHero";

export function LegalPage({
  title,
  path,
  sections,
}: {
  title: string;
  path: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero title={title} breadcrumbs={[{ label: title, href: path }]} />
      <section className="bg-cream-50 py-20">
        <div className="container max-w-3xl">
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-charcoal-900">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
