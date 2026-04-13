"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogPost, BlogPostMeta } from "@/lib/blog";
import { getCategoryLabel } from "@/lib/blog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ContentRenderer,
  BlogCTA,
  TableOfContents,
  RelatedPosts,
} from "@/components/blog/BlogComponents";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPostMeta[];
}

export default function BlogPostClient({
  post,
  relatedPosts,
}: BlogPostClientProps) {
  const { ref, isVisible } = useScrollAnimation();

  // Insert CTA roughly in the middle of content
  const midpoint = Math.floor(post.content.length / 2);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative bg-forest-dark pt-32 pb-16 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src={post.heroImage.src}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/80 to-forest-dark" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-cream/60 text-sm flex-wrap">
              <li>
                <Link href="/" className="hover:text-cream transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-cream transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-cream truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-[720px]">
            {/* Meta */}
            <span className="kicker-label text-gold mb-4 inline-block">
              {getCategoryLabel(post.category)}
            </span>

            <h1 className="text-cream mb-6 text-4xl sm:text-5xl leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-cream/60 text-sm">
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} read</span>
              <span aria-hidden="true">·</span>
              <span>{post.wordCount.toLocaleString()} words</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 px-6">
        {/* Scroll animation sentinel */}
        <div ref={ref} className="h-0" />
        <div
          className={`max-w-[1200px] mx-auto flex gap-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main content */}
          <div className="max-w-[720px] flex-1 min-w-0">
            {/* First half of content */}
            <ContentRenderer sections={post.content.slice(0, midpoint)} />

            {/* Mid-article CTA */}
            <BlogCTA variant="inline" />

            {/* Second half of content */}
            <ContentRenderer sections={post.content.slice(midpoint)} />

            {/* End CTA */}
            <BlogCTA variant="banner" />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-10 pt-8 border-t border-forest/10">
                <p className="text-sm text-forest-dark/50 mb-3">
                  Topics covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-forest-dark/60 bg-parchment px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author bio */}
            <div className="mt-10 pt-8 border-t border-forest/10 flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-forest-dark flex items-center justify-center">
                <span className="text-cream text-lg font-heading font-bold">
                  LT
                </span>
              </div>
              <div>
                <p className="font-heading font-bold text-forest-dark text-lg">
                  Little Tree Farm Team
                </p>
                <p className="text-sm text-forest-dark/60 leading-relaxed mt-1">
                  Nova Scotia nursery operators helping Canadian landowners
                  transform unused land into generational timber wealth. We grow
                  and ship premium black walnut seedlings across Canada.
                </p>
              </div>
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />
          </div>

          {/* Sidebar TOC */}
          <TableOfContents sections={post.content} />
        </div>
      </article>
    </main>
  );
}
