const rows = [
  { metric: 'Annual Salary', inHouse: '$45,000–$65,000', revix: 'Included', highlight: false },
  { metric: 'Benefits & Taxes', inHouse: '$15,000–$22,000', revix: 'Included', highlight: true },
  { metric: 'Training & Certification', inHouse: '$3,000–$8,000/yr', revix: 'Included', highlight: false },
  { metric: 'Turnover & Rehiring', inHouse: '$10,000–$30,000', revix: 'None', highlight: true },
  { metric: 'Claims Processing Time', inHouse: '5–7 Business Days', revix: '24–48 Hours', highlight: false },
  { metric: 'Days Sales Outstanding', inHouse: '45–60 Days', revix: '18–22 Days', highlight: true },
  { metric: 'Denial Recovery Rate', inHouse: '60–70%', revix: '97.4%', highlight: false },
  { metric: 'Total Annual Cost', inHouse: '$73,000–$125,000+', revix: 'Starting at $999/mo', highlight: true },
]

export default function CompareSection() {
  return (
    <section className="compare-section" id="compare">
      <div className="compare-inner">
        <div className="compare-header">
          <div className="compare-eyebrow">Side-by-Side Comparison</div>
          <h2 className="compare-title">In-House Billing vs. Revix Plus</h2>
          <p className="compare-subtitle">
            See exactly where the numbers fall — and why outsourcing wins on every metric.
          </p>
        </div>

        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr className="compare-thead-row">
                <th className="compare-th compare-th-metric">Performance Indicators</th>
                <th className="compare-th compare-th-inhouse">In-House Billing</th>
                <th className="compare-th compare-th-revix">
                  Outsourced{' '}
                  <span style={{ color: 'var(--color-teal-glow)' }}>Revix Plus</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.metric}
                  className={`compare-tr ${row.highlight ? 'compare-tr-highlight' : i % 2 === 0 ? 'compare-tr-light' : 'compare-tr-dark'}`}
                >
                  <td className="compare-td compare-td-metric">{row.metric}</td>
                  <td className="compare-td compare-td-inhouse">{row.inHouse}</td>
                  <td className="compare-td compare-td-revix">
                    <span className="compare-teal-check" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" fill="var(--color-teal)" opacity="0.2" />
                        <path d="M5 8l2.5 2.5L11 6" stroke="var(--color-teal-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {row.revix}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="compare-footer-note">
          * Estimates based on industry averages. Individual results vary by practice size and payer mix.
        </p>
      </div>
    </section>
  )
}
