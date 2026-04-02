import Link from "next/link";
import styles from "./Footer.module.css";

const learnLinks = [
  { href: "/the-investment", label: "The Investment" },
  { href: "/planting-system", label: "Planting System" },
  { href: "/returns-calculator", label: "Returns Calculator" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

const startLinks = [
  { href: "/guide", label: "Download Free Guide" },
  { href: "/growers", label: "Join Growers List" },
  { href: "/seedlings", label: "Request Seedlings" },
  { href: "/your-land", label: "Check Your Land" },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.container}>
        {/* Top section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <svg
                className={styles.logoIcon}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M16 2C16 2 6 10 6 18C6 23.5 10.5 28 16 28C21.5 28 26 23.5 26 18C26 10 16 2 16 2Z"
                  fill="currentColor"
                  opacity="0.2"
                />
                <path
                  d="M16 6C16 6 10 12 10 17C10 20.3 12.7 23 16 23C19.3 23 22 20.3 22 17C22 12 16 6 16 6Z"
                  fill="currentColor"
                  opacity="0.4"
                />
                <path
                  d="M16 28V12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className={styles.logoTitle}>Little Tree Farm</span>
            </Link>
            <p className={styles.tagline}>
              Helping landowners grow generational wealth, one acre at a time.
            </p>
            <a
              href="https://littletreefarmns.com"
              className={styles.storeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Nursery Store →
            </a>
          </div>

          <div className={styles.links}>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Learn</h4>
              <ul>
                {learnLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Get Started</h4>
              <ul>
                {startLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Connect</h4>
              <ul>
                <li>
                  <a
                    href="mailto:info@littletreefarmns.com"
                    className={styles.link}
                  >
                    info@littletreefarmns.com
                  </a>
                </li>
                <li>
                  <span className={styles.address}>
                    175 Sarty Road, Wentzell Lake
                    <br />
                    Nova Scotia, B0R 1E0
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Little Tree Farm. All Rights Reserved.
          </p>
          <p className={styles.disclaimer}>
            Timber investment involves risk. Returns are not guaranteed and
            depend on site conditions, management, and market timing.
          </p>
        </div>
      </div>
    </footer>
  );
}
