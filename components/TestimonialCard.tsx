type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarUrl?: string;
  linkedinUrl?: string;
};

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  avatarUrl,
  linkedinUrl,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <figure className="tcard">
      <div className="tcard-stars" aria-label="Verified testimonial">
        <span>★★★★★</span>
      </div>
      <blockquote className="tcard-quote">"{quote}"</blockquote>
      <figcaption className="tcard-author">
        <div className="tcard-avatar">
          {avatarUrl ? <img src={avatarUrl} alt={name} /> : initials}
        </div>
        <div>
          <div className="tcard-name">
            {name}
            {linkedinUrl ? (
              <a className="verified-badge" href={linkedinUrl} target="_blank" rel="noreferrer noopener" aria-label="Verified LinkedIn reference">
                ✓
              </a>
            ) : null}
          </div>
          <div className="tcard-role">{title}, {company}</div>
        </div>
      </figcaption>
    </figure>
  );
}
