import { SiteEffects } from "@/components/site-effects";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { PricingCard } from "@/components/PricingCard";
import { StatsPanel } from "@/components/StatsPanel";
import { TestimonialCard } from "@/components/TestimonialCard";
import { caseStudies } from "@/lib/case-studies";
import { pricingPlans } from "@/lib/pricing";
import { siteConfig } from "@/lib/seo";
import { testimonials } from "@/lib/testimonials";

export function generateMetadata() {
  return {
    metadataBase: new URL(siteConfig.url),
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

const services = [
  { n: "01", title: "AI Video Production", desc: "Cinematic, AI-accelerated brand films and ads for launches, social campaigns, product stories, and high-performing paid creative.", tag: "Creative" },
  { n: "02", title: "Motion Graphics", desc: "Frame-perfect motion systems for brands that need premium explainers, product animation, identity motion, and scroll-stopping short-form content.", tag: "Design" },
  { n: "03", title: "Performance Marketing", desc: "Revenue-engineered growth campaigns where every creative decision is connected to conversion data, audience intent, and measurable ROI.", tag: "Growth" },
  { n: "04", title: "Meta Ads & Google Ads", desc: "Paid media infrastructure for Meta Ads and Google Ads, including campaign architecture, testing roadmaps, landing pages, and creative iteration.", tag: "Paid" },
  { n: "05", title: "SEO & Content", desc: "Technical SEO, local SEO, topical authority, landing pages, and content systems built to rank for commercial and branded search demand.", tag: "Organic" },
  { n: "06", title: "Brand Identity", desc: "Premium visual systems for sharper market perception: positioning, marks, palettes, typography, messaging, and brand usage architecture.", tag: "Brand" },
  { n: "07", title: "Web Design & Development", desc: "Fast, crawlable, conversion-focused websites with modern UX, strong Core Web Vitals, and a brand experience that feels unmistakably premium.", tag: "Tech" },
  { n: "08", title: "Creative Strategy", desc: "Audience research, content strategy, AI workflows, offer positioning, and creative operating systems that compress ideation cycles.", tag: "Strategy" },
];

const comparisons = [
  ["Creative approach", "Templates, stock, committees", "Bespoke, cinematic, AI-powered"],
  ["Time to market", "6-12 weeks", "7-14 days"],
  ["Performance focus", "Impressions and vanity metrics", "Revenue, ROAS, growth KPIs"],
  ["Iteration speed", "Slow revision cycles", "Real-time optimization loops"],
  ["Pricing model", "Bloated retainers and hidden costs", "Transparent, performance-linked"],
  ["Creative iteration", "1-2 rounds per brief", "Unlimited AI-assisted rounds"],
];

const steps = [
  { n: "01", title: "Strategy", desc: "We map your audience, competitors, offers, search demand, and creative whitespace before a single pixel is designed." },
  { n: "02", title: "AI Ideation", desc: "AI-assisted concept generation compresses ideation cycles and explores more creative directions in less time." },
  { n: "03", title: "Production", desc: "Motion, video, copy, web, SEO, and identity are built inside one unified brand and performance language." },
  { n: "04", title: "Optimization", desc: "Live A/B testing, search data, paid media dashboards, and conversion signals guide rapid improvement." },
  { n: "05", title: "Scaling", desc: "Winning creative and landing pages get amplified through budget allocation, platform expansion, and compounding organic growth." },
];

const faqs = [
  ["What is OrbitClick Media?", "OrbitClick Media is a premium AI-powered creative and performance marketing agency in Hyderabad, India, specializing in AI video production, motion graphics, branding, SEO, Meta Ads, Google Ads, and modern web experiences."],
  ["Who founded OrbitClick Media?", "OrbitClick Media was founded by Harshini Geesala."],
  ["Where is OrbitClick Media located?", "OrbitClick Media is based in Hyderabad, India and serves ambitious brands across India and global markets."],
  ["What does OrbitClick Media help brands rank for?", "OrbitClick Media builds search visibility around branded, local, and commercial queries including OrbitClick Media, OrbitClick, AI creative agency Hyderabad, motion graphics agency Hyderabad, performance marketing agency Hyderabad, and AI video production agency India."],
];

export default function HomePage() {
  return (
    <>
      <SiteEffects />
      <div id="cursor-glow" aria-hidden="true" />

      <nav id="main-nav" aria-label="Primary navigation">
        <a href="/" className="nav-logo" aria-label="OrbitClick Media home">
          <span className="logo-orb" aria-hidden="true"><span className="logo-core" /></span>
          <span className="logo-text">Orbit<span>Click</span> Media</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#seo">SEO</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-cta-group">
          <a className="nav-cta" href="#book">Book a Call</a>
          <a className="nav-whatsapp" href="https://wa.me/919515445781?text=Hi%20OrbitClick%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
      </nav>

      <main>
        <section id="hero" aria-labelledby="hero-title">
          <div className="hero-ambient" aria-hidden="true">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
          </div>
          <div className="hero-grid">
            <div>
              <p className="hero-tag"><span className="hero-tag-dot" />AI Creative Agency Hyderabad</p>
              <h1 id="hero-title" className="hero-headline">
                <span className="line-glow">OrbitClick Media</span><br />
                <span className="line-dim">AI creative built for</span><br />
                <span className="line-plain">modern growth.</span>
              </h1>
              <p className="hero-body">
                OrbitClick Media is a premium AI-powered creative and performance marketing agency in Hyderabad, India, helping brands grow through cinematic AI video production, motion graphics, branding, SEO, Meta Ads, Google Ads, and high-converting web experiences.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="#book">Book a Strategy Call</a>
                <a className="btn-ghost" href="#work">View Case Studies</a>
              </div>
              <StatsPanel
                stats={[
                  { value: "150+", label: "Brands" },
                  { value: "8×", label: "Avg ROAS" },
                  { value: "$24M+", label: "Revenue" },
                ]}
              />
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orb-scene">
                <div className="orb-halo" />
                <div className="orb-ring ring-1"><div className="ring-dot dot-a" /></div>
                <div className="orb-ring ring-2"><div className="ring-dot dot-b" /></div>
                <div className="orb-ring ring-3"><div className="ring-dot dot-c" /></div>
                <div className="orb-core" />
                <div className="float-card card-a"><div className="card-a-inner"><div className="card-live" /><span>AI Engine Active</span></div></div>
                <div className="float-card card-b"><div className="card-b-label">Live Campaign</div><div className="card-b-val">+847% ROAS</div></div>
              </div>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span /></div>
        </section>

        <section id="book" aria-labelledby="book-title">
          <div className="section-inner">
            <div className="book-header">
              <p className="section-tag rv">Start Here</p>
              <h2 id="book-title" className="section-title rv d1">Book your strategy session.<br /><em>See the growth opportunity.</em></h2>
              <p className="section-body rv d2">Choose a time that works for you and let’s map the creative, search, and paid growth plan for your next launch.</p>
            </div>
            <CalendarEmbed />
          </div>
        </section>

        <section id="services" aria-labelledby="services-title">
          <div className="section-inner">
            <div className="services-header">
              <div>
                <p className="section-tag rv">Services</p>
                <h2 id="services-title" className="section-title rv d1">Eight capabilities.<br /><em>One growth system.</em></h2>
              </div>
              <p className="section-body rv d2">Every service is integrated into a single performance loop where creative intelligence, AI execution, search demand, and paid growth reinforce each other.</p>
            </div>
            <div className="services-grid-wrap rv d2">
              {services.map((service) => (
                <article className="svc" key={service.n}>
                  <div className="svc-top"><span className="svc-num">{service.n}</span><span className="svc-tag">{service.tag}</span></div>
                  <h3 className="svc-title">{service.title}</h3>
                  <p className="svc-desc">{service.desc}</p>
                  <a className="svc-arrow" href="#book">Explore <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing-signal" className="pricing-signal">
          <div className="section-inner">
            <p className="pricing-text">Retainer packages from ₹50,000/month · Project work from ₹1,00,000 · Custom enterprise pricing available</p>
            <a className="pricing-cta" href="#book">Get a free quote →</a>
          </div>
        </section>

        <section id="seo" aria-labelledby="seo-title">
          <div className="section-inner seo-layout">
            <div>
              <p className="section-tag rv">SEO Growth System</p>
              <h2 id="seo-title" className="section-title rv d1">Rank with intent.<br /><em>Convert with content.</em></h2>
              <p className="section-body rv d2">OrbitClick Media builds SEO like a performance engine: technical foundations, branded search authority, Hyderabad local SEO, commercial keyword strategy, AI-search-friendly content, and conversion-focused pages that keep compounding after ads stop running.</p>
              <div className="seo-grid rv d3">
                {[
                  "Technical SEO architecture and crawl-ready page structure",
                  "Keyword intent mapping that matches commercial demand",
                  "Search-friendly content systems for brands and local audiences",
                  "Conversion-first page design and schema-driven signals",
                ].map((item) => (
                  <article className="seo-card" key={item}>
                    <span>•</span>
                    <h3>{item}</h3>
                  </article>
                ))}
              </div>
            </div>
            <div className="seo-panel rv d2">
              <div className="seo-score">
                <div className="seo-orbit" aria-hidden="true"><strong>SEO</strong></div>
                <div className="seo-score-copy">
                  <h3>Organic visibility engineered for premium brands.</h3>
                  <p>We deliver the technical foundations, content systems, and audience-first optimization that make creative campaigns easier to scale.</p>
                </div>
              </div>
              <ul className="seo-checklist">
                <li>SEO audit and technical fixes for faster crawlability</li>
                <li>Commercial keyword strategy and landing page mapping</li>
                <li>Schema, local signals, and branded search authority</li>
                <li>Content systems designed for conversion and discovery</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title">
          <div className="section-inner">
            <div className="work-header">
              <div>
                <p className="section-tag rv">Featured Work</p>
                <h2 id="work-title" className="section-title rv d1">Creative outcomes that<br /><em>define categories.</em></h2>
              </div>
              <a className="btn-ghost rv d2" href="/work">All Case Studies</a>
            </div>
            <div className="work-grid">
              {caseStudies.slice(0, 3).map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <div className="section-inner">
            <p className="section-tag rv">Why OrbitClick Media</p>
            <h2 id="about-title" className="section-title rv d1">Traditional agencies<br />are <em>holding you back.</em></h2>
            <div className="why-grid-wrap rv d2">
              <div className="why-head"><span>Criteria</span><span>Traditional Agency</span><span className="col-us">OrbitClick Media</span></div>
              {comparisons.map(([criteria, traditional, orbitclick]) => (
                <div className="why-row" key={criteria}><span className="why-crit">{criteria}</span><span className="why-trad"><span className="why-trad-x">x</span>{traditional}</span><span className="why-us"><span className="why-check">✓</span>{orbitclick}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" aria-labelledby="process-title">
          <div className="section-inner">
            <div className="process-layout">
              <div className="process-sticky">
                <p className="section-tag rv">Process</p>
                <h2 id="process-title" className="section-title rv d1">Five phases.<br /><em>One</em> outcome.</h2>
                <p className="section-body rv d2 process-copy">A battle-tested operating system that moves from discovery to measurable scale without sacrificing quality.</p>
                <a className="btn-primary rv d3" href="#book">Start Your Project</a>
              </div>
              <div className="steps-wrap">
                <div className="steps-line" aria-hidden="true" />
                {steps.map((step, index) => (
                  <article className={`step rv d${index + 1}`} key={step.n}>
                    <div className="step-dot-wrap" aria-hidden="true"><div className="step-dot" /></div>
                    <div className="step-body"><div className="step-meta"><span className="step-num">{step.n}</span><span className="step-sep" /><h3 className="step-title">{step.title}</h3></div><p className="step-desc">{step.desc}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" aria-labelledby="pricing-title">
          <div className="section-inner">
            <div className="services-header">
              <div>
                <p className="section-tag rv">Pricing</p>
                <h2 id="pricing-title" className="section-title rv d1">Transparent packages for every growth stage.</h2>
              </div>
              <p className="section-body rv d2">Simple, tiered offerings designed to help new brands launch, growth teams scale, and enterprise brands run high-performance campaigns.</p>
            </div>
            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.tier} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <section id="founder" aria-labelledby="founder-title" className="founder-section">
          <div className="section-inner">
            <div className="founder-layout">
              <div className="founder-image">
                <div className="founder-placeholder" style={{ background: "#FF6B1A" }}>
                  <span className="founder-initials">HG</span>
                </div>
              </div>
              <div className="founder-content">
                <p className="section-tag rv">FOUNDER</p>
                <h2 id="founder-title" className="section-title rv d1">Hi, I'm Harshini Geesala.</h2>
                <p className="founder-role">Founder & Creative Director, OrbitClick Media</p>
                <div className="founder-text">
                  <p>I started OrbitClick Media because I saw a gap that frustrated me as a creator — agencies that were either great at creative but clueless about data, or obsessed with metrics but producing forgettable content. OrbitClick is my answer to that: a studio that treats every brand with the precision of a performance marketer and the eye of a filmmaker.</p>
                  <p>Based in Hyderabad, we work with brands across India and globally — helping them grow through AI-powered content, cinematic storytelling, and campaigns that actually convert.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" aria-labelledby="testimonials-title">
          <div className="testi-inner">
            <div className="testi-head">
              <p className="section-tag rv inline-tag">Client Results</p>
              <h2 id="testimonials-title" className="section-title rv d1">Brands that trusted<br /><em>the orbit.</em></h2>
            </div>
            <div className="testi-grid">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title">
          <div className="section-inner">
            <p className="section-tag rv">AI Search Answers</p>
            <h2 id="faq-title" className="section-title rv d1">Clear signals for<br /><em>people and search engines.</em></h2>
            <div className="faq-grid rv d2">
              {faqs.map(([question, answer]) => (
                <article className="faq-card" key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" aria-labelledby="cta-title">
          <div className="cta-rings" aria-hidden="true"><div className="cta-ring ring-large" /><div className="cta-ring ring-mid" /><div className="cta-ring ring-small" /></div>
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-inner">
            <p className="section-tag rv inline-tag">Ready to grow?</p>
            <h2 id="cta-title" className="cta-title rv d1">Build a brand that<br /><em>looks future-ready.</em></h2>
            <p className="cta-body rv d2">Book a complimentary 30-minute strategy session. We will show you where your biggest growth levers are and how OrbitClick Media can help you pull them.</p>
            <div className="cta-actions rv d3">
              <a className="btn-primary cta-button" href="#book">Book a Strategy Call</a>
              <a className="btn-ghost cta-button" href="#work">View Case Studies</a>
            </div>
            <p className="cta-note rv d4">No commitment · Response within 2 hours · Complimentary audit included</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <a href="/" className="nav-logo" aria-label="OrbitClick Media home">
            <span className="logo-orb" aria-hidden="true"><span className="logo-core" /></span>
            <span className="logo-text">Orbit<span>Click</span> Media</span>
          </a>
          <span className="footer-copy">© 2026 OrbitClick Media. Founded by Harshini Geesala in Hyderabad, India.</span>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/919515445781?text=Hi%20OrbitClick%2C%20I%27d%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.325 0-2.626-.401-3.728-1.16l-.268-.159-.277.045c-.969.157-1.88.561-2.63 1.193l-.196.164.012.293c.145 3.577 2.8 6.645 6.304 7.287l.305.045.157-.252c.8-1.286 1.262-2.783 1.262-4.378-.001-1.141-.28-2.22-.795-3.168l-.147-.264-.232-.036z" />
        </svg>
      </a>
    </>
  );
}
