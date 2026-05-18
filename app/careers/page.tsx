import { ConversionCTA } from "@/components/ConversionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata, siteConfig } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "Careers at OrbitClick Media",
    description:
      "Explore careers at OrbitClick Media in Hyderabad for AI creative, SEO, paid media, motion graphics, branding, and web development talent.",
    path: "/careers",
  });
}

export default function CareersPage() {
  const roles = ["Performance Marketing Strategist", "AI Video Editor", "Motion Graphics Designer", "SEO Content Strategist", "Next.js Web Developer"];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])} />
      <main>
        <section className="page-hero" aria-labelledby="careers-title">
          <div className="section-inner">
            <p className="hero-tag"><span className="hero-tag-dot" />Careers Hyderabad</p>
            <h1 id="careers-title" className="page-title">Join OrbitClick Media's AI creative and performance team.</h1>
            <p className="page-lede">OrbitClick Media is building a high-signal creative and growth team in Hyderabad across paid media, SEO, AI video, motion design, branding, and modern web development.</p>
          </div>
        </section>
        <section aria-labelledby="roles-title">
          <div className="section-inner">
            <h2 id="roles-title" className="section-title rv">Future roles.</h2>
            <div className="blog-grid rv d1">
              {roles.map((role) => (
                <article className="blog-card" key={role}>
                  <span>Hyderabad / Hybrid</span>
                  <h3>{role}</h3>
                  <p>Send your portfolio and a short note to {siteConfig.contactEmail}. OrbitClick Media looks for sharp taste, ownership, and measurable thinking.</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ConversionCTA title="Want to build future-ready marketing systems?" />
      </main>
    </>
  );
}
