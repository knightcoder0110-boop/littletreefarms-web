import type { Metadata } from "next";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";
import AboutPageClient from "./AboutPageClient";

/**
 * About Page - E-E-A-T Signals
 * 
 * SEO Features:
 * - AboutPage schema
 * - Person schema for team members
 * - Organization schema
 * - Trust signals for YMYL (timber investment)
 * - Real photos, real address, real credentials
 */

// Generate AboutPage schema
const generateAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${businessInfo.name}`,
  description: businessInfo.tagline,
  url: `${businessInfo.url}/about/`,
  mainEntity: {
    "@type": "Organization",
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    description: businessInfo.tagline,
    url: businessInfo.url,
    logo: `${businessInfo.url}/little-tree-farms-logo.png`,
    foundingDate: businessInfo.business.founded,
    numberOfEmployees: businessInfo.business.employees,
    sameAs: getSameAsLinks(),
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.contact.phone,
      email: businessInfo.contact.email,
      contactType: "customer service",
      areaServed: "CA",
    },
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
      name: "About",
      item: `${businessInfo.url}/about/`,
    },
  ],
});

export const metadata: Metadata = {
  title: `About ${businessInfo.name} | Timber Investment Specialists | Nova Scotia`,
  description: `Learn about ${businessInfo.name} in ${businessInfo.address.city}, ${businessInfo.address.state}. ${businessInfo.business.founded}-present. Specializing in black walnut seedlings and timber investment guidance for Canadian landowners.`,
  keywords: [
    "Little Tree Farm Nova Scotia",
    "black walnut nursery Canada",
    "timber investment company",
    "about Little Tree Farm",
    "Wentzell Lake nursery",
    "Canadian tree farm",
    ...businessInfo.keywords.primary,
  ],
  alternates: {
    canonical: `${businessInfo.url}/about/`,
  },
  openGraph: {
    title: `About ${businessInfo.name} | Timber Investment Specialists`,
    description: `${businessInfo.business.founded}-present. ${businessInfo.address.city}, ${businessInfo.address.state}. Black walnut seedlings and timber investment guidance.`,
    url: `${businessInfo.url}/about/`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function AboutPage() {
  const aboutPageSchema = generateAboutPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutPageClient />
    </>
  );
}
