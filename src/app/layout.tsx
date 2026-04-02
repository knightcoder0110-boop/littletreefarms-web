import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const cormorantDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorantBody = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://investment.littletreefarmns.com"),
  title: {
    default: "Black Walnut Timber Investment | Little Tree Farm",
    template: "%s | Little Tree Farm Timber Investment",
  },
  description:
    "Turn unused land into generational wealth with black walnut timber. Learn the proven planting system, costs, and potential returns. Premium seedlings from Nova Scotia.",
  keywords: [
    "black walnut timber investment",
    "black walnut trees for sale Canada",
    "generational wealth timber",
    "plant black walnut for profit",
    "walnut plantation",
    "timber investment returns",
    "Little Tree Farm",
  ],
  authors: [{ name: "Little Tree Farm", url: "https://littletreefarmns.com" }],
  creator: "Little Tree Farm",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://investment.littletreefarmns.com",
    siteName: "Little Tree Farm — Timber Investment",
    title: "Black Walnut Timber Investment | Little Tree Farm",
    description:
      "Turn unused land into generational wealth with black walnut timber. $1,744 per acre could become $25,000–$125,000+.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Walnut Timber Investment | Little Tree Farm",
    description:
      "Turn unused land into generational wealth with black walnut timber.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantDisplay.variable} ${cormorantBody.variable} ${dmSans.variable}`}>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
