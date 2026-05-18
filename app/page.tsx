import { CalendarEmbed } from "@/components/CalendarEmbed";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ConversionCTA } from "@/components/ConversionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { StatsPanel } from "@/components/StatsPanel";
import { TestimonialCard } from "@/components/TestimonialCard";
import { caseStudies } from "@/lib/case-studies";
import { homepageFaqs, services, targetKeywords } from "@/lib/content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { testimonials } from "@/lib/testimonials";

export function generateMetadata() {
  return createMetadata({
    title: "AI Creative & Performance Marketing Agency Hyderabad",
    description:
      "OrbitClick Media is a Hyderabad AI creative and performance marketing agency for Meta Ads, Google Ads, SEO, AI video production, branding, web development, and growth.",
    path: "/",
  });
}

const comparisons = [
  ["Creative approach", "Template-led campaigns", "Cinematic AI creative with performance strategy"],
  ["SEO architecture", "One-page websites", "Multi-page entity, service, local, and blog authority"],
  ["Paid media", "Set-and-forget campaigns", "Testing systems across hooks, offers, funnels, and ROAS"],
  ["Conversion", "Pretty pages", "Fast pages with proof, CTAs, forms, WhatsApp, and Calendly paths"],
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <JsonLd data={faqSchema(homepageFaqs)} />
      <main>
        <section id="hero" aria-labelledby="hero-title">
          <div className="hero-ambient" aria-hidden="true">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
          </div>
          <div className="hero-grid">
            <div>
              <p className="hero-tag"><span className="hero-tag-dot" />AI Marketing Agency Hyderabad</p>
              <h1 id="hero-title" className="hero-headline">
                <span className="line-glow">OrbitClick Media</span><br />
                <span className="line-dim">AI creative and</span><br />
                <span className="line-plain">performance growth.</span>
              </h1>
              <p className="hero-body">
                OrbitClick Media is a premium AI-powered creative and performance marketing agency in Hyderabad, India, founded by Harshini Geesala. We help brands grow with Meta Ads, Google Ads, SEO, AI video production, motion graphics, branding, web development, and conversion strategy.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="/contact">Book a Strategy Call</a>
                <a className="btn-ghost" href="/case-studies">View Case Studies</a>
              </div>
              <StatsPanel
                stats={[
                  { value: "8", label: "Core services" },
                  { value: "6", label: "SEO service pages" },
                  { value: "24/7", label: "Lead paths" },
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
                <div className="float-card card-b"><div className="card-b-label">Hyderabad Growth</div><div className="card-b-val">SEO + Ads</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" aria-labelledby="services-title">
          <div className="section-inner">
            <div className="services-header">
              <div>
                <p className="section-tag rv">Services</p>
                <h2 id="services-title" className="section-title rv d1">A full-funnel agency system for Hyderabad brands.</h2>
              </div>
              <p className="section-body rv d2">Each OrbitClick Media service has a dedicated SEO landing page so Google can understand the brand, the Hyderabad location, the founder, and the commercial services clearly.</p>
            </div>
            <div className="services-grid-wrap rv d2">
              {services.map((service, index) => (
                <article className="svc" key={service.slug}>
                  <div className="svc-top"><span className="svc-num">{String(index + 1).padStart(2, "0")}</span><span className="svc-tag">Hyderabad</span></div>
                  <h3 className="svc-title">{service.shortTitle}</h3>
                  <p className="svc-desc">{service.description}</p>
                  <a className="svc-arrow" href={`/services/${service.slug}`}>Explore {service.shortTitle} <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="seo" aria-labelledby="seo-title">
          <div className="section-inner seo-layout">
            <div>
              <p className="section-tag rv">Local SEO Architecture</p>
              <h2 id="seo-title" className="section-title rv d1">Built to help Google recognize OrbitClick Media.</h2>
              <p className="section-body rv d2">This website reinforces OrbitClick Media as a distinct Hyderabad entity through consistent naming, service relevance, founder signals, schema markup, internal links, sitemap coverage, and blog-led topical authority.</p>
              <div className="keyword-cloud rv d3" aria-label="Target SEO keywords">
                {targetKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
              </div>
            </div>
            <div className="seo-panel rv d2">
              <div className="seo-score">
                <div className="seo-orbit" aria-hidden="true"><strong>SEO</strong></div>
                <div className="seo-score-copy">
                  <h3>Entity-first technical SEO.</h3>
                  <p>Organization, LocalBusiness, Service, FAQ, Breadcrumb, Article, robots, sitemap, canonical metadata, semantic headings, and mobile-first UX work together.</p>
                </div>
              </div>
              <ul className="seo-checklist">
                <li>Dedicated pages for commercial Hyderabad service keywords</li>
                <li>Internal links between home, services, case studies, blog, about, and contact</li>
                <li>Lead forms, WhatsApp CTA, and Calendly placeholder routes</li>
                <li>Fast App Router pages ready for Vercel deployment</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title">
          <div className="section-inner">
            <div className="work-header">
              <div>
                <p className="section-tag rv">Case Studies</p>
                <h2 id="work-title" className="section-title rv d1">Performance stories ready for real client metrics.</h2>
              </div>
              <a className="btn-ghost rv d2" href="/case-studies">All Case Studies</a>
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
            <h2 id="about-title" className="section-title rv d1">Premium creative, serious performance, clearer search signals.</h2>
            <div className="why-grid-wrap rv d2">
              <div className="why-head"><span>Criteria</span><span>Common agency gap</span><span className="col-us">OrbitClick Media</span></div>
              {comparisons.map(([criteria, traditional, orbitclick]) => (
                <div className="why-row" key={criteria}><span className="why-crit">{criteria}</span><span className="why-trad"><span className="why-trad-x">x</span>{traditional}</span><span className="why-us"><span className="why-check">✓</span>{orbitclick}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="founder" aria-labelledby="founder-title" className="founder-section">
          <div className="section-inner founder-layout">
            <div className="founder-image" aria-hidden="true">
              <div className="founder-placeholder"><span className="founder-initials">HG</span></div>
            </div>
            <div className="founder-content">
              <p className="section-tag rv">Founder</p>
              <h2 id="founder-title" className="section-title rv d1">Founded by Harshini Geesala in Hyderabad.</h2>
              <p className="founder-role">Founder & Creative Director, OrbitClick Media</p>
              <div className="founder-text rv d2">
                <p>OrbitClick Media exists for brands that need sharper creative, stronger search visibility, and measurable marketing systems without feeling generic.</p>
                <p>The agency blends AI creative workflows with performance marketing discipline so campaigns look premium, load fast, get indexed, and convert.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="book" aria-labelledby="book-title">
          <div className="section-inner">
            <div className="book-header">
              <p className="section-tag rv">Calendly Placeholder</p>
              <h2 id="book-title" className="section-title rv d1">Book an OrbitClick Media strategy session.</h2>
              <p className="section-body rv d2">Add your Calendly URL in the embed component when ready. Until then, this section anchors the conversion journey for every service page.</p>
            </div>
            <CalendarEmbed />
          </div>
        </section>

        <section id="testimonials" aria-labelledby="testimonials-title">
          <div className="testi-inner">
            <div className="testi-head">
              <p className="section-tag rv inline-tag">Trust Signals</p>
              <h2 id="testimonials-title" className="section-title rv d1">Proof points that build confidence before the call.</h2>
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
            <p className="section-tag rv">FAQ</p>
            <h2 id="faq-title" className="section-title rv d1">Clear answers for customers and search engines.</h2>
            <div className="faq-grid rv d2">
              {homepageFaqs.map(([question, answer]) => (
                <article className="faq-card" key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ConversionCTA />
      </main>
    </>
  );
}
