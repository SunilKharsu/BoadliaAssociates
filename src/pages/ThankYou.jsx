import { Link } from 'react-router-dom'

export const ThankYou = () => (
  <div className="page">
    <section className="section">
      <h1>Thank you</h1>
      <p>Your inquiry has been received. Our team will respond within one business day.</p>
      <Link className="btn btn-outline" to="/">
        Return to home
      </Link>
    </section>
  </div>
)
