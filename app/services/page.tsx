import { ConversionCTA } from "@/components/ConversionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "Digital Marketing Services Hyderabad",
    description:
      "Explore OrbitClick Media services for Hyderabad brands: Meta Ads, Google Ads, SEO, AI video production, web development, branding, and performance marketing.",
    path: "/services",
  });
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <main>
        <section className="page-hero" aria-labelledby="services-index-title">
          <div className="section-inner">
            <p className="hero-tag"><span className="hero-tag-dot" />Digital Marketing Agency Hyderabad</p>
            <h1 id="services-index-title" className="page-title">AI creative and performance marketing services by OrbitClick Media.</h1>
            <p className="page-lede">OrbitClick Media builds connected growth systems for Hyderabad brands: paid media, SEO, AI video, motion graphics, branding, web development, and conversion strategy working as one revenue engine.</p>
          </div>
        </section>
        <section aria-labelledby="all-services-title">
          <div className="section-inner">
            <h2 id="all-services-title" className="section-title rv">Service architecture built for Google and buyers.</h2>
            <div className="services-grid-wrap rv d1">
              {services.map((service, index) => (
                <article className="svc" key={service.slug}>
                  <div className="svc-top"><span className="svc-num">{String(index + 1).padStart(2, "0")}</span><span className="svc-tag">{service.keyword}</span></div>
                  <h3 className="svc-title">{service.title}</h3>
                  <p className="svc-desc">{service.description}</p>
                  <a className="svc-arrow" href={`/services/${service.slug}`}>Open service page <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ConversionCTA title="Need a focused Hyderabad growth system?" />
      </main>
    </>
  );
}
