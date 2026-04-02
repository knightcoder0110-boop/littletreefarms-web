import type { Metadata } from "next";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";

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
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="relative bg-stone-900 py-16 lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                Contact Us
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-300">
                We&apos;re here to help with your timber investment questions. Reach out by phone, email, or visit our nursery.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Phone */}
              <div className="rounded-lg bg-white p-8 shadow-sm border border-stone-200 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="mt-4 font-serif text-xl font-medium text-stone-900">
                  Call Us
                </h2>
                <p className="mt-2 text-stone-600">
                  Speak directly with our team
                </p>
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="mt-4 inline-block text-lg font-medium text-emerald-700 hover:text-emerald-800"
                >
                  {businessInfo.contact.phoneDisplay}
                </a>
                <p className="mt-2 text-sm text-stone-500">
                  Mon-Fri 9AM-5PM, Sat 10AM-4PM AST
                </p>
              </div>

              {/* Email */}
              <div className="rounded-lg bg-white p-8 shadow-sm border border-stone-200 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="mt-4 font-serif text-xl font-medium text-stone-900">
                  Email Us
                </h2>
                <p className="mt-2 text-stone-600">
                  We typically respond within 24 hours
                </p>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="mt-4 inline-block text-lg font-medium text-emerald-700 hover:text-emerald-800"
                >
                  {businessInfo.contact.email}
                </a>
                <p className="mt-2 text-sm text-stone-500">
                  For detailed inquiries
                </p>
              </div>

              {/* Visit */}
              <div className="rounded-lg bg-white p-8 shadow-sm border border-stone-200 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-7 w-7 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="mt-4 font-serif text-xl font-medium text-stone-900">
                  Visit Us
                </h2>
                <p className="mt-2 text-stone-600">
                  By appointment for seedling pickup
                </p>
                <p className="mt-4 text-lg font-medium text-stone-900">
                  {businessInfo.address.street}
                </p>
                <p className="text-stone-600">
                  {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.postalCode}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hours & Location Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Hours & Info */}
              <div>
                <h2 className="font-serif text-3xl font-medium text-stone-900">
                  Hours of Operation
                </h2>
                
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between border-b border-stone-200 py-3">
                    <span className="font-medium text-stone-900">Monday - Friday</span>
                    <span className="text-stone-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 py-3">
                    <span className="font-medium text-stone-900">Saturday</span>
                    <span className="text-stone-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-200 py-3">
                    <span className="font-medium text-stone-900">Sunday</span>
                    <span className="text-stone-600">Closed</span>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-emerald-50 p-6">
                  <p className="text-emerald-800">
                    <span className="font-medium">Note:</span> {businessInfo.hours.seasonalNote}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium text-stone-900">Quick Facts</h3>
                  <ul className="mt-4 space-y-2 text-stone-600">
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Founded in {businessInfo.business.founded}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Hardiness Zone {businessInfo.location.hardinessZone}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {businessInfo.keyFacts.shipping} shipping
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {businessInfo.keyFacts.guarantee}
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="font-medium text-stone-900">Follow Us</h3>
                  <div className="mt-4 flex gap-4">
                    {businessInfo.social.facebook && (
                      <a
                        href={businessInfo.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-emerald-100 hover:text-emerald-700"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    )}
                    {businessInfo.social.instagram && (
                      <a
                        href={businessInfo.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-emerald-100 hover:text-emerald-700"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    )}
                    {businessInfo.social.youtube && (
                      <a
                        href={businessInfo.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-emerald-100 hover:text-emerald-700"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="font-serif text-3xl font-medium text-stone-900">
                  Our Location
                </h2>
                <div className="mt-8 aspect-4/3 rounded-lg bg-stone-200 overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <svg className="mx-auto h-12 w-12 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="mt-4 text-stone-600">
                        {businessInfo.address.street}
                      </p>
                      <p className="text-stone-600">
                        {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.postalCode}
                      </p>
                      <p className="mt-4 text-sm text-stone-500">
                        Coordinates: {businessInfo.location.latitude}, {businessInfo.location.longitude}
                      </p>
                      <p className="mt-4 text-sm text-stone-400">
                        Embed Google Maps iframe here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-stone-100 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-medium text-stone-900">
                Send Us a Message
              </h2>
              <p className="mt-4 text-stone-600">
                Have questions about timber investment? Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form className="mt-8 space-y-6 rounded-lg bg-white p-8 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="(902) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="">Select a topic...</option>
                  <option value="seedlings">Seedling Inquiry</option>
                  <option value="investment">Investment Questions</option>
                  <option value="site-selection">Site Selection Help</option>
                  <option value="shipping">Shipping Information</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Tell us about your land, your goals, or any questions you have..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 h-4 w-4 rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="newsletter" className="text-sm text-stone-600">
                  Subscribe to our newsletter for seasonal tips, market updates, and planting reminders.
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-700 px-6 py-3 text-base font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-stone-500">
                This form is ready for Brevo integration. Connect your Brevo API to capture leads.
              </p>
            </form>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="bg-emerald-900 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-medium text-white sm:text-3xl">
              Have Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
              Visit our comprehensive FAQ page for answers to common questions about black walnut timber investment.
            </p>
            <a
              href="/faq/"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-base font-medium text-emerald-900 hover:bg-emerald-50"
            >
              View FAQ
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
