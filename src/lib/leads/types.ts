export type LeadSource =
  | "homepage-guide-modal"
  | "guide-page"
  | "calculator-report"
  | "contact-form"
  | "land-stewardship";

export type RequestedAsset =
  | "planting-guide"
  | "calculator-report"
  | "contact-response"
  | "land-stewardship-response";

export interface CalculatorLeadSnapshot {
  acres: number;
  pricePerTree: number;
  initialInvestment: number;
  conservativeReturn: number;
  midRangeReturn: number;
  premiumReturn: number;
}

export interface LandInquirySnapshot {
  situation: string;
  acreageRange?: string;
  description: string;
}

export interface LeadSubmissionRequest {
  source: LeadSource;
  email: string;
  phone: string;
  fullName?: string;
  firstName?: string;
  stateOrProvince?: string;
  subject?: string;
  message?: string;
  requestedAsset?: RequestedAsset;
  newsletterConsent?: boolean;
  privacyConsent?: boolean;
  calculator?: CalculatorLeadSnapshot;
  landInquiry?: LandInquirySnapshot;
}

export interface LeadSubmissionResponse {
  ok: boolean;
  message: string;
  deliveryEmailSent?: boolean;
  missingEnv?: string[];
}
