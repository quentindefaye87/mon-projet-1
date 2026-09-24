import Link from "next/link";
import { ArtFrame } from "@/components/molecules/ArtFrame";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col">
      <ArtFrame visual={post.cover} hoverZoom decorative className="aspect-[16/10] shadow-soft" />
      <div className="mt-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-slate-500">
        <span className="text-bronze-600">{post.category}</span>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-charcoal-900">
        <Link href={`/journal/${post.slug}`} className="link-underline after:absolute after:inset-0">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600">{post.excerpt}</p>
    </article>
  );
}
