import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandFaq, type LandFaqItem } from "@/components/land/LandFaq";
import styles from "@/components/land/LandArticle.module.css";
import { businessInfo } from "@/lib/config/business";

const pagePath = "/land/unwanted-rural-property";
const pageUrl = `${businessInfo.url}${pagePath}`;
const publishedDate = "2026-08-06";
const pageTitle = "Options for Unwanted Rural Property in Canada";
const pageDescription =
  "Own rural land you no longer want? Compare realistic options in Canada: keep, sell, gift, donate, transfer for stewardship, or leave it in your will.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "unwanted rural property",
    "what to do with unwanted land Canada",
    "inherited land I don't want",
    "tired of paying taxes on vacant land",
    "how to get rid of rural property",
    "sell rural land Canada",
    "donate land Canada",
    "landlocked property options",
    "unwanted woodlot",
    "abandoned farmland",
    "rural property stewardship Canada",
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
  ["why-unwanted", "Why rural property becomes unwanted"],
  ["main-options", "Your main options at a glance"],
  ["keep", "Option 1 — Keep it, with a purpose"],
  ["sell", "Option 2 — Sell it"],
  ["neighbour", "Option 3 — A neighbour or family member"],
  ["donate", "Option 4 — Donate it"],
  ["will", "Option 5 — Leave it in your will"],
  ["stewardship", "Option 6 — Transfer for stewardship"],
  ["taxes", "What if you stop paying taxes?"],
  ["decision", "Which option fits your situation?"],
  ["checklist", "Information to gather first"],
  ["little-tree-farm", "Little Tree Farm and your land"],
  ["faq", "Frequently asked questions"],
  ["sources", "Sources and related reading"],
] as const;

const overviewCards = [
  ["Keep it", "Suits owners not ready to decide, or who can find the land a new purpose."],
  ["Sell it", "Suits owners who need the proceeds and have a marketable property."],
  ["Sell to a neighbour", "Often the most realistic buyer for small or landlocked parcels."],
  ["Gift or transfer it", "Suits owners with a specific person willing to take it on."],
  ["Donate it", "Suits owners who want the land cared for and don't need payment."],
  ["Leave it in a will", "Suits owners not ready to give up the property during their lifetime."],
  ["Stewardship transfer", "Suits rural or wooded land that could support restoration or habitat."],
  ["Tax sale (last resort)", "Not recommended — least controlled and slowest way to exit ownership."],
] as const;

const comparisonRows = [
  ["Keep it, with a purpose", "—", "Yes", "High", "Owners not ready to decide"],
  ["Sell on the open market", "Full or negotiated", "No", "High", "Marketable parcels; owners who need proceeds"],
  ["Sell or gift to a neighbour", "Negotiable", "No", "High", "Small, landlocked or awkward parcels"],
  ["Gift or transfer to someone", "Usually none", "No", "High", "A specific, willing recipient"],
  ["Donate to an organization", "None", "No", "Shared with the recipient", "Owners who want the land cared for"],
  ["Leave it in your will", "None", "Yes, for life", "Shared — recipient must accept", "Owners planning ahead"],
  ["Transfer for stewardship", "Varies", "Varies", "Shared", "Land suited to restoration or habitat"],
  ["Stop paying taxes", "None", "Until a forced sale", "Low — least control", "Not recommended"],
] as const;

const situations = [
  {
    title: "I need money from the property",
    options: ["Sell it on the open market", "Sell it to a neighbour", "Explore a partial-sale arrangement with an eligible organization"],
  },
  {
    title: "I don't need payment and want the land cared for",
    options: ["Donate it", "Gift it to someone you trust", "Transfer it to a stewardship organization", "Leave it through your will"],
  },
  {
    title: "I want to keep using the land for now",
    options: ["Keep it and give it a purpose", "Lease it", "Plan a future bequest", "Explore a conservation or stewardship agreement where available"],
  },
  {
    title: "Nobody wants it and it's difficult to sell",
    options: ["Contact neighbours directly", "Correct title or access problems", "Adjust your price expectations", "Explore donation or a nominal transfer", "Contact organizations with a compatible land-use mission"],
  },
  {
    title: "My children don't want it",
    options: ["Sell during your lifetime", "Donate it", "Arrange a bequest", "Transfer it with a clear stewardship plan"],
  },
] as const;

const checklist = [
  "Parcel number or PID",
  "Province and municipality",
  "Acreage",
  "Ownership names",
  "Annual property taxes",
  "Access information",
  "Survey or boundary information",
  "Mortgage or liens",
  "Unpaid taxes",
  "Buildings on the property",
  "Present land use",
  "Photographs",
  "Wetlands, waterways or shoreline",
  "Any title disputes",
  "Your preferred timeline",
  "Whether you need payment",
  "What you hope happens to the property",
] as const;

const faqs = [
  {
    question: "How do I get rid of unwanted rural property?",
    answer:
      "Your main options are keeping it with a new purpose, selling it, offering it to a neighbour or family member, donating it, transferring it for restoration or stewardship, or leaving it through your will. Which fits best depends on whether you need payment and what you hope happens to the land.",
  },
  {
    question: "What can I do with rural land I do not want?",
    answer:
      "You generally have more options than continuing to pay for it or waiting for a tax sale — selling, gifting, donating, transferring for stewardship, or planning a future bequest are all worth considering.",
  },
  {
    question: "Can I give rural land away?",
    answer:
      "Yes, gifting to a family member, neighbour, or organization is possible, though it still requires proper legal documentation and can have tax consequences even when no money changes hands.",
  },
  {
    question: "Can I donate unwanted rural property?",
    answer:
      "In many cases yes, though the recipient needs to review and agree to accept the specific property. See our full guide to donating land in Canada for details.",
  },
  {
    question: "Can I donate inherited land?",
    answer:
      "Yes, once the property is legally transferred to you through the estate, you can generally consider donating it like any other land you own.",
  },
  {
    question: "Can I sell rural property to a neighbour?",
    answer:
      "Yes, and it's often one of the more realistic buyers for a small, landlocked, or otherwise hard-to-sell parcel, since combining it with adjoining land may add real value for them.",
  },
  {
    question: "Can I transfer land for one dollar?",
    answer:
      "A nominal transfer is possible in some circumstances, but it still requires proper legal documentation and may carry tax implications similar to a gift. Speak with a lawyer first.",
  },
  {
    question: "What happens if nobody wants my land?",
    answer:
      "Very few properties truly have no options. Correcting title or access issues, adjusting your price expectations, contacting neighbours directly, or exploring donation or stewardship transfer can all open doors that a straightforward listing might not.",
  },
  {
    question: "Can I abandon rural property?",
    answer:
      "Not cleanly. You generally remain the legal owner, with ongoing tax responsibility, until the property is sold, transferred, donated, or a municipal tax sale process concludes.",
  },
  {
    question: "What happens if I stop paying property taxes?",
    answer:
      "Unpaid taxes accrue as a debt against the property and can eventually lead to municipal collection action, liens, and a tax sale process, depending on your province and municipality. This is generally not a fast or controlled way to exit ownership.",
  },
  {
    question: "Can I leave rural land in my will?",
    answer:
      "Yes, and this lets you keep using the property during your lifetime. It's best to contact the intended recipient before finalizing the will, since naming them doesn't guarantee they can accept the gift.",
  },
  {
    question: "Will a charity accept any rural property?",
    answer:
      "No. Charities and other organizations review every property individually and are not obligated to accept a particular parcel, regardless of how meaningful it is to you.",
  },
  {
    question: "Can I donate land with unpaid taxes?",
    answer:
      "Unpaid taxes are a factor any recipient will consider carefully, and they generally need to be addressed before or as part of a transfer.",
  },
  {
    question: "Can I donate land with a mortgage?",
    answer:
      "It's more complicated, since a mortgage doesn't disappear automatically — it typically needs to be resolved or addressed as part of the donation.",
  },
  {
    question: "What if the land is landlocked?",
    answer:
      "Landlocked parcels can be harder to sell or donate, but they're not necessarily without options — a neighbouring landowner is often the most realistic recipient, since combining the parcels may resolve the access issue.",
  },
  {
    question: "What if the property has wetlands?",
    answer:
      "Wetlands can actually make a property more interesting to conservation-minded recipients, given their ecological value, even though they may limit conventional development or sale.",
  },
  {
    question: "Could Little Tree Farm accept my land?",
    answer:
      "Possibly, if it's suited to native forest restoration, seed orchards, nut orchards, habitat projects or similar long-term stewardship use. We review every property individually and can't promise acceptance in advance.",
  },
  {
    question: "What is the first step?",
    answer:
      "Gathering basic information about the property and thinking honestly about whether you need payment and what you hope happens to the land — see the checklist on this page for a good starting point.",
  },
] as const satisfies readonly LandFaqItem[];

function TableOfContents() {
  return (
    <ol>
      {toc.map(([id, label]) => (
        <li key={id}><a href={`#${id}`}>{label}</a></li>
      ))}
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
        headline: pageTitle,
        description: pageDescription,
        image: `${businessInfo.url}/main-landing-page/walnut-tree-with-fruits.jpg`,
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
          { "@type": "ListItem", position: 2, name: "Options for unwanted rural property", item: pageUrl },
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

export default function UnwantedRuralPropertyPage() {
  const schema = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/main-landing-page/walnut-tree-with-fruits.jpg"
          alt="A rural Canadian homestead with a mature black walnut tree, open lawn and white fence"
          fill
          sizes="100vw"
          preload
        />
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <span>Land stewardship</span><span aria-hidden="true">/</span>
            <span aria-current="page">Options for unwanted rural property</span>
          </nav>
          <p className={styles.eyebrow}>Land Stewardship Knowledge Centre</p>
          <h1>Options for Unwanted Rural Property</h1>
          <p className={styles.heroDek}>
            Maybe you inherited a wooded lot you never asked for. Maybe you bought rural acreage
            years ago and your plans changed. Maybe the land is hours away, nobody in the family
            wants it, and every year another property tax bill arrives. You usually have more
            options than continuing to pay for it or waiting for a tax sale.
          </p>
          <div className={styles.meta}>
            <span>Published August 6, 2026</span>
            <span>Canada-wide overview</span>
            <span>General educational information</span>
          </div>
        </div>
      </header>

      <div className={styles.factsWrap}>
        <div className={styles.facts} aria-label="Guide essentials">
          <div className={styles.fact}><span className={styles.factLabel}>Seven realistic paths</span><p>Keep, sell, gift, donate, bequeath or transfer for stewardship — plus one last resort to avoid.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Decide two things first</span><p>Whether you need payment, and what you hope happens to the land.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>One thing not to do</span><p>Simply stopping property-tax payments is slow, costly and out of your control.</p></div>
        </div>
      </div>

      <div className={styles.mobileToc}>
        <details>
          <summary>On this page</summary>
          <nav aria-label="Table of contents"><TableOfContents /></nav>
        </details>
      </div>

      <div className={styles.layout}>
        <nav className={styles.toc} aria-label="Table of contents">
          <span className={styles.tocTitle}>On this page</span>
          <TableOfContents />
        </nav>

        <article className={styles.article}>
          <div className={styles.notice} role="note" aria-label="Important legal notice">
            <span className={styles.noticeMark} aria-hidden="true">i</span>
            <p><strong>General information only.</strong> This article is educational and general in nature, not legal, tax or financial advice. Rules vary by province — speak with qualified Canadian professionals before making decisions about your property.</p>
          </div>

          <section id="why-unwanted">
            <span className={styles.sectionNumber}>01 · A common situation</span>
            <h2>Why Rural Property Becomes Unwanted</h2>
            <p>It happens for all kinds of ordinary reasons. Some people inherited a woodlot or old family property nobody in the family actively uses. Some bought vacant land as an investment, or with plans to build that never quite happened. Some own a small rural parcel, a landlocked lot, or acreage on wet or difficult ground that&apos;s hard to do much with. Others have an old homestead or a former farm that stopped being farmed years ago.</p>
            <p>Whatever the history, the ongoing costs don&apos;t pause: annual property taxes, insurance, a background worry about liability, and — if the property is far from where you live — the simple difficulty of maintaining land you rarely see. Add in family disagreements about what should happen next, or the fact that you&apos;re getting older and thinking about simplifying your estate, and it&apos;s easy to see why so many people end up quietly searching some version of &ldquo;I inherited land I don&apos;t want&rdquo; or &ldquo;I&apos;m tired of paying taxes on land I never use.&rdquo;</p>
            <p className={styles.pullQuote}>If that&apos;s you, you&apos;re in good company — this is one of the most common situations rural landowners across Canada find themselves in.</p>
          </section>

          <section id="main-options">
            <span className={styles.sectionNumber}>02 · The short version</span>
            <h2>Your Main Options for Unwanted Rural Property</h2>
            <p>In short, you can generally keep it, sell it, transfer it, gift it, donate it, leave it in your will, or find it a stewardship use — this page walks through each one. Here&apos;s the overview, before we go deeper:</p>
            <div className={styles.typeGrid}>
              {overviewCards.map(([name, description], index) => (
                <div className={styles.typeCard} key={name}><span className={styles.typeIndex}>{index + 1}</span><h3>{name}</h3><p>{description}</p></div>
              ))}
            </div>
            <div className={styles.tableWrap}>
              <table className={styles.comparison}>
                <caption>General comparison only. The right path depends on your property, finances and goals — confirm the details with qualified professionals.</caption>
                <thead><tr><th>Option</th><th>Payment?</th><th>Keep using it?</th><th>Control over outcome</th><th>Often suits</th></tr></thead>
                <tbody>{comparisonRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <p className={styles.tableHint}>On a small screen, scroll the table sideways to compare every option.</p>
          </section>

          <section id="keep">
            <span className={styles.sectionNumber}>03 · Option one</span>
            <h2>Keep the Land and Give It a Purpose</h2>
            <p className={styles.pullQuote}>Unwanted doesn&apos;t have to mean unused.</p>
            <p>Some owners find that land feels far less like a burden once it has a purpose again — woodland management, a family camp, a working woodlot, a seed orchard, a nut orchard, a food forest, small-scale farming, a lease to a local farmer, recreational use, or simple conservation. Our guides on <Link href="/blog/unused-land-canada">productive options for unused land in Canada</Link> and <Link href="/blog/rural-land-pay-for-itself">ways to make rural land pay for itself</Link> both go into more depth if either direction interests you.</p>
            <p>Worth being honest about: keeping the land still means ongoing responsibility. Taxes, insurance and maintenance don&apos;t pause just because the property finally has a purpose. This option suits people who aren&apos;t in a hurry and who&apos;d genuinely enjoy putting the land to use, not people simply looking to make peace with an obligation.</p>
            <div className={styles.optionMeta}>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Best when</span><p>You&apos;re not in a hurry and would genuinely enjoy a new use for the land.</p></div>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Keep in mind</span><p>Taxes, insurance and maintenance continue for as long as you own it.</p></div>
            </div>
          </section>

          <section id="sell">
            <span className={styles.sectionNumber}>04 · Option two</span>
            <h2>Sell the Rural Property</h2>
            <p>A conventional sale is often the most familiar route: an ordinary listing, a private sale, working with a rural land agent, selling as-is, or combining a small parcel with an adjoining property to make it more attractive to a buyer. Seller financing can sometimes make sense too, where legally appropriate and reviewed by a lawyer.</p>
            <p>Some rural parcels are genuinely harder to sell than others — no legal road access, unclear boundaries, wetlands, very small size, title problems, unpaid taxes, poor access, limited development potential, or simply low demand in that particular area. None of these make a sale impossible, but they usually mean adjusting your price expectations or your timeline. Not every property can be sold quickly, and that&apos;s worth planning for rather than being surprised by.</p>
            <div className={styles.optionMeta}>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Best when</span><p>You need the proceeds and the property is reasonably marketable.</p></div>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Keep in mind</span><p>Access, title, wetlands or low demand may mean adjusting price or timeline.</p></div>
            </div>
          </section>

          <section id="neighbour">
            <span className={styles.sectionNumber}>05 · Option three</span>
            <h2>Offer It to a Neighbour or Family Member</h2>
            <p>Adjacent landowners are often the most logical buyers or recipients, simply because your property may add more value to their land than it would to a stranger&apos;s — filling in an awkward boundary, adding acreage to an existing farm or woodlot, or resolving an access problem. This can work as a sale, a gift, or a nominal-price transfer, depending on what makes sense for both of you.</p>
            <p>Family is worth a direct conversation too, even if you&apos;re fairly sure the answer will be no — it at least gives everyone a final, clear opportunity to take it on before you look elsewhere. Keep in mind that gifting land, even to family, can still carry real legal and tax consequences, so it&apos;s worth involving a lawyer regardless of the price.</p>
            <div className={styles.optionMeta}>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Best when</span><p>The parcel adds real value to adjoining land — or family wants one last chance.</p></div>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Keep in mind</span><p>Gifts and nominal-price transfers still carry legal and tax consequences.</p></div>
            </div>
          </section>

          <section id="donate">
            <span className={styles.sectionNumber}>06 · Option four</span>
            <h2>Donate the Property</h2>
            <p>Land can sometimes be donated to registered charities, land trusts, conservation organizations, community organizations, municipalities, educational institutions, or other stewardship-focused organizations. This can be especially worth exploring if you no longer use the land, don&apos;t want to pass it on to heirs who don&apos;t want it either, hope to see it restored or protected, or are simply tired of the ongoing taxes and maintenance.</p>
            <p>A few things are worth knowing going in: organizations don&apos;t accept every property, charitable receipts aren&apos;t automatic, the recipient&apos;s legal status matters for tax purposes, and any potential recipient will need to assess the land&apos;s title, liabilities, taxes, access, condition and long-term costs before agreeing to take it on. Our full guide on <Link href="/land/donate-land">how to donate land in Canada</Link> walks through the whole process, including outright gifts, gifts through a will, and a few less common arrangements worth knowing about.</p>
            <div className={styles.optionMeta}>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Best when</span><p>You don&apos;t need payment and want the land cared for long-term.</p></div>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Keep in mind</span><p>Recipients review every property individually — receipts are never automatic.</p></div>
            </div>
          </section>

          <section id="will">
            <span className={styles.sectionNumber}>07 · Option five</span>
            <h2>Leave the Land Through Your Will</h2>
            <p>You can continue using and controlling the property for the rest of your life while arranging for it to pass to family, a charity, a conservation organization, a community group, or another suitable recipient after you&apos;re gone. This is a common choice for owners who aren&apos;t ready to give anything up now, but who are thinking seriously about a land legacy or forest legacy, or who already know their children don&apos;t want the property and want another plan in place.</p>
            <p className={styles.pullQuote}>The intended recipient should be contacted before they&apos;re named — naming someone in a will doesn&apos;t guarantee they&apos;ll be willing or able to accept the gift.</p>
            <p>Our companion guide on <Link href="/land/leave-land-in-your-will">how to leave land in your will</Link> covers this in much more depth, including taxes, estate liquidity, and how to choose the right recipient with confidence.</p>
            <div className={styles.optionMeta}>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Best when</span><p>You want to keep the property for life but settle its future now.</p></div>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Keep in mind</span><p>Speak with the intended recipient before naming them — and plan a fallback.</p></div>
            </div>
          </section>

          <section id="stewardship">
            <span className={styles.sectionNumber}>08 · Option six</span>
            <h2>Transfer It for Restoration or Stewardship</h2>
            <p>Not every rural property is rare, high-priority conservation land — and that&apos;s fine. A property can still be genuinely useful for planting native forest, creating wildlife habitat, establishing native seed sources, a nut-tree orchard, a food forest, a demonstration planting, watershed restoration, agricultural use, community access, or simply long-term, patient stewardship.</p>
            <div className={styles.imageBand}>
              <Image src="/main-landing-page/black-walnut-tree.jpg" alt="A mature black walnut tree standing alone in an open rural field" fill sizes="(max-width: 960px) 100vw, 760px" />
              <p className={styles.imageCaption}>Land that stopped paying its way can still become the seed source for forests that outlive us all.</p>
            </div>
            <p>What matters is fit: the right property, the right steward, and a realistic long-term plan for care. <Link href="#little-tree-farm">Little Tree Farm&apos;s own stewardship initiative</Link>, described below, is one example of how this can work in practice.</p>
            <div className={styles.optionMeta}>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Best when</span><p>The land could support restoration, habitat, seed production or patient care.</p></div>
              <div className={styles.optionMetaCell}><span className={styles.optionMetaLabel}>Keep in mind</span><p>Suitability is always reviewed individually — no outcome is guaranteed.</p></div>
            </div>
          </section>

          <section id="taxes">
            <span className={styles.sectionNumber}>09 · The path to avoid</span>
            <h2>What Happens If You Stop Paying Property Taxes?</h2>
            <p>It&apos;s worth understanding this clearly rather than treating it as an easy way out. Unpaid property taxes generally lead to penalties, interest, and eventually municipal collection action — including liens and, in time, formal tax sale procedures, with the specific process depending on your province and municipality.</p>
            <p>This is not a recommended way to dispose of unwanted land. It&apos;s typically slower and less predictable than choosing to sell, transfer or donate the property yourself, and it can affect your finances and credit along the way. Voluntarily deciding what happens to the property generally gives you far more control over the outcome than letting the tax process run its course. Our companion article on <Link href="/blog/leaving-land-empty-costing-thousands">why leaving land empty could be costing you thousands</Link> goes into the true carrying costs in more detail.</p>
          </section>

          <section id="decision">
            <span className={styles.sectionNumber}>10 · Narrow it down</span>
            <h2>Which Option Might Fit Your Situation?</h2>
            <p>Find the situation that sounds like yours. These are starting points for a conversation with the right professionals — not a legal test or an eligibility decision.</p>
            <div className={styles.situationGrid}>
              {situations.map((situation) => (
                <div className={styles.situationCard} key={situation.title}>
                  <h3>{situation.title}</h3>
                  <ul>{situation.options.map((option) => <li key={option}>{option}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          <section id="checklist">
            <span className={styles.sectionNumber}>11 · Prepare the file</span>
            <h2>Information to Gather Before You Decide</h2>
            <p>Whichever direction you&apos;re leaning toward, having the basics gathered ahead of time makes any conversation — with a real estate agent, a lawyer, a neighbour, or an organization like ours — much more productive.</p>
            <ul className={styles.checklist}>{checklist.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section id="little-tree-farm">
            <div className={styles.ltfBox}>
              <p className={styles.eyebrow}>Little Tree Farm</p>
              <h2>Could Little Tree Farm Be Part of the Answer?</h2>
              <p>Little Tree Farm, a native-tree nursery and forest-restoration organization in Nova Scotia, may be interested in discussing certain rural properties that could support native forest restoration, seed orchards, nut orchards, habitat projects, or other long-term stewardship uses.</p>
              <p>Not every property will be suitable, and every property is reviewed individually. Some land may be better suited to another organization, a neighbour, a farmer, a municipality, or an ordinary sale — and that&apos;s a perfectly reasonable outcome.</p>
              <div className={styles.transparency}><p><strong>To be transparent:</strong> Little Tree Farm is not automatically a registered charity or land trust, and no charitable tax receipt should be assumed. We review every property individually and cannot promise acceptance, purchase or a particular future use in advance.</p></div>
              <div className={styles.ctaRow}>
                <Link className={styles.primaryButton} href="/contact">Tell us about your land</Link>
                <Link className={styles.secondaryButton} href="/land/donate-land">How to donate land in Canada</Link>
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
            <p>These official resources explain the federal tax and ecological-gift concepts touched on above. They do not replace advice about your province, title or tax circumstances.</p>
            <div className={styles.sources}>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/p113/p113-gifts-income-tax.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Gifts and Income Tax</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/charities-giving/charities/operating-a-registered-charity/issuing-receipts/determining-fair-market-value-gifts-kind-non-cash-gifts.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Fair market value of non-cash gifts</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/environment-climate-change/services/environmental-funding/ecological-gifts-program.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Environment and Climate Change Canada</span><h3>Ecological Gifts Program</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
            </div>

            <h2 className={styles.relatedHeading}>Related Reading</h2>
            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} href="/land/i-dont-want-my-woodland-anymore"><h3>I Don&apos;t Want My Woodland Anymore</h3><span>See woodland-specific options →</span></Link>
              <Link className={styles.relatedCard} href="/land/donate-land"><h3>How to Donate Land in Canada</h3><span>Compare donation options →</span></Link>
              <Link className={styles.relatedCard} href="/land/leave-land-in-your-will"><h3>How to Leave Land in Your Will</h3><span>Read the guide →</span></Link>
              <Link className={styles.relatedCard} href="/blog/unused-land-canada"><h3>What to Do With Unused Land in Canada</h3><span>Explore 10 options →</span></Link>
              <Link className={styles.relatedCard} href="/blog/inherited-land-what-to-do"><h3>Inherited Land: What Should You Do Next?</h3><span>Work through it →</span></Link>
            </div>
          </section>

          <section>
            <div className={styles.finalCta}>
              <h2>Not Sure What to Do With Your Rural Property?</h2>
              <p>You don&apos;t need to decide everything today. Start by gathering the basic information about your property and thinking about whether you need payment, want to keep using the land, or simply want it placed in responsible hands.</p>
              <div className={styles.ctaRow}>
                <Link className={styles.secondaryButton} href="/contact">Tell us about your land</Link>
                <Link className={styles.secondaryButton} href="/land/donate-land">Learn how to donate land</Link>
              </div>
              <p>No pressure. No obligation. Every property is considered individually.</p>
            </div>
            <div className={styles.disclaimer}>
              <p><strong>Legal disclaimer:</strong> This article is provided for general educational purposes only and does not constitute legal, tax, accounting or estate-planning advice. Property law, tax treatment and municipal processes vary by province.</p>
              <p>Before selling, gifting, donating or transferring land, obtain independent advice from qualified Canadian professionals. Little Tree Farm does not guarantee that it will accept, purchase or enter into an agreement involving any property, and does not promise a charitable tax receipt.</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
