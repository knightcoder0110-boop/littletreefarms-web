import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandFaq, type LandFaqItem } from "@/components/land/LandFaq";
import styles from "@/components/land/LandArticle.module.css";
import { businessInfo } from "@/lib/config/business";

const pagePath = "/land/donate-land";
const pageUrl = `${businessInfo.url}${pagePath}`;
const publishedDate = "2026-08-06";
const pageTitle = "How to Donate Land in Canada | Options & Tax Guide";
const pageDescription =
  "Considering donating land in Canada? Learn who can accept it, ways to donate or protect property, tax basics, due diligence and how donation compares with selling.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "donate land Canada",
    "donate property Canada",
    "donate woodland Canada",
    "land donation tax Canada",
    "donate inherited land",
    "conservation land donation",
    "rural property donation",
    "ecological gifts program Canada",
    "land stewardship Canada",
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
  ["can-you", "Can you donate land in Canada?"],
  ["why-donate", "Why people donate land"],
  ["types", "Types of land that may be donated"],
  ["ways-to-donate", "Eight ways to donate or transfer land"],
  ["decision-guide", "Which option might fit?"],
  ["comparison", "Compare the options"],
  ["eligibility", "Will an organization accept it?"],
  ["taxes", "Tax and charitable-receipt basics"],
  ["little-tree-farm", "Could Little Tree Farm accept it?"],
  ["checklist", "Landowner preparation checklist"],
  ["will", "Donating land through your will"],
  ["faq", "Frequently asked questions"],
  ["sources", "Official sources and related reading"],
] as const;

const landTypes = [
  ["Vacant lots", "Undeveloped parcels at an urban edge or in a rural area."],
  ["Woodland and forest", "Treed properties of different ages, conditions and sizes."],
  ["Farmland", "Active, fallow or long-abandoned agricultural property."],
  ["Shoreline", "Waterfront or riparian land along lakes, rivers or the coast."],
  ["Wetlands", "Marsh, bog and other water-influenced landscapes."],
  ["Abandoned fields", "Old pasture or cropland no longer actively farmed."],
  ["Rural acreage", "Larger mixed parcels with forest, field, water or buildings."],
  ["Small or large parcels", "Single lots through multi-hundred-acre properties."],
  ["Inherited property", "Land transferred to you through an estate."],
] as const;

const decisionItems = [
  {
    question: "Do you want to keep legal ownership?",
    answer: "Consider a conservation easement or covenant where available, a stewardship agreement, family succession planning, or a future gift through your will.",
  },
  {
    question: "Do you want to continue living on the property?",
    answer: "Ask your lawyer about a reserved life estate, a remainder-interest donation, a gift through your will, or simply keeping the land while creating a documented future plan.",
  },
  {
    question: "Do you require payment?",
    answer: "Consider an ordinary or negotiated sale, a conservation-minded buyer, a right-of-first-refusal arrangement, or—where an eligible qualified donee and the tax rules permit—a transaction involving both payment and a gift component.",
  },
  {
    question: "Are you ready to transfer the land now without payment?",
    answer: "An outright donation, a gift to family or a neighbour, or a transfer to an appropriate organization may be worth exploring after title, tax and recipient review.",
  },
  {
    question: "Is the land ecologically significant?",
    answer: "Contact an experienced conservation organization or land trust. Land that is not certified as ecologically sensitive may still have restoration, agriculture, seed-production, habitat, community or other stewardship value.",
  },
] as const;

const comparisonRows = [
  ["Outright donation", "No", "No", "No", "Now", "Possibly—qualified donee and rules required", "Owners ready to transfer"],
  ["Gift through a will", "During life", "During life", "No", "After death", "Possibly—recipient and estate dependent", "Owners planning ahead"],
  ["Reserved life estate", "Retained use right", "Per agreement", "Usually no", "Future interest now; full use later", "Professional review required", "Owners who need to remain"],
  ["Part-sale, part-gift", "No", "No", "Partial", "At closing", "Possibly—for eligible gift amount", "Owners needing some proceeds"],
  ["Conservation easement", "Yes", "Subject to restrictions", "Usually no", "Title stays; restriction is registered", "Depends on law and recipient", "Protection without transfer"],
  ["Donation for resale", "No", "No", "No", "Now", "Depends on recipient", "Land not held permanently"],
  ["Ordinary sale", "No", "No", "Full or negotiated", "At closing", "No", "Owners who need proceeds"],
  ["Gift to another person", "No", "No", "Usually no", "At transfer", "Not a charitable receipt", "A trusted private recipient"],
] as const;

const checklist = [
  "Province and municipality",
  "Civic address, PID or parcel number",
  "Approximate acreage",
  "Current registered owner or owners",
  "How and when the land was acquired",
  "Road access or rights of way",
  "Annual property taxes",
  "Mortgages, liens or unpaid taxes",
  "Survey or plan, if available",
  "Buildings and structures",
  "Current photographs",
  "Present and historic land use",
  "Wetlands, waterways or shoreline",
  "Forest, field and agricultural features",
  "Known contamination or dumping",
  "Leases, easements and access agreements",
  "Your preferred timeline",
  "Whether you require payment",
  "Whether anyone needs to keep living there",
  "Whether the transfer is now or through a will",
  "The outcome you hope to achieve",
] as const;

const faqs = [
  {
    question: "Can I donate land in Canada?",
    answer: "Generally yes. Whether a transfer is possible depends on the property, title, liabilities, the proposed recipient's legal capacity and willingness, and the chosen structure. Get independent legal and tax advice before committing.",
  },
  {
    question: "Can I donate vacant land?",
    answer: "Yes. Vacant land may be considered by conservation, community, agricultural or stewardship organizations, but each recipient will assess location, access, condition, costs and fit.",
  },
  {
    question: "Can I donate woodland or forest land?",
    answer: "Yes. Woodland may interest land trusts, conservation organizations or other stewardship-focused recipients, subject to their mandate, capacity and review of the specific property.",
  },
  {
    question: "Can I donate farmland?",
    answer: "Farmland may sometimes be donated to an eligible organization or transferred to another suitable recipient. Active use, buildings, leases, soil, access and the recipient's mission will matter.",
  },
  {
    question: "Can I donate inherited land?",
    answer: "Once the estate process and title transfer are complete, an owner can generally explore donation like any other landowner. Shared ownership and estate authority can add complexity, so consult the estate's lawyer.",
  },
  {
    question: "Can I donate land with unpaid property taxes?",
    answer: "Unpaid taxes are a material issue for any recipient and usually need to be identified and addressed before or as part of a transfer.",
  },
  {
    question: "Can I donate land with a mortgage or lien?",
    answer: "Possibly, but the debt or lien does not disappear automatically. It must be reviewed with the lender, recipient and lawyers and may need to be discharged before closing.",
  },
  {
    question: "Can I donate land that is landlocked?",
    answer: "It may be possible, but a lack of legal access can make a property difficult or expensive to manage and may affect acceptance.",
  },
  {
    question: "Can I donate only part of my property?",
    answer: "Sometimes. A partial transfer may require a survey, subdivision approval, access planning and legal work. A lawyer, municipality and surveyor can explain what is possible.",
  },
  {
    question: "Can I protect land without giving up ownership?",
    answer: "Depending on the province and eligible holder, a conservation easement, covenant or similar agreement may restrict certain future uses while you retain title. Availability and enforceability vary.",
  },
  {
    question: "Can I donate land and continue living on it?",
    answer: "A reserved life estate or remainder-interest arrangement may make this possible in some circumstances. It is specialized and requires careful legal, tax, valuation, maintenance and insurance planning.",
  },
  {
    question: "Can my spouse retain a right to live there too?",
    answer: "A lawyer may be able to design an arrangement that gives a spouse or another named person defined rights, but the details must be explicit in the legal agreement and acceptable to the recipient.",
  },
  {
    question: "Can I leave land as a gift in my will?",
    answer: "Yes. Speak with the intended recipient before finalizing the will and include a lawyer-prepared alternate plan in case the recipient cannot accept the property later.",
  },
  {
    question: "What is split receipting?",
    answer: "It is the method used to calculate the eligible amount of a gift when a donor receives an advantage. CRA guidance says the fair market value of the advantage is subtracted from the fair market value of the gift, subject to the applicable rules.",
  },
  {
    question: "Can I sell below market value and donate the difference?",
    answer: "A transaction with payment and a possible gift component may be possible with an eligible qualified donee, but it is not automatic. Independent valuation, recipient eligibility, CRA rules and professional advice are essential.",
  },
  {
    question: "Can I donate land that is not ecologically significant?",
    answer: "Yes. Some recipients may consider land for restoration, agriculture, community use or eventual resale even when it does not qualify for a conservation program. Ask how the recipient expects to use it.",
  },
  {
    question: "What are trade lands or resale lands?",
    answer: "These terms may describe property accepted without a commitment to hold or protect it permanently. The recipient may later sell it and use the proceeds for its mission. Confirm the intended treatment in writing.",
  },
  {
    question: "Will donated land always be permanently protected?",
    answer: "No. Donation alone does not guarantee permanent protection. That outcome generally requires an eligible recipient and a specific binding conservation mechanism or written commitment.",
  },
  {
    question: "Can Little Tree Farm issue a charitable tax receipt?",
    answer: "Little Tree Farm does not promise a charitable receipt and should not be treated as a qualified donee. Confirm any recipient's current status and the proposed transaction with the CRA's official listings and your accountant.",
  },
  {
    question: "Does Little Tree Farm accept every property?",
    answer: "No. Every property is reviewed individually. Some land will be better suited to a land trust, municipality, farmer, neighbour, community group or ordinary sale.",
  },
  {
    question: "Who pays legal, appraisal and transfer costs?",
    answer: "That varies. Do not assume either party will cover them; identify every expected cost and record the agreed responsibility in writing before proceeding.",
  },
  {
    question: "Who pays property taxes during the process?",
    answer: "The registered owner generally remains responsible until the legal transfer is complete, subject to the closing adjustments and terms confirmed by the lawyers.",
  },
  {
    question: "How long does donating land take?",
    answer: "There is no standard timeline. Recipient review, title work, appraisal, environmental due diligence, financing and program certification can make a transfer take months or longer.",
  },
  {
    question: "Do I need an appraisal?",
    answer: "Often, especially when a charitable receipt, fair market value or part-sale, part-gift structure is involved. CRA recommends appraisal for higher-value non-cash gifts, and specialized programs have their own valuation process.",
  },
  {
    question: "Do I need a lawyer?",
    answer: "Yes. A transfer of real-property title requires proper legal documentation, and province-specific property, family, estate and conservation rules may apply.",
  },
  {
    question: "Can jointly owned land be donated?",
    answer: "A transfer of the whole property generally requires all registered owners to participate. A lawyer can explain what one co-owner can and cannot transfer.",
  },
  {
    question: "Can an estate donate land?",
    answer: "An executor may be able to transfer or donate estate property where the will and applicable authority permit it. The executor should act with the estate's lawyer and consider duties to creditors and beneficiaries.",
  },
  {
    question: "Can a corporation or non-resident donate Canadian land?",
    answer: "Potentially, but corporate approvals, withholding, tax reporting and cross-border issues may apply. Obtain Canadian legal and tax advice tailored to the owner and property.",
  },
  {
    question: "What happens after ownership transfers?",
    answer: "That depends on the recipient and written agreement. The land may be restored, managed, used for a program, held, leased or resold. Never assume a future use that has not been formally confirmed.",
  },
  {
    question: "Can I place conditions on a land donation?",
    answer: "You can propose conditions, but the recipient must accept them and a lawyer must determine whether they are valid and enforceable. Very rigid restrictions can make responsible management difficult.",
  },
  {
    question: "Should I sell or donate my land?",
    answer: "Neither is universally better. Your need for proceeds, tax position, family situation, timing and desired outcome should determine the path after professional advice.",
  },
  {
    question: "Can donated land support a forest or native seed orchard?",
    answer: "Possibly. Suitability depends on climate, soil, access, current ecology, the recipient's program and long-term management capacity. Little Tree Farm considers restoration and seed-production potential during individual review.",
  },
  {
    question: "Can I give my land away for one dollar?",
    answer: "A nominal-price transfer can still require full legal documentation and may have tax consequences based on fair market value rather than the nominal price. Speak with a lawyer and accountant first.",
  },
  {
    question: "What is the first step in donating land?",
    answer: "Start with a non-binding conversation with one or more suitable recipients and share basic property information. Then obtain independent legal and tax advice before signing or promising anything.",
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
        headline: "How to Donate Land in Canada",
        description: pageDescription,
        image: `${businessInfo.url}/main-landing-page/mature-black-walnut-nova-scotia.jpg`,
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
          { "@type": "ListItem", position: 2, name: "Donate land in Canada", item: pageUrl },
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

export default function DonateLandPage() {
  const schema = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/main-landing-page/mature-black-walnut-nova-scotia.jpg"
          alt="A mature tree on rural land in Nova Scotia"
          fill
          sizes="100vw"
          preload
        />
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <span>Land stewardship</span><span aria-hidden="true">/</span>
            <span aria-current="page">Donate land in Canada</span>
          </nav>
          <p className={styles.eyebrow}>Land Stewardship Knowledge Centre</p>
          <h1>How to Donate Land in Canada</h1>
          <p className={styles.heroDek}>
            A candid guide to outright gifts, future gifts, retained-use arrangements,
            conservation tools, part-sale structures—and when selling may be the better answer.
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
          <div className={styles.fact}><span className={styles.factLabel}>Donation is not</span><p>Automatic acceptance, guaranteed conservation or guaranteed tax relief.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Compare first</span><p>Outright gift, future gift, retained use, conservation agreement or sale.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Confirm before signing</span><p>Recipient status, title, fair market value, costs, tax and future land use.</p></div>
        </div>
      </div>

      <div className={styles.mobileToc}>
        <details><summary>On this page</summary><nav aria-label="Table of contents"><TableOfContents /></nav></details>
      </div>

      <div className={styles.layout}>
        <nav className={styles.toc} aria-label="Table of contents">
          <span className={styles.tocTitle}>On this page</span><TableOfContents />
        </nav>

        <article className={styles.article}>
          <div className={styles.notice} role="note" aria-label="Important legal notice">
            <span className={styles.noticeMark} aria-hidden="true">i</span>
            <p><strong>General information only.</strong> Donation, property and conservation rules vary by province, recipient and circumstances. Obtain independent Canadian legal and tax advice before gifting, selling or transferring land.</p>
          </div>

          <section id="can-you">
            <span className={styles.sectionNumber}>01 · The short answer</span>
            <h2>Can You Donate Land in Canada?</h2>
            <p>In general, land may be donated or gifted to a recipient that is legally able and willing to accept it. Potential recipients include registered charities, qualified conservation organizations and land trusts, municipalities, Indigenous organizations or communities where appropriate and welcomed, educational institutions, community organizations, and private stewardship organizations.</p>
            <p>Whether your property can be transferred depends on the recipient&apos;s mandate and legal status, location and condition, title, access, mortgages or liens, environmental liabilities, carrying costs and the structure of the transaction. Donation is not necessarily all-or-nothing: an outright gift, future gift through a will, retained-use arrangement, conservation agreement, part-sale transaction or ordinary sale may better match your circumstances.</p>
            <p className={styles.pullQuote}>The first question is not simply “Can I donate it?” but “Which responsible outcome fits this land and my life?”</p>
          </section>

          <section id="why-donate">
            <span className={styles.sectionNumber}>02 · Clarify your goals</span>
            <h2>Why Do People Donate Land?</h2>
            <p>Some owners want a family or forest legacy. Others hope to protect woodland, wildlife habitat, wetlands or a rural landscape from a future they do not want. Practical realities matter too: taxes on unused land, children who do not want the property, retirement, distance, maintenance or an inherited parcel that has become a burden.</p>
            <p>Donation is not automatically the right choice. Selling, keeping the property, transferring it to family or a neighbour, or working with a conservation organization may produce a better outcome.</p>
            <div className={styles.callout}>
              <h3>Questions worth asking first</h3>
              <ul>
                <li>What matters most about this land?</li>
                <li>Do I want to protect all of it or only certain features?</li>
                <li>Do I need financial compensation?</li>
                <li>Do I need to retain ownership, access or a place to live?</li>
                <li>How will the decision affect my spouse, children or other heirs?</li>
                <li>Who can realistically fund taxes, insurance and stewardship?</li>
                <li>Is conservation, restoration, farming, seed production or another use the best fit?</li>
              </ul>
            </div>
          </section>

          <section id="types">
            <span className={styles.sectionNumber}>03 · Property possibilities</span>
            <h2>What Types of Land May Be Donated?</h2>
            <p>A property does not need to be pristine to be worth discussing. Overgrown, remote or imperfect land may still have value to the right recipient. Acceptance, however, always depends on individual review.</p>
            <div className={styles.typeGrid}>
              {landTypes.map(([name, description], index) => (
                <div className={styles.typeCard} key={name}><span className={styles.typeIndex}>{index + 1}</span><h3>{name}</h3><p>{description}</p></div>
              ))}
            </div>
          </section>

          <section id="ways-to-donate">
            <span className={styles.sectionNumber}>04 · Understand the structures</span>
            <h2>Eight Ways to Donate, Protect or Transfer Land</h2>
            <p>The words “donate land” can describe very different legal and financial outcomes. Compare the structures before deciding what to ask a recipient or professional about.</p>
            <div className={styles.optionList}>
              <div className={styles.optionBlock}>
                <h3>Donate the Property During Your Lifetime</h3>
                <p>An outright transfer gives ownership to the recipient now. It can remove future carrying responsibilities and let you participate in the transition, but only after the recipient accepts the title, liabilities, costs and intended use. Not every property will be accepted.</p>
              </div>
              <div className={styles.optionBlock}>
                <h3>Leave Land as a Gift in Your Will</h3>
                <p>You keep ownership and use during your lifetime, and the estate transfers the property later. Contact the intended recipient in advance and have a lawyer create an alternate plan. Read our complete guide to <Link href="/land/leave-land-in-your-will">leaving land in your will</Link>.</p>
              </div>
              <div className={styles.optionBlock}>
                <h3>Donate a Future Interest and Keep Living There</h3>
                <p>A reserved life estate, retained life interest or remainder-interest arrangement may let an owner transfer a future interest while retaining defined rights to live on or use the property. Maintenance, insurance, tax, repairs, improvements, moving and long-term care all require precise written terms.</p>
                <div className={styles.callout}><h3>Specialized professional work</h3><p>Do not assume that a retained-use arrangement qualifies for a charitable receipt. It requires independent legal, tax and valuation advice and a recipient willing to accept the terms.</p></div>
              </div>
              <div className={styles.optionBlock}>
                <h3>Combine Payment With a Possible Gift Component</h3>
                <p>A transaction may include payment to the owner and a potential gift component when the recipient is an eligible qualified donee and the arrangement meets CRA rules. CRA calls the calculation of the eligible gift amount when the donor receives an advantage <em>split receipting</em>.</p>
                <div className={styles.callout}><h3>Illustration—not a promise</h3><p>If independently supported fair market value is greater than the amount paid by an eligible recipient, part of the difference might be considered when calculating an eligible gift amount. Appraisal, recipient status, the value of every advantage and professional review determine the actual result.</p></div>
              </div>
              <div className={styles.optionBlock}>
                <h3>Protect Land Without Giving Up Ownership</h3>
                <p>A conservation easement, covenant or similar provincial tool may restrict certain future uses while the owner retains title. This is normally arranged with an eligible organization that has the authority and capacity to hold and enforce it.</p>
                <p><strong>Little Tree Farm is not presented as an easement-holding land trust.</strong> If this is your goal, contact a qualified conservation organization for your province.</p>
              </div>
              <div className={styles.optionBlock}>
                <h3>Donate Property That May Later Be Resold</h3>
                <p>Some eligible organizations accept “trade lands” or “resale lands” and later sell them to fund their mission. That is different from permanent conservation. Ask explicitly whether the recipient expects to hold, protect, use or resell the property.</p>
              </div>
              <div className={styles.optionBlock}>
                <h3>Sell the Land</h3>
                <p>Selling is a responsible choice when you need funds for retirement, care, housing, debt, family or estate equalization. A market sale, negotiated sale, conservation-minded buyer, delayed closing or right of first refusal may fit better than donation.</p>
              </div>
              <div className={styles.optionBlock}>
                <h3>Transfer It to Family, a Neighbour or Another Recipient</h3>
                <p>Land might go to children, relatives, neighbours, a farmer, municipality, community group, Indigenous organization or community where welcomed, educational institution or another stewardship organization. A gift or nominal-price transfer can still trigger legal and tax consequences.</p>
              </div>
            </div>
          </section>

          <section id="decision-guide">
            <span className={styles.sectionNumber}>05 · Narrow the conversation</span>
            <h2>Which Option Might Fit Your Situation?</h2>
            <p>This is not a legal test or eligibility decision. Open the questions that match your circumstances and use the answers as topics for the right recipient, lawyer and accountant.</p>
            <div className={styles.decisionGuide}>
              {decisionItems.map((item) => (
                <details className={styles.decisionItem} key={item.question}><summary>{item.question}</summary><div className={styles.decisionAnswer}><p>{item.answer}</p></div></details>
              ))}
            </div>
          </section>

          <section id="comparison">
            <span className={styles.sectionNumber}>06 · Side-by-side</span>
            <h2>Compare Your Land Transfer Options</h2>
            <p>The qualifiers in this table are intentional. Payment, receipting, ongoing use and future protection depend on the agreement, recipient, law and professional review.</p>
            <div className={styles.tableWrap}>
              <table className={`${styles.comparison} ${styles.wideTable}`}>
                <caption>General comparison only. Confirm every legal, tax and stewardship outcome independently.</caption>
                <thead><tr><th>Option</th><th>Keep ownership?</th><th>Continue use?</th><th>Payment?</th><th>Transfer timing</th><th>Receipt possible?</th><th>Often considered by</th></tr></thead>
                <tbody>{comparisonRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <p className={styles.tableHint}>On a small screen, scroll the table sideways. The first column remains visible for orientation.</p>
          </section>

          <section id="eligibility">
            <span className={styles.sectionNumber}>07 · Recipient review</span>
            <h2>Will an Organization Accept Any Land Donation?</h2>
            <p><strong>No.</strong> Ownership creates permanent legal and financial responsibility. A recipient must determine whether the land supports its mission and whether it can responsibly own, insure, maintain and manage it.</p>
            <p>Review may cover ecological or restoration value, agriculture or seed-production potential, location, access, acreage, boundaries, title, buildings, contamination, mortgages, liens, unpaid taxes, disputes, insurance, safety and carrying costs. A conservation organization may prioritize rare habitat or land adjoining protected areas, while another steward may focus on restoration, productive forestry or education.</p>
            <p className={styles.pullQuote}>A thoughtful “no” from one organization does not mean the land has no value. It may mean another recipient or another structure fits better.</p>
          </section>

          <section id="taxes">
            <span className={styles.sectionNumber}>08 · Tax and receipting</span>
            <h2>What About Taxes?</h2>
            <p>Donating land does not automatically eliminate tax. CRA guidance for gifts of capital property says a donor is generally considered to have disposed of the property, and capital-gain reporting may apply. The result depends on the land, its adjusted cost base and fair market value, the transaction, the recipient and the owner&apos;s circumstances.</p>
            <p>An official donation receipt is only possible when the recipient is legally eligible and every valuation and receipting requirement is met. For a non-cash gift, fair market value matters. When a donor receives an advantage, CRA&apos;s split-receipting rules determine the possible eligible amount. No receipt should be assumed before the qualified donee and advisers confirm it.</p>
            <p>The federal Ecological Gifts Program is a specialized route for certified ecologically sensitive land or an eligible interest or right in land transferred to a qualified recipient. Environmental certification, recipient approval and fair-market-value certification are separate requirements.</p>
            <div className={styles.callout}>
              <h3>Keep the sequence clean</h3>
              <p>Verify the recipient&apos;s status, obtain advice on the proposed structure, establish valuation under the applicable rules, complete due diligence and only then rely on a documented tax or stewardship outcome.</p>
            </div>
          </section>

          <section id="little-tree-farm">
            <div className={styles.ltfBox}>
              <p className={styles.eyebrow}>Little Tree Farm</p>
              <h2>Could Little Tree Farm Accept My Land?</h2>
              <p>Little Tree Farm is a working bare-root nursery in Nova Scotia developing a Canada-wide land stewardship initiative. Suitable properties may support native forest restoration, seed orchards, nut orchards, food forests, biodiversity plantings, wildlife habitat, education, research and long-term rural stewardship.</p>
              <p>Depending on the property, we may discuss an outright transfer, nominal or conventional sale, future bequest, restoration partnership or another arrangement. Every proposal is assessed individually; this page is not a commitment to any structure.</p>
              <div className={styles.transparency}><p><strong>To be transparent:</strong> Little Tree Farm is not presented as a registered charity, qualified donee, land trust, conservation easement holder or government conservation agency. We do not promise a charitable receipt, acceptance, payment, reimbursement of costs, permanent legal protection or an immediate transfer.</p></div>
              <p>Some land may fit Little Tree Farm. Other property may be better suited to a registered land trust, municipality, neighbour, farmer, community group or ordinary sale. The first conversation is about fit, not pressure.</p>
              <div className={styles.ctaRow}>
                <Link className={styles.primaryButton} href="/contact">Tell us about your property</Link>
                <Link className={styles.secondaryButton} href="/about">Learn about Little Tree Farm</Link>
              </div>
            </div>
          </section>

          <section id="checklist">
            <span className={styles.sectionNumber}>09 · Prepare the first conversation</span>
            <h2>Landowner Self-Assessment Checklist</h2>
            <p>You do not need every item before reaching out. The more clearly you can describe the land, ownership, obligations, timing and desired outcome, the more useful the first conversation will be.</p>
            <ul className={styles.checklist}>{checklist.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section id="will">
            <span className={styles.sectionNumber}>10 · Future transfer</span>
            <h2>Can You Donate Land Through Your Will?</h2>
            <p>Yes. A future gift can align estate planning and land stewardship while allowing you to retain ownership during life. It works best when discussed with the intended recipient and an estate-planning lawyer well before the will is signed, with a fallback if the recipient cannot accept later.</p>
            <p>Our companion article explains recipient conversations, estate liquidity, taxes, executors and fallback planning in depth: <Link href="/land/leave-land-in-your-will"><strong>How to Leave Land in Your Will: A Guide for Canadian Landowners</strong></Link>.</p>
          </section>

          <section id="faq">
            <span className={styles.sectionNumber}>11 · Common questions</span>
            <h2>Frequently Asked Questions</h2>
            <LandFaq items={faqs} />
          </section>

          <section id="sources">
            <span className={styles.sectionNumber}>12 · Verify before acting</span>
            <h2>Official Canadian Starting Points</h2>
            <p>Use current government material and independent advice for the actual transaction. These sources explain the federal tax and ecological-gift concepts discussed above.</p>
            <div className={styles.sources}>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/p113/p113-gifts-income-tax.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Gifts and Income Tax</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/charities-giving/charities/operating-a-registered-charity/issuing-receipts/split-receipting.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Split receipting</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/charities-giving/charities/operating-a-registered-charity/issuing-receipts/determining-fair-market-value-gifts-kind-non-cash-gifts.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Fair market value of non-cash gifts</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/environment-climate-change/services/environmental-funding/ecological-gifts-program.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Environment and Climate Change Canada</span><h3>Ecological Gifts Program</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
            </div>

            <h2 className={styles.relatedHeading}>Related Reading</h2>
            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} href="/land/i-dont-want-my-woodland-anymore"><h3>I Don&apos;t Want My Woodland Anymore</h3><span>Compare woodland options →</span></Link>
              <Link className={styles.relatedCard} href="/land/unwanted-rural-property"><h3>Options for Unwanted Rural Property</h3><span>Compare every path →</span></Link>
              <Link className={styles.relatedCard} href="/land/leave-land-in-your-will"><h3>How to Leave Land in Your Will</h3><span>Read the guide →</span></Link>
              <Link className={styles.relatedCard} href="/blog/inherited-land-what-to-do"><h3>Inherited Land: What Should You Do Next?</h3><span>Read the guide →</span></Link>
              <Link className={styles.relatedCard} href="/blog/unused-land-canada"><h3>Productive Options for Unused Land in Canada</h3><span>Explore the options →</span></Link>
            </div>
          </section>

          <section>
            <div className={styles.finalCta}>
              <h2>Start a Conversation About Your Land</h2>
              <p>Tell us where the land is, its approximate size, how you came to own it and what you hope might happen. We can consider whether it may fit Little Tree Farm&apos;s long-term work or whether another path makes more sense.</p>
              <div className={styles.ctaRow}><Link className={styles.secondaryButton} href="/contact">Tell us about your land</Link></div>
              <p>No pressure. No obligation. Every property is considered individually.</p>
            </div>
            <div className={styles.disclaimer}>
              <p><strong>Legal disclaimer:</strong> This article is general educational information, not legal, tax, accounting, financial, real-estate or estate-planning advice. Donation processes, receipting, conservation tools and property law vary by province, recipient and circumstances.</p>
              <p>Before donating, gifting, selling below market value or transferring land, obtain independent advice from qualified Canadian professionals. Little Tree Farm does not guarantee acceptance, purchase, payment, a charitable receipt, permanent conservation status or any future use unless confirmed in a formal written agreement.</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
