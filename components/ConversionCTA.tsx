import { siteConfig } from "@/lib/seo";

export function ConversionCTA({
  eyebrow = "Ready to grow?",
  title = "Build a search-visible brand with creative that converts.",
  body = "Book a complimentary OrbitClick Media strategy session and get a clear plan for SEO, paid ads, AI video, web, and brand growth in Hyderabad.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section id="cta" aria-labelledby="cta-title">
      <div className="cta-rings" aria-hidden="true"><div className="cta-ring ring-large" /><div className="cta-ring ring-mid" /><div className="cta-ring ring-small" /></div>
      <div className="cta-glow" aria-hidden="true" />
      <div className="cta-inner">
        <p className="section-tag rv inline-tag">{eyebrow}</p>
        <h2 id="cta-title" className="cta-title rv d1">{title}</h2>
        <p className="cta-body rv d2">{body}</p>
        <div className="cta-actions rv d3">
          <a className="btn-primary cta-button" href="/contact">Book a Strategy Call</a>
          <a className="btn-ghost cta-button" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp OrbitClick Media</a>
        </div>
        <p className="cta-note rv d4">Hyderabad-based · AI-powered · SEO, creative, paid media, and conversion strategy</p>
      </div>
    </section>
  );
}
