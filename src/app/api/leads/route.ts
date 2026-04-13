import { LeadSubmissionError, processLeadSubmission } from "@/lib/leads/brevo";
import type { LeadSubmissionRequest } from "@/lib/leads/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: LeadSubmissionRequest;

  try {
    payload = (await request.json()) as LeadSubmissionRequest;
  } catch {
    return Response.json(
      {
        ok: false,
        message: "Invalid JSON payload.",
      },
      { status: 400 },
    );
  }

  try {
    const result = await processLeadSubmission(payload);
    const status = result.ok ? 200 : result.missingEnv?.length ? 503 : 400;

    return Response.json(result, { status });
  } catch (error) {
    console.error("Lead submission failed", error);

    if (error instanceof LeadSubmissionError) {
      return Response.json(
        {
          ok: false,
          message: error.message,
        },
        { status: error.status },
      );
    }

    return Response.json(
      {
        ok: false,
        message: "We could not process your request right now. Please try again.",
      },
      { status: 500 },
    );
  }
}