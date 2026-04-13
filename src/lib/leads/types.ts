export type LeadSource =
  | "homepage-guide-modal"
  | "guide-page"
  | "calculator-report"
  | "contact-form";

export type RequestedAsset =
  | "planting-guide"
  | "calculator-report"
  | "contact-response";

export interface CalculatorLeadSnapshot {
  acres: number;
  pricePerTree: number;
  initialInvestment: number;
  conservativeReturn: number;
  midRangeReturn: number;
  premiumReturn: number;
}

export interface LeadSubmissionRequest {
  source: LeadSource;
  email: string;
  fullName?: string;
  firstName?: string;
  stateOrProvince?: string;
  phone?: string;
  subject?: string;
  message?: string;
  requestedAsset?: RequestedAsset;
  newsletterConsent?: boolean;
  calculator?: CalculatorLeadSnapshot;
}

export interface LeadSubmissionResponse {
  ok: boolean;
  message: string;
  deliveryEmailSent?: boolean;
  missingEnv?: string[];
}