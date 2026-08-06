import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandFaq, type LandFaqItem } from "@/components/land/LandFaq";
import { LandInquiryForm } from "@/components/land/LandInquiryForm";
import { TreeRings } from "@/components/land/TreeRings";
import { landGuides } from "@/lib/land/guides";
import hub from "@/components/land/LandHub.module.css";
import article from "@/components/land/LandArticle.module.css";
import { businessInfo } from "@/lib/config/business";

const pagePath = "/land";
const pageUrl = `${businessInfo.url}${pagePath}`;
const publishedDate = "2026-08-06";
const pageTitle = "Give Your Land a Lasting Purpose | Rural Land Stewardship Canada";
const pageDescription =
  "Own rural land, woodland or inherited property you no longer want? Explore donation, legacy, transfer and long-term stewardship options with Little Tree Farm.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "woodland conservation Canada",
    "stewardship of private land",
    "responsible land transfer",
    "future of rural property",
    "woodlot",
    "woodland",
    "vacant land",
    "rural property",
    "family farm",
    "abandoned farmland",
    "estate planning",
    "future generations",
    "conservation",
    "forest restoration",
    "native trees",
    "wildlife habitat",
    "property transfer",
    "landowner",
    "long-term land management",
    "responsible stewardship",
  ],
  authors: [{ name: businessInfo.name, url: businessInfo.mainUrl }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  alternates: {
    canonical: pageUrl,
    languages: { "en-CA": pageUrl },
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
};

const situations = [
  { tag: "Current Owner", title: "I Own Land I No Longer Want", copy: "You're already weighing a possible transfer, sale or stewardship arrangement.", href: "/land/unwanted-rural-property", cta: "Compare your options" },
  { tag: "Unexpected", title: "I Inherited Rural Property", copy: "You became responsible for vacant land, woodland, or an old family property.", href: "/blog/inherited-land-what-to-do", cta: "Work through it" },
  { tag: "Planning Ahead", title: "I Want to Leave Land in My Will", copy: "You're considering a future gift or legacy arrangement as part of your estate.", href: "/land/leave-land-in-your-will", cta: "Read the guide" },
  { tag: "Family", title: "My Family Doesn't Want the Property", copy: "Your children or relatives don't intend to take over the land.", href: "/land/i-dont-want-my-woodland-anymore", cta: "See woodland options" },
  { tag: "Ecology First", title: "I Want the Land Preserved or Restored", copy: "Your main concern is the property's future ecological condition.", href: "/land/donate-land", cta: "Explore donation" },
  { tag: "Just Exploring", title: "I'm Not Ready to Decide", copy: "You'd like a confidential, no-pressure conversation before deciding anything.", href: "/land/what-happens-to-my-land-when-i-die", cta: "Start with the story" },
] as const;

const futureIcons = {
  forest: (<><path d="M7 20 L11 8 L15 20 Z" /><path d="M13 20 L17 11 L21 20 Z" /><path d="M3 20 H24" /></>),
  bird: (<><path d="M4 16 C8 10 13 9 18 12 L22 10 L19.5 13.5 C20 17 16.5 20 12 19.5 C8 19 5.5 18 4 16 Z" /><circle cx="16.5" cy="12.4" r="0.4" /></>),
  seed: (<><circle cx="12" cy="9" r="3.4" /><path d="M12 12.4 V21" /><path d="M12 16 C9.5 16 8 14.5 7.6 12.8" /><path d="M12 17.5 C14.5 17.5 16 16 16.4 14.2" /></>),
  nut: (<><path d="M8 10 C8 7.5 9.8 6 12 6 C14.2 6 16 7.5 16 10" /><path d="M7 10 C7 14.5 9 19 12 19.6 C15 19 17 14.5 17 10 Z" /><path d="M12 6 V4.4" /></>),
  seedling: (<><path d="M12 21 V12" /><path d="M12 12 C12 9 9.8 7 7 7 C7 10 9.3 12 12 12 Z" /><path d="M12 14.5 C12 11.8 14.2 10 17 10 C17 12.8 14.7 14.5 12 14.5 Z" /><path d="M5 21 H19" /></>),
  water: (<><path d="M12 4 C12 4 6.5 10.5 6.5 14 A5.5 5.5 0 0 0 17.5 14 C17.5 10.5 12 4 12 4 Z" /><path d="M9.5 14.5 A2.6 2.6 0 0 0 12 17" /></>),
  flower: (<><circle cx="12" cy="10" r="1.8" /><circle cx="12" cy="6.4" r="1.6" /><circle cx="15.4" cy="10" r="1.6" /><circle cx="12" cy="13.6" r="1.6" /><circle cx="8.6" cy="10" r="1.6" /><path d="M12 15.2 V21" /></>),
  book: (<><path d="M4 6 C7 5 10 5 12 7 C14 5 17 5 20 6 V18 C17 17 14 17 12 19 C10 17 7 17 4 18 Z" /><path d="M12 7 V19" /></>),
  tree: (<><path d="M12 4 L7 12 H9.5 L6 17 H18 L14.5 12 H17 Z" /><path d="M12 17 V21" /><circle cx="12" cy="21" r="0.4" /></>),
} as const;

const futures: ReadonlyArray<{ icon: keyof typeof futureIcons; name: string; copy: string }> = [
  { icon: "forest", name: "Native Forest Restoration", copy: "Restoring degraded land with native hardwoods, shrubs and forest communities." },
  { icon: "bird", name: "Wildlife Habitat", copy: "Improving nesting areas, shelter, food sources, corridors and habitat diversity." },
  { icon: "seed", name: "Native Seed Orchards", copy: "A reliable source of locally adapted seed for future restoration and nursery production." },
  { icon: "nut", name: "Nut Orchards", copy: "Planting walnut, chestnut, hazelnut, hickory and other long-lived food or timber species." },
  { icon: "seedling", name: "Nursery Production", copy: "Using appropriate open land to grow bare-root trees and shrubs for future planting projects." },
  { icon: "water", name: "Wetland Protection", copy: "Allowing wetlands, riparian areas and watercourses to remain protected and functional." },
  { icon: "flower", name: "Pollinator Habitat", copy: "Flowering shrubs and native plants supporting insects and birds through the seasons." },
  { icon: "book", name: "Educational Forests", copy: "A demonstration property where people learn about trees, seed collection and woodland care." },
  { icon: "tree", name: "Long-Term Managed Forest", copy: "Maintaining or improving forest cover through patient, site-appropriate management." },
];

const whyPoints = [
  "Growing tens of thousands of trees",
  "Working with native hardwood species",
  "Collecting and growing from seed",
  "Supplying restoration & conservation projects",
  "Understanding nursery production",
  "Planting for biodiversity",
  "Developing long-term forest & orchard projects",
  "Building toward seed-production capacity",
] as const;

const suitableProperties = [
  "Forested land & woodlots",
  "Wetlands",
  "Abandoned agricultural land or old pasture",
  "Rural acreage with restoration potential",
  "Land suitable for seed orchards or tree planting",
  "Land containing important habitat",
  "Mixed woodland and open land",
] as const;

const consideredFactors = [
  "Location, acreage & road access",
  "Property taxes & zoning",
  "Existing buildings, mortgages or liens",
  "Ecological value, soil & drainage",
  "Existing forest cover & restoration potential",
  "Long-term management costs",
] as const;

const processSteps = [
  ["Tell Us About the Property", "Share basic details, photographs and any documents you have on hand."],
  ["Initial Review", "We consider location, acreage, access, condition and potential long-term uses."],
  ["Start a Conversation", "We reach out to learn more about the property and what you hope will happen to it."],
  ["Explore Options", "Donation, future gift, sale, transfer, or another stewardship arrangement."],
  ["Get Independent Advice", "Before any transfer, speak with your own lawyer, accountant or tax professional."],
  ["Formal Due Diligence", "Title review, legal documentation and any necessary inspections or assessments."],
] as const;

const faqs = [
  { question: "Does Little Tree Farm accept every property?", answer: "No. Every property must be reviewed individually. Location, condition, legal status, access, costs and long-term stewardship potential will all be considered." },
  { question: "Will Little Tree Farm purchase my land?", answer: "Possibly, but no purchase is guaranteed. Depending on the property and circumstances, options may include a conventional sale, nominal sale, donation, future gift or another arrangement." },
  { question: "Can I donate land in Canada?", answer: "Land can generally be gifted or transferred, but the legal and tax consequences depend on the owner, property and recipient. Owners should obtain independent legal and tax advice." },
  { question: "Can I leave land to Little Tree Farm in my will?", answer: "A property owner may be able to name an organization or individual as a beneficiary in a will. However, estate debts, taxes, legal requirements and the recipient's ability to accept the property must all be considered." },
  { question: "Can I specify what happens to the land?", answer: "Landowner wishes are important and should form part of the conversation. However, the eventual use must also be realistic for the property and legally workable over the long term." },
  { question: "Will the land remain untouched?", answer: "Not necessarily. Some land may remain mostly natural, while other properties may be actively restored, planted, managed or used for seed production, orchards, education or nursery purposes." },
  { question: "Will you develop or subdivide the property?", answer: "The focus of the program is long-term stewardship rather than conventional real estate development. However, no permanent promise should be implied unless it is contained in a formal legal agreement." },
  { question: "What if there is a house or building on the land?", answer: "Properties with buildings may still be considered, but buildings create additional maintenance, insurance, safety and legal considerations." },
  { question: "What if the property has unpaid taxes or a mortgage?", answer: "These issues must be disclosed and reviewed. Little Tree Farm does not promise to assume existing debts or liabilities." },
  { question: "Will you pay my legal fees?", answer: "No promise should be made. Responsibility for legal, accounting, appraisal, surveying and transfer costs would need to be discussed in each individual case." },
  { question: "Is my inquiry confidential?", answer: "Property details will be treated respectfully and will not be publicly shared without permission, subject to any necessary professional review." },
  { question: "Can I contact you even if I am not ready?", answer: "Yes. Landowners are encouraged to start a conversation early, even if they are years away from making a decision." },
] as const satisfies readonly LandFaqItem[];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        name: pageTitle,
        description: pageDescription,
        url: pageUrl,
        inLanguage: "en-CA",
        datePublished: publishedDate,
        dateModified: publishedDate,
        isPartOf: { "@type": "WebSite", "@id": `${businessInfo.url}#website`, url: businessInfo.url },
        publisher: {
          "@type": "Organization",
          name: businessInfo.name,
          url: businessInfo.mainUrl,
          logo: { "@type": "ImageObject", url: `${businessInfo.url}/little-tree-farms-logo.png` },
        },
        hasPart: landGuides.map((g, i) => ({
          "@type": "Article",
          position: i + 1,
          name: g.title,
          description: g.hook,
          url: `${businessInfo.url}${g.href}`,
        })),
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
  const schema = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");

  return (
    <div className={hub.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      {/* ── Hero ── */}
      <header className={hub.hero}>
        <Image
          className={hub.heroImage}
          src="/main-landing-page/big-farmland.jpg"
          alt="Open rural Canadian farmland bordered by a mature treeline under a wide sky"
          fill
          sizes="100vw"
          preload
        />
        <div className={hub.heroGrid}>
          <div>
            <nav className={hub.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <span aria-current="page">Land Stewardship</span>
            </nav>
            <p className={hub.heroEyebrow}>Land Stewardship Program</p>
            <h1>Give Your Land a Lasting Purpose</h1>
            <p className={hub.heroDek}>
              Rural land can continue serving a meaningful purpose long after its current owner
              no longer wants, or is able, to manage it. We&apos;d like to hear about yours.
            </p>
            <div className={hub.heroCtas}>
              <a href="#inquire" className={hub.btnPrimary}>Tell Us About Your Property</a>
              <a href="#situations" className={hub.btnGhostDark}>Explore Your Options</a>
            </div>
          </div>
          <div className={hub.ringsHolder}>
            <TreeRings size={400} withYears color="#dbc398" />
          </div>
        </div>
      </header>

      {/* ── Trust strip ── */}
      <div className={hub.trustWrap}>
        <div className={hub.trust} aria-label="How this program works">
          <div className={hub.trustItem}><span className={hub.trustLabel}>Reviewed individually</span><p>Every property is considered on its own merits — nothing is accepted automatically.</p></div>
          <div className={hub.trustItem}><span className={hub.trustLabel}>No pressure</span><p>A conversation costs nothing and commits you to nothing. Start years before deciding.</p></div>
          <div className={hub.trustItem}><span className={hub.trustLabel}>Independent advice</span><p>We encourage your own lawyer and accountant to review anything before it&apos;s signed.</p></div>
        </div>
      </div>

      {/* ── Opening question ── */}
      <section className={hub.opening}>
        <div className={`${hub.wrap} ${hub.openingInner}`}>
          <p className={`${hub.eyebrow} ${hub.eyebrowCenter}`}>A Question Worth Sitting With</p>
          <h2>Do You Own Rural Land You No Longer Want?</h2>
          <p className={hub.openingLead}>
            Perhaps you inherited a woodlot, own vacant land your family no longer uses, or have
            reached a point where maintaining the property has become difficult. You may still
            care deeply about what happens to it.
          </p>
          <p className={hub.openingBody}>
            Little Tree Farm is developing a long-term land stewardship program for people who want
            their rural property to continue supporting forests, wildlife, biodiversity, seed
            production and future generations. Every property is different, and there is no single
            solution — we welcome a conversation with landowners who would like to explore what
            their land could become.
          </p>
        </div>
      </section>

      {/* ── Situation router ── */}
      <section className={hub.situations} id="situations">
        <div className={hub.wrap}>
          <div className={hub.sectionHead}>
            <p className={hub.eyebrow}>Wherever You&apos;re Starting From</p>
            <h2>However You Came to This Question</h2>
            <p>Landowners reach out at very different stages. There&apos;s no wrong time to start a conversation — pick the situation closest to yours.</p>
          </div>
          <div className={hub.situationGrid}>
            {situations.map((s) => (
              <Link className={hub.situationCard} href={s.href} key={s.href}>
                <span className={hub.situationTag}>{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <span className={hub.situationArrow}>
                  {s.cta}
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Futures ── */}
      <section className={hub.futures} id="futures">
        <div className={hub.wrap}>
          <div className={hub.sectionHead}>
            <p className={hub.eyebrow}>Possible Futures</p>
            <h2>What Could the Land Become?</h2>
            <p>Every property is different. Depending on soil, access, existing habitat and your own wishes, a piece of land might take on any of the following roles.</p>
          </div>
          <div className={hub.futuresGrid}>
            {futures.map((f) => (
              <div className={hub.futureCard} key={f.name}>
                <span className={hub.futureIcon} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {futureIcons[f.icon]}
                  </svg>
                </span>
                <h3>{f.name}</h3>
                <p>{f.copy}</p>
              </div>
            ))}
          </div>
          <p className={hub.futuresNote}>Not every use is suitable for every property. Soil, access, existing habitat, location, size, zoning and your own wishes will all shape what&apos;s possible.</p>
        </div>
      </section>

      {/* ── Legacy band ── */}
      <section className={hub.legacy} id="legacy">
        <div className={hub.legacyRings}><TreeRings size={640} color="#c8a96e" /></div>
        <div className={`${hub.wrap} ${hub.legacyInner}`}>
          <p className={`${hub.eyebrow} ${hub.eyebrowCenter} ${hub.eyebrowOnDark}`}>A Legacy, Not Just a Transaction</p>
          <h2>Leave a Living Legacy</h2>
          <blockquote>
            &ldquo;A property can represent decades of family history, work and memories. For many
            landowners, the hardest question isn&apos;t how much the land is worth — it&apos;s what
            will happen to it next.&rdquo;
          </blockquote>
          <p className={hub.legacySignoff}>
            Will it remain forested? Will it keep supporting wildlife? Could it grow trees, or seed,
            for generations still to come? A land legacy lets the values connected to a property
            outlast a change in ownership — we want to help create places that stay useful, alive
            and cared for over the next 50, 100, or even 200 years.
          </p>
          <div className={hub.heroCtas}>
            <a href="#inquire" className={hub.btnPrimary}>Discuss the Future of Your Land</a>
            <Link href="/land/creating-a-forest-legacy" className={hub.btnGhostDark}>See a Forest Legacy</Link>
          </div>
        </div>
      </section>

      {/* ── Guides library ── */}
      <section className={hub.guides} id="guides">
        <div className={hub.wrap}>
          <div className={hub.sectionHead}>
            <p className={hub.eyebrow}>The Knowledge Centre</p>
            <h2>Guides for Landowners</h2>
            <p>In-depth, honest guides for the questions rural landowners actually ask. Start with the one closest to your situation.</p>
          </div>
          <div className={hub.guideGrid}>
            {landGuides.map((g) => (
              <Link className={hub.guideCard} href={g.href} key={g.href}>
                <span className={hub.guideKind}>{g.kind}</span>
                <h3>{g.title}</h3>
                <p>{g.hook}</p>
                <span className={hub.guideMore}>Read the guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why LTF ── */}
      <section className={hub.why} id="why">
        <div className={`${hub.wrap} ${hub.whyGrid}`}>
          <div className={hub.whyCopy}>
            <p className={hub.eyebrow}>Why Little Tree Farm</p>
            <h2>A Stewardship Program Rooted in Growing Trees</h2>
            <p>Little Tree Farm is a working Canadian bare-root nursery based in Nova Scotia. We grow native trees and shrubs for landowners, restoration projects and large-scale planting programs — and we think in decades, not seasons.</p>
            <ul className={hub.whyList}>
              {whyPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <div className={hub.whyVisual}>
            <Image
              src="/main-landing-page/collecting-black-walnut-ltf.jpg"
              alt="Collecting black walnut seed at Little Tree Farm's Nova Scotia nursery"
              fill
              sizes="(max-width: 940px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* ── Looking for ── */}
      <section className={hub.looking} id="looking">
        <div className={hub.wrap}>
          <div className={hub.sectionHead}>
            <p className={hub.eyebrow}>Scope</p>
            <h2>What We&apos;re Looking For</h2>
            <p>The program is mainly focused on rural and environmentally useful properties. A property doesn&apos;t need to be perfect — but we also can&apos;t promise to accept every property submitted.</p>
          </div>
          <div className={hub.lookGrid}>
            <div className={hub.lookCol}>
              <h3>Potentially Suitable Properties</h3>
              <ul>{suitableProperties.map((item) => <li key={item}><span className={hub.lookMark} aria-hidden="true">✓</span>{item}</li>)}</ul>
            </div>
            <div className={hub.lookCol}>
              <h3>Factors We May Consider</h3>
              <ul>{consideredFactors.map((item) => <li key={item}><span className={hub.lookMark} aria-hidden="true">·</span>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={hub.process} id="process">
        <div className={hub.wrap}>
          <div className={hub.sectionHead}>
            <p className={hub.eyebrow}>How It Works</p>
            <h2>A Straightforward Process, Taken Seriously</h2>
            <p>Six steps, from a first message to a formal agreement — with room to pause and get independent advice along the way.</p>
          </div>
          <div className={hub.timeline}>
            {processSteps.map(([title, copy], i) => (
              <div className={hub.step} key={title}>
                <span className={hub.stepRing} aria-hidden="true">{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry form ── */}
      <section className={hub.formSection} id="inquire">
        <div className={hub.wrap}>
          <div className={`${hub.sectionHead} ${hub.sectionHeadCenter}`}>
            <p className={`${hub.eyebrow} ${hub.eyebrowCenter}`}>Start the Conversation</p>
            <h2>Tell Us About Your Property</h2>
            <p>A few minutes now — no documents required at this stage.</p>
          </div>
          <LandInquiryForm />
          <p className={hub.formNote}>Photos, surveys, tax assessments or deeds can all come later. The first step is simply telling us the land exists.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={hub.faqSection} id="faq">
        <div className={hub.wrap}>
          <div className={hub.faqInner}>
            <div className={`${hub.sectionHead} ${hub.sectionHeadCenter}`}>
              <p className={`${hub.eyebrow} ${hub.eyebrowCenter}`}>Common Questions</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <LandFaq items={faqs} />
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className={hub.ctaBand}>
        <div className={hub.wrap}>
          <h2>Wherever you are in this decision, it&apos;s worth a conversation.</h2>
          <a href="#inquire" className={hub.btnPrimary}>See Whether Your Property May Be Suitable</a>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className={hub.wrap} style={{ padding: "clamp(3rem, 6vw, 4.5rem) 0" }}>
        <div className={article.disclaimer} style={{ margin: 0 }}>
          <p><strong>A note on how this works:</strong> Little Tree Farm reviews every property individually and is not obligated to accept, purchase or enter into an agreement regarding any property submitted. Information on this page is general in nature and does not constitute legal, financial, estate-planning or tax advice. Property owners should obtain independent legal, accounting and tax advice before entering into any land transfer, sale, donation, gift or estate arrangement.</p>
          <p>Nothing here should be read as promising acceptance of a property, a purchase price, payment of legal costs, tax deductions, charitable donation receipts, permanent conservation protection, debt assumption, or a specific future use of the property, unless later confirmed through a formal written agreement.</p>
        </div>
      </div>
    </div>
  );
}
