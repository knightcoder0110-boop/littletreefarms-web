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

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Investment />

      {/* Cinematic banner — forest atmosphere, after investment pitch */}
      <ImageBanner
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&auto=format&fit=crop"
        alt="Tall trees in a sunlit forest representing long-term timber investment potential"
        quote="The trees you plant today are the wealth your grandchildren will inherit."
        attribution="A truth told by every timber farmer"
        id="forest-banner"
      />

      <WhyThisTree />
      <SystemOverview />

      {/* Plantation rows banner — sets visual context for the system */}
      <ImageBanner
        src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=1920&q=80&auto=format&fit=crop"
        alt="Rolling farmland and open fields ideal for black walnut timber planting"
        quote="That field edge. That strip along the fence line. That back corner that floods a little in spring — it has more potential than you know."
        id="farmland-banner"
      />

      <Timeline />
      <Outcomes />
      <WhyLandowners />
      <LandQualifies />
      <HonestTruth />

      {/* Final emotional banner before CTA */}
      <ImageBanner
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80&auto=format&fit=crop"
        alt="Peaceful rural landscape with golden light over open land ready for timber planting"
        quote="Black walnut timber doesn't promise overnight riches. It promises something better: a slow, steady, compounding of value that mirrors the best things in life."
        id="closing-banner"
      />

      <TripleCTA />
    </>
  );
}
