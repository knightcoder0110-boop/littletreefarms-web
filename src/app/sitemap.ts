import type { MetadataRoute } from "next";
import { businessInfo } from "@/lib/config/business";
import { getAllPosts } from "@/lib/blog";

/**
 * Next.js App Router Sitemap
 * Auto-generates sitemap.xml for search engine discovery
 * Includes all pages with priorities and change frequencies
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessInfo.url;
  
  // Current date for lastModified
  const now = new Date().toISOString();

  return [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    
    // Core pages
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seedlings`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Regional pages
    {
      url: `${baseUrl}/nova-scotia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ontario`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Content pages
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Utility pages
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // Blog posts
    ...getAllPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.modifiedDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
