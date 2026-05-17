import type { PricingPlan } from "@/lib/pricing";

type PricingCardProps = PricingPlan;

export function PricingCard({ tier, tagline, price, features, popular, ctaLabel, ctaHref }: PricingCardProps) {
  return (
    <article className={`pricing-card${popular ? " popular" : ""}`}>
      {popular ? <div className="pricing-badge">Most popular</div> : null}
      <div className="pricing-header">
        <p className="pricing-tier">{tier}</p>
        <p className="pricing-tagline">{tagline}</p>
      </div>
      <p className="pricing-price">{price}</p>
      <ul className="pricing-features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a className="pricing-cta-btn" href={ctaHref}>{ctaLabel}</a>
    </article>
  );
}
