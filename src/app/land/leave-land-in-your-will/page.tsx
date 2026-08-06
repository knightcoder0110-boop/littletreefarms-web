import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandFaq, type LandFaqItem } from "@/components/land/LandFaq";
import styles from "@/components/land/LandArticle.module.css";
import { businessInfo } from "@/lib/config/business";

const pagePath = "/land/leave-land-in-your-will";
const pageUrl = `${businessInfo.url}${pagePath}`;
const publishedDate = "2026-08-06";
const pageTitle = "How to Leave Land in Your Will | Canadian Landowner Guide";
const pageDescription =
  "Learn how Canadian landowners can plan to leave woodland, farmland or rural property in a will, including taxes, estate costs, recipients and stewardship options.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "leave land in your will Canada",
    "rural property estate planning",
    "woodland succession planning",
    "family farm succession Canada",
    "forest legacy",
    "land stewardship Canada",
    "woodlot estate planning",
    "preserve rural land",
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
  ["why-different", "Why land is different from money"],
  ["can-you", "Can you leave rural land in a will?"],
  ["recipient-first", "Speak with the recipient first"],
  ["who-could-receive", "Who could receive the land?"],
  ["options", "Options beyond a gift in your will"],
  ["taxes", "Tax and estate liquidity"],
  ["property-issues", "Debt, title and due diligence"],
  ["stewardship", "Long-term control and stewardship"],
  ["family-executor", "Family and your executor"],
  ["documents", "Information to gather"],
  ["process", "A practical 12-step process"],
  ["little-tree-farm", "Little Tree Farm and your land"],
  ["faq", "Frequently asked questions"],
  ["sources", "Sources and related reading"],
] as const;

const faqs = [
  {
    question: "Can I leave land to someone in my will?",
    answer:
      "In most cases, a Canadian property owner can name a beneficiary to receive land through a will, subject to provincial estate law, existing debts, family or dependant claims, and the terms of the will itself. A lawyer can confirm what applies to your situation.",
  },
  {
    question: "Can I leave land to a business or organization?",
    answer:
      "It may be possible, but the organization needs both the legal ability and the willingness to accept real property. Confirming this in advance, rather than assuming it, is an important step.",
  },
  {
    question: "Can I leave land to Little Tree Farm?",
    answer:
      "You are welcome to start a conversation with us about your property. We review every potential gift individually and cannot promise in advance that a specific property will be accepted.",
  },
  {
    question: "Can I leave my woodland for conservation?",
    answer:
      "Conservation-focused outcomes are sometimes possible through a suitable recipient, a conservation easement or covenant where available, or a combination of tools. A lawyer familiar with conservation arrangements can explain what applies to your land.",
  },
  {
    question: "Do I need permission from the recipient first?",
    answer:
      "It is not always legally required, but it is strongly recommended. Without a prior conversation, the recipient may be unable or unwilling to accept the property when the time comes.",
  },
  {
    question: "What happens if the recipient refuses the property?",
    answer:
      "That depends on how the will is written. A lawyer can help build in an alternate plan so the estate is not left without direction if the first choice cannot accept the gift.",
  },
  {
    question: "Will my estate owe tax?",
    answer:
      "Possibly. Canadian tax rules generally treat capital property as disposed of at fair market value immediately before death, which can create a capital gain even when the property is gifted rather than sold. An accountant can assess your specific situation.",
  },
  {
    question: "Is donated land automatically tax-free?",
    answer:
      "No. Donating land does not automatically eliminate tax. Any charitable receipt or special tax treatment depends on the recipient's status, the property and the details of the gift.",
  },
  {
    question: "Can my house be sold to pay estate taxes?",
    answer:
      "If the estate lacks enough cash to cover taxes, debts and expenses, the executor may need to sell assets. That could include a house or part of a property unless other arrangements were made in advance.",
  },
  {
    question: "What happens if there is not enough cash in the estate?",
    answer:
      "The executor may need to sell assets, borrow against the estate or take other steps permitted by law. Planning for estate liquidity in advance with your accountant and lawyer can reduce this risk.",
  },
  {
    question: "Can I leave money with the land for its care?",
    answer:
      "Many owners consider pairing a land gift with funds for future management. Your lawyer can advise whether and how that could be structured for your circumstances and intended recipient.",
  },
  {
    question: "Can I require the land to remain forested?",
    answer:
      "You can express this wish, and in some cases a legally binding conservation tool may be available. A lawyer can explain what is enforceable in your province and what the intended recipient can realistically commit to.",
  },
  {
    question: "What is a conservation easement or covenant?",
    answer:
      "It is a legal tool, available in some provinces and circumstances, that can restrict certain future uses of land. Availability, enforceability and administration vary, so discuss it with a lawyer experienced in conservation law.",
  },
  {
    question: "Can I leave only part of my property?",
    answer:
      "In many cases, yes, although subdividing land can involve surveys, municipal approval and cost. A lawyer and surveyor can advise what is possible for your property.",
  },
  {
    question: "What if several people own the land?",
    answer:
      "Shared ownership adds complexity because your will can generally address only your own interest, while the rights and wishes of co-owners also matter. A lawyer can explain the options.",
  },
  {
    question: "What if my children do not want the property?",
    answer:
      "This is a common situation. It may open the door to another recipient, a sale, a donation or a different stewardship arrangement. There is no single right answer, and it is worth exploring the options before the situation becomes urgent.",
  },
  {
    question: "What if the property has a mortgage?",
    answer:
      "A mortgage does not automatically prevent a gift, but it affects how the estate and recipient need to plan. Review the debt, title and proposed transfer with your lawyer and intended recipient.",
  },
  {
    question: "What if the land is in another province?",
    answer:
      "Estate and property law vary by province. Consider advice from a lawyer licensed where the land is located as well as the lawyer handling your estate plan.",
  },
  {
    question: "Should I donate the land while I am alive instead?",
    answer:
      "Some owners prefer a lifetime donation because it allows direct involvement in the transition. Others prefer to retain the property for life. The legal and tax consequences differ, so make the decision with professional advice.",
  },
  {
    question: "Do I need a lawyer?",
    answer:
      "Yes. Property and estate law are detailed and province-specific. A qualified estate-planning lawyer is the appropriate professional to prepare or update a will involving real property.",
  },
  {
    question: "How often should I review my will?",
    answer:
      "Review it periodically and after major life events, changes in ownership or property value, or changes to the intended recipient's circumstances. Ask your lawyer what review cycle makes sense for you.",
  },
  {
    question: "Can Little Tree Farm provide legal or tax advice?",
    answer:
      "No. Little Tree Farm is a nursery, not a law firm or accounting firm, and cannot provide legal, tax, accounting or estate-planning advice. Please consult qualified Canadian professionals.",
  },
] as const satisfies readonly LandFaqItem[];

const comparisonRows = [
  ["Gift through a will", "At death", "Keeps the property during your lifetime", "The estate may owe tax and need liquidity; the recipient may be unable to accept later"],
  ["Lifetime donation", "While you are living", "You can see and discuss the transition", "You give up ownership and control now"],
  ["Conventional sale", "At sale", "Provides funds for you or your estate", "There is no guarantee of a particular future use"],
  ["Below-market sale", "At sale", "May align price with a stewardship outcome", "Tax and valuation questions need careful review"],
  ["Conservation agreement", "Varies", "May restrict certain future land uses", "Availability and enforceability vary by province"],
  ["Sale and donation of proceeds", "At sale", "Simplifies transfer of the physical property", "The land itself does not go to the intended steward"],
] as const;

const documents = [
  "Current deed",
  "Property Identification Number",
  "Survey or plan",
  "Tax assessment",
  "Purchase records and original cost information",
  "Records of improvements",
  "Mortgage documents",
  "Insurance documents",
  "Leases, rights of way and access agreements",
  "Maps and aerial photographs",
  "Forestry plans",
  "Environmental reports",
  "Building information",
  "Known well and septic records",
  "A list of current owners",
  "Contact details for the intended recipient",
  "A written description of your goals for the land",
] as const;

const steps = [
  "Write down what you want for the land.",
  "Identify possible recipients.",
  "Speak with the preferred recipient.",
  "Gather property and financial information.",
  "Obtain an appraisal or value estimate where appropriate.",
  "Speak with an estate-planning lawyer.",
  "Speak with an accountant or tax adviser.",
  "Create a plan for estate taxes and expenses.",
  "Choose an executor and discuss the plan.",
  "Prepare a fallback option.",
  "Sign and properly execute the will.",
  "Review the plan periodically.",
] as const;

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
        headline: "How to Leave Land in Your Will: A Guide for Canadian Landowners",
        description: pageDescription,
        image: `${businessInfo.url}/main-landing-page/big-farmland.jpg`,
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
          { "@type": "ListItem", position: 2, name: "Leave land in your will", item: pageUrl },
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

export default function LeaveLandInYourWillPage() {
  const schema = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/main-landing-page/big-farmland.jpg"
          alt="Rural Canadian farmland bordered by mature woodland in soft morning light"
          fill
          sizes="100vw"
          preload
        />
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <span>Land stewardship</span><span aria-hidden="true">/</span>
            <span aria-current="page">Leave land in your will</span>
          </nav>
          <p className={styles.eyebrow}>Land Stewardship Knowledge Centre</p>
          <h1>How to Leave Land in Your Will</h1>
          <p className={styles.heroDek}>
            A practical guide for Canadian landowners considering the future of a family woodlot,
            old farm, wetland or other rural property when no family member wants to take it on.
          </p>
          <div className={styles.meta}>
            <span>Published August 6, 2026</span>
            <span>Canada-wide overview</span>
            <span>General educational information</span>
          </div>
        </div>
      </header>

      <div className={styles.factsWrap}>
        <div className={styles.facts} aria-label="Guide scope">
          <div className={styles.fact}><span className={styles.factLabel}>Start with</span><p>Your goals, property records and a willing recipient.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Plan for</span><p>Tax, debt, estate liquidity and an alternate outcome.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Confirm with</span><p>A lawyer and tax professional familiar with rural property.</p></div>
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
            <p><strong>General information only.</strong> Laws and tax consequences vary by province, property and personal circumstances. Speak with qualified Canadian legal and tax professionals before changing your will or transferring property.</p>
          </div>

          <section id="why-different">
            <span className={styles.sectionNumber}>01 · The central issue</span>
            <h2>Why Leaving Land Is Different From Leaving Money</h2>
            <p>Land is illiquid, location-specific and often carries emotional weight that money does not. It can be expensive to maintain, subject to ongoing property taxes, mortgaged, difficult to access, or affected by environmental liabilities. Unlike a bank account, it usually cannot be divided neatly among several people without changing what it is—a woodland split into narrow lots may stop functioning as connected habitat.</p>
            <p>After an owner dies, the estate may need cash for final income tax, a taxable capital gain, probate or estate-administration costs, legal fees, outstanding property taxes, insurance, mortgage balances and other debts. If there is not enough cash, the executor may need to sell assets, borrow money or sell part or all of the property—even when the will intended to leave it intact.</p>
            <p className={styles.pullQuote}>A will can express the owner&apos;s wishes, but the estate must still satisfy its legal and financial obligations.</p>
          </section>

          <section id="can-you">
            <span className={styles.sectionNumber}>02 · The legal path</span>
            <h2>Can You Leave Rural Land to Someone in Your Will?</h2>
            <p>In general, a Canadian property owner can name a beneficiary to receive land through a will. Whether the gift unfolds as intended depends on provincial estate law, valid ownership and title, mortgages or liens, possible family or dependant claims, estate debts and taxes, the wording of the will, and the recipient&apos;s ability and willingness to accept the property.</p>
            <p>A will might leave a specific property to a named recipient, include it within a beneficiary&apos;s share of the residue, or direct the executor to sell it and distribute the proceeds. Each approach has different consequences. An estate-planning lawyer should prepare the wording for your circumstances rather than adapting a sample clause from the internet.</p>
          </section>

          <section id="recipient-first">
            <span className={styles.sectionNumber}>03 · Before naming anyone</span>
            <h2>Speak With the Intended Recipient First</h2>
            <p>Before putting a person or organization into your will, help them understand the property: where it is, acreage, condition, annual taxes, access, buildings, mortgages, liens, known environmental concerns and restrictions—along with what ownership would require and what you hope the land might become.</p>
            <p>A recipient may be unable to accept the property because of management costs, location, legal liability, contamination, unsafe buildings, unpaid taxes, use restrictions or a change in mission. A lawyer can build an alternate plan into the will if the preferred recipient cannot accept the gift.</p>
            <div className={styles.callout}>
              <h3>A useful first conversation</h3>
              <p>Ask whether the recipient would consider the land, what due diligence they require, whether they can fund ongoing care, and what—if anything—they can commit to about its future use. Interest is not the same as formal acceptance.</p>
            </div>
          </section>

          <section id="who-could-receive">
            <span className={styles.sectionNumber}>04 · Possible recipients</span>
            <h2>Who Could Receive the Land?</h2>
            <p>Possibilities include a family member, friend or neighbour, working farmer, forestry or stewardship organization, registered charity, land trust, municipality, Indigenous organization or community where appropriate and welcomed, educational institution, conservation organization, or a business with a genuine long-term stewardship mission.</p>
            <p>Each has different acceptance policies, tax treatment, management capacity, geographic reach, legal structure and methods. No one type of organization—including Little Tree Farm—is the right fit for every property.</p>
            <p className={styles.pullQuote}>The right recipient has the legal ability, financial capacity and long-term commitment to care for that particular property.</p>
          </section>

          <section id="options">
            <span className={styles.sectionNumber}>05 · Compare the paths</span>
            <h2>A Gift Through a Will Is Only One Option</h2>
            <p>Other possibilities include <Link href="/land/donate-land">donating the land during your lifetime</Link>, selling at full or below-market value, creating a conservation agreement where legally available, using a lawyer-designed life-interest arrangement, directing the estate to sell and donate cash, or providing funds alongside the land for future management.</p>
            <p>None is universally superior. The right path depends on your goals, finances, family situation, the recipient and the property itself.</p>
            <div className={styles.tableWrap}>
              <table className={styles.comparison}>
                <caption>General comparison only. Confirm the legal and tax details of any option with qualified professionals.</caption>
                <thead><tr><th>Option</th><th>Ownership changes</th><th>Potential advantage</th><th>Important consideration</th></tr></thead>
                <tbody>{comparisonRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          </section>

          <section id="taxes">
            <span className={styles.sectionNumber}>06 · Tax and liquidity</span>
            <h2>What Happens to Tax When Land Is Left in a Will?</h2>
            <p>Canada&apos;s tax rules generally treat capital property as though it were disposed of at fair market value immediately before death. That can create a capital gain even when no sale takes place and the property is gifted. The result depends on its adjusted cost base, value at death, improvements, use, ownership structure, principal-residence status, potential farm or woodlot rules, spouse or trust transfers, the recipient&apos;s status and other facts.</p>
            <div className={styles.callout}>
              <h3>Illustrative example—not a real case</h3>
              <p>A person owns rural property worth substantially more than its adjusted cost base. Their will leaves it to an organization. Even without sale proceeds, the estate may have a reportable deemed disposition and tax based on the property&apos;s value.</p>
            </div>
            <p>This creates a possible liquidity problem: tax may be due on a paper gain while the property produces no cash. Funds may need to come from savings, insurance, other assets, borrowing, a partial sale or a cash gift planned to accompany the land. Discuss estate liquidity with both an accountant and lawyer before it becomes urgent.</p>
            <h3>Homes, farms and woodlots can require a closer look</h3>
            <p>A principal residence, working farm, commercial woodlot, rental property, multiple parcels, or a house with wider acreage can introduce additional rules. The house and land immediately around it may not receive the same treatment as the remaining acreage. An accountant familiar with estates and rural property should assess the facts and the law in force at the time.</p>
          </section>

          <section id="property-issues">
            <span className={styles.sectionNumber}>07 · Property realities</span>
            <h2>Debt, Title and Due Diligence Still Matter</h2>
            <p>Land does not always pass free and clear. Mortgages, secured lines of credit, unpaid property taxes, judgments, liens, environmental orders and ownership disputes may affect a transfer. The estate and recipient need clarity about the obligations and whether the recipient would take title subject to any of them. A lawyer can review title and the proposed transfer.</p>
            <p>A responsible recipient may also examine legal access, boundaries, rights of way, zoning, wetlands, watercourses, former dumps or fuel tanks, contamination, unsafe structures, wells, septic systems, forestry history, invasive species, leases, timber rights, mineral rights and tax arrears.</p>
            <p className={styles.pullQuote}>Careful review is not a rejection of the owner&apos;s values. It is how a stewardship promise becomes realistic.</p>
          </section>

          <section id="stewardship">
            <span className={styles.sectionNumber}>08 · The long view</span>
            <h2>Can You Decide How the Land Must Be Used Forever?</h2>
            <p>There is a difference between expressing a wish, attaching a condition to a gift, creating a legally binding conservation restriction and relying on a recipient&apos;s mission. Restrictions that are too rigid can make land difficult to accept or care for as climate, ecology, access and management practices change.</p>
            <p>Work with the intended recipient and a lawyer to balance your values, ecological goals, practical flexibility, legal enforceability and financial sustainability. A preferred outcome—native forest restoration, wildlife habitat, seed production, wetland protection, education or responsible woodland management—does not become binding merely because it appears in informal instructions.</p>
            <div className={styles.imageBand}>
              <Image src="/main-landing-page/trees-from-groundview.jpg" alt="Looking upward into the canopy of a mature forest" fill sizes="(max-width: 960px) 100vw, 760px" />
              <p className={styles.imageCaption}>A living legacy may be a forest that is planted—or a forest given the time and protection to continue becoming itself.</p>
            </div>
            <h3>What could the land become over 100 years?</h3>
            <p>Possible futures include native forest on abandoned farmland, a mature woodland protected from careless clearing, a native seed orchard, a walnut or chestnut planting, a wetland supporting birds and water quality, a wildlife corridor, an educational woodland or a carefully managed forest providing habitat, seed and occasional timber. Some land is best served by being left largely alone; visible intervention is not the only form of care.</p>
          </section>

          <section id="family-executor">
            <span className={styles.sectionNumber}>09 · People and responsibility</span>
            <h2>Talk With Family—and Choose an Executor Who Understands</h2>
            <p>A family conversation can reduce confusion about why the land matters, why no one is being forced to take it, how costs will be covered and what future you hope for. Family approval is not always required, and some situations are sensitive, so ask your lawyer how to approach the conversation.</p>
            <p>An executor handling rural land may need to locate documents, maintain insurance, pay taxes, protect buildings, obtain appraisals, communicate with the recipient, manage estate liquidity and complete the title transfer. Discussing the plan while you can still answer questions makes that work easier.</p>
          </section>

          <section id="documents">
            <span className={styles.sectionNumber}>10 · Prepare the file</span>
            <h2>Information to Gather Before Meeting Your Lawyer</h2>
            <p>You may not have every item, but assembling what exists will make your legal and tax conversations more productive.</p>
            <ul className={styles.checklist}>{documents.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className={styles.questionGrid}>
              <div className={styles.callout}>
                <h3>Ask the intended recipient</h3>
                <ul>
                  <li>Would you consider accepting this property?</li>
                  <li>What land fits your mission and geography?</li>
                  <li>What review would you need before deciding?</li>
                  <li>Could you keep, restore or later sell it?</li>
                  <li>Can you manage buildings, debt or ongoing costs?</li>
                  <li>What protection or future use can you actually promise?</li>
                  <li>Who pays appraisal, legal and transfer costs?</li>
                </ul>
              </div>
              <div className={styles.callout}>
                <h3>Ask your professionals</h3>
                <ul>
                  <li>How should the property be described in the will?</li>
                  <li>What happens if the recipient cannot accept?</li>
                  <li>Could family or dependant claims affect the gift?</li>
                  <li>How should debt and tax be handled?</li>
                  <li>What is the adjusted cost base and possible gain?</li>
                  <li>Could farm, woodlot or residence rules apply?</li>
                  <li>Will the estate have enough liquidity?</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="process">
            <span className={styles.sectionNumber}>11 · From intention to plan</span>
            <h2>A Practical Process for Leaving Land in Your Will</h2>
            <div className={styles.steps}>{steps.map((step, index) => <div className={styles.step} key={step}><span className={styles.stepNumber}>{index + 1}</span><p>{step}</p></div>)}</div>
            <p>Property value, family circumstances, ownership, law and the recipient&apos;s capacity can all change. A plan made years ago may need another look today.</p>
          </section>

          <section id="little-tree-farm">
            <div className={styles.ltfBox}>
              <p className={styles.eyebrow}>Little Tree Farm</p>
              <h2>Could Little Tree Farm Be Part of Your Land&apos;s Future?</h2>
              <p>Little Tree Farm is developing a long-term land stewardship initiative for Canadian rural property that may support native forests, wildlife habitat, wetlands, seed orchards, nut orchards, tree production, education, research and responsible ongoing management.</p>
              <p>We welcome early conversations with landowners considering the future of woodland, farmland or other rural property. You do not need a final decision or a promise to donate. You can simply tell us about the land, what it means to you and what you hope might happen.</p>
              <p>Every property is reviewed individually. We cannot promise to accept, purchase or permanently protect a property. Any arrangement would require legal, financial and practical review.</p>
              <div className={styles.ctaRow}>
                <Link className={styles.primaryButton} href="/contact">Tell us about your property</Link>
                <Link className={styles.secondaryButton} href="/about">Learn about Little Tree Farm</Link>
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
            <p>These official resources provide a starting point. They do not replace advice about your province, title or tax circumstances.</p>
            <div className={styles.sources}>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/doing-taxes-someone-died/prepare-returns/report-income/capital-gains.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Capital gains when someone dies</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/environment-climate-change/services/environmental-funding/ecological-gifts-program.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Environment and Climate Change Canada</span><h3>Ecological Gifts Program</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://novascotia.ca/land-titles/" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Government of Nova Scotia</span><h3>Land titles and estate administration overview</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
            </div>

            <h2 className={styles.relatedHeading}>Related Reading</h2>
            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} href="/land/what-happens-to-my-land-when-i-die"><h3>What Happens to My Land When I Die?</h3><span>A story of two futures →</span></Link>
              <Link className={styles.relatedCard} href="/land/i-dont-want-my-woodland-anymore"><h3>I Don&apos;t Want My Woodland Anymore</h3><span>Compare woodland options →</span></Link>
              <Link className={styles.relatedCard} href="/land/unwanted-rural-property"><h3>Options for Unwanted Rural Property</h3><span>Compare every path →</span></Link>
              <Link className={styles.relatedCard} href="/land/donate-land"><h3>How to Donate Land in Canada</h3><span>Compare donation options →</span></Link>
              <Link className={styles.relatedCard} href="/land/creating-a-forest-legacy"><h3>Creating a Forest Legacy</h3><span>Watch a century pass →</span></Link>
              <Link className={styles.relatedCard} href="/blog/inherited-land-what-to-do"><h3>Inherited Land: What Should You Do Next?</h3><span>Read the guide →</span></Link>
              <Link className={styles.relatedCard} href="/blog/unused-land-canada"><h3>Productive Options for Unused Land in Canada</h3><span>Explore the options →</span></Link>
              <Link className={styles.relatedCard} href="/blog/best-uses-old-farmland-canada"><h3>Best Uses for Old Farmland in Canada</h3><span>Compare land uses →</span></Link>
            </div>
          </section>

          <section>
            <div className={styles.finalCta}>
              <h2>A Land Legacy Begins Before the Will Is Signed</h2>
              <p>Begin with conversation: explain what the land means, learn what a recipient can realistically accept, and work with qualified professionals on tax, debt, legal responsibility and long-term care.</p>
              <p>You do not need to know today exactly what the land will become. You can begin by deciding what you hope it will continue to give.</p>
              <div className={styles.ctaRow}><Link className={styles.secondaryButton} href="/contact">Discuss your land&apos;s future</Link></div>
            </div>
            <div className={styles.disclaimer}>
              <p><strong>Legal disclaimer:</strong> This article is general educational information, not legal, tax, accounting, financial, real-estate or estate-planning advice. Estate, property and tax law vary by province and circumstance. Obtain independent advice before changing a will, transferring land or creating restrictions.</p>
              <p>Little Tree Farm does not guarantee it will accept, purchase or enter into an agreement involving a property, and does not promise a charitable receipt, tax deduction, payment of costs, assumption of debts, permanent conservation protection or any future use unless confirmed in a formal written agreement.</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
