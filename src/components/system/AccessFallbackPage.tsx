import { businessInfo } from "@/lib/config/business";
import { CopyableDomain } from "@/components/system/CopyableDomain";

// This investment site is hosted at timber-investment.littletreefarmns.com.
// Recovery links use the absolute canonical URL so a visitor who lands on an
// unapproved host (e.g. an old invest.* link) is sent to the live site instead
// of looping back onto this page via a relative link.
const CANONICAL_DOMAIN = "timber-investment.littletreefarmns.com";
const CANONICAL_URL = `https://${CANONICAL_DOMAIN}`;

type AccessFallbackPageProps = {
  badge: string;
  title: string;
  description: string;
  hostLabel?: string;
  showApprovedDomains?: boolean;
};

const quickLinks = [
  {
    href: "/",
    title: "Investment Home",
    description: "Go back to the main timber investment landing page.",
  },
  {
    href: "/guide",
    title: "Free Planting Guide",
    description: "Get the guide that walks landowners through the first acre.",
  },
  {
    href: "/calculator",
    title: "Returns Calculator",
    description: "Estimate acreage, planting cost, and long-term timber upside.",
  },
  {
    href: "/contact",
    title: "Contact Our Team",
    description: "Reach Little Tree Farm directly for help or a manual redirect.",
  },
];

// Mirrors the host allow-list in src/proxy.ts (public domains only).
const approvedDomains = [
  CANONICAL_DOMAIN,
  "investment.littletreefarmns.com",
  businessInfo.mainDomain,
  `www.${businessInfo.mainDomain}`,
];

export function AccessFallbackPage({
  badge,
  title,
  description,
  hostLabel,
  showApprovedDomains = false,
}: AccessFallbackPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cream">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(200,169,110,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(26,58,42,0.12), transparent 32%)",
        }}
      />
      <div className="pattern-topo absolute inset-0 opacity-60" />
      <div className="absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-gold/12 blur-3xl" />
      <div className="absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-forest/10 blur-3xl" />

      <section className="relative z-10 px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-gold/30 bg-white/70 px-4 py-2 font-ui text-xs font-bold uppercase tracking-[0.16em] text-gold-dark backdrop-blur-sm">
              {badge}
            </span>

            <h1 className="mt-6 max-w-[11ch] text-forest">
              {title.split(" ").slice(0, 4).join(" ")}
              <span className="text-gold-dark italic"> {title.split(" ").slice(4).join(" ")}</span>
            </h1>

            <p className="mt-6 max-w-[58ch] text-ink-light">
              {description}
            </p>

            {hostLabel ? (
              <div className="mt-6 inline-flex max-w-full items-center gap-3 rounded-2xl border border-walnut/10 bg-white/75 px-4 py-3 text-sm text-ink-light shadow-sm backdrop-blur-sm">
                <span className="font-ui font-bold uppercase tracking-[0.08em] text-forest">Requested Host</span>
                <span className="truncate text-walnut">{hostLabel}</span>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`${CANONICAL_URL}/`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gold bg-gold px-7 py-4 font-ui text-sm font-bold uppercase tracking-[0.08em] text-forest-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-dark hover:border-gold-dark hover:shadow-lg"
              >
                Return Home
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={`${CANONICAL_URL}/contact`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-forest/15 bg-white/75 px-7 py-4 font-ui text-sm font-bold uppercase tracking-[0.08em] text-forest transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:bg-white hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[28px] border border-parchment bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-parchment pb-5">
                <div>
                  <p className="font-ui text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
                    Recommended Next Steps
                  </p>
                  <h2 className="mt-2 text-forest text-3xl">Get Back on Track</h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-dark text-gold shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L20 8V16L12 21L4 16V8L12 3Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={`${CANONICAL_URL}${link.href}`}
                    className="group rounded-2xl border border-parchment bg-cream/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl text-forest transition-colors duration-300 group-hover:text-gold-dark">
                        {link.title}
                      </h3>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold-dark">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm text-ink-light">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[24px] border border-parchment bg-forest-dark p-6 text-cream shadow-lg">
                <p className="font-ui text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  Direct Help
                </p>
                <p className="mt-4 text-lg text-cream/80">
                  If this link came from an old bookmark, an outdated ad, or an unapproved domain, our team can point you to the right page.
                </p>
                <div className="mt-5 space-y-2 text-sm text-cream/75">
                  <p>Email: {businessInfo.contact.email}</p>
                  <p>Phone: {businessInfo.contact.phoneDisplay}</p>
                </div>
              </div>

              <div className="rounded-[24px] border border-gold/20 bg-gold/10 p-6 shadow-lg">
                <p className="font-ui text-xs font-bold uppercase tracking-[0.14em] text-gold-dark">
                  Verified Entry Points
                </p>
                <div className="mt-4 space-y-3 text-sm text-forest">
                  <CopyableDomain domain={CANONICAL_DOMAIN} variant="row" />
                  <CopyableDomain domain={businessInfo.mainDomain} variant="row" />
                </div>
              </div>
            </div>

            {showApprovedDomains ? (
              <div className="rounded-[24px] border border-parchment bg-white/75 p-6 shadow-lg backdrop-blur-sm">
                <p className="font-ui text-xs font-bold uppercase tracking-[0.14em] text-forest">
                  Approved Domains
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {approvedDomains.map((domain) => (
                    <CopyableDomain key={domain} domain={domain} variant="chip" />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}