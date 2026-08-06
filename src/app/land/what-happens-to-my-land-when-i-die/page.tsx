import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandFaq, type LandFaqItem } from "@/components/land/LandFaq";
import { LegacyJourney } from "@/components/land/LegacyJourney";
import styles from "@/components/land/LandArticle.module.css";
import { businessInfo } from "@/lib/config/business";

const pagePath = "/land/what-happens-to-my-land-when-i-die";
const pageUrl = `${businessInfo.url}${pagePath}`;
const publishedDate = "2026-08-06";
const pageTitle = "What Happens to My Land When I Die? A Canadian Guide";
const pageDescription =
  "What happens to your land when you die? Who inherits it, what happens without a will, probate, taxes — and how to plan for family, sale, donation or restoration.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "what happens to my land when I die",
    "who inherits my land Canada",
    "dying without a will Canada",
    "intestacy rules rural property",
    "what happens to property when someone dies",
    "can my estate be forced to sell land",
    "children don't want the family farm",
    "leave land to a charity or organization",
    "woodland estate planning",
    "land succession planning Canada",
    "probate rural property Canada",
    "land legacy planning",
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
  ["two-futures", "A story of two futures"],
  ["simple-answer", "The simple answer"],
  ["with-will", "If you have a will"],
  ["without-will", "If you die without a will"],
  ["probate", "Probate"],
  ["joint-ownership", "Joint ownership"],
  ["forced-sale", "Can the estate be forced to sell?"],
  ["children-dont-want", "When children don't want it"],
  ["choose-what-happens", "Choosing what happens"],
  ["leave-to-organization", "Leaving land to an organization"],
  ["leave-to-conservation", "Leaving land to conservation"],
  ["nature-trust-not-interested", "If a nature trust says no"],
  ["little-tree-farm", "Little Tree Farm and your land"],
  ["give-away-alive", "Acting during your lifetime"],
  ["lifetime-use", "Keeping lifetime use"],
  ["nobody-wants", "If nobody wants the land"],
  ["possible-futures", "Possible futures"],
  ["make-a-plan", "How to make a plan"],
  ["checklist", "What to gather"],
  ["faq", "Frequently asked questions"],
  ["sources", "Sources and related reading"],
] as const;

const possibleFutures = [
  ["Keep It in the Family", ["Someone genuinely wants it", "Responsibilities are clearly assigned", "Taxes and maintenance are affordable", "Succession terms are documented"]],
  ["Sell It", ["The estate needs money", "Heirs want proceeds rather than land", "No suitable future steward exists", "You want certainty during your lifetime"]],
  ["Donate to a Conservation Organization", ["The property fits the organization's mission", "The organization is willing and able to accept it", "Ecological protection is the main goal"]],
  ["Transfer for Restoration or Productive Stewardship", ["The land could support planting, restoration, orchards, habitat or seed production", "A compatible steward is willing to accept responsibility"]],
  ["Leave It Through Your Will", ["You want to retain ownership during your lifetime", "The intended recipient has already agreed", "The will is professionally prepared", "Estate expenses have been considered"]],
] as const;

const planSteps = [
  ["Identify the Property", "Gather the civic address, PID or parcel identification number, legal description, acreage, survey, title information, mortgage information, and annual property taxes."],
  ["Decide What You Want", "Ask honestly whether the priority is family, money, restoration, conservation, simplicity, keeping lifetime use, or avoiding a burden on your heirs."],
  ["Speak With Your Family", "Honest discussion, even an uncomfortable one, prevents assumptions from turning into estate disputes later."],
  ["Contact Potential Recipients", "Do this before naming any organization in your will — not after."],
  ["Assess the Land", "Consider access, buildings, forest condition, soil, water, wetlands, liabilities, future uses, and ongoing carrying costs."],
  ["Obtain Legal and Tax Advice", "A lawyer is essential, and depending on your situation, an accountant, tax adviser, appraiser, surveyor, or environmental consultant may be useful too."],
  ["Put the Plan in Writing", "Verbal intentions, however clear in your own mind, aren't enough to guide your family or an executor after you're gone."],
] as const;

const checklist = [
  "Legal owner's name",
  "Property location",
  "PID or parcel number",
  "Approximate acreage",
  "Current land use",
  "Access and road condition",
  "Annual property taxes",
  "Mortgage or liens",
  "Unpaid taxes",
  "Buildings or structures",
  "Watercourses",
  "Wetlands",
  "Shoreline",
  "Known contamination or dumping",
  "Forestry activity",
  "Current leases",
  "Title disputes",
  "Survey information",
  "Photographs",
  "Maps",
  "Desired timing",
  "Whether you need payment",
  "Whether you wish to retain lifetime use",
  "Your preferred future for the land",
] as const;

const faqs = [
  { question: "What happens to my land when I die?", answer: "It generally becomes part of your estate. If you have a valid will, it directs who receives the property, subject to debts, taxes and estate administration. Without a will, provincial or territorial intestacy law determines who is entitled to inherit." },
  { question: "Who inherits my land if I have a will?", answer: "Whoever you name as a beneficiary — a spouse, children, another relative, a friend, or an organization — subject to your estate's debts, taxes and expenses being addressed first." },
  { question: "Who gets my land if I die without a will?", answer: "Provincial or territorial intestacy laws determine this, typically prioritizing a spouse and children, then other relatives. The exact rules vary significantly across Canada, so a lawyer in your province can explain what would apply to you." },
  { question: "Does the government take my land if I die without a will?", answer: "Not normally. Intestacy laws first identify eligible relatives. Property generally only passes to the Crown in unusual circumstances where there is no valid will and no legally entitled heir can be found." },
  { question: "Does rural land have to go through probate?", answer: "It depends on the province, the ownership structure, the property's title, and other factors. A lawyer can determine whether probate is required and what documents are needed to transfer your specific property." },
  { question: "What happens if my land has a mortgage?", answer: "A mortgage doesn't disappear at death — it remains an obligation of the estate, and typically needs to be paid, refinanced, or otherwise addressed before or as part of any transfer." },
  { question: "Can my estate be forced to sell the property?", answer: "Yes, this can happen if the estate owes money, there's a mortgage, taxes are unpaid, beneficiaries want cash rather than land, heirs can't agree, or no one is willing to take on the responsibility. Good planning can reduce this risk but can't eliminate every financial or legal issue." },
  { question: "Can I leave land to only one of my children?", answer: "Generally yes, though this is worth discussing with a lawyer and, ideally, your family, since it can raise questions of fairness that are better addressed openly than left to surface after your death." },
  { question: "What happens if my children do not want the land?", answer: "This is common. Options include selling during your lifetime, transferring to an interested heir, leaving other assets to other children, arranging a donation, or identifying a conservation or stewardship organization as a recipient instead." },
  { question: "Can several children inherit one property?", answer: "Yes, though shared ownership can become complicated if the children have different goals, since major decisions like a sale generally require everyone's agreement." },
  { question: "Can I leave land to a charity?", answer: "Yes, though it's best to confirm with the charity in advance that they're willing and able to accept the property when the time comes, since naming them doesn't guarantee acceptance." },
  { question: "Can I leave woodland to a conservation organization?", answer: "Possibly, particularly if the property has significant ecological value such as rare habitat, wetlands, or mature forest. Different organizations have different acquisition priorities." },
  { question: "Should I contact an organization before naming it in my will?", answer: "Yes, always. The organization may not be able to accept land in that location, may lack funds for taxes and management, or may need the right to decline — all things worth knowing before, not after, the will is finalized." },
  { question: "Can an organization refuse land left in a will?", answer: "Yes. No organization is obligated to accept a bequest, which is exactly why a lawyer-prepared alternate plan is worth having." },
  { question: "Can I donate land while I am alive?", answer: "Yes, a lifetime donation is possible and lets you participate in choosing the recipient and see the transition happen, though it also means giving up ownership and control immediately." },
  { question: "Can I continue living on land that will later be transferred?", answer: "In some cases, arrangements such as a life estate or a future bequest through your will may allow this. These are legally complex and require professional drafting." },
  { question: "Can I leave land to Little Tree Farm?", answer: "You're welcome to start that conversation with us. We review every potential gift individually and can't promise in advance that a specific property will be accepted." },
  { question: "What kinds of land might Little Tree Farm consider?", answer: "Land with potential for native forest restoration, seed orchards, nut orchards, food forests, wildlife habitat enhancement, or other long-term productive stewardship, subject to individual review of location, access, taxes, title and other factors." },
  { question: "Will Little Tree Farm accept land a nature trust will not take?", answer: "Possibly, depending on the property. Little Tree Farm's focus is different from a traditional nature trust's ecological acquisition criteria, so some land not prioritized for permanent conservation may still have value for restoration or productive stewardship. This is never guaranteed and depends on individual review." },
  { question: "Will I receive a charitable tax receipt?", answer: "Not automatically, and not from Little Tree Farm, which is not a registered charity or qualified donee unless separately confirmed. Confirm any recipient's status with an accountant before assuming a receipt will be available." },
  { question: "Can I require that the land always remain forest?", answer: "You can express this wish, and in some cases a legally binding tool like a conservation covenant may be available depending on the province and recipient. A lawyer can explain what's enforceable versus what remains simply a preference." },
  { question: "What happens if nobody wants the property?", answer: "The estate may need to sell it, a neighbour may be interested, an organization may agree to take it on, or in the worst case, unpaid taxes could eventually lead to a municipal tax sale process. Ignoring the property is not itself an estate plan." },
  { question: "Can I simply abandon rural land?", answer: "Not cleanly, during your lifetime or through your estate — ownership and its responsibilities continue until the property is formally sold, transferred, donated, or a tax sale process concludes." },
  { question: "What documents should I gather?", answer: "Your deed, PID or parcel number, survey, title information, mortgage documents, tax records, and any information about buildings, access or environmental features — see the checklist on this page for a full list." },
  { question: "What is the first step?", answer: "Identifying the property clearly and deciding what actually matters most to you about its future — family, money, restoration, conservation, or simply avoiding a burden on your heirs — before speaking with a lawyer." },
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
          { "@type": "ListItem", position: 2, name: "What happens to my land when I die?", item: pageUrl },
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

export default function WhatHappensWhenIDiePage() {
  const schema = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/main-landing-page/black-walnut-tree.jpg"
          alt="A mature black walnut tree standing alone on rural Canadian land at golden hour"
          fill
          sizes="100vw"
          preload
        />
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <span>Land stewardship</span><span aria-hidden="true">/</span>
            <span aria-current="page">What happens to my land when I die?</span>
          </nav>
          <p className={styles.eyebrow}>Land Stewardship Knowledge Centre</p>
          <h1>What Happens to My Land When I Die?</h1>
          <p className={styles.heroDek}>
            A house, farm, woodlot or piece of rural land can stay in a family for decades — but
            ownership doesn&apos;t continue automatically forever. Here is what actually happens
            to your land when you die, and how to shape it while you still can.
          </p>
          <div className={styles.meta}>
            <span>Published August 6, 2026</span>
            <span>Canada-wide overview</span>
            <span>General educational information</span>
          </div>
          <a className={styles.heroCue} href="#two-futures">
            Begin the story
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </header>

      <div className={styles.factsWrap}>
        <div className={styles.facts} aria-label="Guide essentials">
          <div className={styles.fact}><span className={styles.factLabel}>The default</span><p>Your land becomes part of your estate — with or without instructions.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>The fork</span><p>A written plan is the difference between the two futures.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>The first step</span><p>Decide what matters most: family, money, restoration or simplicity.</p></div>
        </div>
      </div>

      <LegacyJourney />

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
            <p><strong>General information only.</strong> This article provides general Canadian information and is not legal, tax, appraisal or estate-planning advice. Laws and procedures vary by province and territory — speak with a qualified lawyer and accountant about your specific situation.</p>
          </div>

          <section id="simple-answer">
            <span className={styles.sectionNumber}>01 · The simple answer</span>
            <h2>The Simple Answer: Your Land Becomes Part of Your Estate</h2>
            <p>Land doesn&apos;t disappear, and it doesn&apos;t automatically return to the government, when an owner dies. In plain terms, the property becomes an asset of your estate, and your executor or estate representative becomes responsible for dealing with it. Ownership can&apos;t simply remain indefinitely in a deceased person&apos;s name — mortgages, liens, unpaid taxes and estate expenses all need to be addressed, and the land is ultimately transferred, sold, divided, donated, or otherwise dealt with according to your will and the applicable provincial law.</p>
            <p>The specific process varies meaningfully by province, so this guide stays general rather than overgeneralizing detailed probate rules that differ across the country. What&apos;s consistent everywhere: the property needs a plan, one way or another.</p>
          </section>

          <section id="with-will">
            <span className={styles.sectionNumber}>02 · With a will</span>
            <h2>What Happens If You Have a Will?</h2>
            <p>A will can state clearly who should receive your property — a spouse, your children, one particular child, several heirs together, another relative, a friend, a registered charity, a land trust, a community organization, or another suitable recipient.</p>
            <p>It&apos;s worth knowing that a seemingly simple instruction like &ldquo;my children receive the land equally&rdquo; can create real complications. Children may have different goals for the property — one wants to keep it, another wants cash. Shared ownership can become difficult to manage. Future taxes and maintenance still need to be paid by someone. If the estate doesn&apos;t have enough cash to cover its debts, the property may need to be sold regardless of what the will hoped for. Clear instructions, professionally drafted with a lawyer who understands your specific goals, go a long way toward avoiding these problems.</p>
          </section>

          <section id="without-will">
            <span className={styles.sectionNumber}>03 · Without a will</span>
            <h2>What Happens If You Die Without a Will?</h2>
            <p>When someone dies without a valid will, provincial or territorial intestacy laws determine who is entitled to the estate — generally a spouse, children, or other relatives, in an order set out by law. The exact rules vary meaningfully across Canada, so this article won&apos;t attempt a province-by-province legal chart; a lawyer in your own province is the right source for that detail.</p>
            <p>Dying without a will generally means you don&apos;t control who receives the property, the land may end up passing to several people at once, family disagreements become more likely, administration often takes longer, and the eventual outcome may not reflect what you actually would have wanted.</p>
            <div className={styles.callout}>
              <h3>Does the government automatically take my land if I die without a will?</h3>
              <p>Generally, no. Property doesn&apos;t normally go directly to the government merely because there&apos;s no will. Intestacy laws first identify eligible relatives, and property only passes to the Crown in unusual circumstances where there&apos;s no valid will and no legally entitled heir can be found — subject to the applicable provincial or territorial law.</p>
            </div>
          </section>

          <section id="probate">
            <span className={styles.sectionNumber}>04 · Probate</span>
            <h2>Does Rural Land Have to Go Through Probate?</h2>
            <p>It depends on several factors: your province or territory, the ownership structure, how the property&apos;s title is held, the value of the estate, whether there&apos;s a valid will, whether another owner has a survivorship interest, and lender or land-registration requirements. This article can&apos;t give you a definitive answer for your specific property — that determination, along with confirming who has authority to transfer the land, what documents need to be filed, and whether probate fees or estate administration taxes apply, is exactly what a lawyer is for.</p>
          </section>

          <section id="joint-ownership">
            <span className={styles.sectionNumber}>05 · Joint ownership</span>
            <h2>What If the Land Is Jointly Owned?</h2>
            <p>At a general educational level, there&apos;s an important difference between ownership structured with a right of survivorship, where legally applicable, and ownership where the deceased person&apos;s share passes through their estate instead. Which applies depends on exactly how title is worded and on provincial law — this isn&apos;t something to assume from the outside.</p>
            <div className={styles.callout}>
              <h3>A word of caution</h3>
              <p>Simply adding a child to your property&apos;s title is sometimes treated as an easy estate-planning shortcut. It isn&apos;t necessarily one. Possible consequences include tax implications, exposing the property to that child&apos;s creditors, family disputes, a loss of control over the property during your own lifetime, and complications if that child later divorces, dies, or becomes insolvent. Obtain independent legal and tax advice before changing title on your property for estate-planning reasons.</p>
            </div>
          </section>

          <section id="forced-sale">
            <span className={styles.sectionNumber}>06 · Forced sales</span>
            <h2>Can My Estate Be Forced to Sell the Land?</h2>
            <p>Yes, in a number of circumstances: the estate owes money, there&apos;s a mortgage to settle, taxes remain unpaid, estate expenses need to be covered, beneficiaries want cash rather than land, several heirs can&apos;t agree on what to do, the will itself directs a sale, or no beneficiary is willing or able to take on responsibility for the property. Good planning can meaningfully reduce the risk of an unwanted sale, but it can&apos;t eliminate every financial or legal pressure an estate might face.</p>
          </section>

          <section id="children-dont-want">
            <span className={styles.sectionNumber}>07 · When children don&apos;t want it</span>
            <h2>What If My Children Do Not Want the Land?</h2>
            <p>This is one of the most common situations landowners face, and it deserves a direct, honest answer rather than platitudes. Maybe your children live in another province entirely. Maybe woodland or farming has simply never interested them. Maybe they don&apos;t want the tax bill, or they can&apos;t agree among themselves about how the property should be managed. Maybe the land carries real sentimental value but no practical use for their own lives. And maybe, understandably, you&apos;re simply afraid of leaving them a burden dressed up as an inheritance.</p>
            <p>None of this reflects poorly on you or on them. If this sounds like your situation, it&apos;s worth exploring selling the property during your lifetime, selling to a neighbour, transferring it to one interested heir while balancing other assets to the rest, arranging a donation, identifying a conservation or stewardship organization as an alternate recipient, leaving the property through your will to an agreed-upon recipient outside the family, or even creating a restoration or orchard plan before you die so the land already has direction. Our page on <Link href="/land/unwanted-rural-property">options for unwanted rural property</Link> and our more personal piece, <Link href="/land/i-dont-want-my-woodland-anymore">I don&apos;t want my woodland anymore</Link>, both go deeper into these choices if this is where you find yourself.</p>
          </section>

          <section id="choose-what-happens">
            <span className={styles.sectionNumber}>08 · Choosing the outcome</span>
            <h2>Can I Choose What Happens to the Land?</h2>
            <p>You can express and structure your wishes, but those wishes need to be legally workable to actually mean anything after you&apos;re gone. Common goals include keeping the property in the family, preventing family conflict, selling it and dividing the proceeds, protecting existing woodland, planting a native forest, creating a seed orchard or nut orchard, providing wildlife habitat, donating the land, continuing to live there for the rest of your life, or leaving the land to an organization entirely.</p>
            <p>It helps to keep a few categories distinct in your mind: a simple wish is not the same as a legally binding will provision, which is not the same as an ownership transfer, a contract, a conservation easement or covenant where available, or a stewardship plan that may express your hopes without being permanently binding on a future owner. Where you want long-term restrictions or conditions to actually stick, professional assistance isn&apos;t optional — it&apos;s the only way those wishes have real legal weight.</p>
          </section>

          <section id="leave-to-organization">
            <span className={styles.sectionNumber}>09 · Organizations</span>
            <h2>Can I Leave My Land to an Organization?</h2>
            <p>You may be able to name an organization as a beneficiary in your will, but contacting that organization first is essential, not optional. An organization may not be legally capable of holding land, may not accept property in that particular location, may not have funds available for taxes and ongoing management, and the property itself may contain buildings, contamination, debts or title problems that complicate acceptance. Restrictive conditions you might want to attach could be impossible for the organization to honour, the organization&apos;s mission may shift over time, and it generally needs the legal right to decline a bequest it can&apos;t responsibly accept. A lawyer should prepare the actual wording. Our guide on <Link href="/land/leave-land-in-your-will">how to leave land through your will</Link> covers this whole process in much more depth.</p>
          </section>

          <section id="leave-to-conservation">
            <span className={styles.sectionNumber}>10 · Conservation</span>
            <h2>Can I Leave My Land to Conservation?</h2>
            <p>Land trusts and conservation organizations may be genuinely interested where a property carries significant ecological value — rare habitats, species-at-risk habitat, wetlands, shoreline, mature forest, landscape connectivity, or other significant natural features. But traditional conservation organizations can&apos;t accept every property; their considerations typically include ecological significance, acquisition priorities, stewardship costs, legal access, boundaries, environmental liabilities, buildings, taxes and long-term funding. Not every conservation organization uses identical criteria, so it&apos;s worth having a direct conversation with any specific organization you&apos;re considering. Our guide on <Link href="/land/donate-land">how to donate land in Canada</Link> covers this whole landscape of recipients in more detail.</p>
          </section>

          <section id="nature-trust-not-interested">
            <span className={styles.sectionNumber}>11 · If a nature trust says no</span>
            <h2>What If a Nature Trust Is Not Interested?</h2>
            <p>A property doesn&apos;t have to contain rare habitat or qualify as a protected nature reserve to have a worthwhile future. This is worth saying plainly, because it&apos;s easy to assume that a &ldquo;no&rdquo; from a conservation organization means the land has nowhere to go.</p>
            <p>A nature trust&apos;s mission is typically centred on protecting land with existing, significant ecological importance — and that&apos;s a genuinely valuable, necessary mission. But it isn&apos;t the only useful future for rural land. Properties that don&apos;t match a traditional land trust&apos;s acquisition priorities can still support forest restoration, native tree planting, native seed collection, seed orchards, nut orchards, food forests, wildlife habitat enhancement, watershed improvement, hardwood production, agroforestry, demonstration plantings, education, or other forms of long-term productive stewardship.</p>
            <p className={styles.pullQuote}>Some properties may not meet the acquisition priorities of a nature trust, yet they may still have considerable value for restoration, native seed production, orchards, wildlife habitat, or other forms of long-term stewardship.</p>
            <p>Different organizations simply have different missions. A nature trust may focus on protecting land that&apos;s already ecologically significant; an organization like Little Tree Farm may instead look at whether land can be actively restored, planted, or developed into a productive ecological landscape over time. Neither approach is more correct than the other — they&apos;re answering different questions about what a piece of land needs.</p>
          </section>

          <section id="little-tree-farm">
            <div className={styles.ltfBox}>
              <p className={styles.eyebrow}>Little Tree Farm</p>
              <h2>Could Little Tree Farm Become a Future Steward?</h2>
              <p>Little Tree Farm is a Canadian native-tree nursery and forest-restoration organization, and a potential long-term rural land steward. We develop native tree seed orchards, nut orchards, and productive forest plantings, with a broader focus on biodiversity, native tree production, habitat, restoration, and long-term land use.</p>
              <p>We&apos;re willing to discuss a broad range of rural properties, including some land that may not meet the acquisition criteria of a traditional nature trust. Potential uses could include native forest restoration, seed orchards, nut orchards, food forests, wildlife habitat, nursery seed production, demonstration plantings, or other forms of long-term stewardship.</p>
              <p>Little Tree Farm will consider many types of rural land, but consideration does not guarantee acceptance — every property must be assessed individually, and location, access, taxes, title, liabilities, acreage, soil, existing vegetation, buildings and intended use all matter. Some properties may be better suited to a neighbour, a farmer, a municipality, a community organization, an Indigenous organization, a land trust, or a conventional sale, and we&apos;ll say so honestly where that&apos;s the case.</p>
              <div className={styles.transparency}><p><strong>To be transparent:</strong> Little Tree Farm is not automatically a registered charity, qualified donee, land trust, or conservation easement holder. No charitable tax receipt can be promised. Independent legal and tax advice is necessary before any arrangement moves forward.</p></div>
              <div className={styles.ctaRow}>
                <Link className={styles.primaryButton} href="/contact">Tell us about your land</Link>
                <Link className={styles.secondaryButton} href="/land/leave-land-in-your-will">How to leave land in your will</Link>
              </div>
            </div>
          </section>

          <section id="give-away-alive">
            <span className={styles.sectionNumber}>13 · Acting in your lifetime</span>
            <h2>Can I Give the Land Away While I Am Still Alive?</h2>
            <p>Yes, and several lifetime pathways are worth knowing about: an ordinary sale, a sale to a family member, a straightforward gift, a nominal-price transfer, a donation to an eligible organization, a transfer to a compatible steward, a sale combined with a charitable gift where legally and tax-appropriate, or a transfer that lets you retain certain rights, where professionally structured.</p>
            <p>Choosing to act during your lifetime has real advantages: you get to participate directly in choosing the recipient, problems can be identified and resolved before your death rather than after, the recipient has a real chance to assess the property properly, you might even see restoration or a new use begin, and your heirs are left with clarity instead of uncertainty. There are also real risks worth weighing — tax consequences, a loss of control once the transfer is complete, the practical inability to reverse the decision later, needing lender consent if there&apos;s a mortgage, family concerns that deserve a hearing, legal costs, and obligations the recipient takes on. Our pages on <Link href="/land/donate-land">how to donate land in Canada</Link> and <Link href="/land/unwanted-rural-property">options for unwanted rural property</Link> both go further into these lifetime choices.</p>
          </section>

          <section id="lifetime-use">
            <span className={styles.sectionNumber}>14 · Lifetime use</span>
            <h2>Could I Keep Using the Land for the Rest of My Life?</h2>
            <p>In general terms, yes — some estate and property arrangements may allow an owner to retain possession or use of a property during their lifetime while arranging for its future transfer. Possible concepts include a future bequest through your will, a life interest or life estate where legally appropriate, a remainder interest, contractual occupancy or lease arrangements, or a delayed-closing transfer structure.</p>
            <p>This article won&apos;t recommend a specific arrangement for your situation — these are legally complex tools that require professional drafting, and the right structure depends heavily on your goals, your family, and your province.</p>
          </section>

          <section id="nobody-wants">
            <span className={styles.sectionNumber}>15 · If nobody wants it</span>
            <h2>What Happens If Nobody Wants the Land?</h2>
            <p>Practically speaking, a few things tend to happen: the estate sells it, a neighbour buys it, one heir eventually accepts responsibility even if reluctantly, the property is donated or transferred to an organization, a compatible steward agrees to take it on, unpaid debts or taxes force a sale regardless of anyone&apos;s preference, or — if taxes go unpaid long enough — the property may eventually enter a municipal tax-sale process. Simply ignoring the property is not, itself, an estate plan; it just defers the decision to whoever&apos;s left to deal with it, usually at greater cost and stress than if it had been addressed directly. Our article on <Link href="/blog/leaving-land-empty-costing-thousands">what leaving land empty really costs</Link> explains how that drift unfolds in more detail.</p>
          </section>

          <section id="possible-futures">
            <span className={styles.sectionNumber}>16 · Possible futures</span>
            <h2>Possible Futures for Your Land</h2>
            <p>Strip away the legal vocabulary and there are really five broad futures a piece of rural land can have. Each works best under particular conditions — none is universally right.</p>
            <div className={styles.situationGrid}>
              {possibleFutures.map(([name, items]) => (
                <div className={styles.situationCard} key={name}>
                  <h3>{name}</h3>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          <section id="make-a-plan">
            <span className={styles.sectionNumber}>17 · Making the plan</span>
            <h2>How to Make a Plan for Your Land</h2>
            <p>Whatever future you&apos;re leaning toward, the path there follows the same seven steps.</p>
            <div className={styles.steps}>
              {planSteps.map(([title, description], index) => (
                <div className={styles.step} key={title}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section id="checklist">
            <span className={styles.sectionNumber}>18 · What to gather</span>
            <h2>Information a Future Recipient Will Need</h2>
            <p>Whether the conversation ends up being with your family, a lawyer, a buyer or an organization like ours, having this file gathered ahead of time makes everything that follows faster and calmer.</p>
            <ul className={styles.checklist}>{checklist.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section id="faq">
            <span className={styles.sectionNumber}>19 · Common questions</span>
            <h2>Frequently Asked Questions</h2>
            <LandFaq items={faqs} />
          </section>

          <section id="sources">
            <span className={styles.sectionNumber}>20 · Verify and continue</span>
            <h2>Authoritative Starting Points</h2>
            <p>These official resources cover the federal side of what happens when someone dies. Provincial law governs wills, estates and property transfer — a lawyer in your province is the right source for that detail.</p>
            <div className={styles.sources}>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/services/benefits/family/death.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Government of Canada</span><h3>What to do when someone dies</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/doing-taxes-someone-died.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Doing taxes for someone who died</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/environment-climate-change/services/environmental-funding/ecological-gifts-program.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Environment and Climate Change Canada</span><h3>Ecological Gifts Program</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
            </div>

            <h2 className={styles.relatedHeading}>Related Reading</h2>
            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} href="/land/leave-land-in-your-will"><h3>How to Leave Land in Your Will</h3><span>Read the guide →</span></Link>
              <Link className={styles.relatedCard} href="/land/donate-land"><h3>How to Donate Land in Canada</h3><span>Read the guide →</span></Link>
              <Link className={styles.relatedCard} href="/land/unwanted-rural-property"><h3>Options for Unwanted Rural Property</h3><span>Compare every path →</span></Link>
              <Link className={styles.relatedCard} href="/land/creating-a-forest-legacy"><h3>Creating a Forest Legacy</h3><span>Watch a century pass →</span></Link>
              <Link className={styles.relatedCard} href="/land/i-dont-want-my-woodland-anymore"><h3>I Don&apos;t Want My Woodland Anymore</h3><span>Compare woodland options →</span></Link>
              <Link className={styles.relatedCard} href="/blog/inherited-land-what-to-do"><h3>Inherited Land: What Should You Do Next?</h3><span>Work through it →</span></Link>
            </div>
          </section>

          <section>
            <div className={styles.finalCta}>
              <h2>Give Your Land a Clear Future</h2>
              <p>Your land will eventually pass to someone, but you still have an opportunity to influence what happens next. A clear plan can reduce uncertainty for your family and help the property continue as woodland, farmland, habitat, a native forest, a seed orchard, a nut orchard, or another form of responsible rural stewardship.</p>
              <p>Little Tree Farm is willing to discuss a wide range of rural properties, including land that may not fit the acquisition priorities of a traditional nature trust. Every property is different, and the first step is simply understanding the land and what you hope it might become.</p>
              <div className={styles.ctaRow}>
                <Link className={styles.secondaryButton} href="/contact">Tell us about your land</Link>
                <Link className={styles.secondaryButton} href="/land/leave-land-in-your-will">Learn how to leave land in your will</Link>
              </div>
              <p>No pressure. No obligation. Every property is considered individually.</p>
            </div>
            <div className={styles.disclaimer}>
              <p><strong>Legal disclaimer:</strong> This article is provided for general educational purposes only and does not constitute legal, tax, accounting or estate-planning advice.</p>
              <p>Succession law, probate requirements and tax treatment vary by province and territory and by individual circumstances, including spouses, dependants, creditors, mortgages and estate expenses. This article does not provide province-specific legal conclusions, does not state that a will overrides every legal obligation, and does not claim that adding a person to title safely avoids probate.</p>
              <p>Before making decisions about your land or estate, obtain independent advice from qualified Canadian legal and tax professionals. Little Tree Farm does not guarantee that it will accept, purchase or enter into an agreement involving any property, and does not promise a charitable tax receipt or that any conditions placed in a will will be enforceable.</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
