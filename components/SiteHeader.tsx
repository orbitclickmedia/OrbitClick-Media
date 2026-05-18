import { primaryNav } from "@/lib/content";
import { siteConfig } from "@/lib/seo";

export function SiteHeader() {
  return (
    <nav id="main-nav" aria-label="Primary navigation">
      <a href="/" className="nav-logo" aria-label="OrbitClick Media home">
        <span className="logo-orb" aria-hidden="true"><span className="logo-core" /></span>
        <span className="logo-text">Orbit<span>Click</span> Media</span>
      </a>
      <div className="nav-links">
        {primaryNav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </div>
      <div className="nav-cta-group">
        <a className="nav-cta" href="/contact">Book a Call</a>
        <a className="nav-whatsapp" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </nav>
  );
}
