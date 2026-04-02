import type { Metadata } from "next";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";
import Image from "next/image";

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

      <div className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="relative bg-emerald-900 py-24 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-900/80 to-emerald-900/90" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-emerald-300 font-medium tracking-wide uppercase text-sm">
                {businessInfo.location.region}
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                Black Walnut Timber Investment
                <span className="block mt-2">in Nova Scotia</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
                Nova Scotia&apos;s climate is ideal for black walnut timber investment. 
                Zone 5b/6a hardiness, established nursery in {businessInfo.address.city}, 
                seedlings shipped across the province.
              </p>
            </div>
          </div>
        </section>

        {/* Why Nova Scotia Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
                  Why Black Walnut Thrives in Nova Scotia
                </h2>
                <div className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    Nova Scotia&apos;s climate and soil conditions create the perfect environment 
                    for black walnut (Juglans nigra) timber plantations. With hardiness zones 
                    ranging from 5b to 6a across the province, black walnut trees establish 
                    quickly and grow vigorously in our Maritime conditions.
                  </p>
                  <p>
                    The well-drained, loamy soils found throughout the Annapolis Valley, 
                    South Shore, and Central Nova Scotia provide ideal growing conditions. 
                    Our coastal influence moderates temperature extremes, protecting young 
                    trees while providing the cold winter dormancy period black walnuts need 
                    for proper growth.
                  </p>
                  <p>
                    From the fertile farmlands of the Valley to the rolling fields of 
                    Colchester County and the South Shore, Nova Scotia landowners have 
                    countless opportunities to convert unused acreage into long-term timber wealth.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-4/3 rounded-lg bg-stone-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80&auto=format&fit=crop"
                    alt="Nova Scotia farmland ideal for black walnut timber planting"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
                  <p className="font-serif text-3xl font-medium">Zone 5b/6a</p>
                  <p className="text-sm text-emerald-100">Ideal for Black Walnut</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NS-Specific Benefits */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-stone-900 text-center sm:text-4xl">
              Nova Scotia Advantages
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium text-stone-900">Perfect Hardiness Zone</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Nova Scotia&apos;s Zone 5b/6a climate matches black walnut&apos;s ideal growing 
                  conditions. Winter lows of -15°C to -26°C provide necessary dormancy.
                </p>
              </div>

              <div className="rounded-lg bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium text-stone-900">Local Nursery</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Our nursery in {businessInfo.address.city} grows seedlings specifically 
                  adapted to Maritime conditions. No shipping stress from distant suppliers.
                </p>
              </div>

              <div className="rounded-lg bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium text-stone-900">Province-Wide Shipping</h3>
                <p className="mt-2 text-sm text-stone-600">
                  From Cape Breton to Yarmouth, we ship bare root seedlings across all of 
                  Nova Scotia. 1-3 day delivery throughout the province.
                </p>
              </div>

              <div className="rounded-lg bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium text-stone-900">Tax Advantages</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Nova Scotia timber investments may qualify for favorable capital gains 
                  treatment. Consult a local tax advisor about woodland tax policies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Served */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-stone-900 text-center sm:text-4xl">
              Serving All of Nova Scotia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
              We ship black walnut seedlings to every region of the province
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Annapolis Valley",
                "South Shore", 
                "Eastern Shore",
                "Halifax Regional Municipality",
                "Cape Breton",
                "Pictou County",
                "Colchester County",
                "Lunenburg County",
                "Queens County",
              ].map((region) => (
                <div key={region} className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white p-4">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-stone-900">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NS Climate Info */}
        <section className="bg-emerald-900 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
                  Nova Scotia Growing Conditions
                </h2>
                <div className="mt-6 space-y-4 text-emerald-100">
                  <p>
                    Nova Scotia&apos;s unique climate offers several advantages for black walnut cultivation:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Adequate annual precipitation (1,000-1,400mm) reduces irrigation needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Long, moderate growing season (May-October)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Well-drained Acadian soil types ideal for black walnut</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Coastal influence moderates summer heat stress</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-emerald-800 p-6 text-center">
                  <p className="text-3xl font-serif font-medium text-white">5b - 6a</p>
                  <p className="mt-2 text-sm text-emerald-200">Hardiness Zones</p>
                </div>
                <div className="rounded-lg bg-emerald-800 p-6 text-center">
                  <p className="text-3xl font-serif font-medium text-white">1,200+</p>
                  <p className="mt-2 text-sm text-emerald-200">mm Annual Rain</p>
                </div>
                <div className="rounded-lg bg-emerald-800 p-6 text-center">
                  <p className="text-3xl font-serif font-medium text-white">160+</p>
                  <p className="mt-2 text-sm text-emerald-200">Frost-Free Days</p>
                </div>
                <div className="rounded-lg bg-emerald-800 p-6 text-center">
                  <p className="text-3xl font-serif font-medium text-white">6.0-7.0</p>
                  <p className="mt-2 text-sm text-emerald-200">Typical Soil pH</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
              Start Your Nova Scotia Timber Investment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Whether you&apos;re in the Valley, on the South Shore, or in Cape Breton, 
              we can help you turn unused Nova Scotia land into generational wealth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/calculator/"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-base font-medium text-white hover:bg-emerald-800"
              >
                Calculate Your Returns
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-700 px-6 py-3 text-base font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-4 text-sm text-stone-500">
              Located in {businessInfo.address.city}, {businessInfo.address.state} • 
              Serving all of Nova Scotia
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
