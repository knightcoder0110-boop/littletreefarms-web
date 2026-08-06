/**
 * Land Stewardship Knowledge Centre — published-guide registry.
 *
 * This is the single source of truth for the /land hub, its situation
 * pathfinder, internal-link modules, and structured data. Only add a guide
 * after its public route exists; planned content must never create dead links.
 */

export type LandSituationId =
  | "unwanted-land"
  | "inherited-land"
  | "family-succession"
  | "estate-planning"
  | "protect-or-restore"
  | "early-exploration";

export type LandGuideCategory =
  | "decide"
  | "transfer"
  | "plan"
  | "restore"
  | "legacy";

export type LandGuideKind =
  | "Guide"
  | "Story"
  | "Interactive"
  | "Checklist"
  | "Explainer";

export interface LandGuide {
  id: string;
  href: string;
  title: string;
  shortTitle: string;
  hook: string;
  kind: LandGuideKind;
  category: LandGuideCategory;
  situations: readonly LandSituationId[];
  image: string;
  imageAlt: string;
  featured?: "primary" | "secondary";
  publishedAt: string;
  modifiedAt: string;
  primaryIntent: string;
}

export const landGuides: readonly LandGuide[] = [
  {
    id: "unwanted-rural-property",
    href: "/land/unwanted-rural-property",
    title: "What Do I Do With Rural Property I Don’t Want?",
    shortTitle: "Options for Unwanted Rural Property",
    hook: "Seven realistic paths when the property no longer fits your life — with the trade-offs made clear.",
    kind: "Guide",
    category: "decide",
    situations: ["unwanted-land", "inherited-land", "early-exploration"],
    image: "/main-landing-page/walnut-tree-with-fruits.jpg",
    imageAlt: "A mature walnut tree on rural land",
    featured: "primary",
    publishedAt: "2026-08-06",
    modifiedAt: "2026-08-06",
    primaryIntent: "what to do with unwanted rural property",
  },
  {
    id: "leave-land-in-your-will",
    href: "/land/leave-land-in-your-will",
    title: "How to Leave Land in Your Will: A Guide for Canadian Landowners",
    shortTitle: "Leave Land in Your Will",
    hook: "The decisions, professional advice and acceptance planning a future gift of land requires.",
    kind: "Guide",
    category: "plan",
    situations: ["estate-planning", "family-succession", "early-exploration"],
    image: "/main-landing-page/big-farmland.jpg",
    imageAlt: "Open Canadian farmland meeting a distant woodland",
    featured: "secondary",
    publishedAt: "2026-08-06",
    modifiedAt: "2026-08-06",
    primaryIntent: "leave land in a will in Canada",
  },
  {
    id: "donate-land",
    href: "/land/donate-land",
    title: "How to Donate Land in Canada: Your Options Explained",
    shortTitle: "Donate Land in Canada",
    hook: "Understand outright gifts, retained use, conservation tools, tax questions and when selling may be better.",
    kind: "Guide",
    category: "transfer",
    situations: ["protect-or-restore", "estate-planning", "unwanted-land"],
    image: "/main-landing-page/mature-black-walnut-nova-scotia.jpg",
    imageAlt: "A mature black walnut tree growing in Nova Scotia",
    featured: "secondary",
    publishedAt: "2026-08-06",
    modifiedAt: "2026-08-06",
    primaryIntent: "donate land in Canada",
  },
  {
    id: "unwanted-woodland",
    href: "/land/i-dont-want-my-woodland-anymore",
    title: "I Don’t Want My Woodland Anymore — What Are My Options?",
    shortTitle: "When You No Longer Want the Woodlot",
    hook: "A practical and personal way to think through cost, care, family wishes and letting go well.",
    kind: "Guide",
    category: "decide",
    situations: ["unwanted-land", "family-succession", "inherited-land"],
    image: "/main-landing-page/black-walnut-tree.jpg",
    imageAlt: "Looking upward through the crown of a mature black walnut tree",
    publishedAt: "2026-08-06",
    modifiedAt: "2026-08-06",
    primaryIntent: "options for a woodland no longer wanted",
  },
  {
    id: "land-after-death",
    href: "/land/what-happens-to-my-land-when-i-die",
    title: "What Happens to My Land When I Die?",
    shortTitle: "What Happens to the Land Next?",
    hook: "A story of two possible futures — and the planning decisions that separate them.",
    kind: "Story",
    category: "legacy",
    situations: ["estate-planning", "family-succession", "early-exploration"],
    image: "/main-landing-page/trees-from-groundview.jpg",
    imageAlt: "Tall trees viewed from the forest floor",
    publishedAt: "2026-08-06",
    modifiedAt: "2026-08-06",
    primaryIntent: "what happens to land after an owner dies",
  },
  {
    id: "forest-legacy",
    href: "/land/creating-a-forest-legacy",
    title: "Creating a Forest Legacy for Future Generations",
    shortTitle: "Create a Forest Legacy",
    hook: "Move through a century of change and see how stewardship choices compound over time.",
    kind: "Interactive",
    category: "legacy",
    situations: ["protect-or-restore", "family-succession", "early-exploration"],
    image: "/main-landing-page/black-walnut-close.jpg",
    imageAlt: "The textured trunk of a growing black walnut tree",
    publishedAt: "2026-08-06",
    modifiedAt: "2026-08-06",
    primaryIntent: "create a forest legacy for future generations",
  },
] as const;

export function getLandGuide(id: string): LandGuide | undefined {
  return landGuides.find((guide) => guide.id === id);
}
