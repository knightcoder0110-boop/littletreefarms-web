import type { Metadata } from "next";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";
import ContactPageClient from "./ContactPageClient";

/**
 * Contact Page - Local SEO & NAP Consistency
 * 
 * SEO Features:
 * - ContactPage schema
 * - LocalBusiness/Nursery schema with complete NAP
 * - BreadcrumbList schema
 * - Hours, services, geo-coordinates
 * - Multiple contact methods for trust signals
 */

// Generate ContactPage schema
const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${businessInfo.name}`,
  description: `Contact ${businessInfo.name} in ${businessInfo.address.city}, ${businessInfo.address.state}. Phone: ${businessInfo.contact.phoneDisplay}. Email: ${businessInfo.contact.email}.`,
  url: `${businessInfo.url}/contact/`,
  mainEntity: {
    "@type": "Nursery",
    name: businessInfo.name,
    description: businessInfo.tagline,
    url: businessInfo.url,
    telephone: businessInfo.contact.phone,
    email: businessInfo.contact.email,
    priceRange: businessInfo.business.priceRange,
    currenciesAccepted: businessInfo.business.currenciesAccepted,
    paymentAccepted: businessInfo.business.paymentAccepted.join(", "),
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
      "@type": "Country",
      name: "Canada",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Black Walnut Seedlings",
      itemListElement: businessInfo.products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          price: product.price,
          priceCurrency: product.priceCurrency,
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.contact.phone,
      email: businessInfo.contact.email,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "CA",
    },
    sameAs: getSameAsLinks(),
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
      name: "Contact",
      item: `${businessInfo.url}/contact/`,
    },
  ],
});

export const metadata: Metadata = {
  title: `Contact ${businessInfo.name} | ${businessInfo.address.city}, ${businessInfo.address.state} | ${businessInfo.contact.phoneDisplay}`,
  description: `Contact ${businessInfo.name} in ${businessInfo.address.city}, ${businessInfo.address.state}. Call ${businessInfo.contact.phoneDisplay} or email ${businessInfo.contact.email}. Open Monday-Friday 9-5, Saturday 10-4.`,
  keywords: [
    "contact Little Tree Farm",
    "black walnut nursery Nova Scotia",
    "tree farm contact",
    `${businessInfo.address.city} nursery`,
    "buy black walnut seedlings Canada",
    "timber investment contact",
    ...businessInfo.keywords.primary,
  ],
  alternates: {
    canonical: `${businessInfo.url}/contact/`,
  },
  openGraph: {
    title: `Contact ${businessInfo.name} | ${businessInfo.address.city}, ${businessInfo.address.state}`,
    description: `Call ${businessInfo.contact.phoneDisplay}. Email ${businessInfo.contact.email}. ${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.state}.`,
    url: `${businessInfo.url}/contact/`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function ContactPage() {
  const contactPageSchema = generateContactPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
