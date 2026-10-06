import Link from 'next/link'

export default function RevenueRecoverySection() {
  return (
    <section className="revenue-section">
      <div className="revenue-inner">
        {/* Left */}
        <div className="revenue-left">
          <div className="revenue-eyebrow">Revenue Recovery</div>
          <h2 className="revenue-title">
            Stop Losing <span className="revenue-title-accent">$50K+</span> Annually to Billing
            Errors &amp; Denials
          </h2>
          <p className="revenue-body">
            Most dental practices unknowingly leave significant revenue on the table due to coding
            errors, missed claims, and poor follow-up. Our proven system recovers what&apos;s yours.
          </p>
          <p className="revenue-body">
            Learn how our{' '}
            <a href="#services" className="revenue-ada-link">
              ADA-compliant billing processes
            </a>{' '}
            transform your practice&apos;s financial performance.
          </p>
          <div className="revenue-btns">
            <Link href="#contact" className="btn-primary">
              Start Recovery Today
            </Link>
            <Link href="#compare" className="btn-ghost-navy">
              See the Comparison
            </Link>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="revenue-right">
          <div className="revenue-stat-card revenue-stat-card--primary">
            <div className="revenue-stat-val">97.4%</div>
            <div className="revenue-stat-lbl">Clean Claim Rate</div>
            <div className="revenue-stat-note">Industry avg: 85%</div>
          </div>
          <div className="revenue-stat-card revenue-stat-card--secondary">
            <div className="revenue-stat-val">$180K+</div>
            <div className="revenue-stat-lbl">Average Annual Recovery</div>
            <div className="revenue-stat-note">Per practice</div>
          </div>
        </div>
      </div>
    </section>
  )
}
