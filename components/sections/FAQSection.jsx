'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How quickly can you start billing for my practice?',
    a: "Most practices are fully onboarded within 5–7 business days. We handle credentialing, software access, and payer enrollment in parallel so there's no gap in your revenue cycle.",
  },
  {
    q: 'Do I need to change my practice management software?',
    a: 'No. We work directly inside your existing software — Dentrix, Eaglesoft, Open Dental, Curve, and more. No migration, no retraining, no disruption to your workflow.',
  },
  {
    q: 'What makes you different from other dental billing companies?',
    a: "Three things: dental-only focus (we don't dilute our expertise across specialties we don't know), certified specialists on every account (not offshore generalists), and complete transparency — you see every metric in real time.",
  },
  {
    q: 'How are your fees structured?',
    a: "We charge a percentage of collections — typically 4–7% depending on practice size and services required. No setup fees, no long-term contracts, no hidden charges. You pay more only when you collect more.",
  },
  {
    q: 'Are you HIPAA compliant?',
    a: "Yes — fully. We sign a Business Associate Agreement (BAA) with every practice, maintain encrypted data handling, and conduct regular compliance audits. Patient data protection is non-negotiable.",
  },
  {
    q: 'What happens if a claim gets denied?',
    a: "We catch most denials before they happen through pre-submission auditing. For claims that do get denied, we handle the entire appeals process — root-cause analysis, corrected claims, and peer-to-peer reviews when needed.",
  },
  {
    q: 'Can you handle medical billing for dental procedures?',
    a: "Yes — and this is one of our specialties. We identify and bill procedures that qualify for medical reimbursement (sleep apnea, TMJ, oral surgery complications, trauma) using ICD-10 and CPT codes alongside CDT codes.",
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="faq-eyebrow">Frequently Asked Questions</div>
          <h2 className="faq-title">Everything You Want to Know</h2>
          <p className="faq-subtitle">
            Common questions from practices considering outsourced dental billing.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item ${openIdx === idx ? 'faq-item--open' : 'faq-item--closed'}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                aria-expanded={openIdx === idx}
              >
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openIdx === idx ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </button>
              {openIdx === idx && (
                <div className="faq-answer faq-answer--open">
                  <p className="faq-answer-text">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
