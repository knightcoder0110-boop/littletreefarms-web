"use client";

import { useState } from "react";
import Link from "next/link";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", state: "" });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-forest-dark/90 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-[480px] bg-cream rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 text-ink hover:bg-white hover:text-forest transition-colors z-10"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {isSuccess ? (
          /* Success State */
          <div className="p-10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-forest flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gold">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="kicker-label text-gold-dark mb-3 inline-block">Success!</span>
            <h3 className="text-forest mb-4">Check Your Inbox</h3>
            <p className="text-ink-light mb-8">
              We&apos;ve sent the Free Planting Guide to <strong className="text-forest">{formData.email}</strong>. 
              Please check your email (and spam folder, just in case).
            </p>
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark"
            >
              Got it, thanks!
            </button>
          </div>
        ) : (
          /* Form State */
          <div className="p-10">
            <span className="kicker-label text-gold-dark mb-3 inline-block">Get Started</span>
            <h3 className="text-forest mb-3">Download the Free Planting Guide</h3>
            <p className="text-ink-light text-sm mb-8">
              Learn everything you need to plant your first acre of black walnut timber trees.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block font-ui text-xs font-bold tracking-[0.08em] uppercase text-ink-muted mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white border-2 font-body text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-0 transition-colors ${
                    errors.name ? "border-red-400 focus:border-red-400" : "border-parchment focus:border-gold"
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block font-ui text-xs font-bold tracking-[0.08em] uppercase text-ink-muted mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white border-2 font-body text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-0 transition-colors ${
                    errors.email ? "border-red-400 focus:border-red-400" : "border-parchment focus:border-gold"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* State Field */}
              <div>
                <label htmlFor="state" className="block font-ui text-xs font-bold tracking-[0.08em] uppercase text-ink-muted mb-2">
                  State / Province <span className="text-ink-muted/50 font-normal normal-case">(optional)</span>
                </label>
                <input
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border-2 border-parchment font-body text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-0 focus:border-gold transition-colors"
                  placeholder="Nova Scotia"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-ui text-sm font-bold tracking-[0.08em] uppercase rounded-xl bg-gold text-forest-dark border-2 border-gold transition-all duration-300 hover:bg-gold-dark hover:border-gold-dark disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send My Information
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-xs text-ink-muted">
              No spam. No pressure.{" "}
              <Link href="/privacy" className="underline hover:text-forest transition-colors">
                Unsubscribe anytime.
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
