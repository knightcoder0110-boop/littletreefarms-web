"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { businessInfo, getSameAsLinks } from "@/lib/config/business";

/**
 * About Page - E-E-A-T Signals
 * Refactored to match design system
 */

export default function AboutPageClient() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-forest-dark pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-cream/60 text-sm">
              <li>
                <Link href="/" className="hover:text-cream transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-cream">About</li>
            </ol>
          </nav>

          <div className="max-w-[800px]">
            <span className="kicker-label text-gold mb-4 inline-block">Our Story</span>
            <h1 className="text-cream mb-6">
              About <em className="text-gold italic">{businessInfo.name}</em>
            </h1>
            <p className="text-intro text-cream/80 max-w-[55ch]">
              {businessInfo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="kicker-label text-gold-dark mb-4 inline-block">Since {businessInfo.business.founded}</span>
              <h2 className="text-forest mb-6">
                Growing Timber, <em className="text-gold-dark italic">Building Wealth</em>
              </h2>
              <div className="space-y-4 text-ink-light">
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

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark"
                >
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  href="/guide"
                  className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl border-2 border-forest/20 text-forest transition-all duration-300 hover:bg-forest/5"
                >
                  Download Guide
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1508326297-5503-4e9a-8602-457977e5db4f?w=800&q=80&auto=format&fit=crop"
                  alt={`${businessInfo.name} nursery in ${businessInfo.address.city}, Nova Scotia`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-forest text-cream p-6 rounded-xl shadow-xl">
                <p className="font-display text-4xl font-bold text-gold">{businessInfo.business.founded}</p>
                <p className="text-sm text-cream/70 mt-1">Founded in Nova Scotia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <ImageBanner
        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920&q=80&auto=format&fit=crop"
        alt="Black walnut plantation at golden hour"
        quote="The best time to plant a tree was 20 years ago. The second best time is today."
        attribution="Old Chinese Proverb"
        id="about-banner"
      />

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="kicker-label text-gold-dark mb-4 inline-block">Our Services</span>
            <h2 className="text-forest">
              What We <em className="text-gold-dark italic">Do</em>
            </h2>
            <p className="text-ink-light mt-4">
              We provide everything Canadian landowners need to start their timber investment journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessInfo.services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-parchment rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center font-display text-xl font-bold mb-6 group-hover:bg-gold group-hover:text-forest-dark transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-forest text-xl mb-2">{service}</h3>
                <div className="w-12 h-0.5 bg-gold/50 group-hover:w-20 group-hover:bg-gold transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="kicker-label text-gold-dark mb-4 inline-block">Why Us</span>
            <h2 className="text-forest">
              Why Choose <em className="text-gold-dark italic">Us</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Timber-Grade Seedlings",
                description: "Our seedlings are specifically selected for timber characteristics—straight growth habit, strong apical dominance, and superior root systems. Not generic nursery stock."
              },
              {
                title: "Canadian Climate Expertise",
                description: "We grow and ship seedlings hardy for Canadian zones 4b-6b. We understand the unique challenges of Atlantic Canada, Ontario, and Quebec growing conditions."
              },
              {
                title: "Investment Guidance",
                description: "Beyond seedlings, we provide comprehensive support—planting guides, spacing advice, thinning strategies, and ongoing grower support for the life of your plantation."
              },
              {
                title: "Canada-Wide Shipping",
                description: "Bare root seedlings carefully packed and shipped across Canada. Healthy arrival guaranteed. Spring (March-May) and fall (September-November) planting seasons."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-forest text-xl mb-3">{item.title}</h3>
                <p className="text-ink-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-forest-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info */}
            <div>
              <span className="kicker-label text-gold mb-4 inline-block">Visit Us</span>
              <h2 className="text-cream mb-6">
                Our <em className="text-gold italic">Location</em>
              </h2>
              <p className="text-cream/70 mb-8">
                Visit our nursery in {businessInfo.address.city}, {businessInfo.address.state}. We welcome appointments for seedling pickup and consultations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">Address</p>
                    <p className="text-cream/60">{businessInfo.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">Phone</p>
                    <p className="text-cream/60">{businessInfo.contact.phoneDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream font-medium">Email</p>
                    <p className="text-cream/60">{businessInfo.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-cream/10">
                <p className="text-cream/50 text-sm">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-forest-light/30 border border-cream/10 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-gold/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <p className="text-cream/50">Map integration placeholder</p>
                <p className="text-cream/30 text-sm mt-2">
                  {businessInfo.location.latitude}, {businessInfo.location.longitude}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <span className="kicker-label text-gold-dark mb-4 inline-block">Ready to Start?</span>
          <h2 className="text-forest mb-4">
            Ready to Start Your Timber <em className="text-gold-dark italic">Investment?</em>
          </h2>
          <p className="text-ink-light mb-8 max-w-[50ch] mx-auto">
            Download our free planting guide or get in touch to discuss your land and goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark"
            >
              Download Free Guide
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl border-2 border-forest/20 text-forest transition-all duration-300 hover:bg-forest/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
