import { CalendarEmbed } from "@/components/CalendarEmbed";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata, siteConfig } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "Contact OrbitClick Media Hyderabad",
    description:
      "Contact OrbitClick Media for AI marketing, Meta Ads, Google Ads, SEO, AI video production, branding, web development, and performance marketing in Hyderabad.",
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <main>
        <section className="page-hero" aria-labelledby="contact-title">
          <div className="section-inner split-hero">
            <div>
              <p className="hero-tag"><span className="hero-tag-dot" />Contact OrbitClick Media</p>
              <h1 id="contact-title" className="page-title">Book a Hyderabad growth strategy call.</h1>
              <p className="page-lede">Tell OrbitClick Media what you want to grow. We will map the right mix of SEO, paid media, AI creative, web development, branding, and conversion strategy.</p>
              <div className="hero-actions">
                <a className="btn-primary" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                <a className="btn-ghost" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
              </div>
            </div>
            <aside className="lead-panel">
              <h2>Start your project</h2>
              <p>Use this lead form placeholder now, then connect it to your CRM or form backend before launch.</p>
              <LeadForm />
            </aside>
          </div>
        </section>
        <section aria-labelledby="calendar-title">
          <div className="section-inner">
            <p className="section-tag rv">Calendly Integration</p>
            <h2 id="calendar-title" className="section-title rv d1">Add your Calendly link here.</h2>
            <CalendarEmbed />
          </div>
        </section>
        <section aria-labelledby="contact-services-title">
          <div className="section-inner">
            <p className="section-tag rv">Popular Enquiries</p>
            <h2 id="contact-services-title" className="section-title rv d1">What OrbitClick Media can help with.</h2>
            <div className="keyword-cloud rv d2">
              {services.map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.shortTitle}</a>)}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
