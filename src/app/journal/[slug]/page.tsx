import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/templates/PageHero";
import { PostCard } from "@/components/molecules/PostCard";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { getPost, posts } from "@/data/posts";
import { JsonLd, articleSchema, pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    ...pageMetadata({ title: post.title, description: post.excerpt, path: `/journal/${post.slug}` }),
    openGraph: { type: "article", publishedTime: post.date, authors: [post.author], title: post.title, description: post.excerpt },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Conseils", href: "/journal" },
          { label: post.title, href: `/journal/${post.slug}` },
        ]}
      >
        <p className="text-sm text-slate-400">
          {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime} de lecture
        </p>
      </PageHero>

      <article className="bg-cream-50 pb-24">
        <div className="container max-w-4xl">
          <ArtFrame visual={post.cover} className="-mt-10 aspect-[16/9] shadow-lift" />
          <div className="prose prose-lg mx-auto mt-16 max-w-2xl prose-headings:font-display prose-headings:font-semibold prose-headings:text-charcoal-900 prose-p:text-slate-700">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && <h2>{block.heading}</h2>}
                <p>{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <section aria-labelledby="more-posts" className="section bg-cream-100">
        <div className="container">
          <SectionHeading id="more-posts" eyebrow="Conseils" title="À lire aussi." />
          <ul className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
            {more.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
