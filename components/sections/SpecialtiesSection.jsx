import Link from 'next/link'

const specialties = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M14 20h12M20 14v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: 'General Dentistry',
    desc: 'Routine exams, restorations, preventive care, and everything that keeps patients coming back.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 8c-6.6 0-12 5.4-12 12 0 4 2 7.5 5 9.7V32h14v-2.3c3-2.2 5-5.7 5-9.7 0-6.6-5.4-12-12-12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 32v2M24 32v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: 'Oral Surgery',
    desc: 'Extractions, implants, bone grafting, and complex surgical procedures with full medical cross-billing.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 32c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: 'Orthodontics',
    desc: 'Traditional braces, clear aligners, retainers, and full treatment plan billing from records to retention.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M10 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M8 22l4 4M32 22l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: 'Periodontics & Endodontics',
    desc: 'Surgical and non-surgical perio procedures, root canal therapy, and retreatments with precision coding.',
  },
]

export default function SpecialtiesSection() {
  return (
    <section className="specialties-section">
      <div className="specialties-inner">
        <div className="specialties-header">
          <div className="specialties-eyebrow">We Bill Every Specialty</div>
          <h2 className="specialties-title">
            Deep Expertise Across All Dental Disciplines
          </h2>
          <p className="specialties-subtitle">
            Whether you run a general practice or a multi-specialty group, we have certified
            specialists who understand your procedures, codes, and payer requirements.
          </p>
        </div>

        <div className="specialties-grid">
          {specialties.map((s) => (
            <div key={s.name} className="specialty-card">
              <div className="specialty-icon">{s.icon}</div>
              <h3 className="specialty-name">{s.name}</h3>
              <p className="specialty-desc">{s.desc}</p>
              <Link href="#contact" className="specialty-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
