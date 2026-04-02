"use client";

import { useState } from "react";
import Link from "next/link";
import { businessInfo } from "@/lib/config/business";

/**
 * ROI Calculator - Interactive Lead Generation Tool
 * Refactored to match design system
 */

interface CalculationResults {
  initialInvestment: number;
  conservativeReturn: number;
  midRangeReturn: number;
  premiumReturn: number;
  conservativeROI: number;
  midRangeROI: number;
  premiumROI: number;
  conservativeMultiplier: number;
  midRangeMultiplier: number;
  premiumMultiplier: number;
}

export default function CalculatorClient() {
  const [acres, setAcres] = useState<number>(1);
  const [pricePerTree, setPricePerTree] = useState<number>(businessInfo.keyFacts.seedlingPrice);
  const [email, setEmail] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  const calculateReturns = (): CalculationResults => {
    const seedlingsPerAcre = businessInfo.keyFacts.treesPerAcre;
    const finalTreesPerAcre = businessInfo.keyFacts.finalTreesPerAcre;
    const totalSeedlings = acres * seedlingsPerAcre;
    const initialInvestment = totalSeedlings * pricePerTree;

    const conservativePerAcre = businessInfo.keyFacts.conservativeReturnPerAcre;
    const midRangePerAcre = businessInfo.keyFacts.midRangeReturnPerAcre;
    const premiumPerAcre = businessInfo.keyFacts.premiumReturnPerAcre;

    const conservativeReturn = acres * conservativePerAcre;
    const midRangeReturn = acres * midRangePerAcre;
    const premiumReturn = acres * premiumPerAcre;

    return {
      initialInvestment,
      conservativeReturn,
      midRangeReturn,
      premiumReturn,
      conservativeROI: ((conservativeReturn - initialInvestment) / initialInvestment) * 100,
      midRangeROI: ((midRangeReturn - initialInvestment) / initialInvestment) * 100,
      premiumROI: ((premiumReturn - initialInvestment) / initialInvestment) * 100,
      conservativeMultiplier: conservativeReturn / initialInvestment,
      midRangeMultiplier: midRangeReturn / initialInvestment,
      premiumMultiplier: premiumReturn / initialInvestment,
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const results = calculateReturns();

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

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
              <li className="text-cream">Calculator</li>
            </ol>
          </nav>

          <div className="max-w-[800px]">
            <span className="kicker-label text-gold mb-4 inline-block">Investment Tool</span>
            <h1 className="text-cream mb-6">
              Timber Investment <em className="text-gold italic">Calculator</em>
            </h1>
            <p className="text-intro text-cream/80 max-w-[55ch]">
              See the potential returns on your black walnut timber investment. Calculate costs, returns, and ROI based on your acreage.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-black/5">
              <span className="kicker-label text-gold-dark mb-2 inline-block">Your Details</span>
              <h2 className="text-forest text-2xl mb-2">Investment Details</h2>
              <p className="text-ink-light text-sm mb-8">
                Adjust the values below to match your situation
              </p>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <label htmlFor="acres" className="block text-sm font-medium text-forest mb-2">
                    Number of Acres
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      id="acres-range"
                      min="0.5"
                      max="100"
                      step="0.5"
                      value={acres}
                      onChange={(e) => setAcres(parseFloat(e.target.value))}
                      className="flex-1 h-2 bg-parchment rounded-lg appearance-none cursor-pointer accent-gold"
                    />
                    <input
                      type="number"
                      id="acres"
                      min="0.5"
                      max="1000"
                      step="0.5"
                      value={acres}
                      onChange={(e) => setAcres(parseFloat(e.target.value) || 0)}
                      className="w-24 px-3 py-2 rounded-lg border border-parchment bg-white text-forest text-center focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">
                    Based on {businessInfo.keyFacts.spacing} spacing ({businessInfo.keyFacts.treesPerAcre} trees/acre)
                  </p>
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-forest mb-2">
                    Price per Seedling
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-ink-muted">$</span>
                    <input
                      type="number"
                      id="price"
                      min="1"
                      max="50"
                      step="0.5"
                      value={pricePerTree}
                      onChange={(e) => setPricePerTree(parseFloat(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-parchment bg-white text-forest focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                  </div>
                  <p className="mt-1 text-xs text-ink-muted">
                    Current price: ${businessInfo.keyFacts.seedlingPrice} CAD each
                  </p>
                </div>

                <div className="bg-parchment rounded-xl p-5">
                  <p className="text-sm font-medium text-forest mb-3">Quick Summary</p>
                  <div className="space-y-2 text-sm text-ink-light">
                    <div className="flex justify-between">
                      <span>Trees to plant:</span>
                      <span className="font-medium text-forest">{Math.round(acres * businessInfo.keyFacts.treesPerAcre).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Final trees at harvest:</span>
                      <span className="font-medium text-forest">{Math.round(acres * businessInfo.keyFacts.finalTreesPerAcre).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline:</span>
                      <span className="font-medium text-forest">{businessInfo.keyFacts.harvestTimeline}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark"
                >
                  Calculate Returns
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>

              {/* Email Capture */}
              {showResults && (
                <div className="mt-8 bg-gold/10 rounded-xl p-6 border border-gold/20">
                  <h3 className="font-medium text-forest mb-2">
                    Get Your Detailed Report
                  </h3>
                  <p className="text-sm text-ink-light mb-4">
                    Enter your email to receive a detailed PDF report with your calculations, plus our free planting guide.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gold/30 bg-white text-forest placeholder-ink-muted focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                    />
                    <button
                      type="button"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-forest text-cream border-2 border-forest transition-all duration-300 hover:bg-forest-light"
                      onClick={() => {
                        console.log("Email captured:", email);
                        alert("Thank you! Your report will be emailed to you. (Connect Brevo API for production)");
                      }}
                    >
                      Send Me the Report
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-ink-muted">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="space-y-6">
              {showResults ? (
                <>
                  {/* Initial Investment Card */}
                  <div className="bg-forest-dark rounded-2xl p-8 text-cream">
                    <p className="text-sm text-cream/60 mb-1">Initial Investment Required</p>
                    <p className="text-4xl font-display font-bold text-gold">
                      {formatCurrency(results.initialInvestment)}
                    </p>
                    <p className="mt-2 text-sm text-cream/60">
                      {Math.round(acres * businessInfo.keyFacts.treesPerAcre)} seedlings at ${pricePerTree} each
                    </p>
                  </div>

                  {/* Scenario Cards */}
                  <div className="space-y-4">
                    {/* Conservative */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-walnut shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-forest">Conservative Scenario</h3>
                        <span className="px-3 py-1 rounded-full bg-walnut/10 text-walnut text-xs font-medium">
                          Average Quality
                        </span>
                      </div>
                      <p className="text-sm text-ink-light mb-4">
                        $1,000 per tree at harvest • Average site conditions
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-ink-muted uppercase tracking-wide">Harvest Value</p>
                          <p className="text-xl font-display font-bold text-walnut">
                            {formatCurrency(results.conservativeReturn)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-ink-muted uppercase tracking-wide">ROI</p>
                          <p className="text-xl font-display font-bold text-walnut">
                            {Math.round(results.conservativeROI)}%
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-ink-light">
                        Multiplies by <span className="font-medium text-walnut">{results.conservativeMultiplier.toFixed(1)}x</span>
                      </p>
                    </div>

                    {/* Mid-Range */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-gold shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-forest">Mid-Range Scenario</h3>
                        <span className="px-3 py-1 rounded-full bg-gold/20 text-gold-dark text-xs font-medium">
                          Most Likely
                        </span>
                      </div>
                      <p className="text-sm text-ink-light mb-4">
                        $2,500 per tree at harvest • Good management & site
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-ink-muted uppercase tracking-wide">Harvest Value</p>
                          <p className="text-xl font-display font-bold text-gold-dark">
                            {formatCurrency(results.midRangeReturn)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-ink-muted uppercase tracking-wide">ROI</p>
                          <p className="text-xl font-display font-bold text-gold-dark">
                            {Math.round(results.midRangeROI)}%
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-ink-light">
                        Multiplies by <span className="font-medium text-gold-dark">{results.midRangeMultiplier.toFixed(1)}x</span>
                      </p>
                    </div>

                    {/* Premium */}
                    <div className="bg-white rounded-xl p-6 border-l-4 border-forest shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-forest">Premium Scenario</h3>
                        <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-medium">
                          Veneer Quality
                        </span>
                      </div>
                      <p className="text-sm text-ink-light mb-4">
                        $5,000 per tree at harvest • Excellent site & veneer quality
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-ink-muted uppercase tracking-wide">Harvest Value</p>
                          <p className="text-xl font-display font-bold text-forest">
                            {formatCurrency(results.premiumReturn)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-ink-muted uppercase tracking-wide">ROI</p>
                          <p className="text-xl font-display font-bold text-forest">
                            {Math.round(results.premiumROI)}%
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-ink-light">
                        Multiplies by <span className="font-medium text-forest">{results.premiumMultiplier.toFixed(1)}x</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-parchment rounded-2xl p-12 text-center">
                  <svg className="mx-auto h-12 w-12 text-gold/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="text-ink-light">
                    Enter your details and click &quot;Calculate Returns" to see your potential timber investment outcomes.
                  </p>
                </div>
              )}

              {/* Disclaimer */}
              <div className="bg-parchment rounded-xl p-5">
                <p className="text-xs text-ink-muted">
                  <span className="font-medium text-forest">Important:</span> These calculations are estimates based on historical timber market data. Actual returns depend on site conditions, management, market timing, and other factors. Timber investment involves risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="kicker-label text-gold-dark mb-4 inline-block">How It Works</span>
            <h2 className="text-forest">
              Understanding the <em className="text-gold-dark italic">Numbers</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Planting (Year 0)",
                description: `${businessInfo.keyFacts.treesPerAcre} trees per acre at ${businessInfo.keyFacts.spacing} spacing. Total cost: $${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre.`
              },
              {
                step: "2",
                title: "Strategic Thinning",
                description: "First thinning at year 10-15, second at 20-25. Remove lower-value trees to concentrate growth on the best specimens."
              },
              {
                step: "3",
                title: "Final Harvest",
                description: `${businessInfo.keyFacts.finalTreesPerAcre} premium trees per acre at year 35-50. Value depends on quality: $1,000-$5,000+ per tree.`
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-2xl font-bold text-gold-dark">{item.step}</span>
                </div>
                <h3 className="text-forest text-xl mb-3">{item.title}</h3>
                <p className="text-ink-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          <span className="kicker-label text-gold mb-4 inline-block">Ready to Invest?</span>
          <h2 className="text-cream mb-4">
            Ready to Start Your Timber <em className="text-gold italic">Investment?</em>
          </h2>
          <p className="text-cream/70 mb-8 max-w-[50ch] mx-auto">
            Download our free planting guide or browse our premium black walnut seedlings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark"
            >
              Get Free Guide
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link
              href="/seedlings"
              className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl border-2 border-cream/30 text-cream transition-all duration-300 hover:bg-cream/10"
            >
              View Seedlings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
