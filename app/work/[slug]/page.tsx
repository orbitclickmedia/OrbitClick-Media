import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";

const getCaseStudy = (slug: string) => caseStudies.find((item) => item.slug === slug);

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Case study not found" };
  }

  return {
    title: `${caseStudy.clientName} | Case Study | OrbitClick Media`,
    description: caseStudy.overview,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main>
      <section className="section" aria-labelledby="case-study-title">
        <div className="section-inner">
          <div className="work-header">
            <div>
              <p className="section-tag rv">Case Study</p>
              <h1 id="case-study-title" className="section-title rv d1">{caseStudy.clientName}</h1>
            </div>
            <p className="section-body rv d2">{caseStudy.industry} — {caseStudy.servicesUsed.join(" • ")}</p>
          </div>
          <div className="work-card">
            <div className="work-bg" style={{ marginBottom: "1rem" }}>
              <div className="work-bg-inner" style={{ background: caseStudy.imageUrl ? `url(${caseStudy.imageUrl}) center/cover no-repeat` : "linear-gradient(135deg,#060816,#111827)" }}>
                <div className="work-orb-wrap"><div className="work-orb" /></div>
              </div>
            </div>
            <div className="work-footer" style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <h2 className="work-footer-title">{caseStudy.result}</h2>
              <span className="work-footer-result">{caseStudy.metric}</span>
            </div>
            <div className="seo-card" style={{ marginTop: "1.5rem" }}>
              <h3>Overview</h3>
              <p>{caseStudy.overview}</p>
            </div>
            <div className="seo-card" style={{ marginTop: "1rem" }}>
              <h3>Challenge</h3>
              <p>{caseStudy.challenge}</p>
            </div>
            <div className="seo-card" style={{ marginTop: "1rem" }}>
              <h3>Solution</h3>
              <p>{caseStudy.solution}</p>
              <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "var(--muted)" }}>
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome} style={{ marginBottom: ".6rem" }}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="seo-card" style={{ marginTop: "1rem" }}>
              <h3>Testimonial</h3>
              <blockquote style={{ fontStyle: "italic", color: "rgba(200,215,255,.8)", lineHeight: 1.8 }}>
                “{caseStudy.testimonial.quote}”
              </blockquote>
              <p style={{ marginTop: "1rem", color: "var(--text)", fontWeight: 600 }}>
                {caseStudy.testimonial.name}, {caseStudy.testimonial.title} at {caseStudy.testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
