import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/lib/config/business";

const learnLinks = [
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/guide", label: "Planting Guide" },
  { href: "/calculator", label: "Returns Calculator" },
];

const startLinks = [
  { href: "/guide", label: "Download Free Guide" },
  { href: "/seedlings", label: "Order Seedlings" },
  { href: "/nova-scotia", label: "Nova Scotia" },
  { href: "/ontario", label: "Ontario" },
];

export function Footer() {
  return (
    <footer
      className="relative bg-forest-dark pattern-footer text-cream pt-28 pb-14 overflow-hidden rounded-tl-3xl rounded-tr-3xl"
      id="site-footer"
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.045) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">

        {/* ── Top: brand + links ── */}
        <div className="grid grid-cols-[1.1fr_2fr] gap-20 pb-14 border-b border-white/[0.08] max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* Brand col */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex flex-col items-start gap-4 text-cream transition-opacity hover:opacity-80"
              aria-label="Home"
            >
              <div className="w-32 h-32 shrink-0 relative">
                <Image
                  src="/little-tree-farms-logo-dark-theme.png"
                  alt="Little Tree Farm Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 128px"
                />
              </div>
              <span className="font-display text-2xl font-bold">{businessInfo.name}</span>
            </Link>
            <p className="text-intro text-white/90 max-w-[26ch] font-medium">
              {businessInfo.tagline}
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <p className="text-white/50">
                {businessInfo.address.street}<br/>{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.postalCode}
              </p>
              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="text-white/85 transition-colors hover:text-cream"
              >
                {businessInfo.contact.email}
              </a>
            </div>
            <a
              href={businessInfo.mainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-ui text-sm font-bold text-gold transition-colors hover:text-gold-light"
            >
              Visit Our Nursery Store →
            </a>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream/80 hover:bg-gold hover:text-forest-dark transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream/80 hover:bg-gold hover:text-forest-dark transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={businessInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream/80 hover:bg-gold hover:text-forest-dark transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link cols */}
          <div className="grid grid-cols-3 gap-10 max-[900px]:grid-cols-2 max-[900px]:gap-8 max-[600px]:grid-cols-1">
            {[
              { title: "Learn", links: learnLinks },
              { title: "Get Started", links: startLinks },
              {
                title: "Hours & Info",
                links: [
                  { href: "/faq", label: "Frequently Asked Questions" },
                  { href: "/contact", label: "Contact Us" },
                  { href: "/nova-scotia", label: "Nova Scotia Customers" },
                  { href: "/ontario", label: "Ontario Customers" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="kicker-label !text-[0.75rem] text-gold mb-6">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="block font-display text-xl text-white/85 py-1 transition-colors hover:text-cream font-medium"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Newsletter strip ── */}
        <div className="py-10 border-b border-white/[0.06] max-[640px]:py-7">
          <div className="flex items-center justify-between gap-10 max-[640px]:flex-col max-[640px]:text-center max-[640px]:gap-6">
            <div>
              <p className="font-display text-xl font-bold text-cream mb-1">Want timber market updates?</p>
              <p className="text-white/85 font-medium">Join the growers list. No spam, ever.</p>
            </div>
            <Link
              href="/guide"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 font-ui text-xs font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5"
            >
              Download Free Guide →
            </Link>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-wrap justify-between items-center gap-6 pt-8 max-[600px]:flex-col max-[600px]:text-center">
          <p className="font-ui text-xs text-white/35">
            © {new Date().getFullYear()} {businessInfo.name}. All Rights Reserved.
          </p>
          <p className="font-ui text-xs text-white/22 max-w-[50ch] text-right max-[600px]:text-center">
            Timber investment involves risk. Returns are not guaranteed and depend on site conditions, management, and market timing.
          </p>
        </div>
      </div>
    </footer>
  );
}
