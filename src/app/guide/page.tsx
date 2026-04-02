import type { Metadata } from "next";
import { businessInfo } from "@/lib/config/business";
import GuidePageClient from "./GuidePageClient";

/**
 * Guide Download Page - Lead Magnet
 * 
 * SEO Features:
 * - HowTo schema for the planting guide
 * - Offer schema for the free download
 * - Optimized for "black walnut planting guide" keywords
 * - Lead capture form with Brevo integration ready
 */

// Generate HowTo schema for the planting guide
const generateHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Black Walnut Planting Guide",
  description: "Step-by-step guide to planting black walnut trees for timber investment in Canada",
  image: `${businessInfo.url}/little-tree-farms-logo.png`,
  totalTime: "PT2H",
  supply: [
    { "@type": "HowToSupply", name: "Black walnut seedlings", quantity: "218 per acre" },
    { "@type": "HowToSupply", name: "Shovel or auger" },
    { "@type": "HowToSupply", name: "Measuring tape" },
    { "@type": "HowToSupply", name: "Mulch or straw" },
  ],
  tool: [
    { "@type": "HowToTool", name: "Measuring tape" },
    { "@type": "HowToTool", name: "Shovel" },
    { "@type": "HowToTool", name: "Wheelbarrow" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Site Selection",
      text: "Choose a site with full sun (6+ hours), well-drained soil, and protection from strong winds. Avoid frost pockets and areas under power lines.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Soil Preparation",
      text: "Clear the area of competing vegetation. Test soil pH (target 6.0-7.5). Add organic matter if needed. Mark rows 20 feet apart.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Spacing Layout",
      text: "Mark planting spots every 10 feet within rows. This creates 218 trees per acre. Use stakes or flags to mark each spot.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Digging Holes",
      text: "Dig holes twice the width of the root system and deep enough to accommodate roots without bending. Create a small mound at the bottom.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Planting",
      text: "Place seedling at the same depth it was growing in the nursery. Spread roots over the mound. Backfill with native soil, firming gently.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Watering & Mulching",
      text: "Water thoroughly after planting. Apply 2-3 inches of mulch around each tree, keeping it 2 inches away from the trunk.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Protection",
      text: "Install tree guards or fencing to protect from deer, rodents, and livestock. Check regularly for the first two years.",
    },
  ],
});

// Generate Offer schema for the download
const generateOfferSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Free Black Walnut Planting Guide",
  description: "Comprehensive PDF guide to planting black walnut trees for timber investment",
  price: "0",
  priceCurrency: "CAD",
  availability: "https://schema.org/InStock",
  url: `${businessInfo.url}/guide`,
  seller: {
    "@type": "Organization",
    name: businessInfo.name,
    url: businessInfo.url,
  },
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
      name: "Planting Guide",
      item: `${businessInfo.url}/guide`,
    },
  ],
});

export const metadata: Metadata = {
  title: "Free Black Walnut Planting Guide | Download PDF | Little Tree Farm",
  description: "Download our comprehensive Black Walnut Planting Guide PDF. Step-by-step instructions for planting 218 trees per acre, 10×20 ft spacing system, care tips for Canadian climate.",
  keywords: [
    "black walnut planting guide",
    "how to plant black walnut trees",
    "timber tree planting guide PDF",
    "black walnut spacing 10x20",
    "Juglans nigra planting instructions",
    "Canadian timber planting guide",
    ...businessInfo.keywords.primary,
  ],
  alternates: {
    canonical: `${businessInfo.url}/guide`,
  },
  openGraph: {
    title: "Free Black Walnut Planting Guide | Download Now",
    description: "Complete step-by-step guide to planting black walnut trees for timber investment. Download the free PDF.",
    url: `${businessInfo.url}/guide`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function GuidePage() {
  const howToSchema = generateHowToSchema();
  const offerSchema = generateOfferSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <GuidePageClient />
    </>
  );
}
