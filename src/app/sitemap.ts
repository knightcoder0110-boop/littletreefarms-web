import type { MetadataRoute } from "next";
import { businessInfo } from "@/lib/config/business";

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
    
    // Core landing pages
    {
      url: `${baseUrl}/the-investment`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/planting-system`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/returns-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    
    // Conversion pages
    {
      url: `${baseUrl}/guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seedlings`,
      lastModified: now,
      changeFrequency: "weekly", // Update frequently for inventory
      priority: 0.8,
    },
    {
      url: `${baseUrl}/growers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    
    // Content pages
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "weekly", // Update as questions are added
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
    {
      url: `${baseUrl}/your-land`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
