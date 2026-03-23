import { Link } from 'react-router-dom'
import { firm, navLinks } from '../utils/constants'

export const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <div className="brand footer-brand">
          <span>{firm.name}</span>
          <small>Corporate Law & Litigation</small>
        </div>
        <p className="footer-note">
          Full-service corporate law firm based in New Delhi advising businesses across India and
          international markets.
        </p>
      </div>
      <div>
        <h4>Quick links</h4>
        <div className="footer-links">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4>Reach us</h4>
        <p>{firm.address}</p>
        <p>{firm.phone}</p>
        <p>{firm.email}</p>
        <p>{firm.officeHours}</p>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 {firm.name}. All rights reserved.</span>
      <span>Disclaimer | Terms & Conditions</span>
    </div>
  </footer>
)
