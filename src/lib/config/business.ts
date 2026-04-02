/**
 * Business Information - Single Source of Truth
 * All critical business data lives here and is imported across the app
 * This ensures consistency for SEO, Schema markup, Footer, Contact, etc.
 */

export const businessInfo = {
  // Core Identity
  name: "Little Tree Farm",
  tagline: "Helping landowners grow generational wealth, one acre at a time.",
  legalName: "Little Tree Farm Nursery",
  
  // Domain & URLs
  domain: "investment.littletreefarmns.com",
  mainDomain: "littletreefarmns.com",
  url: "https://investment.littletreefarmns.com",
  mainUrl: "https://littletreefarmns.com",
  
  // Contact & NAP (Critical for Local SEO)
  contact: {
    email: "info@littletreefarmns.com",
    phone: "+1-902-717-0003",
    phoneDisplay: "(902) 717-0003",
  },
  
  // Address (Exact format for NAP consistency)
  address: {
    street: "175 Sarty Road",
    city: "Wentzell Lake",
    state: "Nova Scotia",
    stateCode: "NS",
    country: "Canada",
    countryCode: "CA",
    postalCode: "B0R 1E0",
    full: "175 Sarty Road, Wentzell Lake, Nova Scotia, B0R 1E0, Canada",
  },
  
  // Geographic Info
  location: {
    latitude: 44.6819, // UPDATE with actual coordinates
    longitude: -63.7443, // UPDATE with actual coordinates
    timezone: "America/Halifax",
    hardinessZone: "5b", // Nova Scotia zone for black walnut
    region: "Atlantic Canada",
  },
  
  // Business Details
  business: {
    type: "Nursery",
    category: "Agriculture & Timber Investment",
    founded: "2018", // UPDATE with actual year
    employees: "2-10", // UPDATE as needed
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "E-Transfer"],
  },
  
  // Hours
  hours: {
    monday: "09:00-17:00",
    tuesday: "09:00-17:00",
    wednesday: "09:00-17:00",
    thursday: "09:00-17:00",
    friday: "09:00-17:00",
    saturday: "10:00-16:00",
    sunday: "Closed",
    seasonalNote: "Spring planting season hours may vary. Contact us to confirm availability.",
  },
  
  // Social Media (sameAs for Schema)
  social: {
    facebook: "https://www.facebook.com/littletreefarmns/",
    instagram: "https://www.instagram.com/littletreefarmns/",
    twitter: "",
    linkedin: "",
    youtube: "https://www.youtube.com/@littletreefarmns",
  },
  
  // Services & Products
  services: [
    "Black Walnut Seedlings",
    "Timber Investment Consultation",
    "Site Assessment",
    "Planting Guide & Resources",
    "Ongoing Grower Support",
    "Seedling Delivery Across Canada",
  ],
  
  products: [
    {
      name: "Black Walnut Seedlings",
      description: "Premium A-grade bare root seedlings for timber investment",
      price: 8,
      priceCurrency: "CAD",
      unit: "per seedling",
      sku: "BW-SEEDLING-A",
    },
  ],
  
  // Key Business Data for Content
  keyFacts: {
    seedlingPrice: 8,
    treesPerAcre: 218,
    costPerAcre: 1744,
    spacing: "10 × 20 feet",
    harvestTimeline: "35-50 years",
    conservativeReturnPerAcre: 25000,
    midRangeReturnPerAcre: 62500,
    premiumReturnPerAcre: 125000,
    finalTreesPerAcre: 25,
    shipping: "Canada-wide",
    guarantee: "Healthy arrival guarantee",
  },
  
  // Author/Expert Info (for E-E-A-T)
  experts: [
    {
      name: "Little Tree Farm Team",
      role: "Timber Investment Specialists",
      credentials: "Nova Scotia nursery operators with expertise in black walnut cultivation",
      bio: "Helping Canadian landowners transform unused land into generational timber wealth since 2018.",
    },
  ],
  
  // Keywords & SEO
  keywords: {
    primary: [
      "black walnut timber investment",
      "black walnut seedlings Canada",
      "timber investment Nova Scotia",
    ],
    secondary: [
      "black walnut trees for sale",
      "plant walnut trees for profit",
      "generational wealth timber",
      "walnut plantation Canada",
      "timber investment returns",
      "hardwood timber investment",
    ],
    local: [
      "tree nursery Nova Scotia",
      "seedlings Atlantic Canada",
      "black walnut Zone 5b",
    ],
  },
  
  // AI/GEO Optimization
  aiOptimization: {
    // Questions the content should answer for AI citation
    targetQuestions: [
      "What is black walnut timber investment?",
      "How much does it cost to plant black walnut trees?",
      "What are the returns on black walnut timber investment?",
      "How long does black walnut take to mature?",
      "Where to buy black walnut seedlings in Canada?",
      "What is the best spacing for black walnut trees?",
      "Is black walnut a good investment?",
      "How many black walnut trees per acre?",
    ],
    // Key entities for entity recognition
    entities: [
      "Black Walnut",
      "Juglans nigra",
      "Timber Investment",
      "Nova Scotia",
      "Hardwood Lumber",
      "Veneer Quality",
      "Sustainable Forestry",
    ],
  },
};

// Export individual pieces for convenience
export const { name, tagline, domain, url, contact, address, location, business, hours, social, services, products, keyFacts, experts, keywords, aiOptimization } = businessInfo;

// Schema.org helper - returns sameAs array for social links
export const getSameAsLinks = () => {
  return Object.values(social).filter(Boolean);
};

// Address formatter for different contexts
export const formatAddress = (format: "full" | "schema" | "oneline" = "full") => {
  const { street, city, state, postalCode, country } = address;
  
  switch (format) {
    case "schema":
      return {
        "@type": "PostalAddress",
        streetAddress: street,
        addressLocality: city,
        addressRegion: state,
        postalCode: postalCode,
        addressCountry: country,
      };
    case "oneline":
      return `${street}, ${city}, ${state} ${postalCode}`;
    case "full":
    default:
      return `${street}, ${city}, ${state}, ${postalCode}, ${country}`;
  }
};

// Hours formatter for Schema
export const getSchemaHours = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
  return days.map(day => {
    const hoursValue = hours[day.toLowerCase() as keyof typeof hours];
    if (hoursValue === "Closed") return null;
    return `Mo-Su ${hoursValue}`.replace(day.substring(0, 2), day.substring(0, 2));
  }).filter(Boolean);
};
