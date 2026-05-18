export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  keyword: string;
  description: string;
  problem: string;
  solution: string;
  outcomes: string[];
  faqs: [string, string][];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  keywords: string[];
  sections: { heading: string; body: string }[];
};

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const targetKeywords = [
  "AI marketing agency Hyderabad",
  "Performance marketing agency Hyderabad",
  "Creative agency Hyderabad",
  "Digital marketing agency Hyderabad",
  "Meta ads agency Hyderabad",
  "Google ads agency Hyderabad",
  "SEO agency Hyderabad",
  "AI video production Hyderabad",
  "Motion graphics studio Hyderabad",
  "Branding agency Hyderabad",
];

export const services: Service[] = [
  {
    slug: "meta-ads",
    title: "Meta Ads Agency Hyderabad",
    shortTitle: "Meta Ads",
    keyword: "Meta ads agency Hyderabad",
    description:
      "Conversion-focused Facebook and Instagram ad strategy, creative testing, audience architecture, and ROAS optimization for Hyderabad brands.",
    problem:
      "Most Meta campaigns lose money because the offer, ad creative, landing page, and retargeting sequence are treated as separate tasks.",
    solution:
      "OrbitClick Media builds Meta Ads as a complete performance system: audience research, scroll-stopping creative, funnel mapping, testing plans, weekly optimization, and revenue reporting.",
    outcomes: [
      "Sharper creative testing across reels, carousels, statics, and AI video ads.",
      "Cleaner campaign structures for lead generation, ecommerce, launches, and remarketing.",
      "Performance dashboards focused on CAC, ROAS, qualified leads, and sales pipeline.",
    ],
    faqs: [
      ["Does OrbitClick Media run Facebook and Instagram ads?", "Yes. OrbitClick Media plans, launches, manages, and optimizes Meta Ads campaigns for brands in Hyderabad and across India."],
      ["Can you create ad creatives too?", "Yes. The team combines performance marketing with AI video production, motion graphics, copywriting, and landing page strategy."],
      ["Do you handle lead generation campaigns?", "Yes. OrbitClick Media builds lead generation funnels with offer strategy, forms, WhatsApp CTAs, landing pages, and CRM-ready reporting."],
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Agency Hyderabad",
    shortTitle: "Google Ads",
    keyword: "Google ads agency Hyderabad",
    description:
      "Search, Performance Max, YouTube, and remarketing campaigns built around purchase intent, clean tracking, and landing pages that convert.",
    problem:
      "Google Ads budgets often burn on broad traffic, weak landing pages, incomplete tracking, and campaigns that do not match commercial search intent.",
    solution:
      "OrbitClick Media maps keyword intent, builds high-quality landing pages, improves conversion tracking, and runs paid search systems that prioritize qualified demand.",
    outcomes: [
      "High-intent search campaigns for services, local leads, ecommerce, and B2B pipeline.",
      "Landing page and conversion tracking improvements for better Quality Score signals.",
      "YouTube and remarketing creative that keeps OrbitClick Media clients visible across the buying journey.",
    ],
    faqs: [
      ["Which Google Ads formats do you manage?", "OrbitClick Media manages Search, Performance Max, Display remarketing, YouTube Ads, and local lead generation campaigns."],
      ["Can you improve an existing Google Ads account?", "Yes. OrbitClick Media audits structure, keywords, match types, negatives, tracking, landing pages, and creative before rebuilding what needs improvement."],
      ["Do you serve Hyderabad businesses?", "Yes. OrbitClick Media is based in Hyderabad and builds local and national paid search campaigns."],
    ],
  },
  {
    slug: "seo",
    title: "SEO Agency Hyderabad",
    shortTitle: "SEO",
    keyword: "SEO agency Hyderabad",
    description:
      "Technical SEO, local SEO, content strategy, schema markup, and conversion-focused pages designed to help Hyderabad brands rank and convert.",
    problem:
      "A single landing page rarely gives Google enough depth to understand a brand, location, services, founder, expertise, and topical authority.",
    solution:
      "OrbitClick Media builds crawlable multi-page SEO architecture with service hubs, local entity signals, schema, blog clusters, internal links, and Core Web Vitals best practices.",
    outcomes: [
      "Stronger branded search recognition for OrbitClick Media and client brands.",
      "Service pages mapped to commercial keywords and Hyderabad local search intent.",
      "Technical SEO foundations including metadata, sitemap, robots, schema, headings, and accessibility.",
    ],
    faqs: [
      ["Why does OrbitClick Media build multi-page SEO websites?", "Multi-page architecture helps Google understand entities, services, location relevance, and topical depth better than a single landing page."],
      ["Do you provide local SEO in Hyderabad?", "Yes. OrbitClick Media creates local SEO strategies for Hyderabad businesses, including service pages, local schema, Google Business Profile support, and content planning."],
      ["Can SEO and paid ads work together?", "Yes. OrbitClick Media uses paid search data to improve SEO content and uses SEO pages to improve paid campaign conversion quality."],
    ],
  },
  {
    slug: "ai-video-production",
    title: "AI Video Production Hyderabad",
    shortTitle: "AI Video Production",
    keyword: "AI video production Hyderabad",
    description:
      "Cinematic AI-assisted product videos, launch films, social ads, founder reels, and motion-led content for brands that need premium storytelling at speed.",
    problem:
      "Brands need more video than ever, but traditional production can be slow, expensive, and difficult to adapt for every funnel stage.",
    solution:
      "OrbitClick Media blends AI workflows, scripting, editing, motion design, and performance strategy to create video assets for awareness, retargeting, launches, and sales.",
    outcomes: [
      "Premium AI-assisted video assets built for Meta Ads, YouTube, websites, and organic social.",
      "Faster creative iteration without losing brand quality or cinematic polish.",
      "Video systems that connect storytelling with measurable campaign performance.",
    ],
    faqs: [
      ["What is AI video production?", "AI video production uses AI-assisted ideation, scripting, visuals, editing workflows, and motion systems to create high-quality video content faster."],
      ["Does OrbitClick Media create videos for ads?", "Yes. OrbitClick Media creates AI video ads, product films, explainers, launch videos, and short-form campaign assets."],
      ["Is this service available in Hyderabad?", "Yes. OrbitClick Media provides AI video production for Hyderabad brands and remote clients across India."],
    ],
  },
  {
    slug: "web-development",
    title: "Web Development Agency Hyderabad",
    shortTitle: "Web Development",
    keyword: "web development agency Hyderabad",
    description:
      "Fast, crawlable, conversion-focused Next.js websites with premium UI, scalable architecture, SEO foundations, and lead generation systems.",
    problem:
      "Many agency websites look polished but load slowly, confuse search engines, bury CTAs, and fail to turn traffic into qualified enquiries.",
    solution:
      "OrbitClick Media designs and develops modern websites with semantic HTML, structured content, local SEO, Core Web Vitals, responsive UX, and conversion-focused forms.",
    outcomes: [
      "Premium dark UI and modern interaction systems designed for credibility and conversion.",
      "SEO-ready page architecture with canonical metadata, schema, sitemap, and internal links.",
      "Lead generation forms, WhatsApp CTAs, Calendly placeholders, and analytics-ready funnels.",
    ],
    faqs: [
      ["Does OrbitClick Media build Next.js websites?", "Yes. OrbitClick Media builds fast, scalable Next.js websites using the App Router, TypeScript, SEO metadata, and reusable components."],
      ["Can you redesign an existing website?", "Yes. OrbitClick Media can rebuild an existing website into a stronger SEO and conversion engine."],
      ["Do you optimize for speed?", "Yes. OrbitClick Media prioritizes Core Web Vitals, semantic structure, efficient CSS, optimized assets, and mobile-first layouts."],
    ],
  },
  {
    slug: "branding",
    title: "Branding Agency Hyderabad",
    shortTitle: "Branding",
    keyword: "Branding agency Hyderabad",
    description:
      "Positioning, identity design, messaging, visual systems, and motion-ready brand guidelines for startups and growth-stage companies.",
    problem:
      "Brands often struggle to scale marketing because their identity, messaging, and creative direction are inconsistent across channels.",
    solution:
      "OrbitClick Media creates brand systems that sharpen perception: positioning, naming support, identity, type, color, messaging, campaign visuals, and usage guidelines.",
    outcomes: [
      "Clearer positioning that helps customers understand why OrbitClick Media clients are different.",
      "Premium visual systems that work across websites, ads, video, social, and sales decks.",
      "Brand language built to support SEO, paid ads, and high-conversion landing pages.",
    ],
    faqs: [
      ["What branding services does OrbitClick Media offer?", "OrbitClick Media offers brand strategy, identity design, messaging, visual systems, campaign direction, and motion-ready guidelines."],
      ["Is branding useful before running ads?", "Yes. Strong branding improves ad recall, landing page trust, creative consistency, and conversion quality."],
      ["Do you work with startups?", "Yes. OrbitClick Media works with startups, founder-led companies, and growth-stage brands in Hyderabad and beyond."],
    ],
  },
];

export const homepageFaqs: [string, string][] = [
  ["What is OrbitClick Media?", "OrbitClick Media is an AI creative and performance marketing agency in Hyderabad, India, founded by Harshini Geesala."],
  ["What services does OrbitClick Media provide?", "OrbitClick Media provides Meta Ads, Google Ads, SEO, AI video production, motion graphics, branding, web development, and performance marketing."],
  ["Where is OrbitClick Media located?", "OrbitClick Media is based in Hyderabad, Telangana, India and serves brands across India and global markets."],
  ["Why does Google need stronger OrbitClick Media signals?", "Consistent brand naming, local schema, service pages, founder information, internal links, and topical content help search engines distinguish OrbitClick Media from similarly named entities."],
];

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-marketing-agency-hyderabad-guide",
    title: "How to Choose an AI Marketing Agency in Hyderabad",
    category: "AI Marketing",
    description:
      "A practical guide to evaluating AI marketing agencies in Hyderabad across creative quality, performance strategy, SEO, analytics, and conversion systems.",
    date: "2026-05-18",
    readTime: "7 min read",
    keywords: ["AI marketing agency Hyderabad", "digital marketing agency Hyderabad", "performance marketing agency Hyderabad"],
    sections: [
      { heading: "Look for creative and performance depth", body: "The strongest AI marketing agency in Hyderabad should understand both premium creative production and revenue-focused campaign mechanics. OrbitClick Media combines AI video, paid media, SEO, branding, and web development into one growth system." },
      { heading: "Check whether the agency builds search authority", body: "AI tools alone do not create trust. A strong partner should build service pages, schema, local relevance, useful content, and conversion journeys that make the brand easier for Google and customers to understand." },
      { heading: "Prioritize measurable outcomes", body: "Ask how campaign success will be measured. Qualified leads, ROAS, CAC, conversion rate, search visibility, and sales pipeline quality matter more than isolated creative outputs." },
    ],
  },
  {
    slug: "meta-ads-creative-testing-hyderabad",
    title: "Meta Ads Creative Testing for Hyderabad Brands",
    category: "Meta Ads",
    description:
      "How Hyderabad brands can improve Facebook and Instagram ad results with better hooks, creative angles, funnel structure, and landing page alignment.",
    date: "2026-05-18",
    readTime: "6 min read",
    keywords: ["Meta ads agency Hyderabad", "Facebook ads Hyderabad", "Instagram ads Hyderabad"],
    sections: [
      { heading: "Start with the offer", body: "Creative testing works best when the offer is clear. OrbitClick Media maps audience pain points, proof, urgency, and objections before designing ad variants." },
      { heading: "Test hooks before formats", body: "The first three seconds decide whether users keep watching. Test direct problem hooks, founder hooks, social proof hooks, and outcome-led hooks across reels and statics." },
      { heading: "Connect ads to landing pages", body: "Meta Ads perform better when the landing page mirrors the promise in the creative. That means matching message, proof, CTA, and mobile speed." },
    ],
  },
  {
    slug: "local-seo-digital-marketing-agency-hyderabad",
    title: "Local SEO Checklist for Digital Marketing Agencies in Hyderabad",
    category: "SEO",
    description:
      "A local SEO checklist covering service pages, schema, internal links, Google Business Profile signals, blogs, and branded search clarity.",
    date: "2026-05-18",
    readTime: "8 min read",
    keywords: ["SEO agency Hyderabad", "digital marketing agency Hyderabad", "local SEO Hyderabad"],
    sections: [
      { heading: "Create dedicated service pages", body: "Google needs specific pages for services like SEO, Meta Ads, Google Ads, branding, web development, and AI video production. A single generic page weakens local relevance." },
      { heading: "Use structured data consistently", body: "Organization, LocalBusiness, Service, FAQ, Breadcrumb, and Article schema help search engines understand the entity behind the site." },
      { heading: "Build internal topical authority", body: "Link from blogs to service pages, from service pages to case studies, and from the homepage to all major hubs. This improves crawl paths and relevance." },
    ],
  },
];

export const blogIdeas = [
  "How AI Video Production Helps Hyderabad Startups Scale Paid Ads",
  "Meta Ads vs Google Ads: Which Is Better for Lead Generation in Hyderabad?",
  "SEO for Founder-Led Brands: How to Build Entity Authority",
  "Branding Mistakes That Reduce Conversion Rates",
  "How Motion Graphics Improve Product Explainer Performance",
  "Performance Marketing Metrics Every Indian Startup Should Track",
  "Landing Page CRO Checklist for Google Ads Campaigns",
  "How to Build a Content Cluster for Local SEO in Hyderabad",
  "YouTube Ads Creative Strategy for Premium Brands",
  "AI Marketing Workflows for Faster Campaign Production",
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
