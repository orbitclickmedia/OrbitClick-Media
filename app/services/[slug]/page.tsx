import { notFound } from "next/navigation";
import { ConversionCTA } from "@/components/ConversionCTA";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { getService, services } from "@/lib/content";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.shortTitle, path: `/services/${service.slug}` }])} />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <main>
        <section className="page-hero service-hero" aria-labelledby="service-title">
          <div className="section-inner split-hero">
            <div>
              <p className="hero-tag"><span className="hero-tag-dot" />{service.keyword}</p>
              <h1 id="service-title" className="page-title">{service.title} by OrbitClick Media.</h1>
              <p className="page-lede">{service.description}</p>
              <div className="hero-actions">
                <a className="btn-primary" href="/contact">Book a Service Call</a>
                <a className="btn-ghost" href="/case-studies">View Case Studies</a>
              </div>
            </div>
            <aside className="lead-panel" aria-label={`${service.shortTitle} enquiry`}>
              <h2>Request a {service.shortTitle} plan</h2>
              <p>Share your goal and OrbitClick Media will map the fastest route to better visibility, creative quality, and conversions.</p>
              <LeadForm compact />
            </aside>
          </div>
        </section>

        <section aria-labelledby="problem-title">
          <div className="section-inner content-grid">
            <article className="content-card rv">
              <p className="section-tag">Problem</p>
              <h2 id="problem-title">{service.problem}</h2>
            </article>
            <article className="content-card rv d1">
              <p className="section-tag">OrbitClick Media Solution</p>
              <h2>{service.solution}</h2>
            </article>
          </div>
        </section>

        <section aria-labelledby="outcomes-title">
          <div className="section-inner">
            <p className="section-tag rv">What You Get</p>
            <h2 id="outcomes-title" className="section-title rv d1">A Hyderabad-focused {service.shortTitle.toLowerCase()} system built for measurable growth.</h2>
            <div className="seo-grid rv d2">
              {service.outcomes.map((outcome) => (
                <article className="seo-card" key={outcome}>
                  <span>✓</span>
                  <h3>{outcome}</h3>
                  <p>Designed to strengthen OrbitClick Media's service relevance, buyer trust, and conversion path.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-title">
          <div className="section-inner">
            <p className="section-tag rv">FAQ</p>
            <h2 id="faq-title" className="section-title rv d1">{service.shortTitle} questions, answered.</h2>
            <div className="faq-grid rv d2">
              {service.faqs.map(([question, answer]) => (
                <article className="faq-card" key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ConversionCTA title={`Ready to grow with ${service.shortTitle}?`} />
      </main>
    </>
  );
}
