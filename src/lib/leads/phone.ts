export const leadPhonePlaceholder = "(902) 555-1234";

export const leadPhoneNote =
  "Required. We use your number only to follow up about your request or answer next-step questions.";

export function normalizeLeadPhone(value: string | undefined): string {
  const cleaned = (value ?? "").trim().replace(/\s+/g, " ").slice(0, 40);
  if (!cleaned) {
    return "";
  }

  const digitsOnly = cleaned.replace(/\D/g, "");
  if (!digitsOnly) {
    return "";
  }

  if (digitsOnly.length === 10) {
    return `+1${digitsOnly}`;
  }

  if (digitsOnly.length === 11 && digitsOnly.startsWith("1")) {
    return `+${digitsOnly}`;
  }

  if (cleaned.startsWith("+") && /^[1-9]\d{7,14}$/.test(digitsOnly)) {
    return `+${digitsOnly}`;
  }

  return "";
}

export function isValidLeadPhoneInput(value: string | undefined): boolean {
  return normalizeLeadPhone(value) !== "";
}
