export function CalendarEmbed() {
  const embedUrl = "https://calendly.com/orbitclickmedia";

  return (
    <section id="book" className="section booking-section" aria-labelledby="booking-title">
      <div className="section-inner">
        <div className="booking-copy">
          <p className="section-tag">Book a Call</p>
          <h2 id="booking-title" className="section-title">Schedule a time to discuss growth<br /><em>without the sales noise.</em></h2>
          <p className="section-body">Choose a time that works for your team and let us show you how OrbitClick Media makes creative and performance work together. This widget is your booking experience.</p>
        </div>
        <div className="booking-panel">
          <div className="calendar-card">
            <div className="calendar-frame">
              <iframe
                src={`${embedUrl}?embed_domain=orbitclickmedia.com&embed_type=Inline`}
                title="Book a session with OrbitClick Media"
                width="100%"
                height="720"
                frameBorder="0"
                scrolling="no"
              />
            </div>
            <p className="booking-note">If the inline scheduler does not load, <a href={embedUrl} target="_blank" rel="noopener noreferrer">open the booking page</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
