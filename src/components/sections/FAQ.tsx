"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { businessInfo } from "@/lib/config/business";

/**
 * FAQ Section - Comprehensive Questions & Answers
 * 
 * SEO Features:
 * - FAQPage Schema.org markup for rich snippets
 * - Answer-first structure for AI citation
 * - Expandable accordions for UX
 * - Target keywords naturally integrated
 * - Links to deeper content
 */

const faqs = [
  {
    question: "What is black walnut timber investment?",
    answer: `Black walnut timber investment is a long-term wealth-building strategy where landowners plant Juglans nigra (black walnut) trees on unused land and harvest them after 35-50 years. A single mature black walnut tree can be worth $1,000-$5,000, making an acre of well-managed trees potentially worth $25,000-$125,000 at harvest.`,
    keywords: ["timber investment", "black walnut", "Juglans nigra", "long-term investment"],
  },
  {
    question: "How much does it cost to plant black walnut trees per acre?",
    answer: `The total cost is $${businessInfo.keyFacts.costPerAcre.toLocaleString()} per acre. This includes ${businessInfo.keyFacts.treesPerAcre} seedlings at $${businessInfo.keyFacts.seedlingPrice} each, planted at ${businessInfo.keyFacts.spacing} spacing. Additional costs may include site preparation and initial maintenance, but no ongoing fertilizer or expensive equipment is required.`,
    keywords: ["cost per acre", "seedling price", "planting cost"],
  },
  {
    question: "What is the best spacing for black walnut plantation?",
    answer: `The optimal spacing for black walnut timber production is 10 feet between trees within rows and 20 feet between rows (10×20 ft). This tight spacing forces trees to compete for sunlight, driving upward growth and producing tall, straight trunks with minimal lower branching—exactly what veneer buyers want.`,
    keywords: ["spacing", "plantation density", "tree spacing"],
  },
  {
    question: "How long until black walnut trees are ready to harvest?",
    answer: `Black walnut trees reach timber harvest size in ${businessInfo.keyFacts.harvestTimeline}. The timeline includes: Year 0 - Planting; Years 10-15 - First thinning (remove weaker trees); Years 20-25 - Second thinning; Years 35-50 - Final harvest of approximately ${businessInfo.keyFacts.finalTreesPerAcre} premium trees per acre.`,
    keywords: ["harvest time", "maturity", "timber timeline"],
  },
  {
    question: "What are the potential returns on black walnut timber investment?",
    answer: `Returns vary by tree quality: Conservative scenario ($1,000/tree, $25,000/acre), Mid-range ($2,500/tree, $62,500/acre), Premium veneer quality ($5,000+/tree, $125,000+/acre). These returns are not guaranteed and depend on site conditions, management, and market timing. Historically, black walnut timber has appreciated steadily due to increasing scarcity.`,
    keywords: ["ROI", "returns", "investment potential", "timber value"],
  },
  {
    question: "Where can I buy black walnut seedlings in Canada?",
    answer: `Little Tree Farm in ${businessInfo.address.city}, ${businessInfo.address.state} specializes in premium black walnut seedlings for timber investment. We ship ${businessInfo.keyFacts.shipping} and provide A-grade bare root seedlings selected for timber characteristics. Our seedlings are specifically grown for long-term timber production, not just shade or ornamental use.`,
    keywords: ["buy seedlings", "nursery", "Canada", "black walnut trees for sale"],
  },
  {
    question: "What hardiness zones can black walnut grow in Canada?",
    answer: `Black walnut thrives in Canadian hardiness zones 4b through 8b. In Nova Scotia and Atlantic Canada, they grow well in zones 5b-6b. They prefer deep, well-drained soils and full sun. While they can tolerate some clay, avoid areas with standing water or compacted soils.`,
    keywords: ["hardiness zone", "climate", "growing conditions", "Canada"],
  },
  {
    question: "Do I need to fertilize or actively manage black walnut trees?",
    answer: `Black walnut requires minimal active management compared to other investments. They don't need fertilizer if planted in decent soil. Main management tasks are: weed control for first 2-3 years, pruning lower branches when young, and strategic thinning at years 10-15 and 20-25. No spraying, no annual inputs, no daily attention required.`,
    keywords: ["maintenance", "management", "fertilizer", "low maintenance"],
  },
  {
    question: "What is strategic thinning and why is it important?",
    answer: `Thinning is removing lower-value trees to give the best specimens more room and resources. First thinning (years 10-15) reduces 218 trees/acre to ~100. Second thinning (years 20-25) reduces to ~50. Final harvest leaves ${businessInfo.keyFacts.finalTreesPerAcre} exceptional trees. This concentrates growth into fewer, higher-value trees rather than many mediocre ones.`,
    keywords: ["thinning", "forest management", "timber quality"],
  },
  {
    question: "Is black walnut timber a good investment compared to stocks or real estate?",
    answer: `Black walnut offers unique advantages: it's not correlated with stock market volatility, it's inflation-resistant (hardwood appreciates with inflation), it's tax-efficient (capital gains treatment at harvest), and it's a tangible asset on your land. However, it's illiquid (35-50 year timeline) and returns aren't guaranteed. It works best as a diversification strategy alongside traditional investments.`,
    keywords: ["investment comparison", "alternative investment", "diversification"],
  },
  {
    question: "What type of land is suitable for planting black walnut?",
    answer: `Ideal sites include: unused pasture edges, old field corners, scrubby ground too poor for crops, fence lines, and areas with 6+ hours of daily sun. Soil should be moderately deep and well-drained. Avoid: wetlands, compacted construction sites, areas under power lines, and dense shade. Even marginal land can produce valuable timber with proper spacing and initial care.`,
    keywords: ["site selection", "land requirements", "soil conditions"],
  },
  {
    question: "Does Little Tree Farm provide support after I buy seedlings?",
    answer: `Yes. We provide a comprehensive planting guide, site selection advice, and ongoing grower support through our email list. While we can't visit every property, we offer guidance on spacing, thinning decisions, and general management questions. We also connect growers with our community of timber investors across Canada.`,
    keywords: ["support", "planting guide", "grower community"],
  },
  {
    question: "How are black walnut seedlings shipped?",
    answer: `We ship bare root seedlings ${businessInfo.keyFacts.shipping} during optimal planting seasons (spring and fall). Seedlings are carefully packed to prevent damage and should be planted within 48 hours of arrival. We provide detailed planting instructions with every order. Local pickup is also available at our ${businessInfo.address.city} nursery.`,
    keywords: ["shipping", "delivery", "bare root seedlings"],
  },
  {
    question: "What is veneer quality timber and why is it so valuable?",
    answer: `Veneer quality black walnut is the highest grade—trees with straight, clean trunks free of knots and defects for at least 16 feet. This wood is sliced into ultra-thin sheets for luxury furniture, musical instruments, and high-end interiors. A single veneer-grade log can be worth $5,000-$10,000+, which is why proper spacing and pruning to produce clean trunks is so important.`,
    keywords: ["veneer quality", "timber grades", "black walnut value"],
  },
  {
    question: "Are there any risks with black walnut timber investment?",
    answer: `Yes, as with any investment. Risks include: timber market price fluctuations, natural disasters (wind, disease), theft or vandalism, requiring 35-50 year commitment, and variable returns based on site quality and management. However, black walnut has historically maintained or increased in value, and risks can be mitigated with insurance, proper site selection, and basic management practices.`,
    keywords: ["risks", "investment risks", "timber market"],
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQPage schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden py-28 bg-cream" id="faq">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{ 
            backgroundImage: "radial-gradient(circle, rgba(26,58,42,0.03) 1px, transparent 1px)", 
            backgroundSize: "28px 28px" 
          }}
        />

        <div className="relative z-[1] max-w-[900px] mx-auto px-6">
          {/* Header */}
          <div
            ref={ref}
            className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="kicker-label text-gold-dark mb-4 inline-block">Common Questions</span>
            <h2 className="text-ink mb-6">
              Frequently Asked <em className="text-forest italic">Questions</em>
            </h2>
            <p className="text-intro max-w-[55ch] mx-auto text-ink-light">
              Everything you need to know about black walnut timber investment, 
              from seedlings to harvest.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div 
            className="space-y-4"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border-l-4 border-transparent shadow-sm transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "border-gold shadow-md" : "hover:border-gold/50 hover:shadow-md"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 50}ms` }}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  aria-expanded={openIndex === i ? "true" : "false"}
                >
                  <h3 
                    className="text-forest font-display font-semibold text-lg pr-4"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <span className={`shrink-0 w-8 h-8 rounded-full bg-parchment flex items-center justify-center text-forest transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "pb-6 max-h-96" : "max-h-0"
                  }`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p 
                    className="text-ink-light leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className={`text-center mt-16 p-8 bg-parchment rounded-2xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-ink mb-4">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href={`mailto:${businessInfo.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg bg-forest text-cream border-2 border-forest transition-all duration-300 hover:bg-forest-light hover:border-forest-light"
              >
                Email Us →
              </a>
              <span className="text-ink-muted">or</span>
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-lg border-2 border-forest text-forest transition-all duration-300 hover:bg-forest hover:text-cream"
              >
                Call {businessInfo.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
