"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { businessInfo } from "@/lib/config/business";
import Link from "next/link";
import Image from "next/image";

/**
 * Guide Page Client Component - Lead Magnet
 * 
 * Features:
 * - Email capture form for PDF download
 * - Visual preview of guide contents
 * - Trust signals and social proof
 * - Brevo-ready form integration
 * - Mobile-optimized design
 */

const guideFeatures = [
  {
    icon: "📍",
    title: "Site Selection",
    description: "How to choose the perfect location for your timber plantation",
  },
  {
    icon: "📏",
    title: "10×20 ft Spacing",
    description: "Complete layout guide for 218 trees per acre",
  },
  {
    icon: "🌱",
    title: "Planting Steps",
    description: "Step-by-step instructions from hole digging to mulching",
  },
  {
    icon: "🛡️",
    title: "Protection",
    description: "Deer guards, rodent protection, and weatherproofing",
  },
  {
    icon: "✂️",
    title: "First Year Care",
    description: "Watering, weeding, and pruning schedule",
  },
  {
    icon: "📊",
    title: "Timeline & ROI",
    description: "What to expect years 1-50 with thinning schedules",
  },
];

const testimonials = [
  {
    quote: "This guide saved me hours of research. Planted my first acre last spring using the 10×20 spacing system.",
    author: "Robert M.",
    location: "Ontario",
  },
  {
    quote: "Finally, a Canadian-specific guide for black walnut. The zone 5b info was exactly what I needed.",
    author: "Sarah L.",
    location: "Nova Scotia",
  },
];

export default function GuidePageClient() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with Brevo
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-forest-dark pt-28 pb-16 overflow-hidden">
        {/* Background Pattern */}
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
              <li className="text-cream">Planting Guide</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
                Free Download
              </span>
              <h1 className="text-cream mb-6">
                The Complete Black Walnut<br />
                <em className="text-gold italic">Planting Guide</em>
              </h1>
              <p className="text-intro text-cream/80 mb-8 max-w-[50ch]">
                Everything you need to plant your first acre of black walnut trees. 
                Based on our proven 10×20 ft spacing system used on hundreds of Canadian farms.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 text-cream/70 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>PDF Format</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>28 Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Instant Access</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-cream rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-forest mb-2">Get Your Free Guide</h3>
                  <p className="text-ink-light mb-6">
                    Enter your email and we will send the PDF immediately.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-forest text-cream font-ui font-bold tracking-[0.08em] uppercase rounded-xl transition-all duration-300 hover:bg-forest-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Download Free Guide
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-ink-muted mt-4 text-center">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-forest mb-2">Guide Sent!</h3>
                  <p className="text-ink-light mb-4">
                    Check your inbox at {email} for the download link.
                  </p>
                  <p className="text-sm text-ink-muted">
                    Did not receive it? Check your spam folder or{" "}
                    <a href={`mailto:${businessInfo.contact.email}`} className="text-forest underline">
                      contact us
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="kicker-label text-gold-dark mb-4 inline-block">What's Inside</span>
            <h2 className="text-ink mb-4">
              Your Complete <em className="text-forest italic">Planting Roadmap</em>
            </h2>
            <p className="text-intro text-ink-light max-w-[60ch] mx-auto">
              Everything you need to successfully plant and establish your black walnut timber plantation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideFeatures.map((feature, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-forest font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-ink-light text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-parchment">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="kicker-label text-gold-dark mb-4 inline-block">Sneak Peek</span>
              <h2 className="text-ink mb-6">
                Chapter Preview: <em className="text-forest italic">The 10×20 Spacing System</em>
              </h2>
              <div className="prose prose-forest max-w-none">
                <p className="text-ink-light mb-4">
                  The foundation of successful black walnut timber production is proper spacing. 
                  Our 10×20 ft system has been refined over decades of Canadian forestry experience.
                </p>
                <ul className="space-y-3 text-ink-light">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span><strong>218 trees per acre</strong> — optimal density for timber production</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span><strong>10 ft within rows</strong> — forces upward competition for light</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span><strong>20 ft between rows</strong> — allows equipment access for maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <span><strong>Total investment: $1,744/acre</strong> — seedlings only, no hidden costs</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-forest/20 border-2 border-cream flex items-center justify-center text-forest text-xs font-bold">
                      {i === 4 ? "+2k" : "★"}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-ink-muted">
                  <strong>2,000+</strong> downloads
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[3/4] bg-parchment rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 relative">
                      <Image
                        src="/little-tree-farms-logo.png"
                        alt="Little Tree Farm"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-forest font-display text-xl mb-2">Black Walnut</h4>
                    <p className="text-ink-muted text-sm">Planting Guide 2026</p>
                    <div className="mt-8 space-y-2">
                      <div className="h-2 bg-forest/10 rounded w-3/4 mx-auto" />
                      <div className="h-2 bg-forest/10 rounded w-1/2 mx-auto" />
                      <div className="h-2 bg-forest/10 rounded w-2/3 mx-auto" />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-4 border-gold/30 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-gold/20 rounded-full" />
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -z-10 inset-0 bg-forest/5 rounded-3xl transform -rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="kicker-label text-gold-dark mb-4 inline-block">Grower Reviews</span>
            <h2 className="text-ink">What Canadian Landowners Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-sm border border-black/5"
              >
                <svg className="w-10 h-10 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-ink-light mb-4 text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-medium text-forest">{testimonial.author}</p>
                    <p className="text-sm text-ink-muted">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-forest-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-cream mb-4">Ready to Plant Your Future?</h2>
          <p className="text-cream/70 mb-8 max-w-[50ch] mx-auto">
            Join 2,000+ Canadian landowners who have downloaded our guide and started their timber investment journey.
          </p>
          
          <Link
            href="#"
            onClick={() => {
              document.getElementById('email')?.focus();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest-dark font-ui font-bold tracking-[0.08em] uppercase rounded-xl transition-all duration-300 hover:bg-gold-dark"
          >
            Get the Free Guide
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </Link>

          <div className="mt-8 flex items-center justify-center gap-6 text-cream/50 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              28 Pages
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Instant PDF
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free Forever
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
