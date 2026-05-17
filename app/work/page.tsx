import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export default function WorkPage() {
  return (
    <main>
      <section className="section" aria-labelledby="work-index-title">
        <div className="section-inner">
          <div className="work-header">
            <div>
              <p className="section-tag rv">Work</p>
              <h1 id="work-index-title" className="section-title rv d1">Case studies built for revenue, retention, and brand lift.</h1>
            </div>
            <p className="section-body rv d2">These template case studies are placeholders ready for your real campaign data and client narratives.</p>
          </div>
          <div className="work-grid">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
