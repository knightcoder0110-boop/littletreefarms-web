import type { Metadata } from "next";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";
import OntarioPageClient from "./OntarioPageClient";

/**
 * Ontario Provincial Landing Page
 * 
 * SEO Features:
 * - Localized content for Ontario
 * - Zone 4b/5a/5b/6a specific growing information
 * - LocalBusiness schema with province focus
 * - Major Ontario regions served
 * - Shipping information for Ontario
 * - Unique content (not duplicate)
 */

// Generate LocalBusiness schema for Ontario
const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Nursery",
  name: `${businessInfo.name} - Ontario`,
  description: `Black walnut timber investment nursery shipping to Ontario. Zones 4b-6a. Serving Toronto, Ottawa, Southwestern Ontario, and across the province.`,
  url: `${businessInfo.url}/ontario/`,
  telephone: businessInfo.contact.phone,
  email: businessInfo.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.state,
    postalCode: businessInfo.address.postalCode,
    addressCountry: businessInfo.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessInfo.location.latitude,
    longitude: businessInfo.location.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  areaServed: {
    "@type": "State",
    name: "Ontario",
    containedIn: {
      "@type": "Country",
      name: "Canada",
    },
  },
  sameAs: getSameAsLinks(),
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
      name: "Ontario",
      item: `${businessInfo.url}/ontario/`,
    },
  ],
});

export const metadata: Metadata = {
  title: `Black Walnut Timber Investment Ontario | Zones 4b-6a | ${businessInfo.name}`,
  description: `Black walnut timber investment in Ontario. Zones 4b-6a. $${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre investment. Serving Toronto, Ottawa, Hamilton, London, and across Ontario. Canada-wide shipping.`,
  keywords: [
    "black walnut Ontario",
    "timber investment Ontario",
    "tree planting Toronto",
    "Ontario tree nursery",
    "zone 5b trees Ontario",
    "Southwestern Ontario timber",
    "black walnut seedlings Ottawa",
    "Eastern Ontario trees",
    ...businessInfo.keywords.primary,
  ],
  alternates: {
    canonical: `${businessInfo.url}/ontario/`,
  },
  openGraph: {
    title: "Black Walnut Timber Investment in Ontario | Zones 4b-6a",
    description: `Timber investment for Ontario&apos;s climate. Zones 4b-6a. $${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre. Serving Toronto, Ottawa, and all of Ontario.`,
    url: `${businessInfo.url}/ontario/`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function OntarioPage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <OntarioPageClient />
    </>
  );
}
