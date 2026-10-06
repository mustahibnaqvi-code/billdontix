'use client'

import { useState } from 'react'

export default function LeadFormSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practice: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to API route / CRM
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-header">
          <div className="contact-eyebrow">Free Consultation</div>
          <h2 className="contact-title">Request Your Free Billing Audit</h2>
          <p className="contact-subtitle">
            Tell us about your practice and we&apos;ll identify your top revenue opportunities — no
            commitment required.
          </p>
        </div>

        <div className="contact-form-card">
          {submitted ? (
            <div className="contact-success">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="22" stroke="var(--color-teal)" strokeWidth="2" />
                <path d="M15 24l7 7 11-14" stroke="var(--color-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>We&apos;ll be in touch within 24 hours!</h3>
              <p>Thank you for reaching out. A billing specialist will review your information and contact you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-fields-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="contact-input"
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="contact-input"
                    placeholder="Smith"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-fields-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact-input"
                    placeholder="jane@practice.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="contact-input"
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="practice">Practice Name</label>
                <input
                  id="practice"
                  name="practice"
                  type="text"
                  className="contact-input"
                  placeholder="Smith Family Dental"
                  value={form.practice}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="message">
                  Tell us about your billing challenges (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  placeholder="e.g. high denial rate, AR over 90 days, software used..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="contact-submit">
                Request My Free Audit
              </button>

              <p className="contact-disclaimer">
                We respect your privacy. Your information is never shared or sold.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
