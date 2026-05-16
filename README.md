# OrbitClick Media

Premium AI creative and performance marketing website built with Next.js 15 App Router.

## Production SEO Architecture

- Centralized SEO config in `lib/seo.ts`
- Dynamic page metadata with `generateMetadata()` in `app/page.tsx`
- Global metadata and viewport exports in `app/metadata.ts` and `app/viewport.ts`
- Crawl controls in `app/robots.ts`
- Dynamic sitemap in `app/sitemap.ts`
- Organization, LocalBusiness, ProfessionalService, WebSite, BreadcrumbList, and FAQ JSON-LD in `lib/schema.ts`
- Dynamic OpenGraph image in `app/opengraph-image.tsx`
- Dynamic favicon and Apple icon routes in `app/icon.tsx` and `app/apple-icon.tsx`
- Vercel-ready security, cache, compression, and image optimization config in `next.config.ts`

## Environment Variables

Set these in Vercel Project Settings:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@your-production-domain.com
NEXT_PUBLIC_CONTACT_PHONE=
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/yourhandle
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/your-company
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

`NEXT_PUBLIC_SITE_URL` is critical. It controls canonical URLs, sitemap URLs, OpenGraph URLs, robots host, and schema entity IDs.

## Deploy

```bash
npm install
npm run build
vercel --prod
```

## Google Search Console Setup

1. Add the production domain as a Domain property in Google Search Console.
2. Verify DNS ownership, or keep the existing HTML verification token already included in metadata.
3. Submit `https://your-production-domain.com/sitemap.xml`.
4. Use URL Inspection for the homepage and request indexing.
5. Confirm `robots.txt` returns allow rules at `https://your-production-domain.com/robots.txt`.
6. Confirm the canonical URL in the rendered source matches the live production domain.
7. Add or update the Google Business Profile for OrbitClick Media in Hyderabad, India and link it to the same domain.

## SEO Checklist

- Branded title: `OrbitClick Media | AI Creative & Performance Marketing Agency`
- Branded H1 includes `OrbitClick Media`
- Homepage copy targets `OrbitClick`, `OrbitClick Media Hyderabad`, `AI Creative Agency Hyderabad`, `Motion Graphics Agency Hyderabad`, `Performance Marketing Agency Hyderabad`, and `AI Video Production Agency India`
- All primary content is server-rendered, not injected after page load
- Canonical URL is generated from `NEXT_PUBLIC_SITE_URL`
- `robots.txt` allows crawling
- `sitemap.xml` exposes the canonical homepage
- JSON-LD defines the business entity, founder, location, services, social links, and FAQ answers
- OpenGraph and Twitter cards are generated dynamically
- Fonts use Next.js font optimization with `display: swap`
- Animations respect reduced-motion preferences
