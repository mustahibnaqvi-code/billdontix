const trustItems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 3L4 8v8c0 7 5.5 13.5 12 15 6.5-1.5 12-8 12-15V8L16 3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M11 16l3.5 3.5L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'HIPAA Compliant',
    body: 'Full HIPAA compliance with encrypted data handling and strict privacy protocols protecting your patients.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M4 14h24" stroke="currentColor" strokeWidth="2" />
        <path d="M10 20h4M18 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'No Long-Term Contracts',
    body: 'Month-to-month flexibility with no lock-in periods. We earn your business every month through results.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M6 27c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Dedicated Billing Specialist',
    body: 'Your own certified specialist who knows your practice, software, and payer mix inside and out.',
  },
]

export default function TrustSignalsSection() {
  return (
    <section className="trust-section">
      <div className="trust-inner">
        <div className="trust-header">
          <div className="trust-eyebrow">Why Practices Trust Us</div>
          <h2 className="trust-title">Built for Dental Practices, Not General Billing</h2>
        </div>

        <div className="trust-grid">
          {trustItems.map((item) => (
            <div key={item.title} className="trust-card">
              <div className="trust-icon">{item.icon}</div>
              <h3 className="trust-card-title">{item.title}</h3>
              <p className="trust-card-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
