"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { businessInfo } from "@/lib/config/business";

/**
 * Quick Facts Section - AI-Optimized "Answer-First" Content
 * 
 * This section is designed for AI search engine citation (GEO).
 * It uses direct question-answer format that AI engines can easily extract.
 * Key facts use high-entropy data (specific numbers) for maximum AI visibility.
 */

const quickFacts = [
  {
    question: "What is black walnut timber investment?",
    answer: "A long-term wealth-building strategy where landowners plant black walnut trees (Juglans nigra) and harvest them after 35-50 years for premium hardwood timber valued at $1,000-$5,000 per tree.",
  },
  {
    question: "How much does it cost to start?",
    answer: `${businessInfo.keyFacts.seedlingPrice} per seedling. At ${businessInfo.keyFacts.treesPerAcre} trees per acre, total cost is $${businessInfo.keyFacts.costPerAcre.toLocaleString()} per acre.`,
  },
  {
    question: "What are the potential returns?",
    answer: `After 35-50 years, one acre can yield $${businessInfo.keyFacts.conservativeReturnPerAcre.toLocaleString()} (conservative) to $${businessInfo.keyFacts.premiumReturnPerAcre.toLocaleString()} (premium veneer quality). That's ${businessInfo.keyFacts.finalTreesPerAcre} trees per acre at harvest.`,
  },
  {
    question: "What spacing should I use?",
    answer: `${businessInfo.keyFacts.spacing} spacing. This drives upward growth, producing tall, straight trunks ideal for high-value timber.`,
  },
  {
    question: "How long until harvest?",
    answer: `${businessInfo.keyFacts.harvestTimeline}. First thinning occurs at 10-15 years, second at 20-25 years, with final harvest at 35-50 years.`,
  },
  {
    question: "Where can I buy seedlings in Canada?",
    answer: `Little Tree Farm in ${businessInfo.address.city}, ${businessInfo.address.state} ships ${businessInfo.keyFacts.shipping}. A-grade bare root seedlings ready for planting.`,
  },
];

export function QuickFacts() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      className="relative overflow-hidden py-24 bg-forest-dark" 
      id="quick-facts"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{ 
          backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.08) 1px, transparent 1px)", 
          backgroundSize: "32px 32px" 
        }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="kicker-label text-gold mb-4 inline-block">Quick Answers</span>
          <h2 className="text-cream mb-6">
            Black Walnut Timber Investment:<br />
            <em className="text-gold not-italic">The Facts</em>
          </h2>
          <p className="text-intro max-w-[55ch] mx-auto text-white/75">
            Direct answers to the most important questions about timber investment. 
            No fluff. Just facts.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickFacts.map((fact, i) => (
            <div
              key={i}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-gold/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              {/* Question */}
              <h3 
                className="text-gold text-lg font-display font-semibold mb-4 leading-tight"
                itemProp="name"
              >
                {fact.question}
              </h3>
              
              {/* Answer */}
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p 
                  className="text-white/90 text-body leading-relaxed"
                  itemProp="text"
                >
                  {fact.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-white/60 text-small mb-4">
            Have more questions? Check our comprehensive FAQ.
          </p>
          <a 
            href="/faq" 
            className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5"
          >
            View Full FAQ →
          </a>
        </div>
      </div>
    </section>
  );
}
