import type { Metadata } from "next";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";
import NovaScotiaPageClient from "./NovaScotiaPageClient";

/**
 * Nova Scotia Provincial Landing Page
 * 
 * SEO Features:
 * - Localized content for Nova Scotia
 * - Zone 5b/6a specific growing information
 * - LocalBusiness schema with province focus
 * - Geo-targeted keywords
 * - Unique content (not duplicate of main page)
 */

// Generate LocalBusiness schema for Nova Scotia
const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Nursery",
  name: `${businessInfo.name} - Nova Scotia`,
  description: `Black walnut timber investment nursery serving Nova Scotia. Zone 5b/6a hardiness. Located in ${businessInfo.address.city}. Seedlings shipped across ${businessInfo.address.state}.`,
  url: `${businessInfo.url}/nova-scotia/`,
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
    name: "Nova Scotia",
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
      name: "Nova Scotia",
      item: `${businessInfo.url}/nova-scotia/`,
    },
  ],
});

export const metadata: Metadata = {
  title: `Black Walnut Timber Investment Nova Scotia | Zone 5b/6a | ${businessInfo.name}`,
  description: `Black walnut timber investment in Nova Scotia. Zone 5b/6a hardiness, perfect for NS climate. $${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre investment. Serving Halifax, South Shore, Valley, and across NS.`,
  keywords: [
    "black walnut Nova Scotia",
    "timber investment Nova Scotia",
    "tree planting Halifax",
    "Nova Scotia tree nursery",
    "zone 5b trees Nova Scotia",
    "South Shore timber investment",
    "Annapolis Valley trees",
    "black walnut seedlings Halifax",
    ...businessInfo.keywords.primary,
  ],
  alternates: {
    canonical: `${businessInfo.url}/nova-scotia/`,
  },
  openGraph: {
    title: "Black Walnut Timber Investment in Nova Scotia | Zone 5b/6a",
    description: `Timber investment perfect for Nova Scotia climate. Zone 5b/6a. $${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre. Serving all of NS from ${businessInfo.address.city}.`,
    url: `${businessInfo.url}/nova-scotia/`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function NovaScotiaPage() {
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

      <NovaScotiaPageClient />
    </>
  );
}
