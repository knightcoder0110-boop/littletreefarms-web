import { businessInfo } from "@/lib/config/business";
import { normalizeLeadPhone } from "@/lib/leads/phone";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type {
  LeadSource,
  LeadSubmissionRequest,
  LeadSubmissionResponse,
} from "@/lib/leads/types";

type BrevoSourceConfig = {
  label: string;
  primaryListEnv: string;
  templateEnv?: string;
};

type BrevoTransactionalEmailPayload = {
  to: Array<{ email: string; name?: string }>;
  subject?: string;
  htmlContent?: string;
  templateId?: number;
  params?: Record<string, string | number | boolean>;
  attachment?: Array<{ content: string; name: string }>;
};

const BREVO_API_BASE_URL = "https://api.brevo.com/v3";

export class LeadSubmissionError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "LeadSubmissionError";
  }
}

const SOURCE_CONFIG: Record<LeadSource, BrevoSourceConfig> = {
  "homepage-guide-modal": {
    label: "Homepage Guide Modal",
    primaryListEnv: "BREVO_GUIDE_LIST_ID",
    templateEnv: "BREVO_GUIDE_TEMPLATE_ID",
  },
  "guide-page": {
    label: "Guide Page",
    primaryListEnv: "BREVO_GUIDE_LIST_ID",
    templateEnv: "BREVO_GUIDE_TEMPLATE_ID",
  },
  "calculator-report": {
    label: "Calculator Report",
    primaryListEnv: "BREVO_CALCULATOR_LIST_ID",
    templateEnv: "BREVO_CALCULATOR_TEMPLATE_ID",
  },
  "contact-form": {
    label: "Contact Form",
    primaryListEnv: "BREVO_CONTACT_LIST_ID",
    templateEnv: "BREVO_CONTACT_AUTO_REPLY_TEMPLATE_ID",
  },
  "land-stewardship": {
    label: "Land Stewardship Inquiry",
    primaryListEnv: "BREVO_LAND_STEWARDSHIP_LIST_ID",
    templateEnv: "BREVO_LAND_STEWARDSHIP_AUTO_REPLY_TEMPLATE_ID",
  },
};

export const requiredBrevoEnv = ["BREVO_API_KEY"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getMissingBrevoEnv(): string[] {
  return requiredBrevoEnv.filter((envName) => !process.env[envName]?.trim());
}

function cleanText(value: string | undefined, maxLength: number): string {
  return (value ?? "").trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(value: string): boolean {
  return emailPattern.test(value);
}

function parseListId(envName: string): number | null {
  const rawValue = process.env[envName]?.trim();
  if (!rawValue) {
    return null;
  }

  const parsedValue = Number(rawValue);
  if (!Number.isInteger(parsedValue) || parsedValue <= 0) {
    return null;
  }

  return parsedValue;
}

function parseTemplateId(envName: string | undefined): number | null {
  if (!envName) {
    return null;
  }

  return parseListId(envName);
}

function splitName(payload: LeadSubmissionRequest) {
  const fullName = cleanText(payload.fullName, 160);
  const firstNameFromPayload = cleanText(payload.firstName, 80);

  if (!fullName && firstNameFromPayload) {
    return {
      firstName: firstNameFromPayload,
      lastName: "",
      displayName: firstNameFromPayload,
    };
  }

  if (!fullName) {
    return {
      firstName: "",
      lastName: "",
      displayName: "",
    };
  }

  const parts = fullName.split(" ");
  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
    displayName: fullName,
  };
}

function validateLeadSubmission(payload: LeadSubmissionRequest): string | null {
  if (!payload.source || !(payload.source in SOURCE_CONFIG)) {
    return "Please submit this form from a valid page.";
  }

  const email = cleanText(payload.email, 320).toLowerCase();
  if (!email || !isValidEmail(email)) {
    return "Please provide a valid email address.";
  }

  if (!cleanText(payload.phone, 40) || !normalizeLeadPhone(payload.phone)) {
    return "Please provide a valid phone number.";
  }

  if (
    (payload.source === "homepage-guide-modal" ||
      payload.source === "contact-form" ||
      payload.source === "land-stewardship") &&
    !cleanText(payload.fullName, 160)
  ) {
    return "Please provide your name.";
  }

  if (payload.source === "guide-page" && !cleanText(payload.firstName, 80)) {
    return "Please provide your first name.";
  }

  if (payload.source === "contact-form") {
    if (!cleanText(payload.subject, 120)) {
      return "Please choose a subject.";
    }

    if (cleanText(payload.message, 4000).length < 10) {
      return "Please include a little more detail in your message.";
    }
  }

  if (payload.source === "land-stewardship") {
    if (!cleanText(payload.stateOrProvince, 80)) {
      return "Please choose the province or territory where the land is located.";
    }

    if (!cleanText(payload.landInquiry?.situation, 160)) {
      return "Please choose the situation that best describes your inquiry.";
    }

    if (cleanText(payload.landInquiry?.description, 4000).length < 20) {
      return "Please tell us a little more about the property and the future you hope to explore.";
    }

    if (payload.privacyConsent !== true) {
      return "Please confirm that we may use these details to respond to your inquiry.";
    }
  }

  return null;
}

function getListIds(payload: LeadSubmissionRequest): number[] {
  const sourceConfig = SOURCE_CONFIG[payload.source];
  const sourceListId = parseListId(sourceConfig.primaryListEnv);
  const defaultListId = parseListId("BREVO_DEFAULT_LIST_ID");
  const newsletterListId = payload.newsletterConsent
    ? parseListId("BREVO_NEWSLETTER_LIST_ID")
    : null;
  const highIntentListId =
    payload.source === "calculator-report" ||
    payload.source === "contact-form" ||
    payload.source === "land-stewardship"
      ? parseListId("BREVO_HIGH_INTENT_LIST_ID")
      : null;

  return Array.from(
    new Set(
      [sourceListId, defaultListId, newsletterListId, highIntentListId].filter(
        (value): value is number => value !== null,
      ),
    ),
  );
}

function getContactAttributes(
  payload: LeadSubmissionRequest,
  options?: { includeSms?: boolean },
) {
  const { firstName, lastName } = splitName(payload);
  const sms = normalizeLeadPhone(payload.phone);
  const attributes: Record<string, string> = {};

  if (firstName) {
    attributes.FIRSTNAME = firstName;
  }

  if (lastName) {
    attributes.LASTNAME = lastName;
  }

  if (options?.includeSms !== false && sms) {
    attributes.SMS = sms;
  }

  return attributes;
}

function buildBrevoContactPayload(
  payload: LeadSubmissionRequest,
  options?: { includeSms?: boolean },
) {
  const email = cleanText(payload.email, 320).toLowerCase();
  const attributes = getContactAttributes(payload, options);
  const listIds = getListIds(payload);

  return {
    email,
    updateEnabled: true,
    listIds: listIds.length > 0 ? listIds : undefined,
    attributes: Object.keys(attributes).length > 0 ? attributes : undefined,
    emailBlacklisted: false,
  };
}

function isBrevoInvalidPhoneError(errorText: string): boolean {
  return (
    errorText.includes('"code":"invalid_parameter"') &&
    errorText.toLowerCase().includes("invalid phone number")
  );
}

function isBrevoDuplicateSmsError(errorText: string): boolean {
  const normalized = errorText.toLowerCase();

  return (
    normalized.includes('"code":"duplicate_parameter"') &&
    normalized.includes("duplicate_identifiers") &&
    normalized.includes("sms")
  );
}

async function brevoFetch(path: string, init: RequestInit): Promise<Response> {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("Brevo is not configured. Missing BREVO_API_KEY.");
  }

  return fetch(`${BREVO_API_BASE_URL}${path}`, {
    ...init,
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });
}

async function upsertBrevoContact(payload: LeadSubmissionRequest) {
  const response = await brevoFetch("/contacts", {
    method: "POST",
    body: JSON.stringify(buildBrevoContactPayload(payload)),
  });

  if (response.ok) {
    return;
  }

  const errorText = await response.text();

  if (
    response.status === 401 &&
    errorText.includes("unrecognised IP address")
  ) {
    throw new LeadSubmissionError(
      "Brevo is blocking this server IP. Add the current server IP to Brevo Authorized IPs before testing again.",
      503,
    );
  }

  if (isBrevoInvalidPhoneError(errorText)) {
    throw new LeadSubmissionError(
      "The phone number format is invalid. Use a full 10-digit North American number.",
      400,
    );
  }

  if (isBrevoDuplicateSmsError(errorText)) {
    throw new LeadSubmissionError(
      "That phone number is already associated with another contact in our system. Please use a different number or contact us directly and we can help update your details.",
      409,
    );
  }

  throw new Error(
    `Brevo contact sync failed with status ${response.status}: ${errorText || "Unknown error"}`,
  );
}

function getLeadNotificationHtml(payload: LeadSubmissionRequest): string {
  const sourceConfig = SOURCE_CONFIG[payload.source];
  const { displayName, firstName } = splitName(payload);
  const name = displayName || firstName || "Unknown";
  const email = cleanText(payload.email, 320).toLowerCase();
  const subject = cleanText(payload.subject, 120);
  const message = cleanText(payload.message, 4000);
  const phone = cleanText(payload.phone, 40);
  const province = cleanText(payload.stateOrProvince, 80);

  const detailRows = [
    ["Lead source", sourceConfig.label],
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Province / Territory", province],
    ["Requested asset", cleanText(payload.requestedAsset, 80)],
    ["Newsletter opt-in", payload.newsletterConsent ? "Yes" : "No"],
    ["Response consent", payload.privacyConsent ? "Yes" : "No"],
    ["Subject", subject],
  ].filter(([, value]) => Boolean(value));

  const calculatorHtml = payload.calculator
    ? `
      <h3 style="margin:24px 0 8px;font-size:16px;color:#23412f;">Calculator Snapshot</h3>
      <ul style="padding-left:18px;color:#2f332d;line-height:1.6;">
        <li>Acres: ${escapeHtml(String(payload.calculator.acres))}</li>
        <li>Price per tree: ${escapeHtml(String(payload.calculator.pricePerTree))}</li>
        <li>Initial investment: ${escapeHtml(String(payload.calculator.initialInvestment))}</li>
        <li>Conservative return: ${escapeHtml(String(payload.calculator.conservativeReturn))}</li>
        <li>Mid-range return: ${escapeHtml(String(payload.calculator.midRangeReturn))}</li>
        <li>Premium return: ${escapeHtml(String(payload.calculator.premiumReturn))}</li>
      </ul>
    `
    : "";

  const landInquiryHtml = payload.landInquiry
    ? `
      <h3 style="margin:24px 0 8px;font-size:16px;color:#23412f;">Land Stewardship Overview</h3>
      <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #eadfc7;">
        <tbody>
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #f0e7d6;font-weight:700;width:180px;">Situation</td>
            <td style="padding:10px 12px;border-bottom:1px solid #f0e7d6;">${escapeHtml(cleanText(payload.landInquiry.situation, 160))}</td>
          </tr>
          ${payload.landInquiry.acreageRange ? `
            <tr>
              <td style="padding:10px 12px;border-bottom:1px solid #f0e7d6;font-weight:700;width:180px;">Approximate acreage</td>
              <td style="padding:10px 12px;border-bottom:1px solid #f0e7d6;">${escapeHtml(cleanText(payload.landInquiry.acreageRange, 80))}</td>
            </tr>
          ` : ""}
        </tbody>
      </table>
      <h3 style="margin:24px 0 8px;font-size:16px;color:#23412f;">Property overview</h3>
      <p style="white-space:pre-wrap;color:#2f332d;line-height:1.6;">${escapeHtml(cleanText(payload.landInquiry.description, 4000))}</p>
    `
    : "";

  const messageHtml = message && !payload.landInquiry
    ? `
      <h3 style="margin:24px 0 8px;font-size:16px;color:#23412f;">Message</h3>
      <p style="white-space:pre-wrap;color:#2f332d;line-height:1.6;">${escapeHtml(message)}</p>
    `
    : "";

  return `
    <div style="font-family:Georgia,serif;padding:24px;background:#faf6ef;color:#163020;">
      <h2 style="margin:0 0 16px;font-size:22px;color:#23412f;">New lead from ${escapeHtml(sourceConfig.label)}</h2>
      <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #eadfc7;">
        <tbody>
          ${detailRows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding:10px 12px;border-bottom:1px solid #f0e7d6;font-weight:700;width:180px;">${escapeHtml(label)}</td>
                  <td style="padding:10px 12px;border-bottom:1px solid #f0e7d6;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      ${messageHtml}
      ${landInquiryHtml}
      ${calculatorHtml}
    </div>
  `;
}

async function sendLeadNotification(payload: LeadSubmissionRequest) {
  const senderEmail = process.env.BREVO_NOTIFY_FROM_EMAIL?.trim();
  const recipientEmail =
    process.env.LEADS_NOTIFICATION_EMAIL?.trim() || businessInfo.contact.email;

  if (!senderEmail || !recipientEmail) {
    return;
  }

  const sourceConfig = SOURCE_CONFIG[payload.source];
  const { displayName, firstName } = splitName(payload);
  const leadName = displayName || firstName || cleanText(payload.email, 320);

  const emailPayload: BrevoTransactionalEmailPayload = {
    to: [{ email: recipientEmail }],
    subject: `New lead: ${sourceConfig.label} - ${leadName}`,
    htmlContent: getLeadNotificationHtml(payload),
  };

  const senderName = process.env.BREVO_NOTIFY_FROM_NAME?.trim() || businessInfo.name;

  const response = await brevoFetch("/smtp/email", {
    method: "POST",
    body: JSON.stringify({
      ...emailPayload,
      sender: {
        email: senderEmail,
        name: senderName,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Brevo lead notification failed with status ${response.status}: ${errorText || "Unknown error"}`,
    );
  }
}

async function sendFollowUpTemplate(payload: LeadSubmissionRequest): Promise<boolean> {
  const sourceConfig = SOURCE_CONFIG[payload.source];
  const templateId = parseTemplateId(sourceConfig.templateEnv);

  if (!templateId && payload.source !== "guide-page") {
    return false;
  }

  const { displayName, firstName, lastName } = splitName(payload);
  const email = cleanText(payload.email, 320).toLowerCase();
  const senderEmail = process.env.BREVO_NOTIFY_FROM_EMAIL?.trim();
  const senderName = process.env.BREVO_NOTIFY_FROM_NAME?.trim();
  const guideAttachment =
    payload.requestedAsset === "planting-guide"
      ? {
          content: (
            await readFile(
              path.join(process.cwd(), "public", "black-walnut-planting-guide.pdf"),
            )
          ).toString("base64"),
          name: "black-walnut-planting-guide.pdf",
        }
      : undefined;

  const inlineGuideHtml = `
    <html>
      <body style="margin:0;background:#f4ede3;color:#183628;font-family:Arial,sans-serif;">
        <div style="max-width:640px;margin:0 auto;padding:40px 24px;">
          <h1 style="margin:0 0 16px;color:#183628;font-size:30px;">Your Black Walnut Planting Guide</h1>
          <p style="font-size:16px;line-height:1.6;">Hi ${escapeHtml(firstName || "there")},</p>
          <p style="font-size:16px;line-height:1.6;">Thanks for requesting the free guide. We have attached your planting guide to this email.</p>
          <p style="font-size:16px;line-height:1.6;">If you have questions about your land or planting plans, reply to this email or contact Little Tree Farm.</p>
          <p style="font-size:16px;line-height:1.6;">— The Little Tree Farm Team</p>
        </div>
      </body>
    </html>`;

  const response = await brevoFetch("/smtp/email", {
    method: "POST",
    body: JSON.stringify({
      to: [{ email, name: displayName || firstName || undefined }],
      ...(templateId ? { templateId } : { subject: "Your Black Walnut Planting Guide", htmlContent: inlineGuideHtml }),
      params: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        FULLNAME: displayName,
        EMAIL: email,
        SOURCE: sourceConfig.label,
        SUBJECT: cleanText(payload.subject, 120),
        MESSAGE: cleanText(payload.message, 4000),
        STATE_OR_PROVINCE: cleanText(payload.stateOrProvince, 80),
        REQUESTED_ASSET: cleanText(payload.requestedAsset, 80),
        CALCULATOR_ACRES: payload.calculator?.acres ?? "",
        CALCULATOR_INITIAL_INVESTMENT:
          payload.calculator?.initialInvestment ?? "",
        CALCULATOR_MID_RANGE_RETURN:
          payload.calculator?.midRangeReturn ?? "",
        LAND_SITUATION: cleanText(payload.landInquiry?.situation, 160),
        LAND_ACREAGE_RANGE: cleanText(payload.landInquiry?.acreageRange, 80),
        LAND_DESCRIPTION: cleanText(payload.landInquiry?.description, 4000),
      },
      sender: senderEmail
        ? {
            email: senderEmail,
            name: senderName || businessInfo.name,
          }
        : undefined,
      ...(guideAttachment ? { attachment: [guideAttachment] } : {}),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Brevo follow-up email failed with status ${response.status}: ${errorText || "Unknown error"}`,
    );
  }

  return true;
}

export async function processLeadSubmission(
  payload: LeadSubmissionRequest,
): Promise<LeadSubmissionResponse> {
  const missingEnv = getMissingBrevoEnv();
  if (missingEnv.length > 0) {
    return {
      ok: false,
      message: "Lead capture is not configured yet.",
      missingEnv,
    };
  }

  const validationError = validateLeadSubmission(payload);
  if (validationError) {
    return {
      ok: false,
      message: validationError,
    };
  }

  await upsertBrevoContact(payload);

  let deliveryEmailSent = false;

  try {
    deliveryEmailSent = await sendFollowUpTemplate(payload);
  } catch (error) {
    console.error("Brevo follow-up email error", error);
  }

  try {
    await sendLeadNotification(payload);
  } catch (error) {
    console.error("Brevo lead notification error", error);
  }

  return {
    ok: true,
    message: "Lead captured successfully.",
    deliveryEmailSent,
  };
}
