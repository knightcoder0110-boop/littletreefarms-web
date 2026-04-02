import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";
import "./globals.css";

const cormorantHeading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const loraBody = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.url),
  title: {
    default: "Black Walnut Timber Investment | Little Tree Farm Nova Scotia",
    template: "%s | Little Tree Farm Timber Investment",
  },
  description:
    "Turn unused land into generational wealth with black walnut timber. $1,744 per acre investment. 35-50 year timeline. Premium seedlings from Nova Scotia nursery. Canada-wide shipping.",
  keywords: [
    ...businessInfo.keywords.primary,
    ...businessInfo.keywords.secondary,
    ...businessInfo.keywords.local,
  ],
  authors: [{ name: businessInfo.name, url: businessInfo.mainUrl }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  alternates: {
    canonical: businessInfo.url,
    languages: {
      "en-CA": businessInfo.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: businessInfo.url,
    siteName: `${businessInfo.name} — Timber Investment`,
    title: "Black Walnut Timber Investment | Little Tree Farm Nova Scotia",
    description:
      "Turn unused land into generational wealth with black walnut timber. $1,744 per acre could become $25,000–$125,000+. Premium seedlings from Nova Scotia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Black walnut timber investment - Premium seedlings from Nova Scotia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Walnut Timber Investment | Little Tree Farm",
    description:
      "Turn unused land into generational wealth with black walnut timber. $1,744 per acre investment.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "investment",
  classification: "Timber Investment, Agriculture, Forestry, Alternative Investment",
};

// Generate Schema.org JSON-LD structured data
function generateSchemaMarkup() {
  const { address, contact, location, business } = businessInfo;
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    url: businessInfo.url,
    logo: `${businessInfo.url}/little-tree-farms-logo.png`,
    email: contact.email,
    telephone: contact.phone,
    sameAs: getSameAsLinks(),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "sales",
      availableLanguage: "English",
      areaServed: "CA",
    },
    description: businessInfo.tagline,
    foundingDate: business.founded,
    numberOfEmployees: business.employees,
  };

  // LocalBusiness Schema (Nursery specific)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Nursery",
    name: businessInfo.name,
    description: businessInfo.tagline,
    url: businessInfo.url,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
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
    priceRange: business.priceRange,
    paymentAccepted: business.paymentAccepted.join(", "),
    currenciesAccepted: business.currenciesAccepted,
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
          sku: product.sku,
          price: product.price,
          priceCurrency: product.priceCurrency,
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: businessInfo.name,
          },
        },
      })),
    },
    sameAs: getSameAsLinks(),
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessInfo.name,
    url: businessInfo.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${businessInfo.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      logo: {
        "@type": "ImageObject",
        url: `${businessInfo.url}/little-tree-farms-logo.png`,
      },
    },
  };

  return [organizationSchema, localBusinessSchema, websiteSchema];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = generateSchemaMarkup();

  return (
    <html 
      lang="en-CA" 
      className={`${cormorantHeading.variable} ${loraBody.variable}`}
      dir="ltr"
    >
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="en-CA" href={businessInfo.url} />
        <link rel="alternate" hrefLang="x-default" href={businessInfo.url} />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Schema.org JSON-LD */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content={`${businessInfo.address.countryCode}-${businessInfo.address.stateCode}`} />
        <meta name="geo.placename" content={businessInfo.address.city} />
        <meta name="geo.position" content={`${businessInfo.location.latitude};${businessInfo.location.longitude}`} />
        <meta name="ICBM" content={`${businessInfo.location.latitude}, ${businessInfo.location.longitude}`} />
      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
