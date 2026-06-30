import type { Metadata } from "next";
import { AccessFallbackPage } from "@/components/system/AccessFallbackPage";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return (
    <AccessFallbackPage
      badge="Page Not Found"
      title="This path is not part of the grove"
      description="The page you requested does not exist here anymore, or it was never part of the Little Tree Farm investment site. Use one of the guided routes below to keep moving."
    />
  );
}