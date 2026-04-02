"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    const h = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 rounded-bl-3xl rounded-br-3xl ${
        isScrolled
          ? "py-3 mx-4 bg-cream/95 backdrop-blur-xl shadow-md"
          : "py-5 mx-0 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-forest z-[1001] transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          <svg className="w-9 h-9 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 2C16 2 6 10 6 18C6 23.5 10.5 28 16 28C21.5 28 26 23.5 26 18C26 10 16 2 16 2Z" fill="currentColor" opacity="0.2"/>
            <path d="M16 6C16 6 10 12 10 17C10 20.3 12.7 23 16 23C19.3 23 22 20.3 22 17C22 12 16 6 16 6Z" fill="currentColor" opacity="0.4"/>
            <path d="M16 28V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M13 18L16 14L19 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[1.15rem] font-bold tracking-[-0.01em] text-forest">Little Tree Farm</span>
            <span className="font-ui text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-gold-dark">Timber Investment</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          id="main-nav"
          className={`flex items-center gap-8
            max-[900px]:fixed max-[900px]:inset-0 max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-10
            max-[900px]:bg-cream/98 max-[900px]:backdrop-blur-xl max-[900px]:transition-transform max-[900px]:duration-500
            ${isMobileOpen ? "max-[900px]:translate-x-0" : "max-[900px]:translate-x-full"}`}
        >
          <ul className="flex items-center gap-1 max-[900px]:flex-col max-[900px]:gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-ui text-[0.85rem] font-semibold text-ink px-3 py-2 rounded-md transition-colors duration-150 hover:text-forest tracking-[0.02em] max-[900px]:font-display max-[900px]:text-2xl max-[900px]:font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/guide"
            onClick={() => setIsMobileOpen(false)}
            className="font-ui text-xs font-bold tracking-[0.08em] uppercase px-5 py-2.5 rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5 whitespace-nowrap shadow-sm"
          >
            Free Guide
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="hidden max-[900px]:flex flex-col justify-center gap-[5px] w-8 h-8 z-[1001]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          aria-controls="main-nav"
          id="nav-toggle"
        >
          <span className={`block w-full h-0.5 bg-forest rounded-full transition-transform duration-300 origin-center ${isMobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-full h-0.5 bg-forest rounded-full transition-all duration-300 ${isMobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-full h-0.5 bg-forest rounded-full transition-transform duration-300 origin-center ${isMobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
    </header>
  );
}
