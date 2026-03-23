export const TestimonialCard = ({ testimonial }) => (
  <article className="card testimonial-card">
    <p>“{testimonial.quote}”</p>
    <div>
      <strong>{testimonial.name}</strong>
      <span>{testimonial.role}</span>
    </div>
  </article>
)
