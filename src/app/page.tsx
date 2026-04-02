"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Investment } from "@/components/sections/Investment";
import { WhyThisTree } from "@/components/sections/WhyThisTree";
import { SystemOverview } from "@/components/sections/SystemOverview";
import { Timeline } from "@/components/sections/Timeline";
import { Outcomes } from "@/components/sections/Outcomes";
import { WhyLandowners } from "@/components/sections/WhyLandowners";
import { LandQualifies } from "@/components/sections/LandQualifies";
import { HonestTruth } from "@/components/sections/HonestTruth";
import { TripleCTA } from "@/components/sections/TripleCTA";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <>
      <Hero onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      
      {/* AI-optimized Quick Facts - Answer-first content for AI citation */}
      <QuickFacts />
      
      <Story />
      <Investment onOpenLeadForm={() => setIsLeadFormOpen(true)} />

      {/* Cinematic banner — mature timber atmosphere */}
      <ImageBanner
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&auto=format&fit=crop"
        alt="Towering hardwood forest canopy with dramatic sunlight filtering through leaves"
        quote="The trees you plant today are the wealth your grandchildren will inherit."
        attribution="A truth told by every timber farmer"
        id="forest-banner"
      />

      <WhyThisTree />
      <SystemOverview />

      {/* Plantation rows banner — tree farm context */}
      <ImageBanner
        src="/main-landing-page/big-farmland.jpg"
        alt="Expansive farmland with open fields ready for tree planting"
        quote="That field edge. That strip along the fence line. That back corner that floods a little in spring — it has more potential than you know."
        id="farmland-banner"
      />

      <Timeline />
      <Outcomes />
      <WhyLandowners />
      <LandQualifies onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      <HonestTruth />
      
      {/* Comprehensive FAQ with Schema markup for SEO */}
      <FAQ />

      {/* Final emotional banner — timber harvest vision */}
      <ImageBanner
        src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80&auto=format&fit=crop"
        alt="Stately mature tree with golden leaves in peaceful natural setting"
        quote="Black walnut timber doesn't promise overnight riches. It promises something better: a slow, steady, compounding of value that mirrors the best things in life."
        id="closing-banner"
      />

      <TripleCTA onOpenLeadForm={() => setIsLeadFormOpen(true)} />

      <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </>
  );
}
