import { SiteEffects } from "@/components/site-effects";
import { createMetadata, siteConfig } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    path: "/",
  });
}

const services = [
  { n: "01", title: "AI Video Production", desc: "Cinematic, AI-accelerated brand films and ads for launches, social campaigns, product stories, and high-performing paid creative.", tag: "Creative" },
  { n: "02", title: "Motion Graphics", desc: "Frame-perfect motion systems for brands that need premium explainers, product animation, identity motion, and scroll-stopping short-form content.", tag: "Design" },
  { n: "03", title: "Performance Marketing", desc: "Revenue-engineered growth campaigns where every creative decision is connected to conversion data, audience intent, and measurable ROI.", tag: "Growth" },
  { n: "04", title: "Meta Ads & Google Ads", desc: "Paid media infrastructure for Meta Ads and Google Ads, including campaign architecture, testing roadmaps, landing pages, and creative iteration.", tag: "Paid" },
  { n: "05", title: "SEO & Content", desc: "Technical SEO, local SEO, topical authority, landing pages, and content systems built to rank for commercial and branded search demand.", tag: "Organic" },
  { n: "06", title: "Brand Identity", desc: "Premium visual systems for sharper market perception: positioning, marks, palettes, typography, messaging, and brand usage architecture.", tag: "Brand" },
  { n: "07", title: "Web Design & Development", desc: "Fast, crawlable, conversion-focused websites with modern UX, strong Core Web Vitals, and a brand experience that feels unmistakably premium.", tag: "Tech" },
  { n: "08", title: "Creative Strategy", desc: "Audience research, content strategy, AI workflows, offer positioning, and creative operating systems that compress production cycles.", tag: "Strategy" },
];

const works = [
  { title: "NovaTech Brand System", cat: "AI Video + Identity", result: "+340% Brand Recall", bg: "linear-gradient(135deg,#050d1a,#0c2244,#050d1a)", wide: true },
  { title: "Luxe Fashion Campaigns", cat: "Meta Ads + Creative", result: "8.4x ROAS", bg: "linear-gradient(135deg,#0a0515,#1a0a30,#0a0515)", wide: false },
  { title: "FinPulse App Launch", cat: "Motion + Web", result: "200K Organic Views", bg: "linear-gradient(135deg,#020d12,#041e26,#020d12)", wide: false },
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

const testimonials = [
  { q: "OrbitClick made our brand feel category-defining in 90 days. The AI video quality is genuinely cinematic and the turnaround was exceptional.", name: "Sarah Chen", role: "CMO, NovaTech Industries", init: "SC" },
  { q: "8.4x ROAS in month one. The creative systems they built do not just convert, they compound. We doubled our ad spend with confidence.", name: "Marcus Osei", role: "Founder, Luxe Collective", init: "MO" },
  { q: "Zero to 200,000 organic followers in four months. Their content strategy is far ahead of what typical agencies are doing.", name: "Priya Kapoor", role: "Growth Director, FinPulse", init: "PK" },
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
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href={`mailto:${siteConfig.contactEmail}`}>Book a Call</a>
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
                <a className="btn-primary" href={`mailto:${siteConfig.contactEmail}?subject=OrbitClick%20Media%20Strategy%20Call`}>Book a Strategy Call</a>
                <a className="btn-ghost" href="#work">View Case Studies</a>
              </div>
              <dl className="hero-stats" aria-label="OrbitClick Media performance highlights">
                <div><dt className="stat-val">150+</dt><dd className="stat-label">Brands served</dd></div>
                <div><dt className="stat-val">8x</dt><dd className="stat-label">Average ROAS</dd></div>
                <div><dt className="stat-val">$24M+</dt><dd className="stat-label">Revenue driven</dd></div>
              </dl>
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
                  <a className="svc-arrow" href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(service.title)}`}>Explore <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="seo" aria-labelledby="seo-title">
          <div className="section-inner seo-layout">
            <div>
              <p className="section-tag rv">SEO Growth System</p>
              <h2 id="seo-title" className="section-title rv d1">Rank with intent.<br /><em>Convert with content.</em></h2>
              <p className="section-body rv d2">OrbitClick Media builds SEO like a performance engine: technical foundations, branded search authority, Hyderabad local SEO, commercial keyword strategy, AI-search-friendly content, and conversion-focused pages that keep compounding after ads stop running.</p>
              <div className="seo-grid rv d3">
                {["Technical SEO", "Keyword Strategy", "Content Authority", "Local Visibility"].map((title, index) => (
                  <article className="seo-card" key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{index === 0 ? "Speed, structure, crawlability, schema, indexing, and search-friendly architecture." : index === 1 ? "Commercial intent mapping for high-value services, local searches, and buyer journeys." : index === 2 ? "Topic clusters, landing pages, entity signals, FAQs, and brand-led content designed to earn trust." : "Google Business Profile readiness, location signals, local keywords, and city-based search growth."}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="seo-panel rv d2">
              <div className="seo-score">
                <div className="seo-orbit" aria-hidden="true"><strong>SEO</strong></div>
                <div className="seo-score-copy">
                  <h3>Organic visibility engineered for premium brands.</h3>
                  <p>We connect search demand to landing pages, creative content, technical health, and measurable business outcomes.</p>
                </div>
              </div>
              <div className="seo-bars" aria-label="SEO readiness metrics">
                {[
                  ["Technical Health", "96%"],
                  ["Content Depth", "88%"],
                  ["Search Intent Fit", "92%"],
                  ["Conversion Readiness", "84%"],
                ].map(([label, value]) => (
                  <div className="seo-bar-row" key={label}>
                    <div className="seo-bar-top"><span>{label}</span><span>{value}</span></div>
                    <div className="seo-bar"><span style={{ width: value }} /></div>
                  </div>
                ))}
              </div>
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
              <a className="btn-ghost rv d2" href={`mailto:${siteConfig.contactEmail}?subject=OrbitClick%20Media%20Case%20Studies`}>All Case Studies</a>
            </div>
            <div className="work-grid">
              {works.map((work, index) => (
                <article className={`work-card rv d${index + 1}${work.wide ? " wide" : ""}`} key={work.title}>
                  <div className="work-bg">
                    <div className="work-bg-inner" style={{ background: work.bg }}><div className="work-orb-wrap"><div className="work-orb" /></div></div>
                    <div className="work-badge">{work.cat}</div>
                    <div className="work-overlay"><div><p className="work-overlay-cat">{work.cat}</p><h3 className="work-overlay-title">{work.title}</h3><p className="work-overlay-result">↑ {work.result}</p></div></div>
                  </div>
                  <div className="work-footer"><h3 className="work-footer-title">{work.title}</h3><span className="work-footer-result">↑ {work.result}</span></div>
                </article>
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
                <a className="btn-primary rv d3" href={`mailto:${siteConfig.contactEmail}?subject=Start%20an%20OrbitClick%20Media%20Project`}>Start Your Project</a>
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

        <section id="testimonials" aria-labelledby="testimonials-title">
          <div className="testi-inner">
            <div className="testi-head">
              <p className="section-tag rv inline-tag">Client Results</p>
              <h2 id="testimonials-title" className="section-title rv d1">Brands that trusted<br /><em>the orbit.</em></h2>
            </div>
            <div className="testi-grid">
              {testimonials.map((testimonial, index) => (
                <figure className={`tcard rv d${index + 1}`} key={testimonial.name}>
                  <div className="tcard-stars" aria-label="5 out of 5 stars"><span>★★★★★</span></div>
                  <blockquote className="tcard-quote">"{testimonial.q}"</blockquote>
                  <figcaption className="tcard-author"><div className="tcard-avatar">{testimonial.init}</div><div><div className="tcard-name">{testimonial.name}</div><div className="tcard-role">{testimonial.role}</div></div></figcaption>
                </figure>
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
              <a className="btn-primary cta-button" href={`mailto:${siteConfig.contactEmail}?subject=OrbitClick%20Media%20Strategy%20Call`}>Book a Strategy Call</a>
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
            <a href={`mailto:${siteConfig.contactEmail}`}>Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
