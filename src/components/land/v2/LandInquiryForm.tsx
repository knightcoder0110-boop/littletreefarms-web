"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/ui/ToastProvider";
import { submitLead } from "@/lib/leads/client";
import {
  isValidLeadPhoneInput,
  leadPhoneNote,
  leadPhonePlaceholder,
} from "@/lib/leads/phone";
import styles from "./LandInquiryForm.module.css";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
] as const;

const situations = [
  "I own land I no longer want",
  "I inherited rural property",
  "My family does not want the property",
  "I am planning my will or estate",
  "I want to protect or restore the land",
  "I am only beginning to explore",
] as const;

const acreageRanges = [
  "Under 5 acres",
  "5–20 acres",
  "21–50 acres",
  "51–100 acres",
  "101–500 acres",
  "More than 500 acres",
  "I am not sure",
] as const;

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  province: "",
  situation: "",
  acreageRange: "",
  description: "",
  privacyConsent: false,
};

type LandInquiryFormProps = {
  idPrefix: string;
  compact?: boolean;
};

export function LandInquiryForm({ idPrefix, compact = false }: LandInquiryFormProps) {
  const { toast } = useToast();
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitError, setSubmitError] = useState("");

  function updateField<Key extends keyof typeof formState>(
    key: Key,
    value: (typeof formState)[Key],
  ) {
    setFormState((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
      await submitLead({
        source: "land-stewardship",
        fullName: formState.fullName,
        email: formState.email,
        phone: formState.phone,
        stateOrProvince: formState.province,
        subject: `Land stewardship — ${formState.situation}`,
        message: formState.description,
        requestedAsset: "land-stewardship-response",
        newsletterConsent: false,
        privacyConsent: formState.privacyConsent,
        landInquiry: {
          situation: formState.situation,
          acreageRange: formState.acreageRange || undefined,
          description: formState.description,
        },
      });

      setSubmittedEmail(formState.email);
      setIsSubmitted(true);
      setFormState(initialFormState);
      toast({
        variant: "success",
        title: "Your land inquiry is safely recorded",
        description: `Little Tree Farm will follow up at ${formState.email}.`,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "We could not process your inquiry right now.";
      setSubmitError(message);
      toast({
        variant: "error",
        title: "Inquiry could not be sent",
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <div>
          <span className={styles.successIcon} aria-hidden="true">✓</span>
          <h3>Your first note is with us.</h3>
          <p>
            Thank you. We will review the broad details and follow up at {submittedEmail}.
            This inquiry does not commit either party to a transfer or arrangement.
          </p>
          <button className={styles.reset} type="button" onClick={() => setIsSubmitted(false)}>
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  const phoneHintId = `${idPrefix}-phone-hint`;
  const errorId = `${idPrefix}-submit-error`;

  return (
    <form
      className={`${styles.form} ${compact ? styles.compact : ""}`}
      onSubmit={handleSubmit}
      aria-describedby={submitError ? errorId : undefined}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-name`}>Full name *</label>
          <input
            id={`${idPrefix}-name`}
            name="fullName"
            type="text"
            autoComplete="name"
            value={formState.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Your name"
            maxLength={160}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-email`}>Email address *</label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            maxLength={320}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-phone`}>Phone number *</label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formState.phone}
            onChange={(event) => {
              updateField("phone", event.target.value);
              if (phoneError) {
                setPhoneError("");
                setSubmitError("");
              }
            }}
            placeholder={leadPhonePlaceholder}
            aria-describedby={phoneHintId}
            aria-invalid={Boolean(phoneError)}
            maxLength={40}
            required
          />
          <p className={phoneError ? styles.fieldError : styles.hint} id={phoneHintId}>
            {phoneError || leadPhoneNote}
          </p>
        </div>
        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-province`}>Province or territory *</label>
          <select
            id={`${idPrefix}-province`}
            name="province"
            autoComplete="address-level1"
            value={formState.province}
            onChange={(event) => updateField("province", event.target.value)}
            required
          >
            <option value="">Choose one</option>
            {provinces.map((province) => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-situation`}>What best describes your situation? *</label>
          <select
            id={`${idPrefix}-situation`}
            name="situation"
            value={formState.situation}
            onChange={(event) => updateField("situation", event.target.value)}
            required
          >
            <option value="">Choose one</option>
            {situations.map((situation) => (
              <option key={situation} value={situation}>{situation}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-acreage`}>Approximate acreage</label>
          <select
            id={`${idPrefix}-acreage`}
            name="acreageRange"
            value={formState.acreageRange}
            onChange={(event) => updateField("acreageRange", event.target.value)}
          >
            <option value="">Optional</option>
            {acreageRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={`${idPrefix}-description`}>Tell us the broad shape of the property *</label>
        <textarea
          id={`${idPrefix}-description`}
          name="propertyOverview"
          value={formState.description}
          onChange={(event) => updateField("description", event.target.value)}
          placeholder="For example: mixed woodland in New Brunswick; family no longer wishes to manage it; hoping to avoid clearing and understand responsible next steps."
          minLength={20}
          maxLength={4000}
          required
        />
        <p className={styles.hint}>Broad features and your hopes are enough for a first conversation.</p>
      </div>

      <p className={styles.safetyNote}>
        <span aria-hidden="true">!</span>
        <span>
          Please do not include an exact address, deeds, title documents, financial details,
          identification numbers or other sensitive records.
        </span>
      </p>

      <label className={styles.consent}>
        <input
          name="privacyConsent"
          type="checkbox"
          checked={formState.privacyConsent}
          onChange={(event) => updateField("privacyConsent", event.target.checked)}
          required
        />
        <span>
          I agree that Little Tree Farm may use these contact details and this property
          overview to respond to my inquiry through its email service provider. See the{" "}
          <Link href="/privacy">privacy policy</Link>. *
        </span>
      </label>

      {submitError ? (
        <p className={styles.submitError} id={errorId} role="alert">{submitError}</p>
      ) : null}

      <button className={styles.submit} type="submit" disabled={isSubmitting}>
        <span>{isSubmitting ? "Sending your note…" : "Begin the conversation"}</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
