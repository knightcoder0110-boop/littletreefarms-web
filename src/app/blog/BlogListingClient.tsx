"use client";

import Link from "next/link";
import Image from "next/image";
import { getAllPostsMeta, getCategoryLabel } from "@/lib/blog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BlogListingClient() {
  const posts = getAllPostsMeta();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative bg-forest-dark pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,169,110,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-cream/60 text-sm">
              <li>
                <Link href="/" className="hover:text-cream transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-cream">Blog</li>
            </ol>
          </nav>

          <div className="max-w-[800px]">
            <span className="kicker-label text-gold mb-4 inline-block">
              Insights & Guides
            </span>
            <h1 className="text-cream mb-6">
              Timber Investment <em className="text-gold italic">Blog</em>
            </h1>
            <p className="text-intro text-cream/80 max-w-[55ch]">
              Practical articles on land use, timber investment, and making
              unused property work for you. No jargon, no hype — just honest
              information from people who grow trees for a living.
            </p>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-20 pattern-dots">
        <div ref={ref} className="h-0" />
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.heroImage.src}
                    alt={post.heroImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />
                  <span className="absolute bottom-3 left-4 kicker-label text-cream text-xs bg-forest/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {getCategoryLabel(post.category)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-forest-dark text-lg font-heading font-bold leading-snug mb-3 group-hover:text-forest-light transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-forest-dark/60 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-forest-dark/40">
                    <span>{post.readTime} read</span>
                    <time dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-[800px] mx-auto text-center bg-forest-dark rounded-2xl py-14 px-8 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(200,169,110,0.06) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-cream text-2xl mb-4 sm:text-3xl">
              Ready to Put Your Land to Work?
            </h2>
            <p className="text-cream/70 mb-8 max-w-[45ch] mx-auto">
              See what your property could produce with our free investment
              calculator — no signup required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/calculator"
                className="font-semibold text-forest-dark bg-gold hover:bg-gold-light px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Try the Calculator
              </Link>
              <Link
                href="/guide"
                className="font-semibold text-cream border border-cream/30 hover:border-cream/60 px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Free Planting Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
