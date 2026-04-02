import type { Metadata } from "next";
import { businessInfo } from "@/lib/config/business";
import SeedlingsPageClient from "./SeedlingsPageClient";

/**
 * Seedlings Product Page
 * 
 * SEO Features:
 * - Product schema for Black Walnut Seedlings
 * - AggregateRating schema
 * - Offer schema with pricing
 * - FAQ schema for product questions
 * - Optimized for "buy black walnut seedlings Canada" keywords
 */

// Generate Product schema
const generateProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Black Walnut Seedlings (Juglans nigra)",
  image: `${businessInfo.url}/little-tree-farms-logo.png`,
  description: "Premium A-grade bare root black walnut seedlings for timber investment. Zone 4-8 hardy. 218 trees per acre at 10×20 ft spacing.",
  brand: {
    "@type": "Brand",
    name: businessInfo.name,
  },
  sku: "BW-SEEDLING-A",
  offers: {
    "@type": "Offer",
    url: `${businessInfo.url}/seedlings`,
    price: "8.00",
    priceCurrency: "CAD",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Product",
      name: "Black Walnut Seedlings",
    },
    seller: {
      "@type": "Organization",
      name: businessInfo.name,
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
});

// Generate FAQ schema for product
const generateProductFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do black walnut seedlings cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Black walnut seedlings cost $${businessInfo.keyFacts.seedlingPrice} CAD each. For an acre at 10×20 ft spacing, you need ${businessInfo.keyFacts.treesPerAcre} seedlings, totaling $${businessInfo.keyFacts.costPerAcre.toLocaleString()} per acre. Discounts available for orders over 500 seedlings.`,
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to plant black walnut seedlings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best times to plant bare root black walnut seedlings are early spring (March-May) and fall (September-November) when the trees are dormant. Avoid planting during hot summer months or when ground is frozen.",
      },
    },
    {
      "@type": "Question",
      name: "How are the seedlings shipped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${businessInfo.name} ships bare root seedlings ${businessInfo.keyFacts.shipping}. Seedlings are carefully packed in moist material to prevent root drying. Orders should be planted within 48 hours of arrival for best results.`,
      },
    },
  ],
});

// Generate BreadcrumbList schema
const generateBreadcrumbSchema = () => ({
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
      name: "Seedlings",
      item: `${businessInfo.url}/seedlings`,
    },
  ],
});

export const metadata: Metadata = {
  title: `Buy Black Walnut Seedlings | $${businessInfo.keyFacts.seedlingPrice}/tree | ${businessInfo.keyFacts.treesPerAcre} Trees Per Acre | Little Tree Farm`,
  description: `Premium A-grade black walnut seedlings for timber investment. $${businessInfo.keyFacts.seedlingPrice}/tree, ${businessInfo.keyFacts.treesPerAcre} per acre. Bare root, Zone 4-8 hardy, shipped ${businessInfo.keyFacts.shipping}. Order now for spring or fall planting.`,
  keywords: [
    "buy black walnut seedlings",
    "black walnut trees for sale Canada",
    "Juglans nigra seedlings",
    "timber tree seedlings",
    "bare root walnut trees",
    "zone 5b walnut seedlings",
    ...businessInfo.keywords.primary,
  ],
  alternates: {
    canonical: `${businessInfo.url}/seedlings`,
  },
  openGraph: {
    title: `Black Walnut Seedlings - $${businessInfo.keyFacts.seedlingPrice}/tree | Timber Grade`,
    description: `Premium timber-grade black walnut seedlings. $${businessInfo.keyFacts.seedlingPrice} each, ${businessInfo.keyFacts.treesPerAcre} per acre. Shipped ${businessInfo.keyFacts.shipping}.`,
    url: `${businessInfo.url}/seedlings`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function SeedlingsPage() {
  const productSchema = generateProductSchema();
  const faqSchema = generateProductFAQSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <SeedlingsPageClient />
    </>
  );
}
