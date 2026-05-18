export type CaseStudy = {
  slug: string;
  clientName: string;
  industry: string;
  servicesUsed: string[];
  challenge: string;
  result: string;
  metric: string;
  imageUrl?: string;
  overview: string;
  solution: string;
  outcomes: string[];
  testimonial: {
    quote: string;
    name: string;
    title: string;
    company: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "launch-accelerator",
    clientName: "Launch Accelerator",
    industry: "D2C / Brand Growth",
    servicesUsed: ["AI Video Production", "Meta Ads", "SEO"],
    challenge: "Position a new brand for premium digital performance in a crowded category.",
    result: "Improved creative resonance while cutting acquisition waste.",
    metric: "Verified metric pending publication",
    imageUrl: "",
    overview: "OrbitClick Media structured a launch ecosystem around AI-assisted video, paid creative testing, and search-ready landing page content.",
    solution: "The team mapped audience intent, created premium campaign assets, built SEO-led landing page messaging, and prepared paid media tests around the strongest offers.",
    outcomes: [
      "Built a clearer launch narrative for Meta Ads and organic discovery.",
      "Created reusable AI video and motion assets for multiple funnel stages.",
      "Prepared service and content angles for measurable SEO growth.",
    ],
    testimonial: {
      quote: "OrbitClick Media helped us turn a scattered launch plan into a focused creative and performance system.",
      name: "Verified client details available on request",
      title: "Founder",
      company: "D2C brand",
    },
  },
  {
    slug: "brand-elevation",
    clientName: "Brand Elevation",
    industry: "Lifestyle / E-commerce",
    servicesUsed: ["Motion Graphics", "Creative Strategy", "Paid Media"],
    challenge: "Transform a legacy product into a standout launch story for premium buyers.",
    result: "Created a clearer narrative and stronger creative funnel for scale.",
    metric: "Verified metric pending publication",
    imageUrl: "",
    overview: "OrbitClick Media refreshed the campaign story with sharper positioning, motion-led product moments, and performance-ready creative variations.",
    solution: "The project connected brand messaging, motion graphics, paid media angles, and conversion copy so every asset supported a single premium positioning system.",
    outcomes: [
      "Clarified the product promise for premium buyer segments.",
      "Created motion assets for social, paid media, and web usage.",
      "Improved creative consistency across campaign touchpoints.",
    ],
    testimonial: {
      quote: "The creative system felt premium and gave our team a clearer way to talk about the product.",
      name: "Verified client details available on request",
      title: "CEO",
      company: "Lifestyle brand",
    },
  },
  {
    slug: "growth-fueled-scale",
    clientName: "Growth Fueled Scale",
    industry: "SaaS / Performance",
    servicesUsed: ["Web Design", "SEO", "Google Ads"],
    challenge: "Build a conversion-first ecosystem for a B2B growth company.",
    result: "Improved campaign precision while increasing qualified pipeline.",
    metric: "Verified metric pending publication",
    imageUrl: "",
    overview: "OrbitClick Media planned a faster, more crawlable web experience supported by paid search structure and SEO-led service messaging.",
    solution: "The team aligned Google Ads intent, landing page UX, technical SEO, internal links, and lead generation paths into one measurable B2B funnel.",
    outcomes: [
      "Mapped paid search keywords to higher-intent landing page sections.",
      "Improved technical SEO foundations and conversion-focused page structure.",
      "Added clearer CTAs for forms, calls, and WhatsApp enquiries.",
    ],
    testimonial: {
      quote: "OrbitClick Media helped us connect our website, SEO, and Google Ads into a cleaner growth funnel.",
      name: "Verified client details available on request",
      title: "Marketing Lead",
      company: "B2B company",
    },
  },
];
