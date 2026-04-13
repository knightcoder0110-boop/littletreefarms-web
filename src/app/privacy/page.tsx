import type { Metadata } from "next";
import { businessInfo } from "@/lib/config/business";

export const metadata: Metadata = {
  title: `Privacy Policy | ${businessInfo.name}`,
  description:
    "Learn how Little Tree Farm handles contact form submissions, guide requests, newsletter signups, and Brevo-powered email communications.",
  alternates: {
    canonical: `${businessInfo.url}/privacy`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    title: "What We Collect",
    body: "When you request a guide, calculator report, or contact us through this website, we may collect your name, email address, phone number, province or state, message details, and the form you submitted.",
  },
  {
    title: "How We Use It",
    body: "We use your information to respond to your inquiry, deliver requested resources, send follow-up information related to your request, and manage newsletter subscriptions if you explicitly opt in.",
  },
  {
    title: "Email Platform",
    body: "Lead and email records submitted through this site are processed through Brevo, our email and CRM platform, so we can manage contact requests and automated follow-up emails securely.",
  },
  {
    title: "Your Choices",
    body: "You can unsubscribe from marketing emails at any time using the unsubscribe link in those emails, or by contacting us directly and asking to be removed from our list.",
  },
  {
    title: "Contact",
    body: `If you have questions about this policy or want your information removed, email ${businessInfo.contact.email} or call ${businessInfo.contact.phoneDisplay}.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-20">
      <div className="mx-auto max-w-[900px] px-6">
        <span className="kicker-label mb-4 inline-block text-gold-dark">Privacy</span>
        <h1 className="mb-4 text-forest">Privacy Policy</h1>
        <p className="max-w-[65ch] text-lg text-ink-light">
          This page explains how {businessInfo.name} handles information submitted through the website.
        </p>

        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h2 className="mb-3 text-2xl text-forest">{section.title}</h2>
              <p className="text-base leading-8 text-ink-light">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}