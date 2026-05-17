export type PricingPlan = {
  tier: string;
  tagline: string;
  price: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    tier: "Starter",
    tagline: "Good for new brands / solo founders",
    price: "₹49,999",
    features: [
      "AI video concept and motion toolkit",
      "Paid ads launch creative",
      "Basic SEO foundation",
      "Landing page conversion copy",
      "1 revision cycle",
      "Monthly performance check-in",
    ],
    ctaLabel: "Book Starter Review",
    ctaHref: "#book",
  },
  {
    tier: "Growth",
    tagline: "Most popular — performance-led growth",
    price: "₹1,20,000",
    popular: true,
    features: [
      "Full creative campaign suite",
      "Meta Ads + Google Ads setup",
      "SEO content and keyword growth",
      "Custom motion and video assets",
      "Ongoing optimization cycles",
      "Dedicated growth strategy",
    ],
    ctaLabel: "Book Growth Session",
    ctaHref: "#book",
  },
  {
    tier: "Scale",
    tagline: "Custom / enterprise",
    price: "Custom",
    features: [
      "Enterprise brand system",
      "Advanced AI video production",
      "Cross-channel performance media",
      "Conversion funnel engineering",
      "Dedicated team and reporting",
      "Strategic scaling roadmap",
    ],
    ctaLabel: "Discuss Scale",
    ctaHref: "#book",
  },
];
