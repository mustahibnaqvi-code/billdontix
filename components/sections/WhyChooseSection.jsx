'use client'

import { useState } from 'react'

const whyItems = [
  {
    num: '01',
    title: 'Dedicated Account Management',
    body: 'Work directly with one certified billing specialist who understands your practice, your providers, your payer mix, and your workflows. No call queues. No handoffs. Real relationships.',
  },
  {
    num: '02',
    title: 'Transparent Pricing — Pay for Results',
    body: 'Our performance-based model means we only succeed when you do. No hidden fees, no setup costs — just a straightforward percentage of what we collect for your practice.',
  },
  {
    num: '03',
    title: 'Work Within Your Existing Software',
    body: 'We work inside Eaglesoft, Dentrix, Open Dental, Curve, Carestream, and more. No migration, no disruption — just seamless billing support in the tools you already use.',
  },
  {
    num: '04',
    title: 'Actionable Reporting',
    body: 'Get clear, practice-specific reports on AR aging, denial trends, collection rates, and payer performance — so you always know where your revenue stands and what we\'re doing about it.',
  },
]

const barData = [
  { label: 'Jan', revix: 88, industry: 58 },
  { label: 'Feb', revix: 92, industry: 62 },
  { label: 'Mar', revix: 85, industry: 55 },
  { label: 'Apr', revix: 95, industry: 65 },
  { label: 'May', revix: 90, industry: 60 },
  { label: 'Jun', revix: 97, industry: 68 },
]

export default function WhyChooseSection() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="why-section">
      <div className="why-inner">
        {/* Left: analytics card */}
        <div className="why-left">
          <div className="why-analytics-card">
            <div className="why-analytics-header">
              <div>
                <div className="why-analytics-title">Practice Recovery Analytics</div>
                <div className="why-analytics-sub">Real-time dental billing tracking</div>
              </div>
              <span className="why-connected-badge">● CONNECTED</span>
            </div>

            <div className="why-stats-row why-stats-row--two">
              <div className="why-stat-box">
                <span className="why-stat-lbl">Claims Collected</span>
                <span className="why-stat-val">$180,450</span>
              </div>
              <div className="why-stat-divider" />
              <div className="why-stat-box">
                <span className="why-stat-lbl">First-Pass Approval</span>
                <span className="why-stat-val">97.4%</span>
              </div>
            </div>

            <div className="why-chart-area">
              <div className="why-chart-header">
                <span className="why-chart-title">Reimbursement Velocity</span>
                <span className="why-chart-sub">vs. Industry Average</span>
              </div>
              <div className="why-bars">
                {barData.map((b) => (
                  <div key={b.label} className="why-bar-group">
                    <div className="why-bar-pair">
                      <div
                        className="why-bar why-bar--revix"
                        style={{ height: `${(b.revix / 100) * 90}px` }}
                        title={`Revix Plus ${b.revix}%`}
                      />
                      <div
                        className="why-bar why-bar--industry"
                        style={{ height: `${(b.industry / 100) * 90}px` }}
                        title={`Industry ${b.industry}%`}
                      />
                    </div>
                    <span className="why-bar-label">{b.label}</span>
                  </div>
                ))}
              </div>
              <div className="why-chart-legend">
                <span className="why-legend-dot why-legend-dot--revix" />
                <span className="why-legend-lbl">Revix Plus</span>
                <span className="why-legend-dot why-legend-dot--industry" />
                <span className="why-legend-lbl">Industry Avg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="why-right">
          <div className="why-eyebrow">Why Practices Choose Revix Plus</div>
          <h2 className="why-section-title">
            The Difference That Shows Up in Your Collections
          </h2>

          <div className="why-accordion">
            {whyItems.map((item, idx) => (
              <div
                key={item.num}
                className={`why-item ${openIdx === idx ? 'why-item--active' : 'why-item--inactive'}`}
              >
                <button
                  className="why-item-btn"
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span className="why-item-num">{item.num}</span>
                  <span className="why-item-title">{item.title}</span>
                  <span className="why-item-chevron" aria-hidden="true">
                    {openIdx === idx ? '−' : '+'}
                  </span>
                </button>
                {openIdx === idx && (
                  <div className="why-item-body">
                    <p>{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
