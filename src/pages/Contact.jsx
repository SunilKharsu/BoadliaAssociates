import { SectionTitle } from '../components/SectionTitle'
import { ContactForm } from '../components/ContactForm'
import { firm, offices } from '../utils/constants'

export const Contact = () => (
  <div className="page">
    <section className="section hero-secondary reveal">
      <div>
        <span className="eyebrow">Contact</span>
        <h1>Let’s discuss your matter in confidence.</h1>
        <p>
          Share the business context, and we’ll recommend a practical legal path forward within
          24 hours.
        </p>
      </div>
      <div className="info-card">
        <h3>Headquarters</h3>
        <p>{firm.address}</p>
        <p>{firm.phone}</p>
        <p>{firm.email}</p>
      </div>
    </section>

    <section className="section reveal">
      <div className="two-column">
        <div>
          <SectionTitle
            eyebrow="Get in touch"
            title="Start an advisory conversation"
            description="We respond within one business day and can schedule an initial consult quickly."
          />
          <ContactForm />
        </div>
        <div className="contact-details">
          <h3>Other offices</h3>
          {offices.map((office) => (
            <div key={office.city}>
              <h4>{office.city}</h4>
              <p>{office.address}</p>
              <p>{office.phone}</p>
              <p>{office.email}</p>
            </div>
          ))}
          <div className="contact-highlight">
            <h4>Confidentiality assured</h4>
            <p>All inquiries are protected and reviewed only by senior attorneys.</p>
          </div>
          <div className="contact-highlight">
            <h4>Delhi High Court Bar Association</h4>
            <p>Sher Shah Road, New Delhi - 110503.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
)
