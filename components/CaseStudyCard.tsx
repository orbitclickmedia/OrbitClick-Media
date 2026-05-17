import Link from "next/link";

type CaseStudyCardProps = {
  slug: string;
  clientName: string;
  industry: string;
  servicesUsed: string[];
  challenge: string;
  result: string;
  metric: string;
  imageUrl?: string;
};

export function CaseStudyCard({
  slug,
  clientName,
  industry,
  servicesUsed,
  challenge,
  result,
  metric,
  imageUrl,
}: CaseStudyCardProps) {
  const background = imageUrl
    ? `url(${imageUrl}) center/cover no-repeat`
    : "linear-gradient(135deg,#060816,#111827)";

  return (
    <Link href={`/work/${slug}`} className="work-card">
      <div className="work-bg">
        <div className="work-bg-inner" style={{ background }}>
          <div className="work-orb-wrap">
            <div className="work-orb" />
          </div>
        </div>
        <div className="work-badge">{industry}</div>
        <div className="work-overlay">
          <div>
            <p className="work-overlay-cat">{clientName}</p>
            <h3 className="work-overlay-title">{challenge}</h3>
            <p className="work-overlay-result">{metric}</p>
          </div>
        </div>
      </div>
      <div className="work-footer">
        <div>
          <h3 className="work-footer-title">{clientName}</h3>
          <p className="work-footer-result">{result}</p>
        </div>
        <span className="work-footer-tag">{servicesUsed.join(" • ")}</span>
      </div>
    </Link>
  );
}
