"use client";

import Link from "next/link";
import type { ContentSection } from "@/lib/blog";

/**
 * ContentRenderer — Renders blog post content sections with proper
 * heading hierarchy, prose styling, and accessibility attributes.
 * Uses dangerouslySetInnerHTML since all content is statically authored.
 */

interface ContentRendererProps {
  sections: ContentSection[];
}

export function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <div className="blog-content space-y-8">
      {sections.map((section, i) => (
        <section key={i} aria-labelledby={section.headingId}>
          {section.heading && section.headingLevel === 2 && (
            <h2
              id={section.headingId}
              className="text-forest-dark mb-4 scroll-mt-24"
            >
              {section.heading}
            </h2>
          )}
          {section.heading && section.headingLevel === 3 && (
            <h3
              id={section.headingId}
              className="text-forest-dark mb-3 scroll-mt-24"
            >
              {section.heading}
            </h3>
          )}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: section.body }}
          />
        </section>
      ))}
    </div>
  );
}

/**
 * BlogCTA — Mid-article and end-of-article call-to-action banner.
 * Matches the forest/gold design system.
 */

interface BlogCTAProps {
  variant?: "inline" | "banner";
}

export function BlogCTA({ variant = "banner" }: BlogCTAProps) {
  if (variant === "inline") {
    return (
      <aside className="my-10 py-6 px-6 bg-parchment rounded-2xl border border-gold/20">
        <p className="font-body text-forest-dark text-base leading-relaxed mb-3">
          <strong>Curious what your land could produce?</strong>
        </p>
        <p className="text-sm text-forest-dark/70 mb-4 leading-relaxed">
          Our calculator shows potential returns based on your acreage — no
          signup required.
        </p>
        <Link
          href="/calculator"
          className="inline-block text-sm font-semibold text-cream bg-forest hover:bg-forest-light px-5 py-2.5 rounded-lg transition-colors"
        >
          Try the Investment Calculator →
        </Link>
      </aside>
    );
  }

  return (
    <aside className="my-14 py-10 px-8 bg-forest-dark rounded-2xl text-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(200,169,110,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10">
        <h3 className="text-cream text-2xl mb-3 font-heading font-bold">
          See How Tree-Based Land Investing Works
        </h3>
        <p className="text-cream/70 text-base mb-6 max-w-[45ch] mx-auto leading-relaxed">
          From seedling prices to harvest projections — everything you need to
          know about putting your land to work.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/seedlings"
            className="inline-block font-semibold text-forest-dark bg-gold hover:bg-gold-light px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Browse Seedlings
          </Link>
          <Link
            href="/calculator"
            className="inline-block font-semibold text-cream border border-cream/30 hover:border-cream/60 px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Calculate Returns
          </Link>
        </div>
      </div>
    </aside>
  );
}

/**
 * TableOfContents — Collects h2 headings from content sections
 * and renders a sticky sidebar nav for longer posts.
 */

interface TableOfContentsProps {
  sections: ContentSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const headings = sections.filter(
    (s) => s.heading && s.headingLevel === 2 && s.headingId
  );

  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:block sticky top-28 self-start w-56 shrink-0"
    >
      <p className="kicker-label text-forest/60 mb-3">In this article</p>
      <ul className="space-y-2 border-l-2 border-gold/20 pl-4">
        {headings.map((h) => (
          <li key={h.headingId}>
            <a
              href={`#${h.headingId}`}
              className="text-sm text-forest-dark/60 hover:text-forest-dark transition-colors leading-snug block"
            >
              {h.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * RelatedPosts — Shows 2-3 related post cards at the bottom.
 */

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: "short" | "medium" | "long";
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  const categoryLabel = (c: string) =>
    c === "short" ? "Quick Read" : c === "medium" ? "Article" : "Deep Dive";

  return (
    <section className="mt-16 pt-12 border-t border-forest/10">
      <h2 className="text-forest-dark mb-8 text-center">Keep Reading</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="kicker-label text-gold text-xs">
              {categoryLabel(post.category)}
            </span>
            <h3 className="text-forest-dark text-lg mt-2 mb-3 group-hover:text-forest-light transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-forest-dark/60 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <span className="inline-block mt-4 text-sm text-gold font-semibold">
              {post.readTime} read →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
