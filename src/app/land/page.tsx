import type { Metadata } from "next";
import { LandConversationPanel } from "@/components/land/v2/LandConversationPanel";
import { LandFuturesAtlas } from "@/components/land/v2/LandFuturesAtlas";
import { LandGuideLibrary } from "@/components/land/v2/LandGuideLibrary";
import { LandHubFaq, type LandHubFaqItem } from "@/components/land/v2/LandHubFaq";
import { LandHubNavigator } from "@/components/land/v2/LandHubNavigator";
import {
  GenerationalHorizon,
  LandReviewDossier,
  LandStewardshipCharter,
  LandStewardshipSpectrum,
  StewardshipTrail,
} from "@/components/land/v2/LandHubSections";
import { LandParcelHero } from "@/components/land/v2/LandParcelHero";
import {
  LandSituationPathfinder,
  type PathfinderItem,
  type PathfinderLink,
} from "@/components/land/v2/LandSituationPathfinder";
import styles from "@/components/land/v2/LandHubV2.module.css";
import { businessInfo } from "@/lib/config/business";
import { getLandGuide, landGuides } from "@/lib/land/guides";

const pagePath = "/land";
const pageUrl = `${businessInfo.url}${pagePath}`;
const publishedDate = "2026-08-06";
const modifiedDate = "2026-08-06";
const pageTitle = "Give Your Land a Lasting Purpose | Rural Land Stewardship Canada";
const pageDescription =
  "Own rural land, woodland or inherited property you no longer want? Explore donation, legacy, transfer and long-term stewardship options with Little Tree Farm.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "woodland conservation Canada",
    "stewardship of private land Canada",
    "responsible land transfer",
    "future of rural property",
    "woodlot stewardship",
    "woodland succession planning",
    "vacant land Canada",
    "rural property",
    "family farm succession",
    "abandoned farmland restoration",
    "estate planning for landowners",
    "forest legacy",
    "native trees",
    "wildlife habitat",
    "long-term land management",
  ],
  authors: [{ name: businessInfo.name, url: businessInfo.mainUrl }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  alternates: {
    canonical: pageUrl,
    languages: { "en-CA": pageUrl, "x-default": pageUrl },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: pageUrl,
    siteName: `${businessInfo.name} — Land Stewardship`,
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Land stewardship",
  classification:
    "Rural Land Stewardship, Woodland Succession, Responsible Land Transfer, Forest Restoration",
};

function guideLink(id: string, note: string): PathfinderLink {
  const guide = getLandGuide(id);

  if (!guide) {
    throw new Error(`Published land guide not found: ${id}`);
  }

  return {
    href: guide.href,
    title: guide.shortTitle,
    note,
  };
}

const pathfinderItems: readonly PathfinderItem[] = [
  {
    id: "unwanted-land",
    shortLabel: "I no longer want the land",
    title: "You can let go without making the next decision carelessly.",
    context:
      "Cost, distance, health or a change in life can turn a meaningful property into a responsibility you no longer want. That does not make you a poor steward.",
    firstMove:
      "Separate the need to stop owning the property from the question of who should own it next. Then compare the realistic paths and their trade-offs.",
    primary: guideLink("unwanted-rural-property", "A broad comparison of sale, transfer, donation and other practical options."),
    alternate: guideLink("unwanted-woodland", "A more personal guide when the property is specifically a woodlot or family woodland."),
  },
  {
    id: "inherited-land",
    shortLabel: "I inherited rural property",
    title: "First understand what you inherited—and what it asks of you.",
    context:
      "An inherited parcel can arrive with grief, family expectations, unclear records and ongoing expenses. You do not need to make a permanent decision immediately.",
    firstMove:
      "Confirm ownership, carrying costs, access and basic condition. Avoid major work or promises until you understand the title and have spoken with the other people affected.",
    primary: {
      href: "/blog/inherited-land-what-to-do",
      title: "Inherited Land: What Should You Do Next?",
      note: "A step-by-step starting point for facts, family conversations and immediate priorities.",
    },
    alternate: guideLink("unwanted-rural-property", "Use this once you are ready to compare the longer-term ownership options."),
  },
  {
    id: "family-succession",
    shortLabel: "My family does not want it",
    title: "A family chapter can end without erasing what the land meant.",
    context:
      "Children may live elsewhere, have different priorities or simply not want the work. Honest succession planning is kinder than leaving an unwanted responsibility unresolved.",
    firstMove:
      "Ask family members what they actually want rather than assuming. Then document your own priorities for the land and build a plan that does not depend on reluctant heirs.",
    primary: guideLink("unwanted-woodland", "Work through the emotional and practical questions around a woodland no one plans to take over."),
    alternate: guideLink("leave-land-in-your-will", "Learn how acceptance, alternate gifts and professional advice fit into estate planning."),
  },
  {
    id: "estate-planning",
    shortLabel: "I am planning my will",
    title: "A future gift only works if the future recipient can accept it.",
    context:
      "Naming land in a will is not the same as creating an executable stewardship plan. Estate costs, taxes, title issues and recipient capacity all matter.",
    firstMove:
      "Speak with the intended recipient before drafting final language, provide for an alternate outcome and have your own lawyer and tax adviser review the plan.",
    primary: guideLink("leave-land-in-your-will", "Understand the Canadian estate-planning sequence and the questions to bring to your advisers."),
    alternate: guideLink("land-after-death", "See how planning—or the lack of it—can send the same property toward very different futures."),
  },
  {
    id: "protect-or-restore",
    shortLabel: "I want to protect or restore it",
    title: "Begin with the outcome, then choose the tool that can support it.",
    context:
      "You may care most about woodland, water, wildlife or bringing abandoned ground back to life. Donation is one possible route, but not the only conservation tool.",
    firstMove:
      "Write down which ecological values matter most, how active management could fit, and whether your goal requires a legally enforceable restriction.",
    primary: guideLink("donate-land", "Compare donation structures, retained use, conservation tools and situations where selling may be better."),
    alternate: guideLink("forest-legacy", "Explore what long-term care can look like across a full century of forest change."),
  },
  {
    id: "early-exploration",
    shortLabel: "I am only beginning to think",
    title: "Starting early is useful—even when no decision is close.",
    context:
      "The best time to explore a land legacy is before health, cost or an estate deadline forces a hurried choice. Curiosity creates room for better questions.",
    firstMove:
      "Begin a simple land file: basic ownership records, a map, approximate costs, photographs and a one-page note about what you hope survives a change in ownership.",
    primary: guideLink("land-after-death", "A gentle story-led introduction to why the next chapter needs to be planned."),
    alternate: guideLink("forest-legacy", "Use the interactive timeline to imagine the land beyond one ownership cycle."),
  },
] as const;

const faqs = [
  {
    question: "Does Little Tree Farm accept every property?",
    answer:
      "No. Every property must be reviewed individually. Location, legal status, access, condition, liabilities, cost and realistic long-term stewardship potential can all affect whether any arrangement is workable.",
  },
  {
    question: "Will Little Tree Farm purchase my land?",
    answer:
      "Possibly, but no purchase or price is guaranteed. Depending on the property and circumstances, the realistic path may be a conventional sale, a donation or future gift, another recipient, more planning, or no transfer to Little Tree Farm.",
  },
  {
    question: "Can land be donated in Canada?",
    answer:
      "Land can generally be gifted or transferred, but legal and tax consequences depend on the owner, property, recipient and structure. A donation does not automatically produce a charitable receipt. Obtain independent legal and tax advice for your situation.",
  },
  {
    question: "Can I leave land to Little Tree Farm in my will?",
    answer:
      "A landowner may be able to name a recipient in a will, but the recipient should be consulted and must be able to accept the property when the estate is administered. Debts, taxes, title, carrying costs and an alternate plan should be considered with your lawyer.",
  },
  {
    question: "Can I specify what happens to the land?",
    answer:
      "Your wishes should be discussed clearly. Whether they can bind future owners depends on the law, the property and the formal documents used. A webpage, conversation or informal understanding is not a permanent land-use restriction.",
  },
  {
    question: "Will stewardship mean leaving the land untouched?",
    answer:
      "Not necessarily. Some areas may be best left largely natural; others may benefit from restoration, planting or careful management. Any proposed role should fit the site and be practical to sustain.",
  },
  {
    question: "What if the property has a mortgage, lien or unpaid taxes?",
    answer:
      "Those issues must be disclosed and professionally reviewed. Little Tree Farm does not promise to assume a debt, lien, tax arrears, environmental concern or other liability attached to a property.",
  },
  {
    question: "Can I reach out before I am ready to act?",
    answer:
      "Yes. An early conversation can help identify the facts and professional advice you may need. It creates no obligation for you to proceed and no obligation for Little Tree Farm to accept or acquire the property.",
  },
] as const satisfies readonly LandHubFaqItem[];

function getJsonLd() {
  const guideItems = landGuides.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${businessInfo.url}${guide.href}`,
    name: guide.title,
    item: {
      "@type": "Article",
      headline: guide.title,
      description: guide.hook,
      url: `${businessInfo.url}${guide.href}`,
      datePublished: guide.publishedAt,
      dateModified: guide.modifiedAt,
      inLanguage: "en-CA",
      about: guide.primaryIntent,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        name: pageTitle,
        headline: "Give Your Land a Lasting Purpose",
        description: pageDescription,
        url: pageUrl,
        inLanguage: "en-CA",
        datePublished: publishedDate,
        dateModified: modifiedDate,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${businessInfo.url}#website`,
          url: businessInfo.url,
          name: businessInfo.name,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${businessInfo.mainUrl}#organization`,
          name: businessInfo.name,
          url: businessInfo.mainUrl,
          logo: {
            "@type": "ImageObject",
            url: `${businessInfo.url}/little-tree-farms-logo.png`,
          },
        },
        about: [
          "Rural land stewardship in Canada",
          "Responsible land transfer",
          "Woodland succession planning",
          "Forest restoration",
          "Land legacy",
        ],
        mainEntity: { "@id": `${pageUrl}#guide-library` },
        hasPart: guideItems.map((entry) => entry.item),
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#guide-library`,
        name: "Land Stewardship Knowledge Centre",
        numberOfItems: guideItems.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: guideItems,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: businessInfo.url },
          { "@type": "ListItem", position: 2, name: "Land Stewardship", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export default function LandHubPage() {
  const schema = JSON.stringify(getJsonLd()).replace(/</g, "\\u003c");

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <LandParcelHero />
      <LandHubNavigator />

      <div>
        <LandSituationPathfinder items={pathfinderItems} />
        <LandStewardshipSpectrum />
        <LandFuturesAtlas />
        <LandStewardshipCharter />
        <LandReviewDossier />
        <GenerationalHorizon />
        <StewardshipTrail />
        <LandGuideLibrary />
        <LandHubFaq items={faqs} />
        <LandConversationPanel />
      </div>

      <aside className={styles.legalNote} aria-label="Important legal information">
        <div className={styles.sectionWrap}>
          <span>Important</span>
          <p>
            This page provides general information, not legal, tax, estate-planning,
            real-estate, appraisal or conservation advice. No property, donation,
            purchase, transfer, restriction or tax treatment is accepted or promised
            through this website. Obtain independent professional advice before acting.
          </p>
        </div>
      </aside>
    </div>
  );
}
