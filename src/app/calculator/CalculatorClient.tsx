"use client";

import { useState } from "react";
import { businessInfo } from "@/lib/config/business";

/**
 * ROI Calculator - Interactive Lead Generation Tool
 * 
 * Features:
 * - Interactive acreage and price inputs
 * - Real-time calculations
 * - Scenario comparison (Conservative, Mid-range, Premium)
 * - Email capture for results
 * - Brevo integration ready
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

    // Scenario returns per acre from business config
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
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-emerald-900 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Timber Investment Calculator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
            See the potential returns on your black walnut timber investment. 
            Calculate costs, returns, and ROI based on your acreage.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Input Form */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="font-serif text-2xl font-medium text-stone-900">
                Your Investment Details
              </h2>
              <p className="mt-2 text-stone-600">
                Adjust the values below to match your situation
              </p>

              <form onSubmit={handleCalculate} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="acres" className="block text-sm font-medium text-stone-700">
                    Number of Acres
                  </label>
                  <div className="mt-2 flex items-center gap-4">
                    <input
                      type="range"
                      id="acres-range"
                      min="0.5"
                      max="100"
                      step="0.5"
                      value={acres}
                      onChange={(e) => setAcres(parseFloat(e.target.value))}
                      className="flex-1 h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                    <input
                      type="number"
                      id="acres"
                      min="0.5"
                      max="1000"
                      step="0.5"
                      value={acres}
                      onChange={(e) => setAcres(parseFloat(e.target.value) || 0)}
                      className="w-24 rounded-md border border-stone-300 px-3 py-2 text-center text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <p className="mt-1 text-sm text-stone-500">
                    Based on {businessInfo.keyFacts.spacing} spacing ({businessInfo.keyFacts.treesPerAce} trees/acre)
                  </p>
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-stone-700">
                    Price per Seedling
                  </label>
                  <div className="mt-2 relative">
                    <span className="absolute left-3 top-2 text-stone-500">$</span>
                    <input
                      type="number"
                      id="price"
                      min="1"
                      max="50"
                      step="0.5"
                      value={pricePerTree}
                      onChange={(e) => setPricePerTree(parseFloat(e.target.value) || 0)}
                      className="w-full rounded-md border border-stone-300 pl-8 pr-3 py-2 text-stone-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <p className="mt-1 text-sm text-stone-500">
                    Current price: ${businessInfo.keyFacts.seedlingPrice} CAD each
                  </p>
                </div>

                <div className="rounded-lg bg-stone-50 p-4">
                  <p className="text-sm font-medium text-stone-700">Quick Summary</p>
                  <div className="mt-2 space-y-1 text-sm text-stone-600">
                    <p>Trees to plant: <span className="font-medium text-stone-900">{Math.round(acres * businessInfo.keyFacts.treesPerAcre).toLocaleString()}</span></p>
                    <p>Final trees at harvest: <span className="font-medium text-stone-900">{Math.round(acres * businessInfo.keyFacts.finalTreesPerAcre).toLocaleString()}</span></p>
                    <p>Timeline: <span className="font-medium text-stone-900">{businessInfo.keyFacts.harvestTimeline}</span></p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-700 px-6 py-3 text-base font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Calculate Returns
                </button>
              </form>

              {/* Email Capture */}
              {showResults && (
                <div className="mt-8 rounded-lg bg-emerald-50 p-6 border border-emerald-200">
                  <h3 className="font-medium text-emerald-900">
                    Get Your Detailed Report
                  </h3>
                  <p className="mt-2 text-sm text-emerald-700">
                    Enter your email to receive a detailed PDF report with your calculations, 
                    plus our free planting guide.
                  </p>
                  <div className="mt-4 space-y-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-emerald-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    <button
                      type="button"
                      className="w-full rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
                      onClick={() => {
                        // Brevo integration point
                        console.log("Email captured:", email);
                        alert("Thank you! Your report will be emailed to you. (Connect Brevo API for production)");
                      }}
                    >
                      Send Me the Report
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-emerald-600">
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
                  <div className="rounded-lg bg-stone-900 p-6 text-white">
                    <p className="text-sm text-stone-400">Initial Investment Required</p>
                    <p className="mt-2 text-4xl font-serif font-medium">
                      {formatCurrency(results.initialInvestment)}
                    </p>
                    <p className="mt-1 text-sm text-stone-400">
                      {Math.round(acres * businessInfo.keyFacts.treesPerAcre)} seedlings at ${pricePerTree} each
                    </p>
                  </div>

                  {/* Scenario Cards */}
                  <div className="space-y-4">
                    {/* Conservative */}
                    <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-amber-900">Conservative Scenario</h3>
                        <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-medium text-amber-800">
                          Average Quality
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-amber-700">
                        $1,000 per tree at harvest • Average site conditions
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-amber-600">Harvest Value</p>
                          <p className="text-2xl font-serif font-medium text-amber-900">
                            {formatCurrency(results.conservativeReturn)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-amber-600">ROI</p>
                          <p className="text-2xl font-serif font-medium text-amber-900">
                            {Math.round(results.conservativeROI)}%
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-amber-700">
                        Your investment multiplies by <span className="font-medium">{results.conservativeMultiplier.toFixed(1)}x</span>
                      </p>
                    </div>

                    {/* Mid-Range */}
                    <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-emerald-900">Mid-Range Scenario</h3>
                        <span className="rounded-full bg-emerald-200 px-3 py-1 text-xs font-medium text-emerald-800">
                          Most Likely
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-emerald-700">
                        $2,500 per tree at harvest • Good management & site
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-emerald-600">Harvest Value</p>
                          <p className="text-2xl font-serif font-medium text-emerald-900">
                            {formatCurrency(results.midRangeReturn)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-600">ROI</p>
                          <p className="text-2xl font-serif font-medium text-emerald-900">
                            {Math.round(results.midRangeROI)}%
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-emerald-700">
                        Your investment multiplies by <span className="font-medium">{results.midRangeMultiplier.toFixed(1)}x</span>
                      </p>
                    </div>

                    {/* Premium */}
                    <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-purple-900">Premium Scenario</h3>
                        <span className="rounded-full bg-purple-200 px-3 py-1 text-xs font-medium text-purple-800">
                          Veneer Quality
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-purple-700">
                        $5,000 per tree at harvest • Excellent site & veneer quality
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-purple-600">Harvest Value</p>
                          <p className="text-2xl font-serif font-medium text-purple-900">
                            {formatCurrency(results.premiumReturn)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-purple-600">ROI</p>
                          <p className="text-2xl font-serif font-medium text-purple-900">
                            {Math.round(results.premiumROI)}%
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-purple-700">
                        Your investment multiplies by <span className="font-medium">{results.premiumMultiplier.toFixed(1)}x</span>
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-lg bg-stone-100 p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-4 text-stone-600">
                    Enter your details and click &quot;Calculate Returns" to see your potential timber investment outcomes.
                  </p>
                </div>
              )}

              {/* Disclaimer */}
              <div className="rounded-lg bg-stone-100 p-4">
                <p className="text-xs text-stone-500">
                  <span className="font-medium">Important:</span> These calculations are estimates based on historical timber market data 
                  and typical outcomes. Actual returns depend on site conditions, management, market timing, and other factors. 
                  Timber investment involves risk and requires a {businessInfo.keyFacts.harvestTimeline} commitment. 
                  Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the Numbers */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-stone-900 text-center">
            Understanding the Numbers
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-2xl font-serif font-medium">
                1
              </div>
              <h3 className="mt-4 font-medium text-stone-900">Planting (Year 0)</h3>
              <p className="mt-2 text-stone-600">
                {businessInfo.keyFacts.treesPerAcre} trees per acre at {businessInfo.keyFacts.spacing} spacing. 
                Total cost: ${businessInfo.keyFacts.costPerAcre.toLocaleString()}/acre.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-2xl font-serif font-medium">
                2
              </div>
              <h3 className="mt-4 font-medium text-stone-900">Strategic Thinning</h3>
              <p className="mt-2 text-stone-600">
                First thinning at year 10-15, second at 20-25. Remove lower-value trees to 
                concentrate growth on the best specimens.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-2xl font-serif font-medium">
                3
              </div>
              <h3 className="mt-4 font-medium text-stone-900">Final Harvest</h3>
              <p className="mt-2 text-stone-600">
                {businessInfo.keyFacts.finalTreesPerAcre} premium trees per acre at year 35-50. 
                Value depends on quality: $1,000-$5,000+ per tree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-white">
            Ready to Start Your Timber Investment?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100">
            Download our free planting guide or browse our premium black walnut seedlings.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/guide/"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-emerald-900 hover:bg-emerald-50"
            >
              Get Free Guide
            </a>
            <a
              href="/seedlings/"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10"
            >
              View Seedlings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
