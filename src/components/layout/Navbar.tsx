"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/the-investment", label: "The Investment" },
  { href: "/planting-system", label: "Planting System" },
  { href: "/returns-calculator", label: "Calculator" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      id="site-header"
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Home">
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
            <path
              d="M13 18L16 14L19 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>Little Tree Farm</span>
            <span className={styles.logoSub}>Timber Investment</span>
          </div>
        </Link>

        <nav
          className={`${styles.nav} ${isMobileOpen ? styles.navOpen : ""}`}
          id="main-nav"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/guide"
            className={`btn btn--gold btn--sm ${styles.navCta}`}
            onClick={() => setIsMobileOpen(false)}
          >
            Download Free Guide
          </Link>
        </nav>

        <button
          className={`${styles.burger} ${isMobileOpen ? styles.burgerOpen : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          aria-controls="main-nav"
          id="nav-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
