import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata, siteConfig } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "Privacy Policy",
    description: "Privacy Policy for OrbitClick Media, an AI creative and performance marketing agency in Hyderabad, India.",
    path: "/privacy-policy",
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }])} />
      <main>
        <section className="page-hero legal-page" aria-labelledby="privacy-title">
          <div className="section-inner article-body">
            <p className="hero-tag"><span className="hero-tag-dot" />Legal</p>
            <h1 id="privacy-title" className="page-title">Privacy Policy</h1>
            <p className="page-lede">OrbitClick Media respects your privacy. This policy explains how enquiries, contact details, analytics data, and project information may be collected and used.</p>
            <h2>Information we collect</h2>
            <p>When you contact OrbitClick Media, we may collect your name, email, phone number, company, service interest, project brief, and communication history.</p>
            <h2>How we use information</h2>
            <p>We use this information to respond to enquiries, prepare proposals, deliver marketing services, improve website performance, and understand demand for OrbitClick Media services in Hyderabad and India.</p>
            <h2>Third-party tools</h2>
            <p>The website may use analytics, form, calendar, advertising, hosting, and communication tools. These providers process data according to their own policies.</p>
            <h2>Contact</h2>
            <p>For privacy questions, contact OrbitClick Media at {siteConfig.contactEmail}.</p>
          </div>
        </section>
      </main>
    </>
  );
}
