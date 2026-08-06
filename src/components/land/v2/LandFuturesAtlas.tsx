import Image from "next/image";
import styles from "./LandHubV2.module.css";

const zones = [
  {
    number: "01",
    name: "Existing woodland",
    condition: "Tree cover already present",
    future: "Patiently managed native woodland",
    contribution: "Canopy, habitat, seed, shade and long-term forest structure.",
    lens: "Species, age, health, access and ecological value",
    image: "/main-landing-page/black-walnut-tree.jpg",
  },
  {
    number: "02",
    name: "Wet ground & water",
    condition: "Wetland, stream or riparian edge",
    future: "Protected hydrology and habitat",
    contribution: "Water filtration, wildlife movement and seasonal resilience.",
    lens: "Drainage, buffers, regulation and existing disturbance",
    image: "/main-landing-page/big-farmland.jpg",
  },
  {
    number: "03",
    name: "Former field",
    condition: "Old pasture or abandoned farmland",
    future: "Restoration planting or natural succession",
    contribution: "New forest cover, pollinator habitat and connected corridors.",
    lens: "Soil, exposure, invasive plants and establishment cost",
    image: "/main-landing-page/tall-image.jpg",
  },
  {
    number: "04",
    name: "Orchard ground",
    condition: "Open land with suitable soil and access",
    future: "Native seed or long-lived nut orchard",
    contribution: "Locally adapted seed, food, genetics and future planting stock.",
    lens: "Climate, drainage, spacing and practical maintenance",
    image: "/main-landing-page/walnut-tree-with-fruits.jpg",
  },
  {
    number: "05",
    name: "Learning landscape",
    condition: "Accessible mixed-use rural ground",
    future: "Nursery, demonstration or education site",
    contribution: "Hands-on learning, propagation and community knowledge.",
    lens: "Access, safety, infrastructure and long-term operating fit",
    image: "/main-landing-page/collecting-black-walnut-ltf.jpg",
  },
] as const;

export function LandFuturesAtlas() {
  return (
    <section className={styles.atlasSection} id="futures">
      <div className={styles.sectionWrap}>
        <div className={styles.atlasHeading}>
          <div>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Possible futures</p>
            <h2>One property can hold more than one future.</h2>
          </div>
          <p>
            A woodlot, wet corner and former field may need completely different
            forms of care. Explore this conceptual transect to see how present
            conditions—not a predetermined promise—shape what may be possible.
          </p>
        </div>

        <div className={styles.atlasLegend} aria-hidden="true">
          <span>Property edge</span>
          <i />
          <span>Higher ground</span>
          <i />
          <span>Watercourse</span>
        </div>

        <div className={styles.atlasMap} role="list" aria-label="Possible land futures">
          {zones.map((zone) => (
            <article
              className={styles.atlasZone}
              key={zone.name}
              role="listitem"
              tabIndex={0}
            >
              <Image
                className={styles.atlasImage}
                src={zone.image}
                alt=""
                fill
                sizes="(max-width: 720px) 78vw, 22vw"
              />
              <div className={styles.atlasOverlay} aria-hidden="true" />
              <span className={styles.atlasNumber}>{zone.number}</span>
              <div className={styles.atlasZoneContent}>
                <p>{zone.condition}</p>
                <h3>{zone.name}</h3>
                <div className={styles.atlasReveal}>
                  <span>Possible role</span>
                  <strong>{zone.future}</strong>
                  <p>{zone.contribution}</p>
                  <dl>
                    <dt>Review lens</dt>
                    <dd>{zone.lens}</dd>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.atlasNote}>
          <span aria-hidden="true">✦</span>
          This atlas is illustrative. Soil, access, zoning, title, habitat,
          buildings, liabilities, cost and landowner wishes must all be reviewed
          before any future use is discussed.
        </p>
      </div>
    </section>
  );
}
