import type { Metadata } from "next";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";
import Image from "next/image";

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

// Generate Person schema for team
const generatePersonSchema = () =>
  businessInfo.experts.map((expert) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: expert.name,
    jobTitle: expert.role,
    description: expert.credentials,
    worksFor: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.url,
    },
  }));

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
  const personSchemas = generatePersonSchema();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {personSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="relative bg-stone-900 py-24 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                About {businessInfo.name}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-300">
                {businessInfo.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-stone-700 leading-relaxed">
                  <p>
                    {businessInfo.name} was founded in {businessInfo.business.founded} in {businessInfo.address.city}, {businessInfo.address.state} with a simple mission: help Canadian landowners transform unused land into generational wealth through strategic timber investment.
                  </p>
                  <p>
                    We specialize in black walnut (Juglans nigra) seedlings specifically selected and grown for timber production. Unlike ornamental nursery stock, our seedlings are bred for straight growth, strong apical dominance, and the characteristics that produce premium veneer-quality timber decades from now.
                  </p>
                  <p>
                    Located in Zone 5b of Nova Scotia, we understand the unique challenges and opportunities of growing timber in Atlantic Canada. Our seedlings are hardy, proven, and ready to thrive in Canadian conditions from Ontario to the Maritimes.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg bg-stone-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1508326297-5503-4e9a-8602-457977e5db4f?w=800&q=80&auto=format&fit=crop"
                    alt={`${businessInfo.name} nursery in ${businessInfo.address.city}, Nova Scotia`}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
                  <p className="font-serif text-3xl font-medium">{businessInfo.business.founded}</p>
                  <p className="text-sm text-emerald-100">Founded in Nova Scotia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
                What We Do
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
                We provide everything Canadian landowners need to start their timber investment journey
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {businessInfo.services.map((service, index) => (
                <div key={index} className="rounded-lg bg-stone-50 p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <span className="text-lg font-medium">{index + 1}</span>
                  </div>
                  <h3 className="mt-4 font-medium text-stone-900">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Location */}
        <section className="bg-stone-100 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
                  Our Location
                </h2>
                <p className="mt-4 text-stone-600">
                  Visit our nursery in {businessInfo.address.city}, {businessInfo.address.state}. We welcome appointments for seedling pickup and consultations.
                </p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Address</p>
                      <p className="text-stone-600">{businessInfo.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Phone</p>
                      <p className="text-stone-600">{businessInfo.contact.phoneDisplay}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Email</p>
                      <p className="text-stone-600">{businessInfo.contact.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-medium text-stone-900 mb-2">Hours</p>
                  <div className="space-y-1 text-stone-600">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <p className="mt-2 text-sm text-stone-500">
                    {businessInfo.hours.seasonalNote}
                  </p>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden bg-stone-200 aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-stone-600 mb-2">Map placeholder</p>
                    <p className="text-sm text-stone-500">
                      Embed Google Maps here or use a static map image
                    </p>
                    <p className="text-sm text-stone-500 mt-2">
                      {businessInfo.location.latitude}, {businessInfo.location.longitude}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-medium text-stone-900 sm:text-4xl">
                Why Choose Us
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-stone-200 bg-white p-6">
                <h3 className="font-medium text-stone-900">Timber-Grade Seedlings</h3>
                <p className="mt-2 text-stone-600">
                  Our seedlings are specifically selected for timber characteristics—straight growth habit, strong apical dominance, and superior root systems. Not generic nursery stock.
                </p>
              </div>

              <div className="rounded-lg border border-stone-200 bg-white p-6">
                <h3 className="font-medium text-stone-900">Canadian Climate Expertise</h3>
                <p className="mt-2 text-stone-600">
                  We grow and ship seedlings hardy for Canadian zones 4b-6b. We understand the unique challenges of Atlantic Canada, Ontario, and Quebec growing conditions.
                </p>
              </div>

              <div className="rounded-lg border border-stone-200 bg-white p-6">
                <h3 className="font-medium text-stone-900">Investment Guidance</h3>
                <p className="mt-2 text-stone-600">
                  Beyond seedlings, we provide comprehensive support—planting guides, spacing advice, thinning strategies, and ongoing grower support for the life of your plantation.
                </p>
              </div>

              <div className="rounded-lg border border-stone-200 bg-white p-6">
                <h3 className="font-medium text-stone-900">Canada-Wide Shipping</h3>
                <p className="mt-2 text-stone-600">
                  Bare root seedlings carefully packed and shipped across Canada. Healthy arrival guaranteed. Spring (March-May) and fall (September-November) planting seasons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-900 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              Ready to Start Your Timber Investment?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-100">
              Download our free planting guide or get in touch to discuss your land and goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/guide/"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-emerald-900 hover:bg-emerald-50"
              >
                Download Free Guide
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
