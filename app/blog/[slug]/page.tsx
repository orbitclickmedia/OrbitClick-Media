import { notFound } from "next/navigation";
import { ConversionCTA } from "@/components/ConversionCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getBlogPost, services } from "@/lib/content";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { createMetadata, siteConfig } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])} />
      <JsonLd data={articleSchema(post)} />
      <main>
        <article className="article" aria-labelledby="article-title">
          <header className="page-hero article-hero">
            <div className="section-inner">
              <p className="hero-tag"><span className="hero-tag-dot" />{post.category}</p>
              <h1 id="article-title" className="page-title">{post.title}</h1>
              <p className="page-lede">{post.description}</p>
              <p className="article-meta">By {siteConfig.founder}, OrbitClick Media · {post.readTime} · Hyderabad, India</p>
            </div>
          </header>
          <div className="section-inner article-body">
            {post.sections.map((section) => (
              <section key={section.heading} aria-labelledby={section.heading.toLowerCase().replaceAll(" ", "-")}>
                <h2 id={section.heading.toLowerCase().replaceAll(" ", "-")}>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <aside className="article-links">
              <h2>Related OrbitClick Media services</h2>
              <div className="keyword-cloud">
                {services.map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.shortTitle}</a>)}
              </div>
            </aside>
          </div>
        </article>
        <ConversionCTA title="Need an article-backed growth strategy?" />
      </main>
    </>
  );
}
