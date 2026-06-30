"use client";

import { useState } from "react";

type CopyableDomainProps = {
  domain: string;
  /** "row" = full-width list item (Verified Entry Points); "chip" = pill (Approved Domains). */
  variant?: "row" | "chip";
};

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
);

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function CopyableDomain({ domain, variant = "row" }: CopyableDomainProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://${domain}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (e.g. blocked permissions) — fail silently.
    }
  };

  const copyButton = (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `Copied ${domain}` : `Copy ${domain}`}
      title={copied ? "Copied!" : "Copy"}
      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-forest/55 transition-colors hover:bg-forest/10 hover:text-forest"
    >
      {copied ? <span className="text-forest">{<CheckIcon />}</span> : <CopyIcon />}
    </button>
  );

  if (variant === "chip") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-parchment bg-cream py-1.5 pl-4 pr-1.5 text-sm text-forest">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-dark"
        >
          {domain}
          <span className="text-gold-dark/70">{<ExternalIcon />}</span>
        </a>
        {copyButton}
      </span>
    );
  }

  return (
    <div className="flex items-center justify-between gap-2 rounded-xl bg-white/80 px-4 py-2.5">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-w-0 items-center gap-2 transition-colors hover:text-gold-dark"
      >
        <span className="truncate">{domain}</span>
        <span className="shrink-0 text-gold-dark/70">{<ExternalIcon />}</span>
      </a>
      {copyButton}
    </div>
  );
}
