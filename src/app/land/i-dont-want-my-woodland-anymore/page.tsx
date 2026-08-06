import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandFaq, type LandFaqItem } from "@/components/land/LandFaq";
import styles from "@/components/land/LandArticle.module.css";
import { businessInfo } from "@/lib/config/business";

const pagePath = "/land/i-dont-want-my-woodland-anymore";
const pageUrl = `${businessInfo.url}${pagePath}`;
const publishedDate = "2026-08-06";
const pageTitle = "I Don't Want My Woodland Anymore | Options in Canada";
const pageDescription =
  "No longer want your woodland or woodlot? Compare realistic Canadian options: keep it with purpose, sell, transfer, donate, restore or plan its future.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "I don't want my woodland anymore",
    "what do I do with woodland I don't want",
    "what to do with unwanted woodland",
    "sell woodland Canada",
    "donate woodland Canada",
    "unwanted woodlot",
    "inherited woodland I don't want",
    "children don't want the family woodlot",
    "woodland succession planning",
    "private woodlot Canada",
    "forest restoration Canada",
    "tired of paying taxes on woodland",
  ],
  authors: [{ name: businessInfo.name, url: businessInfo.mainUrl }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  alternates: {
    canonical: pageUrl,
    languages: { "en-CA": pageUrl },
  },
  openGraph: {
    type: "article",
    locale: "en_CA",
    url: pageUrl,
    siteName: `${businessInfo.name} — Land Stewardship`,
    title: pageTitle,
    description: pageDescription,
    publishedTime: `${publishedDate}T00:00:00-03:00`,
    modifiedTime: `${publishedDate}T00:00:00-03:00`,
    authors: [businessInfo.name],
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

const toc = [
  ["why", "Why people stop wanting woodland"],
  ["matters-most", "Start with what matters most"],
  ["options", "Your six realistic options"],
  ["keep", "1 · Keep it with a purpose"],
  ["sell", "2 · Sell the woodland"],
  ["family", "3 · Transfer it to family"],
  ["donate", "4 · Donate the woodland"],
  ["restore", "5 · Find a restoration steward"],
  ["will", "6 · Plan its future through your will"],
  ["walk-away", "What if you simply walk away?"],
  ["decision", "Which option fits your situation?"],
  ["checklist", "Information to gather first"],
  ["little-tree-farm", "Could Little Tree Farm help?"],
  ["faq", "Frequently asked questions"],
  ["sources", "Sources and related reading"],
] as const;

const options = [
  ["Keep it—with a purpose", "Recreation, habitat, a managed woodlot, family retreat, future timber, restoration or seed production."],
  ["Sell it", "List publicly, approach neighbouring owners or work with an agent familiar with rural and wooded land."],
  ["Transfer it to family", "Only when the intended family member understands the costs and genuinely wants ownership."],
  ["Donate it", "Approach an eligible conservation, community or stewardship recipient that can responsibly accept it."],
  ["Find a restoration steward", "Explore native forest, habitat, seed-orchard, education or long-term management potential."],
  ["Plan a future transfer", "Keep using the woodland now and address its future through a lawyer-prepared will and recipient conversation."],
] as const;

const situations = [
  {
    title: "I need money from the woodland",
    options: ["Seek a realistic market valuation", "Ask neighbouring owners", "Use a rural land agent", "Consider timber value separately and carefully"],
  },
  {
    title: "Nobody in my family wants it",
    options: ["Sell it", "Donate it", "Find a compatible steward", "Prepare a future bequest with a fallback"],
  },
  {
    title: "I want the forest restored",
    options: ["Native forest restoration", "Habitat improvement", "A native seed orchard", "A stewardship organization"],
  },
  {
    title: "I still want to use it",
    options: ["Keep ownership for now", "Create a management plan", "Build a succession plan", "Arrange a future transfer through your will"],
  },
  {
    title: "I honestly do not know",
    options: ["Gather the property facts", "Walk the land with a forester", "Talk with family", "Have a non-binding conversation with possible recipients"],
  },
] as const;

const checklist = [
  "Acreage and parcel or PID number",
  "Current deed and registered owners",
  "Legal access, roads and rights of way",
  "Annual property taxes",
  "Mortgages, liens or tax arrears",
  "Survey or boundary information",
  "Current photographs and maps",
  "Wetlands, streams and shoreline",
  "Forest type, age and condition",
  "Recent harvest or management history",
  "Buildings, wells or other structures",
  "Known contamination or dumping",
  "Family wishes and co-owner views",
  "Your preferred timeline",
  "Whether you need payment",
  "What you hope happens to the woodland",
] as const;

const faqs = [
  {
    question: "What should I do if I do not want my woodland anymore?",
    answer: "You can keep it with a clearer purpose, sell it, transfer it to a willing family member or neighbour, donate it, find a restoration steward, or plan a future transfer through your will. The right path depends on whether you need proceeds and what future you want for the land.",
  },
  {
    question: "Can I sell woodland in Canada?",
    answer: "Generally yes, provided you can transfer clear title. Woodland value and sale timing depend on location, access, acreage, boundaries, local demand, timber and other property-specific factors. A rural land agent, lawyer and sometimes a professional forester can help.",
  },
  {
    question: "Who buys private woodland?",
    answer: "Potential buyers can include neighbouring landowners, recreational buyers, farmers expanding acreage, woodlot owners, conservation-minded purchasers and ordinary rural-property buyers. The realistic audience depends on the parcel.",
  },
  {
    question: "Can I donate woodland?",
    answer: "Sometimes. The proposed recipient must be legally able and willing to accept the property after reviewing title, access, liabilities, costs, condition and mission fit. A charitable receipt is not automatic.",
  },
  {
    question: "Can I abandon woodland?",
    answer: "Ignoring a property does not itself end legal ownership or the obligations attached to it. Unpaid-tax processes vary by province and municipality and can eventually lead to a tax sale, but that is not a controlled or immediate transfer plan. Obtain local legal advice.",
  },
  {
    question: "Can I give woodland to my children?",
    answer: "You may be able to transfer it, but ask first whether they genuinely want the land and understand taxes, access, maintenance and future decisions. A lawyer and tax professional should advise on the transfer.",
  },
  {
    question: "Can I leave woodland in my will?",
    answer: "Yes. This lets you retain ownership during your lifetime. Discuss the property with the intended recipient first and have a lawyer prepare an alternate plan if that person or organization cannot accept it later.",
  },
  {
    question: "Can I donate inherited woodland?",
    answer: "Once the estate process gives you legal title, you can generally explore a donation or other transfer. Shared ownership, estate restrictions and tax consequences can require additional professional advice.",
  },
  {
    question: "Can Little Tree Farm accept woodland?",
    answer: "Possibly, where a property could support native forest restoration, seed production, wildlife habitat, education or another long-term stewardship use. Every property is reviewed individually, and acceptance is never guaranteed.",
  },
  {
    question: "Who pays property taxes until ownership changes?",
    answer: "The registered owner generally remains responsible until a sale, donation or transfer legally closes, subject to the transaction terms and applicable provincial and municipal rules.",
  },
  {
    question: "What if the woodland has no road access?",
    answer: "A lack of legal access can narrow the pool of buyers and recipients and affect value and management. A title review can determine whether any registered right of way exists. Neighbouring owners may be the most practical audience.",
  },
  {
    question: "Is unmanaged woodland still valuable?",
    answer: "It may have ecological, recreational, landscape, carbon, seed, habitat or timber value even without an active management history. The nature and amount of value are property-specific.",
  },
  {
    question: "Do I need a forester before selling or donating?",
    answer: "Not in every case, but a professional forester can help you understand forest condition, management history and potential timber considerations. That information can improve a sale, donation or stewardship conversation.",
  },
  {
    question: "What if co-owners disagree about the woodland?",
    answer: "One owner generally cannot transfer the interests of the others. Shared ownership, partition, sale and transfer rights depend on title and provincial law, so consult a lawyer before taking action.",
  },
  {
    question: "What is the first step?",
    answer: "Gather the acreage, parcel identifier, ownership, access, taxes, debts, maps and your preferred outcome. Then speak with the relevant family members and one or more suitable professionals or recipients without making an immediate commitment.",
  },
] as const satisfies readonly LandFaqItem[];

function TableOfContents() {
  return (
    <ol>
      {toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
    </ol>
  );
}

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "I Don't Want My Woodland Anymore — What Are My Options?",
        description: pageDescription,
        image: `${businessInfo.url}/main-landing-page/black-walnut-tree.jpg`,
        datePublished: publishedDate,
        dateModified: publishedDate,
        inLanguage: "en-CA",
        articleSection: "Land Stewardship",
        author: { "@type": "Organization", name: businessInfo.name, url: businessInfo.mainUrl },
        publisher: {
          "@type": "Organization",
          name: businessInfo.name,
          url: businessInfo.mainUrl,
          logo: { "@type": "ImageObject", url: `${businessInfo.url}/little-tree-farms-logo.png` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: businessInfo.url },
          { "@type": "ListItem", position: 2, name: "I don't want my woodland anymore", item: pageUrl },
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

export default function UnwantedWoodlandPage() {
  const schema = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <header className={styles.hero}>
        <Image className={styles.heroImage} src="/main-landing-page/black-walnut-tree.jpg" alt="A mature woodland canopy on rural land" fill sizes="100vw" preload />
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <span>Land stewardship</span><span aria-hidden="true">/</span>
            <span aria-current="page">Unwanted woodland</span>
          </nav>
          <p className={styles.eyebrow}>Land Stewardship Knowledge Centre</p>
          <h1>I Don&apos;t Want My Woodland Anymore</h1>
          <p className={styles.heroDek}>
            Maybe it was inherited. Maybe nobody visits it. Maybe another tax bill arrived and your children have already said no.
            You are not failing the woodland—and you have more options than simply letting the decision drift.
          </p>
          <div className={styles.meta}>
            <span>Published August 6, 2026</span>
            <span>For Canadian woodland owners</span>
            <span>General educational information</span>
          </div>
        </div>
      </header>

      <div className={styles.factsWrap}>
        <div className={styles.facts} aria-label="Guide essentials">
          <div className={styles.fact}><span className={styles.factLabel}>First</span><p>Separate guilt from the practical decision you actually need to make.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Then</span><p>Decide whether you need payment, continued use or a particular future.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Before signing</span><p>Confirm title, access, tax, costs and the recipient&apos;s real capacity.</p></div>
        </div>
      </div>

      <div className={styles.mobileToc}>
        <details><summary>On this page</summary><nav aria-label="Table of contents"><TableOfContents /></nav></details>
      </div>

      <div className={styles.layout}>
        <nav className={styles.toc} aria-label="Table of contents"><span className={styles.tocTitle}>On this page</span><TableOfContents /></nav>

        <article className={styles.article}>
          <div className={styles.notice} role="note" aria-label="Important legal notice">
            <span className={styles.noticeMark} aria-hidden="true">i</span>
            <p><strong>General information only.</strong> Property, tax, family and municipal rules vary across Canada. Obtain province-specific legal and tax advice before selling, gifting, donating or transferring woodland.</p>
          </div>

          <section id="why">
            <span className={styles.sectionNumber}>01 · A reasonable feeling</span>
            <h2>Why People Stop Wanting Woodland</h2>
            <p>Woodland often becomes unwanted gradually: an unexpected inheritance, years of distance, changing health, storm damage, washed-out access, insurance, taxes, or children who have plainly said they do not want the responsibility. What once felt meaningful can become one more unresolved obligation.</p>
            <p>None of this makes you a bad steward. A deliberate sale, transfer, donation or succession plan may be more responsible than holding the land from guilt while its future remains uncertain.</p>
            <p className={styles.pullQuote}>You do not have to keep owning the woodland to care about what happens to it next.</p>
          </section>

          <section id="matters-most">
            <span className={styles.sectionNumber}>02 · Before choosing a transaction</span>
            <h2>Start by Deciding What Matters Most</h2>
            <p>Do not begin with “should I sell or donate?” Begin with the outcome you actually need. That answer narrows the options more reliably than choosing a transaction before you understand your own priorities.</p>
            <div className={styles.typeGrid}>
              <div className={styles.typeCard}><span className={styles.typeIndex}>$</span><h3>I need money</h3><p>A realistic sale or negotiated transfer deserves the first look.</p></div>
              <div className={styles.typeCard}><span className={styles.typeIndex}>P</span><h3>I want it protected</h3><p>Speak with an eligible conservation organization or land trust.</p></div>
              <div className={styles.typeCard}><span className={styles.typeIndex}>S</span><h3>I want someone else to care for it</h3><p>A willing recipient, donation or stewardship transfer may fit.</p></div>
              <div className={styles.typeCard}><span className={styles.typeIndex}>U</span><h3>I still want to use it</h3><p>Keep it for now and create a documented future plan.</p></div>
              <div className={styles.typeCard}><span className={styles.typeIndex}>F</span><h3>I want it to stay in the family</h3><p>Have the honest succession conversation before transferring it.</p></div>
              <div className={styles.typeCard}><span className={styles.typeIndex}>R</span><h3>I want it restored</h3><p>Look for a restoration-focused steward with long-term capacity.</p></div>
            </div>
          </section>

          <section id="options">
            <span className={styles.sectionNumber}>03 · See the whole map</span>
            <h2>Your Six Realistic Options</h2>
            <p>Start with the outcome you need rather than the transaction you have heard about. Payment, continued use, family succession and a specific ecological future point toward different paths.</p>
            <div className={styles.typeGrid}>
              {options.map(([title, description], index) => (
                <div className={styles.typeCard} key={title}><span className={styles.typeIndex}>{index + 1}</span><h3>{title}</h3><p>{description}</p></div>
              ))}
            </div>
          </section>

          <section id="keep">
            <span className={styles.sectionNumber}>03 · Option one</span>
            <h2>Keep the Woodland—But Give It a Purpose</h2>
            <p>Before letting go, ask whether the property could become something you genuinely value: recreation, hunting, wildlife habitat, a managed family woodlot, native forest restoration, a retreat, future timber, a nut orchard or a native seed orchard.</p>
            <p>Private family woodlots are a recognized part of Canada&apos;s forest landscape. Keeping one can be meaningful, but it still means carrying taxes, access, safety, insurance and management. A purpose is useful only if you are willing and able to support it.</p>
            <div className={styles.callout}>
              <h3>Useful next step</h3>
              <p>A professional forester can help you understand forest condition, potential management goals and whether timber assumptions are realistic before you decide to keep or sell.</p>
            </div>
          </section>

          <section id="sell">
            <span className={styles.sectionNumber}>04 · Option two</span>
            <h2>Sell the Woodland</h2>
            <p>An ordinary listing, private sale, neighbouring landowner, recreational buyer, farmer adding acreage or another woodlot owner may be realistic. Price it as rural land, not as a house lot with trees. Legal access, parcel shape, boundary certainty, wetlands, buildings, timber and local demand all affect value.</p>
            <p>Some parcels take longer to sell—especially landlocked, very small, remote or title-complicated properties. A narrow buyer pool does not make a sale impossible; it changes who the likely buyer is and what a realistic timeline looks like.</p>
          </section>

          <section id="family">
            <span className={styles.sectionNumber}>05 · Option three</span>
            <h2>Transfer the Woodland to Family</h2>
            <p>You may be able to transfer woodland to children, siblings or another relative. The important step is asking whether they actually want ownership—not whether they like the idea of keeping it “in the family.” They need to understand taxes, access, insurance, management and future decisions.</p>
            <p>Shared ownership can create disagreements about use, costs, harvesting and sale. A clear succession plan can be kinder than dividing the same unresolved responsibility among several people. Our guide to <Link href="/land/creating-a-forest-legacy">creating a forest legacy</Link> examines family succession in more depth.</p>
          </section>

          <section id="donate">
            <span className={styles.sectionNumber}>06 · Option four</span>
            <h2>Donate the Woodland</h2>
            <p>Woodland may be considered by a registered charity, land trust, conservation organization, municipality, community organization or another capable steward. The recipient must review the property and agree to accept it; title transfer, carrying costs and future management are real responsibilities.</p>
            <p>Donation does not automatically guarantee permanent conservation or a charitable receipt. Recipient status, valuation, transaction structure and program eligibility matter. Our complete guide to <Link href="/land/donate-land">donating land in Canada</Link> explains the available structures and tax boundaries.</p>
          </section>

          <section id="restore">
            <span className={styles.sectionNumber}>07 · Option five</span>
            <h2>Find a Restoration or Stewardship Future</h2>
            <p>Some woodland could support native forest restoration, habitat improvement, seed collection, a native seed orchard, education, research or long-term management. Sometimes the best intervention is limited; an existing forest may need protection and patient care more than planting.</p>
            <div className={styles.imageBand}>
              <Image src="/main-landing-page/mature-black-walnut-nova-scotia.jpg" alt="A mature tree representing the long future of private woodland" fill sizes="(max-width: 960px) 100vw, 760px" />
              <p className={styles.imageCaption}>The woodland may feel like a burden to its owner and still hold a meaningful future for the right steward.</p>
            </div>
          </section>

          <section id="will">
            <span className={styles.sectionNumber}>08 · Option six</span>
            <h2>Plan Its Future Through Your Will</h2>
            <p>If you are not ready to give up the woodland now, you can retain ownership while creating a future plan. Speak with the intended recipient before naming them, account for estate tax and costs, and ask a lawyer to prepare a fallback if that recipient cannot accept later.</p>
            <p>Read our detailed guide on <Link href="/land/leave-land-in-your-will">how to leave land in your will</Link> before treating a sentence in a will as a complete woodland succession plan.</p>
          </section>

          <section id="walk-away">
            <span className={styles.sectionNumber}>09 · The non-option</span>
            <h2>What Happens If You Simply Walk Away?</h2>
            <p>Stopping visits or correspondence does not itself end ownership. Property taxes and other owner responsibilities do not disappear because the land is unused. Provinces and municipalities have formal processes for tax arrears and possible tax sales, but timing and consequences vary.</p>
            <p>A tax-sale process is not an easy or controlled transfer strategy. A deliberate sale, gift or donation gives you much more influence over timing, costs, recipient and the land&apos;s future. Ask the municipality and a local lawyer what applies before arrears accumulate.</p>
          </section>

          <section id="decision">
            <span className={styles.sectionNumber}>10 · Match the need</span>
            <h2>Which Option Fits Your Situation?</h2>
            <div className={styles.situationGrid}>
              {situations.map((situation) => (
                <div className={styles.situationCard} key={situation.title}><h3>{situation.title}</h3><ul>{situation.options.map((option) => <li key={option}>{option}</li>)}</ul></div>
              ))}
            </div>
          </section>

          <section id="checklist">
            <span className={styles.sectionNumber}>11 · Replace uncertainty with facts</span>
            <h2>Gather This Before You Decide</h2>
            <p>You do not need a perfect file. These basics help a buyer, forester, lawyer or potential recipient understand whether the woodland and your preferred path are workable.</p>
            <ul className={styles.checklist}>{checklist.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section id="little-tree-farm">
            <div className={styles.ltfBox}>
              <p className={styles.eyebrow}>Little Tree Farm</p>
              <h2>Could Little Tree Farm Help With Your Woodland?</h2>
              <p>Little Tree Farm is a working bare-root nursery in Nova Scotia developing a Canada-wide land stewardship initiative. We may consider woodland that could support native forest restoration, seed orchards, wildlife habitat, education, research or another long-term stewardship use.</p>
              <p>Every property is different. We cannot promise to accept, purchase or permanently protect woodland, and we do not promise a charitable receipt or reimbursement of costs. Some properties will be better suited to a land trust, neighbour, farmer, municipality, another organization or an ordinary sale.</p>
              <div className={styles.ctaRow}>
                <Link className={styles.primaryButton} href="/contact">Tell us about your woodland</Link>
                <Link className={styles.secondaryButton} href="/land/unwanted-rural-property">Compare broader property options</Link>
              </div>
            </div>
          </section>

          <section id="faq">
            <span className={styles.sectionNumber}>12 · Common questions</span>
            <h2>Frequently Asked Questions</h2>
            <LandFaq items={faqs} />
          </section>

          <section id="sources">
            <span className={styles.sectionNumber}>13 · Verify and continue</span>
            <h2>Authoritative Starting Points</h2>
            <p>Forestry, property and municipal rules differ by province. These official sources give national context and one clear provincial example of why unpaid taxes are a formal process rather than a clean exit.</p>
            <div className={styles.sources}>
              <a className={styles.sourceCard} href="https://natural-resources.canada.ca/forests-forestry/sustainable-forest-management/forest-land-ownership" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Natural Resources Canada</span><h3>Forest land ownership in Canada</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/p113/p113-gifts-income-tax.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Gifts and Income Tax</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.ontario.ca/document/ontario-municipal-councillors-guide/9-fiscal-context" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Government of Ontario · Provincial example</span><h3>Property-tax collection and tax sales</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
            </div>

            <h2 className={styles.relatedHeading}>Related Reading</h2>
            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} href="/land/unwanted-rural-property"><h3>Options for Unwanted Rural Property</h3><span>Compare every path →</span></Link>
              <Link className={styles.relatedCard} href="/land/donate-land"><h3>How to Donate Land in Canada</h3><span>Understand donation →</span></Link>
              <Link className={styles.relatedCard} href="/land/creating-a-forest-legacy"><h3>Creating a Forest Legacy</h3><span>Plan the long future →</span></Link>
              <Link className={styles.relatedCard} href="/land/leave-land-in-your-will"><h3>How to Leave Land in Your Will</h3><span>Plan a future gift →</span></Link>
            </div>
          </section>

          <section>
            <div className={styles.finalCta}>
              <h2>Your Woodland Still Has a Future</h2>
              <p>No longer wanting ownership does not mean the land has no value. The responsible next step is a deliberate plan—keep, sell, transfer, donate, restore or arrange its future—rather than letting the decision drift.</p>
              <div className={styles.ctaRow}><Link className={styles.secondaryButton} href="/contact">Tell us about your woodland</Link><Link className={styles.secondaryButton} href="/land/donate-land">Learn about donation</Link></div>
              <p>No pressure. No obligation. Every property is considered individually.</p>
            </div>
            <div className={styles.disclaimer}>
              <p><strong>Legal disclaimer:</strong> This article is general educational information, not legal, tax, accounting, financial, real-estate, forestry or estate-planning advice. Property, forestry, tax and municipal processes vary by province and circumstance.</p>
              <p>Before selling, gifting, donating or transferring woodland, obtain independent Canadian legal and tax advice and any appropriate forestry or valuation advice. Little Tree Farm does not guarantee acceptance, purchase, payment, a charitable receipt, permanent conservation status or any future land use unless confirmed in a formal written agreement.</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
