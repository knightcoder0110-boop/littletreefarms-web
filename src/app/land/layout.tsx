import { LandInquiryDock } from "@/components/land/v2/LandInquiryDock";

export default function LandLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <LandInquiryDock />
    </>
  );
}
