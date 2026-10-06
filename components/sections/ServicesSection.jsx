import Link from 'next/link'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4L4 10v6c0 7.7 5.2 14.9 12 17 6.8-2.1 12-9.3 12-17v-6L16 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 16l2.5 2.5L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Insurance Verification',
    desc: 'Real-time eligibility checks before every appointment, eliminating surprises and reducing write-offs from coverage errors.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="2" />
        <path d="M10 18h6M10 22h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'CDT Coding',
    desc: 'Precise ADA/CDT code selection by certified billing specialists to maximize reimbursement while staying fully compliant.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Medical Billing',
    desc: 'Unlock cross-coding revenue for sleep apnea, TMJ, trauma, and other medically billable dental procedures.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M28 8L16 20 8 12l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Denial Management',
    desc: 'Systematic denial analysis, root-cause correction, and timely appeals to recover revenue your practice is owed.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 16h14M9 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Payment Posting',
    desc: 'Accurate, same-day posting of EOBs and ERAs with variance reconciliation, giving you a clear real-time picture.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M4 28c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Credentialing',
    desc: 'Fast, accurate credentialing and re-credentialing with all major dental payers so you get paid from day one.',
  },
]

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header">
          <div className="services-eyebrow">Complete Revenue-Cycle Support</div>
          <h2 className="services-title">
            Everything Your Practice Needs to Get Paid Faster
          </h2>
          <p className="services-subtitle">
            Our end-to-end dental billing suite covers every step of the revenue cycle, from
            eligibility to collections.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="services-card">
              <div className="services-icon">{s.icon}</div>
              <h3 className="services-card-title">{s.title}</h3>
              <p className="services-card-desc">{s.desc}</p>
              <Link href="#contact" className="services-card-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
