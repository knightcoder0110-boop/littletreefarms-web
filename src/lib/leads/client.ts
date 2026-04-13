import type {
  LeadSubmissionRequest,
  LeadSubmissionResponse,
} from "@/lib/leads/types";

export async function submitLead(
  payload: LeadSubmissionRequest,
): Promise<LeadSubmissionResponse> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as
    | LeadSubmissionResponse
    | null;

  if (!response.ok || !data?.ok) {
    throw new Error(
      data?.message || "We could not process your request right now.",
    );
  }

  return data;
}