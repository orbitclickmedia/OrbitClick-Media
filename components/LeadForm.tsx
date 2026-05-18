export function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? "lead-form compact" : "lead-form"} action="/contact" aria-label="OrbitClick Media lead generation form">
      <label>
        <span>Name</span>
        <input name="name" type="text" placeholder="Your name" autoComplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" placeholder="you@company.com" autoComplete="email" />
      </label>
      <label>
        <span>Service</span>
        <select name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Meta Ads</option>
          <option>Google Ads</option>
          <option>SEO</option>
          <option>AI Video Production</option>
          <option>Web Development</option>
          <option>Branding</option>
        </select>
      </label>
      {!compact && (
        <label className="lead-form-wide">
          <span>Project brief</span>
          <textarea name="message" rows={4} placeholder="Tell us about your growth goal" />
        </label>
      )}
      <button className="btn-primary lead-form-wide" type="submit">Request Strategy Call</button>
    </form>
  );
}
