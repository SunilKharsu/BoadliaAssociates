import { Link } from 'react-router-dom'
import { stats } from '../utils/constants'

export const HeroSection = ({ title, subtitle, ctaPrimary, ctaSecondary }) => (
  <section className="hero">
    <div className="hero-content">
      <span className="hero-badge">Full-service corporate law firm</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="hero-actions">
        <Link className="btn btn-primary" to={ctaPrimary.href}>
          {ctaPrimary.label}
        </Link>
        <Link className="btn btn-ghost" to={ctaSecondary.href}>
          {ctaSecondary.label}
        </Link>
      </div>
      <div className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="hero-panel">
      <div className="hero-card">
        <p className="hero-card-eyebrow">Why clients stay</p>
        <h3>Strategic counsel that is precise, discreet, and business-first.</h3>
        <p>
          We advise boards, founders, and investors on transactions, disputes, and regulatory
          readiness across India and international jurisdictions.
        </p>
        <div className="hero-card-footer">
          <span>New Delhi headquarters</span>
          <span>Multi-sector advisory</span>
        </div>
      </div>
      <div className="hero-grid">
        <div className="hero-tile">
          <h4>Trusted by global teams</h4>
          <p>Cross-border matters in technology, energy, media, and infrastructure.</p>
        </div>
        <div className="hero-tile">
          <h4>Board-ready insights</h4>
          <p>Clear risk narratives for CEOs, CFOs, and compliance heads.</p>
        </div>
      </div>
    </div>
  </section>
)
