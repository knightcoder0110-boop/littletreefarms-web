import type { Metadata } from "next";
import { businessInfo } from "@/lib/config/business";
import FAQPageClient from "./FAQPageClient";

/**
 * FAQ Page - Comprehensive Questions & Answers
 * 
 * SEO Features:
 * - Dynamic metadata with FAQ-focused keywords
 * - FAQPage schema generated server-side
 * - Answer-first content structure
 * - Mobile-responsive design
 * - Canonical URL
 * - BreadcrumbList schema
 */

// Generate comprehensive FAQ schema
const generateFAQSchema = () => {
  const faqs = [
    {
      question: "What is black walnut timber investment?",
      answer: "Black walnut timber investment is a long-term wealth-building strategy where landowners plant Juglans nigra (black walnut) trees on unused land and harvest them after 35-50 years. A single mature black walnut tree can be worth $1,000-$5,000, making an acre of well-managed trees potentially worth $25,000-$125,000 at harvest. Unlike stocks or real estate, timber investment appreciates naturally through biological growth and increasing scarcity.",
    },
    {
      question: "How much does it cost to plant black walnut trees per acre?",
      answer: `The total seedling cost is $${businessInfo.keyFacts.costPerAcre.toLocaleString()} per acre. This includes ${businessInfo.keyFacts.treesPerAcre} seedlings at $${businessInfo.keyFacts.seedlingPrice} each, planted at ${businessInfo.keyFacts.spacing} spacing. Additional one-time costs may include site preparation ($200-500/acre) and initial weed control. There are no ongoing annual costs like fertilizer, irrigation, or expensive equipment.`,
    },
    {
      question: "What is the best spacing for black walnut timber plantation?",
      answer: "The optimal spacing for black walnut timber production is 10 feet between trees within rows and 20 feet between rows (10×20 ft). This tight spacing forces trees to compete for sunlight, driving upward growth and producing tall, straight trunks with minimal lower branching—exactly what veneer buyers want. This spacing yields approximately 218 trees per acre initially.",
    },
    {
      question: "How long until black walnut trees are ready to harvest?",
      answer: `Black walnut trees reach timber harvest size in ${businessInfo.keyFacts.harvestTimeline}. The timeline includes: Year 0 - Planting 218 trees per acre; Years 10-15 - First thinning to ~100 trees/acre; Years 20-25 - Second thinning to ~50 trees/acre; Years 35-50 - Final harvest of approximately ${businessInfo.keyFacts.finalTreesPerAcre} premium trees per acre. This long timeline is why timber is considered a generational investment.`,
    },
    {
      question: "What are the potential returns on black walnut timber investment?",
      answer: "Returns vary significantly by tree quality and market conditions. Conservative scenario: $1,000 per tree, $25,000 per acre. Mid-range with good management: $2,500 per tree, $62,500 per acre. Premium veneer quality on excellent sites: $5,000+ per tree, $125,000+ per acre. These are long-term estimates based on historical timber appreciation, not guaranteed returns. Past performance of timber markets shows steady appreciation due to increasing scarcity.",
    },
    {
      question: "Where can I buy black walnut seedlings in Canada?",
      answer: `Little Tree Farm in ${businessInfo.address.city}, ${businessInfo.address.state} specializes in premium black walnut seedlings specifically grown for timber investment. We ship ${businessInfo.keyFacts.shipping} and provide A-grade bare root seedlings selected for superior timber characteristics. Unlike generic nursery stock, our seedlings are sourced and grown specifically for long-term timber production, not just shade or ornamental use.`,
    },
    {
      question: "What hardiness zones can black walnut grow in Canada?",
      answer: "Black walnut (Juglans nigra) thrives in Canadian hardiness zones 4b through 8b. In Nova Scotia and Atlantic Canada, they grow excellently in zones 5b-6b. They prefer deep, well-drained loamy soils and full sun (6+ hours daily). While they can tolerate some clay, avoid areas with standing water, compacted soils, or high water tables. In Canada, they're suitable for most of Ontario, Quebec, Nova Scotia, New Brunswick, and parts of Manitoba.",
    },
    {
      question: "Do I need to fertilize or actively manage black walnut trees?",
      answer: "Black walnut requires minimal active management compared to other investments. They typically don't need fertilizer if planted in decent soil with adequate organic matter. Main management tasks are: weed control for first 2-3 years (critical), occasional pruning of lower branches when young to encourage clear trunks, and strategic thinning at years 10-15 and 20-25. No spraying, no annual inputs, no daily attention required—making it ideal for absentee landowners.",
    },
    {
      question: "What is strategic thinning and why is it important?",
      answer: "Thinning is the selective removal of lower-value trees to concentrate growth into the best specimens. First thinning (years 10-15) reduces 218 trees/acre to approximately 100. Second thinning (years 20-25) reduces to approximately 50. Final harvest leaves 25 exceptional trees spaced 35-40 feet apart. This process transforms many mediocre trees into fewer high-value timber trees. The thinned trees can be sold for lumber or firewood, providing interim income.",
    },
    {
      question: "Is black walnut timber a good investment compared to stocks or real estate?",
      answer: "Black walnut offers unique advantages as a diversification strategy: it's not correlated with stock market volatility, inflation-resistant (hardwood appreciates with inflation), potentially tax-efficient (capital gains treatment at harvest in many jurisdictions), and a tangible hard asset on your land. However, it's highly illiquid (35-50 year timeline), returns aren't guaranteed, and it requires patience. It works best as part of a diversified portfolio alongside traditional investments, not as a replacement.",
    },
    {
      question: "What type of land is suitable for planting black walnut?",
      answer: "Ideal sites include: unused pasture edges, old field corners, scrubby ground too marginal for crops, fence lines, field perimeters, and areas with 6+ hours of daily sun. Soil should be moderately deep (3+ feet), well-drained, and fertile. pH 6.0-7.5 is ideal. Avoid: wetlands, compacted construction sites, areas under power lines, dense shade, and frost pockets. Even marginal land can produce valuable timber with proper spacing and initial care.",
    },
    {
      question: "Does Little Tree Farm provide support after I buy seedlings?",
      answer: "Yes, comprehensive support is included. We provide a detailed planting guide with step-by-step instructions, site selection advice via phone/email, spacing and thinning guidance throughout the life of your plantation, and ongoing grower support through our email newsletter. We also connect growers with our community of timber investors across Canada for peer advice and market updates.",
    },
    {
      question: "How are black walnut seedlings shipped?",
      answer: `We ship bare root seedlings ${businessInfo.keyFacts.shipping} during optimal planting seasons (spring: March-May and fall: September-November). Seedlings are carefully packed in moist packing material to prevent root drying during transit. Orders should be planted within 48 hours of arrival for best results. We provide detailed planting instructions with every order. Local pickup is available at our ${businessInfo.address.city} nursery by appointment.`,
    },
    {
      question: "What is veneer quality timber and why is it so valuable?",
      answer: "Veneer quality black walnut is the highest timber grade—trees with straight, clean trunks free of knots, branches, and defects for at least 16 feet (called 'clear bole'). This premium wood is sliced into ultra-thin decorative sheets for luxury furniture, musical instruments, high-end interiors, and architectural millwork. A single veneer-grade black walnut log can command $5,000-$15,000+. This is why proper spacing (to force upward growth) and early pruning are critical to timber investment success.",
    },
    {
      question: "Are there any risks with black walnut timber investment?",
      answer: "Yes, as with any investment, risks exist: timber market price fluctuations (though historically stable upward trend), natural disasters like windstorms or disease outbreaks, theft/vandalism in remote areas, illiquidity (35-50 year commitment required), and variable returns based on site quality, management, and market timing. However, risks can be mitigated with insurance, proper site selection, diversification across multiple acres, and basic management practices. Black walnut has historically been one of the most stable timber investments.",
    },
    {
      question: "Can I sell the thinned trees for income before final harvest?",
      answer: "Absolutely. Strategic thinning produces income opportunities before final harvest. Trees removed at first thinning (years 10-15) can be sold as poles or firewood. Trees from second thinning (years 20-25) often have value as sawlogs for lumber. While not as valuable as final veneer trees, these interim sales can offset management costs and provide cash flow. Many landowners use thinning revenue to expand their plantation acreage.",
    },
    {
      question: "What about walnut nuts—can I generate income from nut production?",
      answer: "While black walnut trees do produce edible nuts, nut production is generally not the primary income strategy for timber plantations. Nut production reduces timber value because it causes branchy growth rather than straight trunks. However, after final thinning when trees have room to spread, some landowners do harvest nuts as a secondary income stream. The real value is in the timber—nuts are a bonus, not a business model.",
    },
    {
      question: "How much land do I need to start a black walnut plantation?",
      answer: "You can start with as little as one acre, though 5-20 acres is often considered a practical minimum for meaningful timber investment. Even one acre planted thoughtfully begins a compounding process. At 218 trees per acre initially, thinning to 25 final trees, you're establishing a generational asset. Many landowners start with a few acres of their least productive land as a 'test' before expanding.",
    },
    {
      question: "What happens if I don't live to see the final harvest?",
      answer: "This is actually a feature, not a bug. Timber investment is designed as a generational wealth transfer. Your plantation becomes part of your estate—something tangible and valuable to pass to children or grandchildren. The trees continue growing and appreciating regardless of ownership changes. Many families view timber plantations as their legacy—something that benefits descendants they may never meet. Proper estate planning ensures smooth transfer.",
    },
    {
      question: "How do I get started with my first black walnut planting?",
      answer: "The first step is assessing your land and ordering seedlings. Download our free planting guide, evaluate potential sites (look for sun, drainage, and soil depth), decide on your initial acreage, and place a seedling order for spring or fall delivery. We recommend starting with a small test plot (1-2 acres) if you're new to timber investment. Our team is available to answer site selection questions before you order.",
    },
    {
      question: "What is Juglans nigra and why is it special?",
      answer: "Juglans nigra is the scientific name for Eastern Black Walnut, a native North American hardwood tree renowned for its extraordinary timber quality. It's special because: the wood has rich, dark chocolate-brown color with striking grain patterns; it's naturally resistant to decay and insects; it commands premium prices in the market; it has been prized for centuries by furniture makers, gunsmiths, and luxury interior designers; and it cannot be synthetically replicated—demand always exceeds supply.",
    },
    {
      question: "Can black walnut grow in Zone 5b in Canada?",
      answer: "Yes, black walnut grows excellently in Zone 5b, which covers much of Southern Ontario, Quebec, Nova Scotia, and New Brunswick. Zone 5b has winter lows of -26 to -23°C (-15 to -10°F), which black walnut tolerates well once established. The key is proper site selection—avoiding frost pockets and ensuring good snow cover for winter protection of young trees. Nova Scotia's climate is ideal for black walnut cultivation.",
    },
    {
      question: "How does the 10×20 ft spacing system work?",
      answer: "The 10×20 ft spacing system is designed specifically for timber production: trees are planted 10 feet apart within rows and 20 feet between rows. This creates 218 trees per acre initially. The tight spacing forces intense competition for light, causing trees to grow rapidly upward rather than outward. This produces tall, straight trunks with minimal lower branches—exactly what veneer buyers want. The system is proven, simple, and optimized for maximum timber value.",
    },
    {
      question: "What is the difference between black walnut seedlings and nursery stock?",
      answer: "Timber-grade black walnut seedlings are specifically selected and grown for timber characteristics—straight growth habit, strong apical dominance, and vigorous root systems. Generic nursery stock may be grown for ornamental qualities (broad canopy, decorative form) that actually reduce timber value. Our seedlings are A-grade bare root stock sourced from superior parent trees known for timber production, ensuring your plantation has the genetic potential for premium logs.",
    },
    {
      question: "How do I contact Little Tree Farm?",
      answer: `You can reach us at ${businessInfo.contact.phoneDisplay} by phone, email us at ${businessInfo.contact.email}, or visit our nursery at ${businessInfo.address.street}, ${businessInfo.address.city}, ${businessInfo.address.state}. We're available Monday-Friday 9am-5pm AST and Saturday 10am-4pm. For seedling inquiries and site selection advice, we recommend calling or emailing to discuss your specific property before ordering.`,
    },
  ];

  return {
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
};

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
      name: "FAQ",
      item: `${businessInfo.url}/faq`,
    },
  ],
});

export const metadata: Metadata = {
  title: "FAQ | Black Walnut Timber Investment Questions Answered | Little Tree Farm",
  description: `Comprehensive FAQ about black walnut timber investment in Canada. Cost: $${businessInfo.keyFacts.costPerAcre}/acre, returns: $25k-$125k, timeline: 35-50 years. Get answers to all your timber investment questions.`,
  keywords: [
    "black walnut timber investment FAQ",
    "timber investment questions",
    "black walnut seedlings Canada",
    "how much is black walnut worth",
    "Juglans nigra growing guide",
    "timber plantation spacing",
    "hardiness zone 5b trees",
    "Nova Scotia timber investment",
    ...businessInfo.keywords.primary,
  ],
  alternates: {
    canonical: `${businessInfo.url}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions | Black Walnut Timber Investment",
    description: `Everything you need to know about investing in black walnut timber. Cost: $${businessInfo.keyFacts.costPerAcre}/acre. Returns: $25k-$125k per acre.`,
    url: `${businessInfo.url}/faq`,
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function FAQ() {
  const faqSchema = generateFAQSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <FAQPageClient />
    </>
  );
}
