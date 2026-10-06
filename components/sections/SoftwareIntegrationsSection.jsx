const softwareLogos = [
  'Dentrix',
  'Eaglesoft',
  'Open Dental',
  'Curve Dental',
  'Carestream',
  'Dentimax',
  'Dolphin',
  'ABELDent',
  'Dentrix',
  'Eaglesoft',
  'Open Dental',
  'Curve Dental',
]

export default function SoftwareIntegrationsSection() {
  return (
    <section className="software-section">
      <div className="software-inner">
        <div className="software-eyebrow">Seamless Integration</div>
        <h2 className="software-title">
          Expertise Across Leading Dental Software
        </h2>
        <p className="software-subtitle">
          We work directly inside your existing practice management system — no migration, no
          disruption, no learning curve.
        </p>

        {/* Marquee strip */}
        <div className="software-marquee-wrap" aria-hidden="true">
          <div className="marquee-track">
            {[...softwareLogos, ...softwareLogos].map((name, i) => (
              <div key={i} className="software-logo-pill">
                <span className="software-logo-dot" />
                <span className="software-logo-text">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
