"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { businessInfo } from "@/lib/config/business";

/**
 * Ontario Provincial Landing Page
 * Refactored to match design system
 */

export default function OntarioPageClient() {
  const { ref, isVisible } = useScrollAnimation();

  const regions = [
    "Greater Toronto Area", "Ottawa Valley", "Southwestern Ontario",
    "Niagara Region", "Eastern Ontario", "Central Ontario",
    "Northern Ontario (Zone 4b)", "Georgian Bay Area",
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
              <li className="text-cream">Ontario</li>
            </ol>
          </nav>

          <div className="max-w-[800px]">
            <span className="kicker-label text-gold mb-4 inline-block">Canada&apos;s Largest Province</span>
            <h1 className="text-cream mb-6">
              Timber Investment in <em className="text-gold italic">Ontario</em>
            </h1>
            <p className="text-intro text-cream/80 max-w-[55ch]">
              Ontario&apos;s diverse climate zones (4b-6a) and fertile soils make it prime territory for black walnut timber investment.
            </p>
          </div>
        </div>
      </section>

      {/* Why Ontario Section */}
      <section className="py-20" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="kicker-label text-gold-dark mb-4 inline-block">Why Ontario</span>
              <h2 className="text-forest mb-6">
                Perfect for Black <em className="text-gold-dark italic">Walnut</em>
              </h2>
              <div className="space-y-4 text-ink-light">
                <p>
                  Ontario offers the largest and most diverse landscape for black walnut cultivation in Canada. With hardiness zones spanning from 4b in the north to 6a in the south.
                </p>
                <p>
                  The deep, fertile soils of Southwestern Ontario—particularly in Elgin, Norfolk, and Oxford counties—provide ideal conditions for black walnut growth.
                </p>
              </div>
            </div>

            <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop"
                  alt="Ontario farmland suitable for black walnut timber investment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-forest text-cream p-6 rounded-xl shadow-xl">
                <p className="font-display text-4xl font-bold text-gold">4b-6a</p>
                <p className="text-sm text-cream/70 mt-1">Zone Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <ImageBanner
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80&auto=format&fit=crop"
        alt="Ontario forest landscape"
        quote="Ontario&apos;s size and diversity create endless opportunities for timber investment."
        attribution="Little Tree Farm"
        id="ontario-banner"
      />

      {/* Advantages Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="kicker-label text-gold-dark mb-4 inline-block">Advantages</span>
            <h2 className="text-forest">
              Ontario Timber <em className="text-gold-dark italic">Advantages</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Vast Market Access", desc: "Ontario's large population and proximity to US markets ensure strong future demand for premium timber." },
              { title: "Ideal Climate Zones", desc: "Southern Ontario's Zone 5b/6a climate matches black walnut's preferred growing conditions perfectly." },
              { title: "Fertile Soils", desc: "Ontario's rich agricultural soils, especially in the Southwest, provide excellent growing conditions." },
              { title: "Tax Benefits", desc: "Ontario offers favorable tax treatment for managed woodlots with potential property tax reductions." },
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
              Serving All Ontario <em className="text-gold-dark italic">Regions</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Zone Info */}
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
              <span className="kicker-label text-gold mb-4 inline-block">Growing Zones</span>
              <h2 className="text-cream mb-6">
                Ontario <em className="text-gold italic">Hardiness Zones</em>
              </h2>
              <ul className="space-y-3">
                {[
                  "Zone 6a (Extreme South): Windsor, Essex County - Longest growing season",
                  "Zone 5b/6a (Southern): Toronto, Hamilton, London - Ideal for timber",
                  "Zone 5a/5b (Central): Barrie, Peterborough - Suitable with care",
                  "Zone 4b (Northern): North Bay area - Marginal, consult first",
                ].map((zone, i) => (
                  <li key={i} className="flex items-start gap-3 text-cream/80">
                    <svg className="h-6 w-6 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {zone}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4b-6a", label: "Hardiness Zones" },
                { value: "150+", label: "Frost-Free Days (South)" },
                { value: "700-1,000", label: "mm Annual Rain" },
                { value: "6.0-7.5", label: "Optimal Soil pH" },
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
            Start Your Ontario Timber <em className="text-gold-dark italic">Investment</em>
          </h2>
          <p className="text-ink-light mb-8 max-w-[50ch] mx-auto">
            Whether you're in the GTA, Southwestern Ontario, or the Ottawa Valley, we can help you establish a profitable plantation.
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
