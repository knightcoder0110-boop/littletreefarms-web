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
import { LandStewardship } from "@/components/sections/LandStewardship";
import { TripleCTA } from "@/components/sections/TripleCTA";
import { ImageBanner } from "@/components/sections/ImageBanner";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { FAQ } from "@/components/sections/FAQ";
import { StatsBar } from "@/components/sections/StatsBar";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <>
      <Hero onOpenLeadForm={() => setIsLeadFormOpen(true)} />

      <Story />
      <Investment onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      <StatsBar />

      {/* Cinematic banner — harvest abundance */}
      <ImageBanner
        src="/main-landing-page/collecting-black-walnut-ltf.jpg"
        alt="Buckets of harvested black walnuts collected at Little Tree Farm"
        quote="The trees you plant today are the wealth your grandchildren will inherit."
        attribution="A truth told by every timber farmer"
        id="forest-banner"
      />

      <WhyThisTree />
      <SystemOverview />

      {/* Plantation rows banner — tree farm context */}
      <ImageBanner
        src="/main-landing-page/black-walnut-close.jpg"
        alt="Black walnut fruits growing on branch at Little Tree Farm"
        quote="That field edge. That strip along the fence line. That back corner that floods a little in spring — it has more potential than you know."
        id="farmland-banner"
      />

      <Timeline />

      {/* AI-optimized Quick Facts - Answer-first content for AI citation */}
      <QuickFacts />

      <Outcomes />
      <WhyLandowners />
      <LandQualifies onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      <HonestTruth />

      {/* Land Stewardship Program — the other audience: owners of unwanted rural land */}
      <LandStewardship />

      {/* Comprehensive FAQ with Schema markup for SEO */}
      <FAQ />

      {/* Final emotional banner — timber harvest vision */}
      <ImageBanner
        src="/main-landing-page/black-walnuts-closeup-ltf.jpg"
        alt="Black walnuts held in hand — the tangible reward of patient timber investment at Little Tree Farm"
        quote="Black walnut timber doesn't promise overnight riches. It promises something better: a slow, steady, compounding of value that mirrors the best things in life."
        id="closing-banner"
      />

      <TripleCTA onOpenLeadForm={() => setIsLeadFormOpen(true)} />

      <LeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </>
  );
}
