/**
 * Land Stewardship Knowledge Centre — guide registry.
 *
 * Single source of truth for the /land hub's guide library.
 * When a new spoke page ships, add one entry here and it appears
 * on the hub automatically. Planned pages stay out of this list
 * until they are live (decision: live-only).
 */
export interface LandGuide {
  href: string;
  title: string;
  hook: string;
  kind: "Guide" | "Story" | "Interactive";
}

export const landGuides: readonly LandGuide[] = [
  {
    href: "/land/what-happens-to-my-land-when-i-die",
    title: "What Happens to My Land When I Die?",
    hook: "A story of two futures — and the plan that decides between them.",
    kind: "Story",
  },
  {
    href: "/land/leave-land-in-your-will",
    title: "How to Leave Land in Your Will",
    hook: "The complete process for a future gift of land, done properly.",
    kind: "Guide",
  },
  {
    href: "/land/donate-land",
    title: "How to Donate Land in Canada",
    hook: "Outright gifts, retained use, conservation tools — and when selling is better.",
    kind: "Guide",
  },
  {
    href: "/land/unwanted-rural-property",
    title: "Options for Unwanted Rural Property",
    hook: "Seven realistic paths when the land no longer fits your life.",
    kind: "Guide",
  },
  {
    href: "/land/i-dont-want-my-woodland-anymore",
    title: "I Don't Want My Woodland Anymore",
    hook: "A more personal look at letting go of the woodlot well.",
    kind: "Guide",
  },
  {
    href: "/land/creating-a-forest-legacy",
    title: "Creating a Forest Legacy",
    hook: "Watch a hundred years pass — then choose what your land becomes.",
    kind: "Interactive",
  },
];
