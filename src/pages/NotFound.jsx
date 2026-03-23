import { Link } from 'react-router-dom'

export const NotFound = () => (
  <div className="page">
    <section className="section reveal">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <Link className="btn btn-outline" to="/">
        Return home
      </Link>
    </section>
  </div>
)
