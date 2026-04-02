"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { businessInfo } from "@/lib/config/business";

/**
 * Nova Scotia Provincial Landing Page
 * Refactored to match design system
 */

export default function NovaScotiaPageClient() {
  const { ref, isVisible } = useScrollAnimation();

  const regions = [
    "Annapolis Valley", "South Shore", "Eastern Shore",
    "Halifax Regional Municipality", "Cape Breton", "Pictou County",
    "Colchester County", "Lunenburg County", "Queens County",
  ];

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
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-cream/60 text-sm">
              <li><Link href="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream">Nova Scotia</li>
            </ol>
          </nav>

          <div className="max-w-[800px]">
            <span className="kicker-label text-gold mb-4 inline-block">{businessInfo.location.region}</span>
            <h1 className="text-cream mb-6">
              Timber Investment in <em className="text-gold italic">Nova Scotia</em>
            </h1>
            <p className="text-intro text-cream/80 max-w-[55ch]">
              Nova Scotia&apos;s climate is ideal for black walnut timber investment. Zone 5b/6a hardiness, established nursery in {businessInfo.address.city}.
            </p>
          </div>
        </div>
      </section>

      {/* Why Nova Scotia Section */}
      <section className="py-20" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="kicker-label text-gold-dark mb-4 inline-block">Why Nova Scotia</span>
              <h2 className="text-forest mb-6">
                Why Black Walnut <em className="text-gold-dark italic">Thrives Here</em>
              </h2>
              <div className="space-y-4 text-ink-light">
                <p>
                  Nova Scotia&apos;s climate and soil conditions create the perfect environment for black walnut timber plantations. With hardiness zones ranging from 5b to 6a, trees establish quickly and grow vigorously.
                </p>
                <p>
                  The well-drained, loamy soils found throughout the Annapolis Valley, South Shore, and Central Nova Scotia provide ideal growing conditions. Our coastal influence moderates temperature extremes.
                </p>
              </div>
            </div>

            <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80&auto=format&fit=crop"
                  alt="Nova Scotia farmland ideal for black walnut timber planting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-forest text-cream p-6 rounded-xl shadow-xl">
                <p className="font-display text-4xl font-bold text-gold">5b/6a</p>
                <p className="text-sm text-cream/70 mt-1">Hardiness Zones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <ImageBanner
        src="https://images.unsplash.com/photo-1507041957456-9c397ce39c7f?w=1920&q=80&auto=format&fit=crop"
        alt="Rolling Nova Scotia farmland"
        quote="Nova Scotia&apos;s Maritime climate offers unique advantages for timber cultivation."
        attribution="Little Tree Farm"
        id="ns-banner"
      />

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="kicker-label text-gold-dark mb-4 inline-block">Advantages</span>
            <h2 className="text-forest">
              Nova Scotia <em className="text-gold-dark italic">Advantages</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Perfect Hardiness Zone", desc: "Zone 5b/6a climate matches black walnut's ideal growing conditions. Winter lows provide necessary dormancy." },
              { title: "Local Nursery", desc: `Our nursery in ${businessInfo.address.city} grows seedlings adapted to Maritime conditions.` },
              { title: "Province-Wide Shipping", desc: "From Cape Breton to Yarmouth, we ship bare root seedlings across all of Nova Scotia." },
              { title: "Tax Advantages", desc: "Nova Scotia timber investments may qualify for favorable capital gains treatment." },
            ].map((item, i) => (
              <div key={i} className="bg-parchment rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center font-display text-lg font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-forest text-lg mb-2">{item.title}</h3>
                <p className="text-ink-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Served */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="kicker-label text-gold-dark mb-4 inline-block">Coverage</span>
            <h2 className="text-forest">
              Serving All of <em className="text-gold-dark italic">Nova Scotia</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region) => (
              <div key={region} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-parchment">
                <svg className="h-5 w-5 text-gold-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-forest">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Stats */}
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
            <div>
              <span className="kicker-label text-gold mb-4 inline-block">Growing Conditions</span>
              <h2 className="text-cream mb-6">
                Nova Scotia <em className="text-gold italic">Climate</em>
              </h2>
              <ul className="space-y-4">
                {[
                  "Adequate annual precipitation (1,000-1,400mm) reduces irrigation needs",
                  "Long, moderate growing season (May-October)",
                  "Well-drained Acadian soil types ideal for black walnut",
                  "Coastal influence moderates summer heat stress",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-cream/80">
                    <svg className="h-6 w-6 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5b - 6a", label: "Hardiness Zones" },
                { value: "1,200+", label: "mm Annual Rain" },
                { value: "160+", label: "Frost-Free Days" },
                { value: "6.0-7.0", label: "Typical Soil pH" },
              ].map((stat) => (
                <div key={stat.label} className="bg-forest-light/30 rounded-xl p-6 text-center border border-cream/10">
                  <p className="font-display text-3xl font-bold text-gold">{stat.value}</p>
                  <p className="text-sm text-cream/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <span className="kicker-label text-gold-dark mb-4 inline-block">Get Started</span>
          <h2 className="text-forest mb-4">
            Start Your Nova Scotia Timber <em className="text-gold-dark italic">Investment</em>
          </h2>
          <p className="text-ink-light mb-8 max-w-[50ch] mx-auto">
            Whether you&apos;re in the Valley, on the South Shore, or in Cape Breton, we can help you establish a profitable black walnut plantation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark"
            >
              Calculate Returns
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
