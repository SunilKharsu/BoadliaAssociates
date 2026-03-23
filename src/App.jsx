import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

export const App = () => {
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

  return (
    <BrowserRouter>
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
      </div>
    </BrowserRouter>
  )
}
