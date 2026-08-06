import styles from "./LandHubV2.module.css";

const chapters = [
  ["pathfinder", "Your situation"],
  ["futures", "Possible futures"],
  ["review", "What we consider"],
  ["process", "How it works"],
  ["guides", "Guides"],
  ["conversation", "Conversation"],
] as const;

export function LandHubNavigator() {
  return (
    <nav className={styles.chapterNav} aria-label="On this page">
      <div className={styles.chapterNavInner}>
        <span className={styles.chapterLabel}>Explore the atlas</span>
        <div className={styles.chapterLinks}>
          {chapters.map(([id, label], index) => (
            <a href={`#${id}`} key={id}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
