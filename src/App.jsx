import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { DisclaimerModal } from './components/DisclaimerModal'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetails } from './pages/ServiceDetails'
import { Team } from './pages/Team'
import { Blog } from './pages/Blog'
import { BlogDetails } from './pages/BlogDetails'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { ThankYou } from './pages/ThankYou'
import { firm } from './utils/constants'

const AppShell = () => {
  const location = useLocation()
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('ba_disclaimer_accepted') === 'true'
    setShowDisclaimer(!accepted)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showDisclaimer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showDisclaimer])

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('ba_disclaimer_accepted', 'true')
    setShowDisclaimer(false)
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    document.body.classList.add('reveal-ready')
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.classList.contains('reveal')) {
            observer.observe(node)
          }
          node.querySelectorAll?.('.reveal').forEach((child) => observer.observe(child))
        })
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      document.body.classList.remove('reveal-ready')
    }
  }, [location.pathname])

  return (
    <div className="app">
      <Navbar />
      <DisclaimerModal open={showDisclaimer} onAccept={handleAcceptDisclaimer} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <div
        className={`mobile-sticky-actions ${showDisclaimer ? 'hidden' : ''}`.trim()}
        aria-hidden={showDisclaimer}
      >
        <a className="sticky-btn call" href={`tel:${firm.phone.replace(/\\D/g, '')}`}>
          Call now
        </a>
        <a
          className="sticky-btn whatsapp"
          href={`https://wa.me/${firm.phone.replace(/\\D/g, '')}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
