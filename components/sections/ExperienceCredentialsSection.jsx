const badges = [
  { code: 'AAPC', full: 'American Academy of Professional Coders' },
  { code: 'AHIMA', full: 'American Health Information Management Association' },
  { code: 'CCS', full: 'Certified Coding Specialist' },
  { code: 'CDT', full: 'Current Dental Terminology' },
]

export default function ExperienceCredentialsSection() {
  return (
    <section className="credentials-section">
      <div className="credentials-inner">
        <div className="credentials-card">
          <div className="credentials-content">
            <div className="credentials-eyebrow">Our Credentials</div>
            <h2 className="credentials-title">28 Years Combined Experience</h2>
            <p className="credentials-body">
              Our leadership team brings nearly three decades of dental billing, coding, and
              practice management expertise. Every specialist on our team is certified — not just
              trained.
            </p>
          </div>
          <div className="credentials-badges">
            {badges.map((b) => (
              <div key={b.code} className="credentials-badge" title={b.full}>
                <span className="credentials-badge-code">{b.code}</span>
                <span className="credentials-badge-certified">Certified</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
