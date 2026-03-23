import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getServiceBySlug } from '../services/serviceService'
import { SectionTitle } from '../components/SectionTitle'

export const ServiceDetails = () => {
  const { slug } = useParams()
  const [service, setService] = useState(null)

  useEffect(() => {
    if (!slug) return
    getServiceBySlug(slug).then(setService)
  }, [slug])

  if (!service) {
    return (
      <div className="page">
        <section className="section">
          <h2>Service not found</h2>
          <p>Please return to the practice areas page to explore available services.</p>
          <Link className="btn btn-outline" to="/services">
            View all services
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="section hero-secondary">
        <div>
          <span className="eyebrow">Practice area</span>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
        </div>
        <div className="info-card">
          <h3>What we deliver</h3>
          <ul>
            {service.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Engagement model"
          title="Structured advisory with partner oversight"
          description="We define scope, risk analysis, and deliverables upfront to keep counsel business-aligned."
        />
        <div className="two-column">
          <div>
            <h3>Discovery & risk mapping</h3>
            <p>
              We analyze your transaction or dispute landscape, define regulatory exposure, and
              align on success metrics.
            </p>
          </div>
          <div>
            <h3>Execution & documentation</h3>
            <p>
              Senior lawyers lead negotiations, drafting, and stakeholder coordination for a
              defensible, efficient outcome.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
