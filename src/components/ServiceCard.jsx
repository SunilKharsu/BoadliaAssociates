import { Link } from 'react-router-dom'

export const ServiceCard = ({ service, delay = 0 }) => (
  <article className="card service-card reveal" style={{ '--reveal-delay': `${delay}ms` }}>
    <h3>{service.title}</h3>
    <p>{service.summary}</p>
    <ul>
      {service.highlights.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <Link className="text-link" to={`/services/${service.slug}`}>
      View details
    </Link>
  </article>
)
