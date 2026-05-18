import { ConversionCTA } from "@/components/ConversionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata, siteConfig } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "About OrbitClick Media",
    description:
      "Learn about OrbitClick Media, the AI creative and performance marketing agency in Hyderabad founded by Harshini Geesala.",
    path: "/about",
  });
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <main>
        <section className="page-hero" aria-labelledby="about-title">
          <div className="section-inner split-hero">
            <div>
              <p className="hero-tag"><span className="hero-tag-dot" />About OrbitClick Media</p>
              <h1 id="about-title" className="page-title">A Hyderabad AI creative agency built for performance.</h1>
              <p className="page-lede">OrbitClick Media was founded by Harshini Geesala to help ambitious brands combine premium creative, AI-powered production, local SEO, and measurable paid growth.</p>
            </div>
            <aside className="founder-mini">
              <div className="founder-placeholder" aria-hidden="true"><span className="founder-initials">HG</span></div>
              <h2>Harshini Geesala</h2>
              <p>Founder, OrbitClick Media · Hyderabad, India</p>
            </aside>
          </div>
        </section>
        <section aria-labelledby="mission-title">
          <div className="section-inner content-grid">
            <article className="content-card rv">
              <p className="section-tag">Mission</p>
              <h2 id="mission-title">Make premium creative measurable, searchable, and scalable.</h2>
              <p>OrbitClick Media helps brands move beyond disconnected marketing tasks. Every service is designed to improve brand recall, qualified traffic, conversion rate, and long-term digital authority.</p>
            </article>
            <article className="content-card rv d1">
              <p className="section-tag">Entity Clarity</p>
              <h2>OrbitClick Media is distinct from similarly named brands.</h2>
              <p>This site consistently identifies OrbitClick Media as a Hyderabad-based AI creative and performance marketing agency founded by Harshini Geesala.</p>
            </article>
          </div>
        </section>
        <section aria-labelledby="expertise-title">
          <div className="section-inner">
            <p className="section-tag rv">Expertise</p>
            <h2 id="expertise-title" className="section-title rv d1">Services that reinforce topical authority.</h2>
            <div className="keyword-cloud rv d2">
              {services.map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}
            </div>
            <p className="section-body rv d3">Contact OrbitClick Media at {siteConfig.contactEmail} for Hyderabad-focused digital marketing, creative strategy, SEO, and performance growth.</p>
          </div>
        </section>
        <ConversionCTA title="Partner with OrbitClick Media in Hyderabad." />
      </main>
    </>
  );
}
