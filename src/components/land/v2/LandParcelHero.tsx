import Image from "next/image";
import Link from "next/link";
import styles from "./LandHubV2.module.css";

export function LandParcelHero() {
  return (
    <header className={styles.hero} id="top">
      <div className={styles.heroTopography} aria-hidden="true" />
      <div className={styles.heroSheet}>
        <div className={styles.heroCopy}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Land Stewardship</span>
          </nav>

          <div className={styles.heroEdition}>
            <span>Land Stewardship Program</span>
            <span>Canada · Field Note 01</span>
          </div>

          <h1>Give Your Land a Lasting Purpose</h1>
          <p className={styles.heroLead}>
            If you own rural land, woodland or inherited property you no longer
            want, its next chapter does not have to be an afterthought. Explore
            responsible transfer, restoration and long-term stewardship options
            with Little Tree Farm.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#conversation">
              Start a land conversation
              <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.textButton} href="#pathfinder">
              Find your next step
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className={styles.heroFinePrint}>
            An early conversation creates no obligation. Every property and
            every possible arrangement is reviewed individually.
          </p>
        </div>

        <div className={styles.parcelStage} aria-label="A rural property viewed as a living landscape">
          <div className={styles.parcelCoordinates} aria-hidden="true">
            <span>44.4699° N</span>
            <span>64.6304° W</span>
          </div>
          <div className={styles.parcelImageWrap}>
            <Image
              className={styles.parcelImage}
              src="/main-landing-page/big-farmland.jpg"
              alt="Open rural land bordered by forest under a broad Canadian sky"
              fill
              sizes="(max-width: 900px) 92vw, 48vw"
              preload
            />
            <div className={styles.parcelShade} aria-hidden="true" />
            <svg
              className={styles.contourLines}
              viewBox="0 0 640 720"
              fill="none"
              aria-hidden="true"
            >
              <path d="M-40 168C94 89 186 236 322 151C457 67 535 126 690 29" />
              <path d="M-32 211C94 138 196 275 334 194C473 111 562 170 682 91" />
              <path d="M-45 259C88 182 191 324 347 236C481 160 573 218 691 137" />
              <path d="M-40 313C89 239 207 365 358 285C505 207 582 265 699 191" />
              <path d="M-52 506C74 404 210 533 334 454C482 359 575 421 700 339" />
              <path d="M-34 558C83 467 205 584 349 503C479 430 582 475 691 401" />
              <path d="M-31 612C91 523 218 632 358 559C500 484 574 534 692 455" />
            </svg>
          </div>

          <div className={styles.parcelStamp} aria-hidden="true">
            <span>Future use</span>
            <strong>Not yet written</strong>
          </div>
          <div className={styles.parcelCaption}>
            <span>01</span>
            <p>
              A parcel is more than acreage. It is habitat, memory, responsibility
              and possibility held in one boundary.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.trustRail} aria-label="Program principles">
        <div>
          <span className={styles.trustNumber}>01</span>
          <p><strong>Listen first</strong><br />Begin with the future you hope for.</p>
        </div>
        <div>
          <span className={styles.trustNumber}>02</span>
          <p><strong>Review honestly</strong><br />Not every property or path will fit.</p>
        </div>
        <div>
          <span className={styles.trustNumber}>03</span>
          <p><strong>Formalize carefully</strong><br />Independent advice comes before transfer.</p>
        </div>
      </div>
    </header>
  );
}
