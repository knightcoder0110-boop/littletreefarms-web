import type { Metadata } from "next";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";
import Image from "next/image";

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

      <div className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="relative bg-emerald-900 py-24 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-900/80 to-emerald-900/90" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-emerald-300 font-medium tracking-wide uppercase text-sm">
                Canada&apos;s Largest Province
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                Black Walnut Timber Investment
                <span className="block mt-2">in Ontario</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
                Ontario&apos;s diverse climate zones (4b-6a) and fertile soils make it 
                prime territory for black walnut timber investment. From Toronto to 
                Ottawa to Southwestern Ontario, turn your land into generational wealth.
              </p>
            </div>
          </div>
        </section>

        {/* Why Ontario Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
                  Why Ontario is Perfect for Black Walnut
                </h2>
                <div className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    Ontario offers the largest and most diverse landscape for black walnut 
                    cultivation in Canada. With hardiness zones spanning from 4b in the north 
                    to 6a in the south, the province accommodates various microclimates perfect 
                    for timber investment.
                  </p>
                  <p>
                    The deep, fertile soils of Southwestern Ontario—particularly in regions 
                    like Elgin, Norfolk, and Oxford counties—provide ideal conditions for 
                    black walnut growth. These areas, historically known for tobacco and 
                    agricultural production, are now prime candidates for timber conversion 
                    as farmers look for long-term sustainable investments.
                  </p>
                  <p>
                    Eastern Ontario&apos;s mix of agricultural land and forested areas offers 
                    excellent opportunities for landowners seeking to diversify their holdings. 
                    The proximity to major markets like Toronto, Ottawa, and Montreal ensures 
                    strong demand for quality timber decades from now.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-4/3 rounded-lg bg-stone-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop"
                    alt="Ontario farmland suitable for black walnut timber investment"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
                  <p className="font-serif text-3xl font-medium">Zones 4b-6a</p>
                  <p className="text-sm text-emerald-100">Ontario Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ontario Advantages */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-stone-900 text-center sm:text-4xl">
              Ontario Timber Investment Advantages
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium text-stone-900">Vast Market Access</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Ontario&apos;s large population and proximity to US markets ensure 
                  strong future demand for premium black walnut timber.
                </p>
              </div>

              <div className="rounded-lg bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium text-stone-900">Ideal Climate Zones</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Southern Ontario&apos;s Zone 5b/6a climate matches black walnut&apos;s 
                  preferred growing conditions perfectly.
                </p>
              </div>

              <div className="rounded-lg bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium text-stone-900">Fertile Soils</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Ontario&apos;s rich agricultural soils, especially in the Southwest, 
                  provide excellent growing conditions for timber.
                </p>
              </div>

              <div className="rounded-lg bg-stone-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-medium text-stone-900">Tax Benefits</h3>
                <p className="mt-2 text-sm text-stone-600">
                  Ontario offers favorable tax treatment for managed woodlots. 
                  Potential property tax reductions and capital gains treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Served */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-stone-900 text-center sm:text-4xl">
              Serving All Ontario Regions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
              We ship black walnut seedlings to every region of Ontario
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Greater Toronto Area",
                "Ottawa Valley",
                "Southwestern Ontario",
                "Niagara Region",
                "Eastern Ontario",
                "Central Ontario",
                "Northern Ontario (Zone 4b)",
                "Georgian Bay Area",
                "Prince Edward County",
                "Grey-Bruce",
                "Huron County",
                "Oxford County",
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

        {/* Zone Information */}
        <section className="bg-emerald-900 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
                  Ontario Growing Zones
                </h2>
                <div className="mt-6 space-y-4 text-emerald-100">
                  <p>
                    Ontario&apos;s diverse geography creates distinct growing zones:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Zone 6a (Extreme South):</strong> Windsor, Essex County, parts of Niagara. Longest growing season, highest walnut yields.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Zone 5b/6a (Southern):</strong> Toronto, Hamilton, London, Ottawa. Ideal for black walnut timber production.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Zone 5a/5b (Central):</strong> Barrie, Peterborough, Kingston. Suitable with proper site selection.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-6 w-6 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-white">Zone 4b (Northern):</strong> North Bay, Sudbury area. Marginal for black walnut; consult before planting.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-emerald-800 p-6 text-center">
                  <p className="text-3xl font-serif font-medium text-white">4b-6a</p>
                  <p className="mt-2 text-sm text-emerald-200">Hardiness Zones</p>
                </div>
                <div className="rounded-lg bg-emerald-800 p-6 text-center">
                  <p className="text-3xl font-serif font-medium text-white">150+</p>
                  <p className="mt-2 text-sm text-emerald-200">Frost-Free Days (South)</p>
                </div>
                <div className="rounded-lg bg-emerald-800 p-6 text-center">
                  <p className="text-3xl font-serif font-medium text-white">700-1,000</p>
                  <p className="mt-2 text-sm text-emerald-200">mm Annual Rain</p>
                </div>
                <div className="rounded-lg bg-emerald-800 p-6 text-center">
                  <p className="text-3xl font-serif font-medium text-white">6.0-7.5</p>
                  <p className="mt-2 text-sm text-emerald-200">Optimal Soil pH</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Info */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-stone-100 p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-medium text-stone-900">
                    Ontario Shipping Information
                  </h2>
                  <div className="mt-6 space-y-4 text-stone-700">
                    <p>
                      We ship bare root black walnut seedlings to all Ontario regions 
                      during optimal planting seasons:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-medium">Spring:</span>
                        <span>March 15 - May 31 (Primary planting season)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-medium">Fall:</span>
                        <span>September 15 - November 15 (Secondary season)</span>
                      </li>
                    </ul>
                    <p className="mt-4">
                      <strong>Shipping times to Ontario:</strong>
                    </p>
                    <ul className="space-y-1">
                      <li>Southern Ontario (Toronto, Hamilton): 2-3 business days</li>
                      <li>Eastern Ontario (Ottawa, Kingston): 2-3 business days</li>
                      <li>Southwestern Ontario (London, Windsor): 2-3 business days</li>
                      <li>Central/Northern Ontario: 3-4 business days</li>
                    </ul>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-6">
                  <h3 className="font-medium text-stone-900">Order Timeline</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-medium">1</div>
                      <div>
                        <p className="font-medium text-stone-900">Place Order</p>
                        <p className="text-sm text-stone-600">Order online or by phone</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-medium">2</div>
                      <div>
                        <p className="font-medium text-stone-900">We Prepare</p>
                        <p className="text-sm text-stone-600">Seedlings carefully packed for transit</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-medium">3</div>
                      <div>
                        <p className="font-medium text-stone-900">Ship to Ontario</p>
                        <p className="text-sm text-stone-600">2-4 day delivery across the province</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 font-medium">4</div>
                      <div>
                        <p className="font-medium text-stone-900">Plant Within 48 Hours</p>
                        <p className="text-sm text-stone-600">For best establishment results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
              Start Your Ontario Timber Investment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
              Whether you&apos;re in the GTA, Southwestern Ontario, or the Ottawa Valley, 
              we can help you establish a profitable black walnut plantation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/calculator/"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-base font-medium text-white hover:bg-emerald-800"
              >
                Calculate Your Returns
              </a>
              <a
                href="/seedlings/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-emerald-700 px-6 py-3 text-base font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Order Seedlings
              </a>
            </div>
            <p className="mt-4 text-sm text-stone-500">
              Canada-wide shipping from Nova Scotia • 2-4 day delivery to Ontario
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
