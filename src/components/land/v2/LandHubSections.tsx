import Link from "next/link";
import styles from "./LandHubV2.module.css";

const stewardshipModes = [
  {
    number: "I",
    verb: "Protect",
    description: "Keep existing woodland, wetlands and habitat functioning where restraint is the right form of care.",
  },
  {
    number: "II",
    verb: "Restore",
    description: "Repair degraded ground with patient, site-appropriate planting and natural regeneration.",
  },
  {
    number: "III",
    verb: "Grow",
    description: "Establish native seed, nut, nursery or forest systems where active management fits the land.",
  },
  {
    number: "IV",
    verb: "Teach",
    description: "Use an accessible landscape to share practical knowledge about trees, seed and stewardship.",
  },
] as const;

export function LandStewardshipSpectrum() {
  return (
    <section className={styles.spectrumSection} aria-labelledby="spectrum-title">
      <div className={styles.sectionWrap}>
        <div className={styles.spectrumLead}>
          <p className={styles.eyebrow}>Stewardship is a verb</p>
          <h2 id="spectrum-title">Preservation is one path. Good care can take several forms.</h2>
          <p>
            Some land is best left largely natural. Other land may benefit from
            restoration, planting or thoughtful management. The right role begins
            with what is already there and what can realistically be sustained.
          </p>
        </div>

        <div className={styles.spectrumTrack}>
          {stewardshipModes.map((mode) => (
            <article key={mode.verb}>
              <span>{mode.number}</span>
              <h3>{mode.verb}</h3>
              <p>{mode.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const commitments = [
  ["Begin with the landowner’s hopes", "We want to understand the history, the concern and the future you have in mind before discussing mechanisms."],
  ["Assess each property on its own", "Location, title, access, ecology, buildings, liabilities and long-term cost can make seemingly similar parcels very different."],
  ["Say what is and is not workable", "A responsible review may lead to a different recipient, a conventional sale, more planning—or no arrangement at all."],
  ["Put lasting promises into legal form", "If a transfer progresses, landowners should use independent legal and tax advisers. Important restrictions belong in formal documents."],
] as const;

const boundaries = [
  "No property is accepted automatically",
  "No purchase or particular price is guaranteed",
  "No charitable receipt or tax result is promised",
  "No mortgage, lien, tax arrears or liability is automatically assumed",
  "No permanent land-use promise exists unless it is in a formal legal agreement",
] as const;

export function LandStewardshipCharter() {
  return (
    <section className={styles.charterSection} aria-labelledby="charter-title">
      <div className={styles.charterRings} aria-hidden="true">
        <i /><i /><i /><i /><i />
      </div>
      <div className={`${styles.sectionWrap} ${styles.charterGrid}`}>
        <div className={styles.charterStatement}>
          <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>The stewardship charter</p>
          <h2 id="charter-title">Plain intentions.<br />Plain limits.</h2>
          <blockquote>
            A meaningful land legacy is not created by a beautiful sentence. It
            is created by a workable plan, honest due diligence and care that can
            endure after ownership changes.
          </blockquote>
          <p>
            Little Tree Farm is developing this program from practical experience
            with trees, seed, nursery production, planting and restoration work.
            Land transfer itself requires the right legal, tax and property expertise.
          </p>
        </div>

        <div className={styles.commitmentList}>
          {commitments.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.boundaryNote} aria-label="Important program limits">
          <div className={styles.boundaryHeader}>
            <span>Before any conversation</span>
            <strong>What this page does not promise</strong>
          </div>
          <ul>
            {boundaries.map((boundary) => <li key={boundary}>{boundary}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}

const propertyTypes = [
  "Forested land or woodlot",
  "Mixed woodland and open ground",
  "Abandoned farmland or old pasture",
  "Wetland or riparian property",
  "Rural acreage with restoration potential",
  "Ground that may suit seed, orchard or nursery use",
] as const;

const reviewFactors = [
  ["Place", "Province, municipality, surrounding land uses and distance from practical stewardship capacity."],
  ["Ground", "Acreage, soil, drainage, slope, existing forest, habitat and signs of contamination or disturbance."],
  ["Access", "Legal and physical access, roads, seasonal conditions, boundaries and nearby services."],
  ["Title", "Ownership, survey information, easements, mortgages, liens, taxes, zoning and other legal interests."],
  ["Structures", "Buildings, wells, septic systems, utilities, safety concerns, insurance and maintenance burden."],
  ["Future fit", "Landowner wishes, realistic uses, operating costs and whether care can be sustained over decades."],
] as const;

export function LandReviewDossier() {
  return (
    <section className={styles.dossierSection} id="review">
      <div className={styles.sectionWrap}>
        <div className={styles.dossierHeading}>
          <div>
            <p className={styles.eyebrow}>Property review dossier</p>
            <h2>Acreage starts the description. It does not finish the assessment.</h2>
          </div>
          <p>
            These are the questions behind a responsible first review. They are
            not a scorecard, a valuation or an indication that a property will be accepted.
          </p>
        </div>

        <div className={styles.dossierDesk}>
          <article className={styles.propertyFile}>
            <div className={styles.fileTabs} aria-hidden="true">
              <span>Land</span><span>Habitat</span><span>Future</span>
            </div>
            <div className={styles.fileHeading}>
              <span>Initial fit · field sheet</span>
              <strong>Property types worth discussing</strong>
            </div>
            <ul className={styles.propertyTypeList}>
              {propertyTypes.map((type, index) => (
                <li key={type}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {type}
                </li>
              ))}
            </ul>
            <div className={styles.fileStamp} aria-hidden="true">
              <span>Conversation</span>
              <strong>before conclusion</strong>
            </div>
          </article>

          <article className={styles.reviewLedger}>
            <div className={styles.ledgerHeading}>
              <span>Review lens</span>
              <p>Six groups of facts that can materially change the options.</p>
            </div>
            <dl>
              {reviewFactors.map(([term, definition], index) => (
                <div key={term}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <dt>{term}</dt>
                  <dd>{definition}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>

        <div className={styles.dossierFootnote}>
          <strong>You do not need every answer to begin.</strong>
          <p>
            Province, approximate acreage, the current condition and what you hope
            happens next are enough for an initial inquiry. Exact addresses, title
            records and financial documents can wait until there is a reason to review them securely.
          </p>
        </div>
      </div>
    </section>
  );
}

const horizons = [
  ["Today", "Listen", "Record what matters to the owner and what exists on the ground."],
  ["10 years", "Establish", "Protect sensitive areas, begin restoration or strengthen useful tree systems."],
  ["50 years", "Mature", "A woodland, orchard or habitat network begins to express the original intent."],
  ["100 years", "Endure", "The property’s value is measured in living systems and choices that outlast one owner."],
] as const;

export function GenerationalHorizon() {
  return (
    <section className={styles.horizonSection} aria-labelledby="horizon-title">
      <div className={styles.sectionWrap}>
        <div className={styles.horizonIntro}>
          <p className={styles.eyebrow}>The generational horizon</p>
          <h2 id="horizon-title">Think beyond the transfer date.</h2>
          <p>
            A deed changes ownership in a moment. A living landscape changes over
            decades. Stewardship planning asks whether today’s decision can still
            make ecological and practical sense long after the paperwork is complete.
          </p>
          <Link href="/land/creating-a-forest-legacy">
            Experience the 100-year forest story <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ol className={styles.horizonTimeline}>
          {horizons.map(([year, verb, copy], index) => (
            <li key={year}>
              <div className={styles.horizonTree} data-growth={index + 1} aria-hidden="true">
                <span /><i /><i />
              </div>
              <span>{year}</span>
              <strong>{verb}</strong>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const processSteps = [
  { owner: "You", title: "Share the outline", copy: "Tell us the province, approximate acreage, present condition and the future you care about." },
  { owner: "Little Tree Farm", title: "Make an initial review", copy: "We consider broad fit, practical distance, known constraints and whether a conversation is useful." },
  { owner: "Together", title: "Talk through the land", copy: "We ask questions, listen to its history and clarify what you do—and do not—want." },
  { owner: "Together", title: "Compare realistic paths", copy: "That may include more planning, donation, future gift, sale, another recipient or no transfer." },
  { owner: "Your advisers", title: "Get independent advice", copy: "Your own lawyer, accountant, appraiser or other adviser should examine consequences and documents." },
  { owner: "All parties", title: "Complete due diligence", copy: "Only a viable path moves to title review, inspections, formal terms and properly executed agreements." },
] as const;

export function StewardshipTrail() {
  return (
    <section className={styles.trailSection} id="process">
      <div className={styles.sectionWrap}>
        <div className={styles.trailHeading}>
          <div>
            <p className={styles.eyebrow}>How the conversation moves</p>
            <h2>No leap from inquiry to transfer.</h2>
          </div>
          <p>
            A responsible process narrows uncertainty in stages. You remain in
            control of whether to continue, and formal advice comes before formal commitment.
          </p>
        </div>

        <ol className={styles.trailMap}>
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.trailNumber}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <span className={styles.trailOwner}>{step.owner}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.trailExit}>
          <span aria-hidden="true">↳</span>
          <p>
            <strong>A good outcome may be a different path.</strong> An initial
            review is valuable even when it shows that selling conventionally,
            planning within the family or speaking with another organization is more appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}
