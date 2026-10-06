import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* Left column */}
        <div className="hero-content-col">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Trusted by 500+ Dental Practices Nationwide
          </div>

          <h1 className="hero-title">
            Expert Dental Billing Services for{' '}
            <span className="hero-title-accent">Growing Practices</span>
          </h1>

          <p className="hero-body">
            Maximize your collections, reduce claim denials, and free your team from administrative
            burdens with our specialized dental billing solutions.
          </p>

          <div className="hero-btns">
            <Link href="#contact" className="btn-primary">
              Get Free Billing Audit
            </Link>
            <Link href="#services" className="btn-ghost-white">
              Explore Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-val">97.4%</span>
              <span className="hero-stat-lbl">Clean Claim Rate</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-val">$180K+</span>
              <span className="hero-stat-lbl">Average Recovery</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-val">48hrs</span>
              <span className="hero-stat-lbl">Claim Submission</span>
            </div>
          </div>
        </div>

        {/* Right column — hero image */}
        <div className="hero-image-col">
          <div className="hero-image-wrap">
            <Image
              src="/images/hero-image.png"
              alt="Dental billing dashboard"
              width={595}
              height={595}
              className="hero-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
