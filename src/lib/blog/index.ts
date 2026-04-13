/**
 * Blog System — Types, utilities, and post registry
 * All blog posts are statically authored content — no CMS, no dynamic loading
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface ContentSection {
  heading?: string;
  headingLevel?: 2 | 3;
  headingId?: string;
  body: string; // HTML string (safe — all content is statically authored)
}

export interface BlogPostMeta {
  slug: string;
  title: string;            // H1 on page
  metaTitle: string;        // <title> tag — 50-60 chars
  metaDescription: string;  // 150-160 chars
  focusKeyphrase: string;
  secondaryKeywords: string[];
  category: "short" | "medium" | "long";
  wordCount: number;
  readTime: string;
  publishDate: string;      // ISO date
  modifiedDate: string;     // ISO date
  excerpt: string;          // For listing cards
  heroImage: { src: string; alt: string };
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: ContentSection[];
}

// ─── Post Registry ──────────────────────────────────────────────────────────
// Lazy imports to keep bundle lean — only load full content when needed

import { post as unusedLandCanada } from "./posts/unused-land-canada";
import { post as ruralLandPay } from "./posts/rural-land-pay-for-itself";
import { post as biggestMistake } from "./posts/biggest-mistake-idle-property";
import { post as turnAcres } from "./posts/turn-acres-into-long-term-asset";
import { post as inheritedLand } from "./posts/inherited-land-what-to-do";
import { post as lowMaintenance } from "./posts/low-maintenance-farming-over-50";
import { post as increaseLandValue } from "./posts/increase-land-value-without-selling";
import { post as leavingLandEmpty } from "./posts/leaving-land-empty-costing-thousands";
import { post as bestUsesOldFarmland } from "./posts/best-uses-old-farmland-canada";
import { post as passiveIncome } from "./posts/land-passive-income-without-farming";

const allPosts: BlogPost[] = [
  unusedLandCanada,
  ruralLandPay,
  biggestMistake,
  turnAcres,
  inheritedLand,
  lowMaintenance,
  increaseLandValue,
  leavingLandEmpty,
  bestUsesOldFarmland,
  passiveIncome,
];

// ─── Public API ─────────────────────────────────────────────────────────────

/** All posts sorted by publish date (newest first) */
export function getAllPosts(): BlogPost[] {
  return [...allPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

/** All post metadata (no content) for listing pages */
export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}

/** Single post by slug */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

/** All slugs — used by generateStaticParams */
export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}

/** Related posts — same tags, excluding current */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPostMeta[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  const scored = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const overlap = p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, score: overlap };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(({ post: { content: _content, ...meta } }) => meta);
}

/** Category label for display */
export function getCategoryLabel(category: BlogPostMeta["category"]): string {
  const labels = { short: "Quick Read", medium: "Article", long: "Deep Dive" };
  return labels[category];
}
