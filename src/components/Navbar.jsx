import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks, firm } from '../utils/constants'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <span>{firm.name}</span>
          <small>Corporate Law Advisors</small>
        </Link>
      <div
        className={`nav-overlay ${menuOpen ? 'open' : ''}`.trim()}
        role="presentation"
        onClick={handleNavClick}
      />
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`.trim()}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === '/'}
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="nav-cta-link" to="/contact" onClick={handleNavClick}>
            Schedule a consult
          </Link>
        </nav>
        <Link className="btn btn-outline nav-cta" to="/contact">
          Schedule a consult
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
