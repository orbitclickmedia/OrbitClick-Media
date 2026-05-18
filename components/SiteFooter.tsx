import { primaryNav, services } from "@/lib/content";
import { siteConfig } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <a href="/" className="nav-logo" aria-label="OrbitClick Media home">
          <span className="logo-orb" aria-hidden="true"><span className="logo-core" /></span>
          <span className="logo-text">Orbit<span>Click</span> Media</span>
        </a>
        <span className="footer-copy">© 2026 OrbitClick Media. Founded by Harshini Geesala in Hyderabad, India.</span>
        <div className="footer-links">
          {primaryNav.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms-and-conditions">Terms</a>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </div>
      </div>
      <div className="footer-service-links" aria-label="OrbitClick Media services">
        {services.map((service) => (
          <a href={`/services/${service.slug}`} key={service.slug}>{service.shortTitle}</a>
        ))}
      </div>
    </footer>
  );
}
