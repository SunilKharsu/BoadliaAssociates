import { useEffect, useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { ServiceCard } from '../components/ServiceCard'
import { getServices } from '../services/serviceService'

export const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices().then(setServices)
  }, [])

  return (
    <div className="page">
    <section className="section hero-secondary reveal">
        <div>
          <span className="eyebrow">Practice Areas</span>
          <h1>End-to-end legal advisory for complex businesses.</h1>
          <p>
            Our practice areas mirror the breadth of leading corporate law firms, blending
            strategic counsel with meticulous execution across transactions and disputes.
          </p>
        </div>
        <div className="info-card">
          <h3>Signature strengths</h3>
          <p>Corporate law, dispute resolution, IP, technology, energy, and infrastructure.</p>
          <h3>Delivery model</h3>
          <p>Senior-led advisory with partner oversight and dedicated client teams.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Service Portfolio"
          title="Focused, scalable, and board-ready support"
          description="Choose a practice area to view details, team strengths, and engagement modes."
        />
      <div className="grid three">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} delay={index * 80} />
        ))}
      </div>
    </section>
  </div>
)
}
