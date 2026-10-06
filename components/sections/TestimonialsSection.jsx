const testimonials = [
  {
    stars: 5,
    quote:
      "Revix Plus transformed our billing department. Our collection rate jumped from 78% to 96% in just three months. The team is responsive, knowledgeable, and feels like part of our practice.",
    badge: 'General Dentistry',
    name: 'Dr. Sarah Mitchell',
    role: 'Owner, Mitchell Family Dental — Phoenix, AZ',
  },
  {
    stars: 5,
    quote:
      "We were leaving $40K a month on the table with our in-house billing. Revix identified the gaps in our first week and had us fully optimized within 30 days. Worth every penny.",
    badge: 'Oral Surgery',
    name: 'Dr. James Ortega',
    role: 'Partner, Southwest Oral Surgery Group — Dallas, TX',
  },
  {
    stars: 5,
    quote:
      "The medical cross-coding service alone pays for the entire engagement. They found procedures we'd been treating as dental-only for years that qualify for medical billing. Game changer.",
    badge: 'Sleep Apnea',
    name: 'Dr. Priya Nair',
    role: 'Director, SleepWell Dental — Chicago, IL',
  },
]

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1l1.8 5.4H15l-4.5 3.3 1.7 5.3L8 12l-4.2 3 1.7-5.3L1 6.4h5.2z" />
    </svg>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="testimonials-eyebrow">Client Success Stories</div>
          <h2 className="testimonials-title">
            Practices That Made the Switch — and Never Looked Back
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <span className="testimonial-badge">{t.badge}</span>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
