"use client";

import { useState } from "react";
import Link from "next/link";
import { businessInfo } from "@/lib/config/business";
import { submitLead } from "@/lib/leads/client";
import {
  isValidLeadPhoneInput,
  leadPhoneNote,
  leadPhonePlaceholder,
} from "@/lib/leads/phone";
import { useToast } from "@/components/ui/ToastProvider";

/**
 * Contact Page - Local SEO & NAP Consistency
 * Refactored to match design system
 */

export default function ContactPageClient() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidLeadPhoneInput(formState.phone)) {
      const message = "Enter a valid 10-digit phone number so we can respond properly.";
      setPhoneError(message);
      setSubmitError(message);
      toast({
        variant: "error",
        title: "Phone number required",
        description: message,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setPhoneError("");

    try {
      const email = formState.email;

      await submitLead({
        source: "contact-form",
        fullName: formState.name,
        email,
        phone: formState.phone,
        subject: formState.subject,
        message: formState.message,
        requestedAsset: "contact-response",
        newsletterConsent: formState.newsletter,
      });

      setSubmittedEmail(email);
      setIsSubmitted(true);
      toast({
        variant: "success",
        title: "Message received",
        description: `We recorded your inquiry and will follow up at ${email}.`,
      });
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "We could not process your request right now.";
      setSubmitError(message);
      toast({
        variant: "error",
        title: "Message could not be sent",
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-forest-dark pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-cream/60 text-sm">
              <li>
                <Link href="/" className="hover:text-cream transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-cream">Contact</li>
            </ol>
          </nav>

          <div className="max-w-[800px]">
            <span className="kicker-label text-gold mb-4 inline-block">Get in Touch</span>
            <h1 className="text-cream mb-6">
              Contact <em className="text-gold italic">Us</em>
            </h1>
            <p className="text-intro text-cream/80 max-w-[55ch]">
              We&apos;re here to help with your timber investment questions. Reach out by phone, email, or visit our nursery.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-black/5 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-forest text-xl mb-2">Call Us</h3>
              <p className="text-ink-light text-sm mb-4">Speak directly with our team</p>
              <a 
                href={`tel:${businessInfo.contact.phone}`}
                className="text-gold-dark font-medium text-lg hover:text-gold transition-colors"
              >
                {businessInfo.contact.phoneDisplay}
              </a>
              <p className="text-ink-muted text-xs mt-2">Mon-Fri 9AM-5PM AST</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-black/5 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-forest text-xl mb-2">Email Us</h3>
              <p className="text-ink-light text-sm mb-4">We typically respond within 24 hours</p>
              <a 
                href={`mailto:${businessInfo.contact.email}`}
                className="text-gold-dark font-medium text-lg hover:text-gold transition-colors"
              >
                {businessInfo.contact.email}
              </a>
              <p className="text-ink-muted text-xs mt-2">For detailed inquiries</p>
            </div>

            {/* Visit */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-black/5 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-forest text-xl mb-2">Visit Us</h3>
              <p className="text-ink-light text-sm mb-4">By appointment for seedling pickup</p>
              <p className="text-forest font-medium">
                {businessInfo.address.city}, {businessInfo.address.state}
              </p>
              <p className="text-ink-muted text-xs mt-2">{businessInfo.address.street}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mx-auto max-w-[720px]">
            <div className="rounded-[32px] border border-parchment bg-cream p-8 shadow-[0_20px_60px_rgba(33,50,32,0.08)] sm:p-10">
              <span className="kicker-label text-gold-dark mb-4 inline-block">Send a Message</span>
              <h2 className="text-forest mb-6">
                Get in <em className="text-gold-dark italic">Touch</em>
              </h2>

              {isSubmitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-forest mb-2">Message Received</h3>
                  <p className="text-ink-light">
                    Thanks. We have your message and will follow up at {submittedEmail || businessInfo.contact.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-parchment bg-white text-forest placeholder:text-ink-muted/45 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-parchment bg-white text-forest placeholder:text-ink-muted/45 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => {
                        setFormState({...formState, phone: e.target.value});
                        if (phoneError) {
                          setPhoneError("");
                          setSubmitError("");
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-forest placeholder:text-ink-muted/45 focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                        phoneError ? "border-red-300" : "border-parchment"
                      }`}
                      placeholder={leadPhonePlaceholder}
                      autoComplete="tel"
                      required
                    />
                    <p className={`mt-2 text-xs ${phoneError ? "text-red-700" : "text-ink-muted"}`}>
                      {phoneError || leadPhoneNote}
                    </p>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-forest mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-parchment bg-white text-forest focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      required
                    >
                      <option value="">Select a topic...</option>
                      <option value="seedlings">Seedling Inquiry</option>
                      <option value="investment">Investment Questions</option>
                      <option value="site-selection">Site Selection Help</option>
                      <option value="shipping">Shipping Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-parchment bg-white text-forest placeholder:text-ink-muted/45 focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                      placeholder="Tell us about your land, your goals, or any questions you have..."
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formState.newsletter}
                      onChange={(e) => setFormState({...formState, newsletter: e.target.checked})}
                      className="mt-1 w-4 h-4 rounded border-parchment text-gold focus:ring-gold"
                    />
                    <label htmlFor="newsletter" className="text-sm text-ink-light">
                      Subscribe to our newsletter for seasonal tips, market updates, and planting reminders.
                    </label>
                  </div>

                  {submitError ? (
                    <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>

                  <p className="text-center text-xs text-ink-muted">
                    Your message goes straight into our lead pipeline and we&apos;ll follow up by email or phone.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-forest-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="kicker-label text-gold mb-4 inline-block">Find Us</span>
            <h2 className="text-cream">
              Our <em className="text-gold italic">Nursery</em>
            </h2>
          </div>

          <div className="aspect-video rounded-2xl bg-forest-light/30 border border-cream/10 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.4996230543584!2d-64.63293992309549!3d44.46987497107524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b576327436e1aab%3A0xd48284e687c1d457!2sLittle%20Tree%20Farm%2C%20Nut%20Trees%2C%20Fruit%20Trees%20and%20Plant%20Nursery!5e1!3m2!1sen!2sin!4v1775128330986!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Little Tree Farm Location"
              className="w-full h-full"
            />
          </div>
          
          <div className="text-center mt-6">
            <a
              href={businessInfo.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-ui text-sm font-bold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <span className="kicker-label text-gold-dark mb-4 inline-block">Need Answers?</span>
          <h2 className="text-forest mb-4">
            Still Have <em className="text-gold-dark italic">Questions?</em>
          </h2>
          <p className="text-ink-light mb-8 max-w-[50ch] mx-auto">
            Visit our comprehensive FAQ page for answers to common questions about black walnut timber investment.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark"
          >
            View FAQ
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
