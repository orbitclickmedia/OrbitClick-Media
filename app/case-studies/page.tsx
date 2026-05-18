import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ConversionCTA } from "@/components/ConversionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/case-studies";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "Digital Marketing Case Studies Hyderabad",
    description:
      "Explore OrbitClick Media case study templates for AI creative, SEO, Meta Ads, Google Ads, branding, web development, and performance marketing outcomes.",
    path: "/case-studies",
  });
}

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
      <main>
        <section className="page-hero" aria-labelledby="case-title">
          <div className="section-inner">
            <p className="hero-tag"><span className="hero-tag-dot" />Performance Marketing Case Studies</p>
            <h1 id="case-title" className="page-title">OrbitClick Media case studies for creative, search, and paid growth.</h1>
            <p className="page-lede">Use these case study structures to publish real Hyderabad and India client proof: challenge, OrbitClick Media solution, service mix, metrics, testimonials, and campaign outcomes.</p>
          </div>
        </section>
        <section aria-labelledby="case-grid-title">
          <div className="section-inner">
            <h2 id="case-grid-title" className="section-title rv">Featured growth narratives.</h2>
            <div className="work-grid">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
              ))}
            </div>
          </div>
        </section>
        <ConversionCTA title="Have a result worth scaling?" />
      </main>
    </>
  );
}
