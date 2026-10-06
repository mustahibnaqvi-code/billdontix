import Link from 'next/link'

const microItems = [
  'No Setup Fees',
  'No Long-Term Contracts',
  'HIPAA Compliant',
]

export default function FinalCTASection() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <div className="cta-glass-card">
          <div className="cta-content">
            <div className="cta-eyebrow">Ready to Get Started?</div>
            <h2 className="cta-title">
              Start Recovering Revenue This Month
            </h2>
            <p className="cta-body">
              Join 500+ dental practices that collect more, stress less, and grow faster with
              Revix Plus managing their billing.
            </p>
            <div className="cta-btns">
              <Link href="#contact" className="btn-primary">
                Get Your Free Billing Audit
              </Link>
              <a href="tel:+15551234567" className="btn-ghost-white">
                Call Us Today
              </a>
            </div>
            <div className="cta-microcopy">
              {microItems.map((item) => (
                <div key={item} className="cta-micro-item">
                  <span className="cta-micro-dot" aria-hidden="true">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="cta-image-side" aria-hidden="true">
            {/* Decorative background image placeholder */}
          </div>
        </div>
      </div>
    </section>
  )
}
