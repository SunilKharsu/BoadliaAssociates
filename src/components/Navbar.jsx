import { NavLink, Link } from 'react-router-dom'
import { navLinks, firm } from '../utils/constants'

export const Navbar = () => (
  <header className="navbar">
    <div className="container nav-inner">
      <Link className="brand" to="/">
        <span>{firm.name}</span>
        <small>Corporate Law Advisors</small>
      </Link>
      <nav className="nav-links">
        {navLinks.map((link) => (
          <NavLink key={link.label} to={link.href} end={link.href === '/'}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Link className="btn btn-outline" to="/contact">
        Schedule a consult
      </Link>
    </div>
  </header>
)
