"use client";

import { useState } from "react";
import Link from "next/link";
import { businessInfo } from "@/lib/config/business";

/**
 * Contact Page - Local SEO & NAP Consistency
 * Refactored to match design system
 */

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Brevo integration point
    console.log("Form submitted:", formState);
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hours & Info */}
            <div>
              <span className="kicker-label text-gold-dark mb-4 inline-block">Information</span>
              <h2 className="text-forest mb-8">
                Hours & <em className="text-gold-dark italic">Location</em>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-parchment">
                  <span className="text-forest font-medium">Monday - Friday</span>
                  <span className="text-ink-light">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-parchment">
                  <span className="text-forest font-medium">Saturday</span>
                  <span className="text-ink-light">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-parchment">
                  <span className="text-forest font-medium">Sunday</span>
                  <span className="text-ink-light">Closed</span>
                </div>
              </div>

              <div className="bg-parchment rounded-xl p-6 mb-8">
                <p className="text-forest">
                  <span className="font-medium">Note:</span>{" "}
                  <span className="text-ink-light">{businessInfo.hours.seasonalNote}</span>
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-forest font-medium">Quick Facts</h3>
                <ul className="space-y-3">
                  {[
                    `Founded in ${businessInfo.business.founded}`,
                    `Hardiness Zone ${businessInfo.location.hardinessZone}`,
                    `${businessInfo.keyFacts.shipping} shipping`,
                    businessInfo.keyFacts.guarantee,
                  ].map((fact, i) => (
                    <li key={i} className="flex items-center gap-3 text-ink-light">
                      <svg className="w-5 h-5 text-gold-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-parchment">
                <h3 className="text-forest font-medium mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {businessInfo.social.facebook && (
                    <a
                      href={businessInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center text-forest hover:bg-gold hover:text-forest-dark transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  )}
                  {businessInfo.social.instagram && (
                    <a
                      href={businessInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center text-forest hover:bg-gold hover:text-forest-dark transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <span className="kicker-label text-gold-dark mb-4 inline-block">Send a Message</span>
              <h2 className="text-forest mb-6">
                Get in <em className="text-gold-dark italic">Touch</em>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-parchment bg-white text-forest placeholder-ink-muted focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-parchment bg-white text-forest placeholder-ink-muted focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                    Phone Number <span className="text-ink-muted">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-parchment bg-white text-forest placeholder-ink-muted focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="(902) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-forest mb-2">
                    Subject
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
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-parchment bg-white text-forest placeholder-ink-muted focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
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

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>

                <p className="text-center text-xs text-ink-muted">
                  This form is ready for Brevo integration. Connect your Brevo API to capture leads.
                </p>
              </form>
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

          <div className="aspect-video rounded-2xl bg-forest-light/30 border border-cream/10 flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="w-16 h-16 text-gold/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <p className="text-cream/50 mb-2">Map integration placeholder</p>
              <p className="text-cream/30 text-sm">
                {businessInfo.location.latitude}, {businessInfo.location.longitude}
              </p>
              <p className="text-cream/50 text-sm mt-4">
                {businessInfo.address.street}, {businessInfo.address.city}, {businessInfo.address.state}
              </p>
            </div>
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
