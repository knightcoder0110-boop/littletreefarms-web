import type { Metadata } from "next";
import { businessInfo } from "@/lib/config/business";
import BlogListingClient from "./BlogListingClient";

export const metadata: Metadata = {
  title: `Timber Investment Blog | ${businessInfo.name}`,
  description:
    "Practical articles on land use, timber investment, and making unused property work for you. Written by the team at Little Tree Farm in Nova Scotia.",
  alternates: {
    canonical: `${businessInfo.url}/blog`,
  },
  openGraph: {
    title: `Timber Investment Blog | ${businessInfo.name}`,
    description:
      "Practical articles on land use, timber investment, and making unused property work for you.",
    url: `${businessInfo.url}/blog`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

// BreadcrumbList + Blog CollectionPage schema
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Timber Investment Blog",
  description:
    "Practical articles on land use, timber investment, and making unused property work for you.",
  url: `${businessInfo.url}/blog`,
  isPartOf: {
    "@type": "WebSite",
    name: businessInfo.name,
    url: businessInfo.url,
  },
  breadcrumb: {
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
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogListingClient />
    </>
  );
}
