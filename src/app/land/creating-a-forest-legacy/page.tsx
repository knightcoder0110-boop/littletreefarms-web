import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandFaq, type LandFaqItem } from "@/components/land/LandFaq";
import { ForestCentury } from "@/components/land/ForestCentury";
import styles from "@/components/land/LandArticle.module.css";
import { businessInfo } from "@/lib/config/business";

const pagePath = "/land/creating-a-forest-legacy";
const pageUrl = `${businessInfo.url}${pagePath}`;
const publishedDate = "2026-08-06";
const pageTitle = "Creating a Forest Legacy in Canada | Landowner Guide";
const pageDescription =
  "Create a forest legacy in Canada: restore native forest, plan woodland succession, leave land in your will, donate, plant a seed orchard or find a steward.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  keywords: [
    "forest legacy",
    "creating a forest legacy Canada",
    "what happens to my forest when I die",
    "woodland succession planning",
    "protect my family forest",
    "leave a living forest legacy",
    "native seed orchard Canada",
    "forest restoration",
    "native trees wildlife habitat",
    "donate woodland Canada",
    "long-term land stewardship",
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
  ["century", "Watch a century pass"],
  ["what-is", "What a forest legacy means"],
  ["why", "Why landowners think about this"],
  ["seven-ways", "Seven ways to create one"],
  ["restore", "1 · Restore native forest"],
  ["protect", "2 · Protect existing woodland"],
  ["succession", "3 · Family succession plan"],
  ["will", "4 · Leave it through your will"],
  ["donate", "5 · Donate or transfer"],
  ["orchard", "6 · Seed orchard or productive forest"],
  ["steward", "7 · Find a long-term steward"],
  ["decision", "What kind of legacy fits you"],
  ["checklist", "Questions to answer first"],
  ["little-tree-farm", "Little Tree Farm and your land"],
  ["faq", "Frequently asked questions"],
  ["sources", "Sources and related reading"],
] as const;

const waysCards = [
  ["Restore native forest", "Plant trees on land that's sat idle or degraded."],
  ["Protect existing woodland", "Sometimes the legacy is simply leaving what's already there alone."],
  ["Family succession plan", "Decide, in writing, who takes over and how."],
  ["Leave it through your will", "Keep using the land now; arrange its future later."],
  ["Donate or transfer", "Move the property to a compatible steward during your lifetime."],
  ["Seed orchard or productive forest", "A legacy that's ecological and productive at once."],
  ["Find a long-term steward", "Match the land to whoever can actually care for it."],
] as const;

const situations = [
  {
    title: "I want the land to remain in my family",
    options: ["Succession planning", "Shared family goals, discussed openly", "A management agreement among co-owners", "One clear owner, if possible", "A written stewardship plan"],
  },
  {
    title: "My children do not want the land",
    options: ["Sale", "Donation", "Transfer to another recipient", "A bequest to a compatible organization", "Finding a long-term steward"],
  },
  {
    title: "I want to keep using the land for the rest of my life",
    options: ["A future bequest", "Succession planning", "A reserved life interest, where legally appropriate", "A long-term management plan"],
  },
  {
    title: "I want trees planted now",
    options: ["Native forest restoration", "A seed orchard", "A nut orchard", "Wildlife habitat plantings", "Shelterbelts or a food forest"],
  },
  {
    title: "I want the land permanently protected",
    options: ["Speak with a qualified land trust", "Speak with a conservation organization", "Speak with a lawyer familiar with conservation tools", "Ask about provincial programs where available"],
  },
  {
    title: "I want the land actively restored and used",
    options: ["A restoration organization", "A native-tree nursery", "A farmer", "A community group", "A long-term stewardship partner"],
  },
] as const;

const checklist = [
  "What do I value most about the land?",
  "Do I want it protected, restored, farmed, or used productively?",
  "Do I want to keep ownership?",
  "Do I want to keep living there?",
  "Do I need money from the property?",
  "Do my children or heirs actually want it?",
  "Who will pay future property taxes?",
  "Who will maintain roads, buildings, fences and insurance?",
  "Is there a mortgage, lien, title issue, or unpaid tax balance?",
  "Is the property ecologically significant?",
  "Is it suitable for forest restoration or a seed orchard?",
  "Do I want to act now, or plan for this through my will?",
  "Which recipient is actually capable of carrying out this plan?",
  "Have I obtained independent legal and financial advice?",
] as const;

const faqs = [
  {
    question: "What is a forest legacy?",
    answer:
      "A forest legacy is both the land itself and the plan that determines what happens to it — whether that's planting a new forest, protecting an existing one, or arranging for someone to care for it after you.",
  },
  {
    question: "How do I create a forest legacy?",
    answer:
      "By choosing one or more paths that fit your goals: restoring native forest, protecting existing woodland, planning family succession, leaving land in your will, donating or transferring the property, establishing a seed orchard, or finding a long-term steward.",
  },
  {
    question: "Can I plant a forest as a legacy?",
    answer:
      "Yes. Planting native trees on degraded or abandoned land is one of the most direct ways to create a legacy that will still be growing decades from now.",
  },
  {
    question: "Can I leave woodland to my children?",
    answer:
      "Yes, though it helps to talk with them first about whether they actually want it and who would manage it, rather than assuming — this can prevent the property from becoming a burden for the next generation.",
  },
  {
    question: "What if my children do not want my land?",
    answer:
      "This is common, and it isn't a failure of planning. It simply means looking at other options — a sale, a donation, a transfer, or a bequest to another recipient who can carry out your goals for the land.",
  },
  {
    question: "Can I leave forest land in my will?",
    answer:
      "Yes, and this lets you keep full control and use of the property during your lifetime. Contact the intended recipient before finalizing the will, since naming them doesn't guarantee they can accept the gift.",
  },
  {
    question: "Can I donate woodland?",
    answer:
      "Yes, in many cases, though the recipient organization needs to review the property and agree to accept it — not every organization can take on every parcel.",
  },
  {
    question: "Can I donate forest land in Canada?",
    answer:
      "Generally yes, subject to the recipient's review and your own legal and tax advice. Our full guide to donating land in Canada covers the process in depth.",
  },
  {
    question: "Can I keep living on land I plan to donate?",
    answer:
      "In some cases, an arrangement such as a reserved life estate may allow this, though it requires careful legal, tax and valuation advice and isn't available or appropriate for every situation.",
  },
  {
    question: "Can I protect woodland without donating it?",
    answer:
      "Yes, in some provinces and circumstances, tools like a conservation easement or covenant may let you keep ownership while restricting certain future uses. Availability varies by province and requires an eligible organization to hold the agreement.",
  },
  {
    question: "What is a woodland succession plan?",
    answer:
      "It's a plan, made while you're able to guide it, for who will own and manage your woodland in the future — addressing who wants it, who can afford it, and how taxes and maintenance will be handled.",
  },
  {
    question: "How do I choose a future steward for my property?",
    answer:
      "Consider who has the legal ability, financial capacity and genuine long-term commitment to care for your specific land — this could be family, a neighbour, a farmer, a land trust, a municipality, or a stewardship-focused organization.",
  },
  {
    question: "Can rural land be used as a native seed orchard?",
    answer:
      "Some rural land is well suited to this, depending on soil, access and condition. A native seed orchard can provide seed for future forests while still functioning as a living, productive landscape.",
  },
  {
    question: "Can I create a nut orchard as a legacy?",
    answer:
      "Yes, nut orchards — walnut, chestnut, hazelnut and similar species — are a long-lived option some landowners consider as both a food source and a lasting planting.",
  },
  {
    question: "Does land have to be ecologically significant?",
    answer:
      "No. Ecological significance matters to some conservation-focused recipients, but land can also have real value for restoration, seed production, agriculture, or education, even if it wouldn't rank as a conservation priority.",
  },
  {
    question: "Can Little Tree Farm accept land?",
    answer:
      "Possibly, if it's suited to native forest restoration, seed orchards, nut orchards, or similar long-term stewardship use. Every property is reviewed individually, and acceptance is never guaranteed in advance.",
  },
  {
    question: "Will I receive a charitable tax receipt?",
    answer:
      "Not automatically, and not from Little Tree Farm, which is not a registered charity or qualified donee unless separately confirmed. Confirm any recipient's status and your own tax situation with an accountant before assuming a receipt will be available.",
  },
  {
    question: "What is the first step in making a forest legacy plan?",
    answer:
      "Usually just naming what you value most about the land and starting a conversation — with family, a lawyer, or a potential recipient — before any legal or financial details are settled.",
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
        headline: "Creating a Forest Legacy in Canada",
        description: pageDescription,
        image: `${businessInfo.url}/main-landing-page/trees-from-groundview.jpg`,
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
          { "@type": "ListItem", position: 2, name: "Land Stewardship", item: `${businessInfo.url}/land` },
          { "@type": "ListItem", position: 3, name: "Creating a forest legacy", item: pageUrl },
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

export default function CreatingAForestLegacyPage() {
  const schema = JSON.stringify(jsonLd()).replace(/</g, "\\u003c");

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />

      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/main-landing-page/trees-from-groundview.jpg"
          alt="Looking upward into the canopy of a mature forest — the legacy a planted woodland becomes"
          fill
          sizes="100vw"
          preload
        />
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/land">Land stewardship</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Creating a forest legacy</span>
          </nav>
          <p className={styles.eyebrow}>Land Stewardship Knowledge Centre</p>
          <h1>Creating a Forest Legacy</h1>
          <p className={styles.heroDek}>
            A forest can outlive the person who plants it. The trees you establish today may still
            be growing when your grandchildren are old. But a forest legacy doesn&apos;t happen
            automatically — it takes a clear plan. This guide walks through each path.
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
          <div className={styles.fact}><span className={styles.factLabel}>Two halves of a legacy</span><p>The land itself, and the written plan for what happens to it.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Seven honest paths</span><p>Restore, protect, succeed, bequeath, donate, plant — or find a steward.</p></div>
          <div className={styles.fact}><span className={styles.factLabel}>Start with</span><p>Naming what you value most about the land, then one conversation.</p></div>
        </div>
      </div>

      <ForestCentury />

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
            <p><strong>General information only.</strong> This article is educational and general in nature, not legal, tax or estate-planning advice. Speak with qualified Canadian professionals before making decisions about your property.</p>
          </div>

          <section id="what-is">
            <span className={styles.sectionNumber}>01 · The idea</span>
            <h2>What Does &ldquo;Creating a Forest Legacy&rdquo; Mean?</h2>
            <p>A forest legacy isn&apos;t limited to donating land to a charity — that&apos;s only one path among several. It can mean planting native trees on land that&apos;s sat idle, restoring ground that was cleared or degraded, protecting mature woodland that&apos;s already there, maintaining wildlife habitat, creating a seed source for future forests, passing land to your heirs with clear instructions, leaving land to an organization, or simply putting a long-term stewardship plan in writing so the next steward knows what you hoped for.</p>
            <p className={styles.pullQuote}>A legacy is both the land itself and the plan that determines what happens to it.</p>
            <p>Neither half works well alone. Land without a plan often ends up divided, sold in a hurry, or left to whoever&apos;s willing to deal with it. A plan without land, obviously, is just an idea. This guide is about building both.</p>
          </section>

          <section id="why">
            <span className={styles.sectionNumber}>02 · The motivation</span>
            <h2>Why Landowners Think About a Forest Legacy</h2>
            <p>The motivations are usually personal, not abstract. A deep love for a piece of land that&apos;s been part of your life for decades. Family history — a woodlot your parents or grandparents cared for. Real concern about what happens if the property is ever cleared or developed after you&apos;re gone. Children who, honestly, don&apos;t want the woodland and never pretended otherwise. Getting older and wanting to simplify an estate. A genuine wish to protect wildlife, or to restore land that was cleared long ago and never quite recovered. And sometimes, simply wanting to leave something that lasts — trees planted today that will still be growing long after you are gone.</p>
            <p>If you&apos;ve caught yourself thinking &ldquo;my children don&apos;t want my woodland,&rdquo; or &ldquo;I want the land protected after I die,&rdquo; or &ldquo;I want to leave something that lasts&rdquo; — this article is written for exactly that moment.</p>
          </section>

          <section id="seven-ways">
            <span className={styles.sectionNumber}>03 · The short version</span>
            <h2>Seven Ways to Create a Forest Legacy</h2>
            <div className={styles.typeGrid}>
              {waysCards.map(([name, description], index) => (
                <div className={styles.typeCard} key={name}><span className={styles.typeIndex}>{index + 1}</span><h3>{name}</h3><p>{description}</p></div>
              ))}
            </div>
          </section>

          <section id="restore">
            <span className={styles.sectionNumber}>04 · Path one</span>
            <h2>1. Restore Native Forest on Your Land</h2>
            <p>Planting a forest is one of the most direct ways to create a lasting legacy — there&apos;s something concrete about it that a plan on paper can&apos;t quite match. A well-planned restoration typically draws on native species and local seed sources, often mixing hardwoods and other species suited to the site, with an eye toward wildlife habitat and climate resilience over the long run. It also takes real, ongoing attention in the early years: protecting young seedlings from browsing, managing competition from other vegetation, and accepting that the forest will keep changing and filling in over decades, long past the planting itself.</p>
            <p>This article won&apos;t turn into a detailed silviculture guide — the specifics depend heavily on your site, soil and region. Our free <Link href="/guide">planting guide</Link> covers the practical side of getting trees established, if this is the direction you&apos;re drawn to.</p>
          </section>

          <section id="protect">
            <span className={styles.sectionNumber}>05 · Path two</span>
            <h2>2. Protect Existing Woodland</h2>
            <p>Sometimes the legacy is already standing. A mature or naturally regenerating forest may need far less intervention than people assume — mainly maintaining existing forest cover, avoiding unnecessary clearing, protecting wetlands and waterways, keeping wildlife corridors intact, and controlling invasive species where they&apos;ve taken hold. Writing a simple stewardship plan, and documenting any special trees, habitats or family history connected to the land, can help whoever comes next understand what they&apos;re caring for and why it mattered to you.</p>
            <div className={styles.callout}>
              <h3>On formal protection tools</h3>
              <p>Formal conservation tools such as easements or covenants vary by province and by which organizations are legally eligible to hold them. Little Tree Farm should not be understood as an organization that can hold a conservation easement unless that authority is specifically confirmed — for this route, a qualified land trust or conservation organization is the right place to start.</p>
            </div>
          </section>

          <section id="succession">
            <span className={styles.sectionNumber}>06 · Path three</span>
            <h2>3. Create a Family Woodland Succession Plan</h2>
            <p>A surprising number of woodland problems trace back to one thing: there was never a clear plan. Families are often left guessing after the fact, which is exactly when disagreements are most likely to surface. It helps to work through a few direct questions together, before there&apos;s any pressure to decide quickly: Who actually wants the land? Who&apos;s willing and able to manage it? Could one heir take ownership while others are compensated another way? Should the land simply be sold and the proceeds divided? Could part be kept and part sold? What happens if none of the children want it? Who will pay the taxes, insurance and maintenance going forward? And if more than one person ends up owning it together, what are the risks of that shared ownership?</p>
            <p>None of these questions are comfortable, but they&apos;re far easier to work through as a family conversation now than as an unplanned scramble after a death. A written woodlot succession plan — even an informal one, refined later with a lawyer — can prevent a lot of strain later.</p>
          </section>

          <section id="will">
            <span className={styles.sectionNumber}>07 · Path four</span>
            <h2>4. Leave the Land Through Your Will</h2>
            <p>You can retain full control and use of the property during your lifetime while making a plan through your will for what happens afterward. Possible recipients include family, a registered charity, a land trust, a conservation organization, a community group, a stewardship organization, or another suitable recipient depending on your goals.</p>
            <p className={styles.pullQuote}>The intended recipient should be contacted before they&apos;re named — not after the will is finalized.</p>
            <p>This matters because not every organization can accept land, land ownership creates real ongoing costs, conditions you might want to attach can be difficult for a recipient to honour, and details like title, access, taxes, buildings and other liabilities all affect whether a gift is actually workable. Our companion guide on how to <Link href="/land/leave-land-in-your-will">leave land through your will</Link> covers all of this in much more depth.</p>
          </section>

          <section id="donate">
            <span className={styles.sectionNumber}>08 · Path five</span>
            <h2>5. Donate or Transfer the Property</h2>
            <p>Some owners create their forest legacy by transferring the land during their own lifetime rather than waiting. Depending on your goals and the recipient, this could take the form of an outright donation, a nominal sale, an ordinary sale to a compatible steward, a part-sale-and-part-donation arrangement with an eligible organization, a transfer to family, a transfer to a neighbour, a donation to an organization, or a future bequest planned now and carried out later.</p>
            <p>A few things are consistent across all of these: not every organization accepts land, charitable receipts aren&apos;t automatic, the recipient&apos;s legal status matters for tax purposes, professional legal and tax advice is important regardless of which path you choose, and the land needs to be assessed individually before anyone can commit to anything. Our full guide on <Link href="/land/donate-land">how to donate land in Canada</Link> walks through the entire process.</p>
          </section>

          <section id="orchard">
            <span className={styles.sectionNumber}>09 · Path six</span>
            <h2>6. Establish a Native Seed Orchard or Productive Forest</h2>
            <p>A forest legacy doesn&apos;t have to be purely passive conservation — it can be productive too. Some landowners are drawn to native tree seed orchards, nut orchards, hardwood timber plantings, food forests, dedicated restoration seed sources, nursery seed-production areas, demonstration forests, or broader biodiversity plantings that combine several of these at once.</p>
            <p>This kind of productive stewardship can bring together real ecological value, long-term land care, seed and food production, wildlife habitat, education, and in some cases future income — all on the same piece of ground. It&apos;s a genuinely different approach from simply setting land aside and leaving it alone, and it&apos;s one worth considering if you&apos;d like your legacy to keep actively giving something back. The <Link href="/seedlings">seedlings we raise at the nursery</Link> give a sense of what&apos;s possible, and our <Link href="/calculator">returns calculator</Link> shows the productive side of a long-lived hardwood planting.</p>
          </section>

          <section id="steward">
            <span className={styles.sectionNumber}>10 · Path seven</span>
            <h2>7. Find a Long-Term Steward</h2>
            <p>Not every owner needs a traditional conservation solution. What many actually need is a person or organization genuinely willing to own the land, restore or plant it, manage it over time, monitor it, maintain access, cover the carrying costs, and put it to a long-term use that makes sense for the site. That steward could be a family member, a neighbour, a working farmer, another woodlot owner, a land trust, a municipality, a community group, an Indigenous organization or community where appropriate and welcomed, a restoration organization, or a private stewardship organization.</p>
            <p>The best steward genuinely depends on the land and on what you&apos;re hoping to see happen to it — there&apos;s no single right answer here, only the fit that makes sense for your particular property and goals.</p>
          </section>

          <section id="decision">
            <span className={styles.sectionNumber}>11 · Narrow it down</span>
            <h2>What Kind of Forest Legacy Do You Want to Leave?</h2>
            <p>Find the intention that sounds like yours. These are starting points for conversations with family and professionals — not a legal test or an eligibility decision.</p>
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
            <span className={styles.sectionNumber}>12 · Sit with these first</span>
            <h2>Questions to Answer Before You Make a Legacy Plan</h2>
            <p>Worth sitting with before your first conversation — the clearer your answers, the more productive every conversation after this will be.</p>
            <ul className={styles.checklist}>{checklist.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section id="little-tree-farm">
            <div className={styles.ltfBox}>
              <p className={styles.eyebrow}>Little Tree Farm</p>
              <h2>Could Little Tree Farm Help Create a Forest Legacy?</h2>
              <p>Little Tree Farm is a native-tree nursery and forest-restoration organization in Nova Scotia, and a potential long-term land steward for the right property. We may be interested in discussing rural properties that could support native forest restoration, seed orchards, nut orchards, wildlife habitat, demonstration plantings, or other long-term stewardship work.</p>
              <p>Not every property will be suitable, and every proposal is reviewed individually. Some properties may be better suited to a land trust, a family member, a neighbour, a farmer, a municipality, a community organization, or an ordinary sale — and we&apos;ll say so honestly if that seems to be the case.</p>
              <div className={styles.transparency}><p><strong>To be transparent:</strong> Little Tree Farm is not automatically a registered charity, qualified donee, land trust, or conservation easement holder, and no charitable tax receipt should be promised or assumed.</p></div>
              <div className={styles.ctaRow}>
                <Link className={styles.primaryButton} href="/contact">Tell us about your land</Link>
                <Link className={styles.secondaryButton} href="/about">Learn about Little Tree Farm</Link>
              </div>
            </div>
          </section>

          <section id="faq">
            <span className={styles.sectionNumber}>13 · Common questions</span>
            <h2>Frequently Asked Questions</h2>
            <LandFaq items={faqs} />
          </section>

          <section id="sources">
            <span className={styles.sectionNumber}>14 · Verify and continue</span>
            <h2>Authoritative Starting Points</h2>
            <p>These official resources explain the federal tax, estate and ecological-gift concepts touched on above. They do not replace advice about your province, title or circumstances.</p>
            <div className={styles.sources}>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/p113/p113-gifts-income-tax.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Gifts and Income Tax</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/life-events/doing-taxes-someone-died/prepare-returns/report-income/capital-gains.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Canada Revenue Agency</span><h3>Capital gains when someone dies</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
              <a className={styles.sourceCard} href="https://www.canada.ca/en/environment-climate-change/services/environmental-funding/ecological-gifts-program.html" target="_blank" rel="noopener noreferrer"><span><span className={styles.sourceType}>Environment and Climate Change Canada</span><h3>Ecological Gifts Program</h3></span><span className={styles.sourceArrow} aria-hidden="true">↗</span></a>
            </div>

            <h2 className={styles.relatedHeading}>Related Reading</h2>
            <div className={styles.relatedGrid}>
              <Link className={styles.relatedCard} href="/land/i-dont-want-my-woodland-anymore"><h3>I Don&apos;t Want My Woodland Anymore</h3><span>Work through the decision →</span></Link>
              <Link className={styles.relatedCard} href="/land/leave-land-in-your-will"><h3>How to Leave Land in Your Will</h3><span>Read the guide →</span></Link>
              <Link className={styles.relatedCard} href="/land/donate-land"><h3>How to Donate Land in Canada</h3><span>Compare donation options →</span></Link>
              <Link className={styles.relatedCard} href="/land/unwanted-rural-property"><h3>Options for Unwanted Rural Property</h3><span>Compare every path →</span></Link>
              <Link className={styles.relatedCard} href="/blog/inherited-land-what-to-do"><h3>Inherited Land: What Should You Do Next?</h3><span>Work through it →</span></Link>
            </div>
          </section>

          <section>
            <div className={styles.finalCta}>
              <h2>What Do You Want Your Land to Become?</h2>
              <p>A forest legacy begins with a decision about what you want the land to become, and who will be responsible for carrying that vision forward. You don&apos;t need to have every legal or financial detail solved before beginning the conversation.</p>
              <div className={styles.ctaRow}>
                <Link className={styles.secondaryButton} href="/contact">Tell us about your land</Link>
                <Link className={styles.secondaryButton} href="/land/donate-land">Learn how to donate land</Link>
              </div>
              <p>No pressure. No obligation. Every property is considered individually.</p>
            </div>
            <div className={styles.disclaimer}>
              <p><strong>Legal disclaimer:</strong> This article is provided for general educational purposes only and does not constitute legal, tax, accounting or estate-planning advice. Conservation tools, tax treatment and estate law vary by province and individual circumstances.</p>
              <p>Before making decisions about your land, obtain independent advice from qualified Canadian professionals. Little Tree Farm does not guarantee that it will accept, purchase or enter into an agreement involving any property, and does not promise a charitable tax receipt or permanent conservation status.</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
