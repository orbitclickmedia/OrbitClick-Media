import { ConversionCTA } from "@/components/ConversionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogIdeas, blogPosts } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({
    title: "AI Marketing Blog Hyderabad",
    description:
      "OrbitClick Media blog on AI marketing, Meta Ads, Google Ads, SEO, branding, AI video production, motion graphics, lead generation, and performance marketing.",
    path: "/blog",
  });
}

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <main>
        <section className="page-hero" aria-labelledby="blog-title">
          <div className="section-inner">
            <p className="hero-tag"><span className="hero-tag-dot" />OrbitClick Media Insights</p>
            <h1 id="blog-title" className="page-title">AI marketing, SEO, paid media, and creative strategy for Hyderabad brands.</h1>
            <p className="page-lede">The OrbitClick Media blog builds topical authority around AI marketing, Meta Ads, Google Ads, SEO, branding, video marketing, motion graphics, performance marketing, and lead generation.</p>
          </div>
        </section>
        <section aria-labelledby="articles-title">
          <div className="section-inner">
            <h2 id="articles-title" className="section-title rv">Featured SEO articles.</h2>
            <div className="blog-grid rv d1">
              {blogPosts.map((post) => (
                <article className="blog-card" key={post.slug}>
                  <span>{post.category} · {post.readTime}</span>
                  <h3><a href={`/blog/${post.slug}`}>{post.title}</a></h3>
                  <p>{post.description}</p>
                  <a className="svc-arrow" href={`/blog/${post.slug}`}>Read article <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section aria-labelledby="ideas-title">
          <div className="section-inner">
            <p className="section-tag rv">Content Strategy</p>
            <h2 id="ideas-title" className="section-title rv d1">Suggested blog topics to expand local topical authority.</h2>
            <div className="keyword-cloud rv d2">
              {blogIdeas.map((idea) => <span key={idea}>{idea}</span>)}
            </div>
          </div>
        </section>
        <ConversionCTA title="Turn content into qualified demand." />
      </main>
    </>
  );
}
