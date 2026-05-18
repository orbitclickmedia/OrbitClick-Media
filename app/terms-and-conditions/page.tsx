import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata, siteConfig } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "Terms and Conditions",
    description: "Terms and Conditions for OrbitClick Media, an AI creative and performance marketing agency in Hyderabad, India.",
    path: "/terms-and-conditions",
  });
}

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms and Conditions", path: "/terms-and-conditions" }])} />
      <main>
        <section className="page-hero legal-page" aria-labelledby="terms-title">
          <div className="section-inner article-body">
            <p className="hero-tag"><span className="hero-tag-dot" />Legal</p>
            <h1 id="terms-title" className="page-title">Terms and Conditions</h1>
            <p className="page-lede">These terms outline general website and enquiry conditions for OrbitClick Media. Project-specific contracts, scopes, timelines, and payment terms should be agreed separately.</p>
            <h2>Website use</h2>
            <p>You may browse the OrbitClick Media website for information about AI creative, performance marketing, SEO, paid ads, branding, web development, and related services.</p>
            <h2>Service enquiries</h2>
            <p>Submitting a form or sending a WhatsApp message does not create a client relationship until OrbitClick Media confirms scope, pricing, timelines, and terms in writing.</p>
            <h2>Content and intellectual property</h2>
            <p>OrbitClick Media website copy, visuals, layouts, and service descriptions are provided for informational use and may not be copied without permission.</p>
            <h2>Contact</h2>
            <p>For terms questions, contact OrbitClick Media at {siteConfig.contactEmail}.</p>
          </div>
        </section>
      </main>
    </>
  );
}
