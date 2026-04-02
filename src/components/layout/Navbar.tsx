"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { businessInfo } from "@/lib/config/business";

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
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 rounded-b-3xl ${
          isScrolled ? "py-3 shadow-md" : "py-5"
        }`}
      >
        {/* Placed behind the header content so backdrop filter doesn't break fixed children scope for mobile nav (though we separated it now, still good practice) */}
        <div 
          className={`absolute inset-0 z-[-1] rounded-b-3xl transition-all duration-300 ${
            isScrolled ? "bg-cream/98 backdrop-blur-xl" : "bg-transparent"
          }`} 
        />

        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo - Rectangular format */}
          <Link
            href="/"
            className="flex items-center z-[1001] transition-opacity hover:opacity-80"
            aria-label="Home"
          >
            <div className="w-36 h-12 shrink-0 relative">
              <Image
                src={isScrolled ? "/little-tree-farms-logo.png" : "/little-tree-farms-logo-dark-theme.png"}
                alt="Little Tree Farm Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 144px, 144px"
              />
            </div>
          </Link>

          {/* Desktop nav (Hidden on mobile) */}
          <nav className="flex items-center gap-8 max-[900px]:hidden">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-ui text-[0.9rem] font-bold px-3 py-2 rounded-md transition-colors duration-150 tracking-[0.02em] ${
                      isScrolled ? "text-ink hover:text-forest" : "text-white/95 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/guide"
              className="font-ui text-xs font-bold tracking-[0.08em] uppercase px-6 py-3.5 rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5 whitespace-nowrap shadow-sm"
            >
              Free Guide
            </Link>
          </nav>

          {/* Hamburger (Mobile) */}
          <button
            className="hidden max-[900px]:flex flex-col justify-center gap-[6px] w-10 h-10 z-[1001] p-1"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <span className={`block w-full h-[2px] rounded-full transition-all duration-300 origin-center ${isScrolled ? "bg-forest" : "bg-cream"} ${isMobileOpen ? "translate-y-[8px] rotate-45 !bg-cream" : ""}`} />
            <span className={`block w-full h-[2px] rounded-full transition-all duration-300 ${isScrolled ? "bg-forest" : "bg-cream"} ${isMobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-full h-[2px] rounded-full transition-all duration-300 origin-center ${isScrolled ? "bg-forest" : "bg-cream"} ${isMobileOpen ? "-translate-y-[8px] -rotate-45 !bg-cream" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer & Backdrop */}
      <div className="hidden max-[900px]:block">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1002] transition-opacity duration-500 ${
            isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Side Sheet */}
        <nav
          className={`fixed inset-y-0 right-0 w-[85vw] max-w-[420px] bg-cream z-[1003] shadow-2xl rounded-l-3xl p-8 flex flex-col justify-start pt-6 transition-transform duration-500 cubic-bezier(0.16,1,0.3,1) ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 text-ink hover:text-forest transition-colors rounded-full hover:bg-black/5"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-4 w-full">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-black/5 pb-3">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-2xl text-ink font-semibold transition-colors hover:text-forest block w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/guide"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex items-center justify-center w-full font-ui text-[0.85rem] font-bold tracking-[0.1em] uppercase px-6 py-4 rounded-xl bg-forest text-cream border-2 border-forest transition-all duration-300 hover:bg-forest-light hover:border-forest-light"
            >
              Download Free Guide
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
