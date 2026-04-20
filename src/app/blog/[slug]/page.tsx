import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { businessInfo } from "@/lib/config/business";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import BlogPostClient from "./BlogPostClient";

// Pre-generate all blog post pages at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.focusKeyphrase, ...post.secondaryKeywords],
    alternates: {
      canonical: `${businessInfo.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${businessInfo.url}/blog/${post.slug}`,
      siteName: businessInfo.name,
      locale: "en_CA",
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [businessInfo.name],
      images: [
        {
          url: post.heroImage.src,
          width: 1200,
          height: 630,
          alt: post.heroImage.alt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.heroImage.src,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    author: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.url,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.url,
      logo: {
        "@type": "ImageObject",
        url: `${businessInfo.url}/little-tree-farms-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${businessInfo.url}/blog/${post.slug}`,
    },
    wordCount: post.wordCount,
    keywords: [post.focusKeyphrase, ...post.secondaryKeywords].join(", "),
    articleSection: "Timber Investment",
    inLanguage: "en-CA",
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: businessInfo.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${businessInfo.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${businessInfo.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
