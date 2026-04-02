import type { Metadata } from "next";
import { businessInfo } from "@/lib/config/business";
import CalculatorClient from "./CalculatorClient";

/**
 * Calculator Page - Interactive ROI Tool
 * 
 * SEO Features:
 * - SoftwareApplication schema for the calculator tool
 * - FAQPage schema for common questions
 * - Optimized for "timber investment calculator" keywords
 * - Lead capture via email form
 */

// Generate SoftwareApplication schema for the calculator
const generateSoftwareSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Black Walnut Timber Investment Calculator",
  description: "Calculate potential returns on black walnut timber investment in Canada. Estimate costs, ROI, and harvest values based on acreage.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CAD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "156",
  },
});

// Generate FAQ schema for calculator page
const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is black walnut timber investment ROI calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Black walnut timber ROI is calculated by comparing initial investment (seedling costs) to projected harvest value. Initial investment is ${businessInfo.keyFacts.treesPerAcre} trees per acre at $${businessInfo.keyFacts.seedlingPrice}/tree = $${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre. Conservative harvest value is $${businessInfo.keyFacts.conservativeReturnPerAcre.toLocaleString()}/acre, mid-range is $${businessInfo.keyFacts.midRangeReturnPerAcre.toLocaleString()}/acre, and premium veneer quality can reach $${businessInfo.keyFacts.premiumReturnPerAcre.toLocaleString()}/acre over ${businessInfo.keyFacts.harvestTimeline}.`,
      },
    },
    {
      "@type": "Question",
      name: "What factors affect black walnut timber returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key factors include: site quality (soil depth, drainage, sun exposure), spacing and thinning management (10×20 ft system), tree genetics (timber-grade vs ornamental stock), time to harvest (35-50 years), market conditions at harvest, and veneer quality achieved (clear bole length, grain quality).", 
      },
    },
    {
      "@type": "Question",
      name: "Is timber investment better than stocks or real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timber investment offers unique advantages: not correlated with stock market volatility, inflation-resistant (hardwood appreciates with inflation), potentially tax-efficient, and a tangible hard asset. However, it's highly illiquid (35-50 year timeline) and returns aren't guaranteed. It works best as portfolio diversification, not a replacement for traditional investments.",
      },
    },
  ],
});

export const metadata: Metadata = {
  title: `Timber Investment Calculator | Black Walnut ROI Tool | ${businessInfo.name}`,
  description: `Free timber investment calculator. Calculate ROI on black walnut planting. $${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre investment, potential returns $${businessInfo.keyFacts.conservativeReturnPerAcre.toLocaleString()}-$${businessInfo.keyFacts.premiumReturnPerAcre.toLocaleString()}/acre. Plan your generational wealth.`,
  keywords: [
    "timber investment calculator",
    "black walnut ROI calculator",
    "tree planting ROI tool",
    "timber returns calculator Canada",
    "black walnut investment returns",
    "acreage profit calculator",
    "generational wealth calculator",
    ...businessInfo.keywords.primary,
  ],
  alternates: {
    canonical: `${businessInfo.url}/calculator/`,
  },
  openGraph: {
    title: "Timber Investment Calculator | Calculate Your Returns",
    description: `Calculate black walnut timber investment ROI. $${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre input, potential $${businessInfo.keyFacts.conservativeReturnPerAcre.toLocaleString()}-$${businessInfo.keyFacts.premiumReturnPerAcre.toLocaleString()}/acre returns.`,
    url: `${businessInfo.url}/calculator/`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function CalculatorPage() {
  const softwareSchema = generateSoftwareSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <CalculatorClient />
    </>
  );
}
