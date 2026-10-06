'use client'

import { useState } from 'react'

function formatCurrency(n) {
  return '$' + Math.round(n).toLocaleString()
}

export default function ROICalculatorSection() {
  const [monthly, setMonthly] = useState('')
  const [rate, setRate] = useState('')
  const [providers, setProviders] = useState('')

  const monthlyNum = parseFloat(monthly) || 0
  const rateNum = parseFloat(rate) || 0
  const providersNum = parseInt(providers) || 1

  // Simple ROI estimate: improve collection rate by ~15% on current revenue
  const improvement = monthlyNum > 0 && rateNum > 0
    ? monthlyNum * (Math.min(rateNum + 15, 99) - rateNum) / 100 * 12 * providersNum
    : 0

  return (
    <section className="roi-section" id="roi">
      <div className="roi-inner">
        <div className="roi-header">
          <div className="roi-eyebrow">ROI POTENTIAL</div>
          <h2 className="roi-title">How Much Could You Recover?</h2>
          <p className="roi-subtitle">
            Enter your practice numbers and see your estimated annual recovery potential.
          </p>
        </div>

        <div className="roi-content">
          {/* Left: hero stat */}
          <div className="roi-left">
            <div className="roi-hero-stat">
              <div className="roi-hero-val">$180K+</div>
              <div className="roi-hero-lbl">Average annual recovery per practice</div>
              <div className="roi-hero-note">Based on 500+ client engagements</div>
            </div>
            <div className="roi-metrics">
              <div className="roi-metric">
                <span className="roi-metric-lbl">Clean Claim Rate</span>
                <span className="roi-metric-val">97.4%</span>
              </div>
              <div className="roi-metric">
                <span className="roi-metric-lbl">Avg DSO Reduction</span>
                <span className="roi-metric-val">−28 Days</span>
              </div>
              <div className="roi-metric">
                <span className="roi-metric-lbl">Denial Recovery</span>
                <span className="roi-metric-val">97.4%</span>
              </div>
            </div>
          </div>

          {/* Right: calculator */}
          <div className="roi-right">
            <div className="roi-form-title">Calculate Your Recovery</div>

            <div className="roi-field">
              <label className="roi-label" htmlFor="monthly-production">
                Monthly Production ($)
              </label>
              <input
                id="monthly-production"
                type="number"
                className="roi-input"
                placeholder="e.g. 80000"
                value={monthly}
                onChange={(e) => setMonthly(e.target.value)}
                min="0"
              />
            </div>

            <div className="roi-field">
              <label className="roi-label" htmlFor="collection-rate">
                Current Collection Rate (%)
              </label>
              <input
                id="collection-rate"
                type="number"
                className="roi-input"
                placeholder="e.g. 82"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                min="0"
                max="100"
              />
            </div>

            <div className="roi-field">
              <label className="roi-label" htmlFor="providers">
                Number of Providers
              </label>
              <input
                id="providers"
                type="number"
                className="roi-input"
                placeholder="e.g. 2"
                value={providers}
                onChange={(e) => setProviders(e.target.value)}
                min="1"
              />
            </div>

            <div className="roi-divider" />

            <div className="roi-result">
              <span className="roi-result-lbl">Estimated Annual Recovery</span>
              <span className="roi-result-val">
                {improvement > 0 ? formatCurrency(improvement) : '$—'}
              </span>
            </div>

            <a href="#contact" className="roi-btn">
              Get My Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
