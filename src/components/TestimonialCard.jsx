export const TestimonialCard = ({ testimonial, delay = 0 }) => (
  <article className="card testimonial-card reveal" style={{ '--reveal-delay': `${delay}ms` }}>
    <p>“{testimonial.quote}”</p>
    <div>
      <strong>{testimonial.name}</strong>
      <span>{testimonial.role}</span>
    </div>
  </article>
)
