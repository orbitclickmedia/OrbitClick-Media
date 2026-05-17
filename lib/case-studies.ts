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
    metric: "// TODO: Replace with real client data",
    imageUrl: "",
    overview: "// TODO: Replace with real client data",
    solution: "// TODO: Replace with real client data",
    outcomes: [
      "// TODO: Replace with real client data",
      "// TODO: Replace with real client data",
      "// TODO: Replace with real client data",
    ],
    testimonial: {
      quote: "// TODO: Add real testimonial quote",
      name: "Client Name",
      title: "Founder",
      company: "Company Name",
    },
  },
  {
    slug: "brand-elevation",
    clientName: "Brand Elevation",
    industry: "Lifestyle / E-commerce",
    servicesUsed: ["Motion Graphics", "Creative Strategy", "Paid Media"],
    challenge: "Transform a legacy product into a standout launch story for premium buyers.",
    result: "Created a clearer narrative and stronger creative funnel for scale.",
    metric: "// TODO: Replace with real client data",
    imageUrl: "",
    overview: "// TODO: Replace with real client data",
    solution: "// TODO: Replace with real client data",
    outcomes: [
      "// TODO: Replace with real client data",
      "// TODO: Replace with real client data",
      "// TODO: Replace with real client data",
    ],
    testimonial: {
      quote: "// TODO: Add real testimonial quote",
      name: "Client Name",
      title: "CEO",
      company: "Company Name",
    },
  },
  {
    slug: "growth-fueled-scale",
    clientName: "Growth Fueled Scale",
    industry: "SaaS / Performance",
    servicesUsed: ["Web Design", "SEO", "Google Ads"],
    challenge: "Build a conversion-first ecosystem for a B2B growth company.",
    result: "Improved campaign precision while increasing qualified pipeline.",
    metric: "// TODO: Replace with real client data",
    imageUrl: "",
    overview: "// TODO: Replace with real client data",
    solution: "// TODO: Replace with real client data",
    outcomes: [
      "// TODO: Replace with real client data",
      "// TODO: Replace with real client data",
      "// TODO: Replace with real client data",
    ],
    testimonial: {
      quote: "// TODO: Add real testimonial quote",
      name: "Client Name",
      title: "Marketing Lead",
      company: "Company Name",
    },
  },
];
