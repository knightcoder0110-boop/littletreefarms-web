"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { businessInfo } from "@/lib/config/business";
import Link from "next/link";
import Image from "next/image";

/**
 * Seedlings Product Page Client Component
 * 
 * Features:
 * - Quantity calculator
 * - Acre calculator
 * - Bulk pricing tiers
 * - Shipping info
 * - Add to cart simulation
 * - Mobile-optimized product layout
 */

const pricingTiers = [
  { min: 1, max: 49, price: businessInfo.keyFacts.seedlingPrice, label: "1-49 trees" },
  { min: 50, max: 99, price: 7.5, label: "50-99 trees", savings: "6% off" },
  { min: 100, max: 499, price: 7, label: "100-499 trees", savings: "12% off" },
  { min: 500, max: 999, price: 6.5, label: "500-999 trees", savings: "19% off" },
  { min: 1000, max: Infinity, price: 6, label: "1000+ trees", savings: "25% off" },
];

const features = [
  { icon: "🌱", title: "A-Grade Timber Stock", description: "Selected for straight growth and timber characteristics" },
  { icon: "📦", title: "Bare Root", description: "Ships dormant, plant within 48 hours of arrival" },
  { icon: "🇨🇦", title: "Zone 4-8 Hardy", description: "Proven hardy in Canadian climates including Zone 5b" },
  { icon: "🚚", title: businessInfo.keyFacts.shipping, description: "Carefully packed to prevent root drying in transit" },
  { icon: "📋", title: "Planting Guide Included", description: "Step-by-step instructions with every order" },
  { icon: "💬", title: "Grower Support", description: "Email support for site selection and planting questions" },
];

const reviews = [
  { rating: 5, text: "Seedlings arrived in perfect condition. Planted 100 last spring and they all took!", author: "Michael T., Ontario" },
  { rating: 5, text: "Great quality stock. Much better than generic nursery trees for timber production.", author: "Jennifer R., Nova Scotia" },
  { rating: 5, text: "Bulk order of 500 arrived perfectly packaged. 98% survival rate.", author: "David K., New Brunswick" },
];

export default function SeedlingsPageClient() {
  const { ref, isVisible } = useScrollAnimation();
  const [quantity, setQuantity] = useState(218);
  const [activeTab, setActiveTab] = useState<"calculator" | "acre">("calculator");
  const [acres, setAcres] = useState(1);

  // Calculate price based on quantity
  const getPriceTier = (qty: number) => {
    return pricingTiers.find(tier => qty >= tier.min && qty <= tier.max) || pricingTiers[0];
  };

  const priceTier = getPriceTier(quantity);
  const totalPrice = (quantity * priceTier.price).toFixed(2);
  const acreQuantity = acres * businessInfo.keyFacts.treesPerAcre;
  const acrePriceTier = getPriceTier(acreQuantity);
  const acreTotalPrice = (acreQuantity * acrePriceTier.price).toFixed(2);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Product Section */}
      <section className="pt-28 pb-16 bg-forest-dark relative overflow-hidden">
        {/* Background */}
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
              <li><Link href="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream">Seedlings</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium">
                  In Stock
                </span>
                <span className="px-3 py-1 bg-white/10 text-cream/70 rounded-full text-sm">
                  Ships Spring & Fall
                </span>
              </div>
              
              <h1 className="text-cream mb-4">
                Black Walnut<br />
                <em className="text-gold italic">Seedlings</em>
              </h1>
              
              <p className="text-intro text-cream/80 mb-6">
                Premium A-grade bare root seedlings selected specifically for timber production. 
                Juglans nigra hardy to Zone 4b-8b.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-cream/70 text-sm">
                  <strong className="text-cream">4.9</strong> (127 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-display font-bold text-cream">
                  ${priceTier.price.toFixed(2)}
                </span>
                <span className="text-cream/60">CAD per tree</span>
              </div>
              {priceTier.savings && (
                <p className="text-gold text-sm mb-6">{priceTier.savings} at this quantity</p>
              )}

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <p className="text-cream font-medium text-sm">{feature.title}</p>
                      <p className="text-cream/60 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Calculator/Order Panel */}
            <div className="bg-cream rounded-2xl p-6 shadow-2xl">
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveTab("calculator")}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                    activeTab === "calculator"
                      ? "bg-forest text-cream"
                      : "bg-parchment text-forest hover:bg-forest/10"
                  }`}
                >
                  By Quantity
                </button>
                <button
                  onClick={() => setActiveTab("acre")}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                    activeTab === "acre"
                      ? "bg-forest text-cream"
                      : "bg-parchment text-forest hover:bg-forest/10"
                  }`}
                >
                  By Acre
                </button>
              </div>

              {activeTab === "calculator" ? (
                <>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-ink mb-2">
                      Number of Seedlings
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                    <input
                      type="range"
                      min="1"
                      max="1000"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-full mt-3 accent-forest"
                    />
                    <div className="flex justify-between text-xs text-ink-muted mt-1">
                      <span>1</span>
                      <span>500</span>
                      <span>1000</span>
                    </div>
                  </div>

                  <div className="bg-parchment rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-ink-muted">Subtotal ({quantity} trees)</span>
                      <span className="text-forest font-bold">${totalPrice} CAD</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-ink-muted">Shipping</span>
                      <span className="text-forest">Calculated at checkout</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-ink mb-2">
                      Number of Acres
                    </label>
                    <input
                      type="number"
                      min="0.5"
                      step="0.5"
                      value={acres}
                      onChange={(e) => setAcres(Math.max(0.5, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                    <p className="text-sm text-ink-muted mt-2">
                      {businessInfo.keyFacts.treesPerAcre} trees per acre at {businessInfo.keyFacts.spacing} spacing
                    </p>
                  </div>

                  <div className="bg-parchment rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-ink-muted">Trees needed ({acres} acres)</span>
                      <span className="text-forest font-bold">{acreQuantity} trees</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-ink-muted">Subtotal</span>
                      <span className="text-forest font-bold">${acreTotalPrice} CAD</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-ink-muted">Shipping</span>
                      <span className="text-forest">Calculated at checkout</span>
                    </div>
                  </div>
                </>
              )}

              <button className="w-full py-4 bg-forest text-cream font-ui font-bold tracking-[0.08em] uppercase rounded-xl transition-all duration-300 hover:bg-forest-light flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>

              <p className="text-xs text-ink-muted mt-4 text-center">
                Free shipping on orders over $500. Questions?{" "}
                <a href={`tel:${businessInfo.contact.phone}`} className="text-forest underline">
                  Call us
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-parchment" ref={ref}>
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-ink mb-2">Volume Pricing</h2>
            <p className="text-ink-light">Save more when you plant more acres</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-5 border-2 transition-all duration-300 ${
                  (activeTab === "calculator" ? priceTier : acrePriceTier).min === tier.min
                    ? "border-gold shadow-md"
                    : "border-transparent shadow-sm"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <p className="text-sm text-ink-muted mb-1">{tier.label}</p>
                <p className="text-2xl font-display font-bold text-forest">${tier.price.toFixed(2)}</p>
                <p className="text-xs text-ink-muted">per tree</p>
                {tier.savings && (
                  <span className="inline-block mt-2 px-2 py-1 bg-gold/20 text-gold-dark text-xs rounded">
                    {tier.savings}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-forest mb-4">What's Included</h3>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1">✓</span>
                    <div>
                      <p className="text-ink font-medium">{feature.title}</p>
                      <p className="text-ink-light text-sm">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-forest mb-4">Shipping Information</h3>
              <div className="space-y-4 text-ink-light">
                <p>
                  <strong className="text-forest">Timing:</strong> We ship bare root seedlings during dormancy 
                  (March-May and September-November) for optimal transplant success.
                </p>
                <p>
                  <strong className="text-forest">Packaging:</strong> Seedlings are carefully packed with moist 
                  material to prevent root drying during transit.
                </p>
                <p>
                  <strong className="text-forest">Upon Arrival:</strong> Plant within 48 hours or heel in temporarily 
                  in a shaded location with moist soil.
                </p>
                <p>
                  <strong className="text-forest">Free Shipping:</strong> Available on orders over $500 within 
                  {businessInfo.keyFacts.shipping.replace("across ", " ")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-forest-dark">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-cream mb-4">What Growers Say</h2>
            <p className="text-cream/70">127 verified reviews from Canadian landowners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cream/90 mb-4">{review.text}</p>
                <p className="text-cream/60 text-sm">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-ink mb-4">Common Questions</h2>
            <Link href="/faq" className="text-forest underline hover:no-underline">
              View all 25 FAQs →
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "When should I plant my seedlings?",
                a: "The best times are early spring (March-May) and fall (September-November) when trees are dormant. Avoid summer planting.",
              },
              {
                q: "How big are the seedlings when shipped?",
                a: "Our A-grade seedlings are 1-2 years old, typically 12-24 inches tall with well-developed root systems.",
              },
              {
                q: "What is your survival rate guarantee?",
                a: "We guarantee 90%+ survival when planting instructions are followed. Replacement policy available for verified losses.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-parchment rounded-xl p-6">
                <h4 className="text-forest font-semibold mb-2">{faq.q}</h4>
                <p className="text-ink-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-parchment">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-ink mb-4">Ready to Start Your Plantation?</h2>
          <p className="text-ink-light mb-8">
            Join hundreds of Canadian landowners growing generational wealth, one seedling at a time.
          </p>
          <Link
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-cream font-ui font-bold tracking-[0.08em] uppercase rounded-xl transition-all duration-300 hover:bg-forest-light"
          >
            Order Seedlings
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
