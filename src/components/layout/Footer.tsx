import Link from "next/link";

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
            <Link href="/" className="flex items-center gap-3 text-cream transition-opacity hover:opacity-80">
              <svg className="w-9 h-9 shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 2C16 2 6 10 6 18C6 23.5 10.5 28 16 28C21.5 28 26 23.5 26 18C26 10 16 2 16 2Z" fill="currentColor" opacity="0.2"/>
                <path d="M16 6C16 6 10 12 10 17C10 20.3 12.7 23 16 23C19.3 23 22 20.3 22 17C22 12 16 6 16 6Z" fill="currentColor" opacity="0.4"/>
                <path d="M16 28V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="font-display text-2xl font-bold">Little Tree Farm</span>
            </Link>
            <p className="text-intro text-white/90 max-w-[26ch] font-medium">
              Helping landowners grow generational wealth, one acre at a time.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <p className="text-white/50">
                175 Sarty Road, Wentzell Lake<br/>Nova Scotia, B0R 1E0
              </p>
              <a
                href="mailto:info@littletreefarmns.com"
                className="text-white/85 transition-colors hover:text-cream"
              >
                info@littletreefarmns.com
              </a>
            </div>
            <a
              href="https://littletreefarmns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-ui text-sm font-bold text-gold transition-colors hover:text-gold-light"
            >
              Visit Our Nursery Store →
            </a>
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
                  { href: "/blog", label: "Timber Investment Blog" },
                  { href: "/growers", label: "Growers Community" },
                  { href: "/contact", label: "Contact Us" },
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
              href="/growers"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 font-ui text-xs font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark hover:-translate-y-0.5"
            >
              Join Growers List →
            </Link>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-wrap justify-between items-center gap-6 pt-8 max-[600px]:flex-col max-[600px]:text-center">
          <p className="font-ui text-xs text-white/35">
            © {new Date().getFullYear()} Little Tree Farm. All Rights Reserved.
          </p>
          <p className="font-ui text-xs text-white/22 max-w-[50ch] text-right max-[600px]:text-center">
            Timber investment involves risk. Returns are not guaranteed and depend on site conditions, management, and market timing.
          </p>
        </div>
      </div>
    </footer>
  );
}
