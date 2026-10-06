const problems = [
  {
    id: 'aging-ar',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Aging AR Over 90 Days',
    desc: 'Claims sitting unpaid drain cash flow. Most practices have 15–25% of AR over 90 days — money that should already be collected.',
    percent: 78,
    barColor: 'var(--color-gold)',
    barLabel: '78% of practices struggle',
  },
  {
    id: 'denials',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
        <path d="M10 10l8 8M18 10l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'High Claim Denial Rates',
    desc: 'Incorrect coding, missing attachments, and eligibility errors lead to denial rates of 10–30% — costing thousands in rework and write-offs.',
    percent: 65,
    barColor: '#e55',
    barLabel: '65% cite denials as top issue',
  },
  {
    id: 'medical',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M14 9v10M9 14h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Missed Medical Billing',
    desc: 'Sleep apnea, TMJ, and trauma cases qualify for medical billing — an untapped revenue stream most dental practices overlook entirely.',
    percent: 88,
    barColor: 'var(--color-teal)',
    barLabel: '88% miss medical opportunities',
  },
  {
    id: 'staffing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M2 24c0-4.4 3.6-8 8-8M18 16c4.4 0 8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Staffing Challenges',
    desc: 'High turnover, training costs, and the difficulty of keeping up with payer rule changes create chronic billing team instability.',
    percent: 71,
    barColor: 'var(--color-slate)',
    barLabel: '71% face staffing issues',
  },
]

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="problem-inner">
        <div className="problem-header">
          <div className="problem-eyebrow">Identify the Problem</div>
          <h2 className="problem-title">
            Is Your Back Office Costing You Thousands?
          </h2>
          <p className="problem-subtitle">
            Recognize these common revenue leaks that affect most dental practices — and discover
            how we plug them.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.id} className="problem-card">
              <div className="problem-card-icon">{p.icon}</div>
              <h3 className="problem-card-title">{p.title}</h3>
              <p className="problem-card-desc">{p.desc}</p>
              <div className="problem-progress-wrap">
                <div className="problem-progress-bar">
                  <div
                    className="problem-progress-fill"
                    style={{ width: `${p.percent}%`, background: p.barColor }}
                  />
                </div>
                <span className="problem-progress-label">{p.barLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
