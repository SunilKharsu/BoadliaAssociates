import { SectionTitle } from '../components/SectionTitle'
import { awards, firm, values } from '../utils/constants'

export const About = () => (
  <div className="page">
    <section className="section hero-secondary">
      <div>
        <span className="eyebrow">About the firm</span>
        <h1>Trusted legal counsel for ambitious businesses.</h1>
        <p>
          {firm.name} is a New Delhi headquartered corporate law firm advising companies across
          transactions, litigation, IP, and technology law. We combine structured legal strategy
          with decisive execution to protect enterprise value.
        </p>
      </div>
      <div className="info-card">
        <h3>Mission</h3>
        <p>Deliver precise, board-ready counsel that helps businesses grow responsibly.</p>
        <h3>Vision</h3>
        <p>To be the most trusted corporate law partner for India-focused and cross-border matters.</p>
      </div>
    </section>

    <section className="section">
      <SectionTitle
        eyebrow="Why Choose Us"
        title="Business-aligned, globally informed, and execution-focused"
      />
      <div className="grid three">
        {values.map((value) => (
          <article className="card value-card" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="section muted">
      <SectionTitle
        eyebrow="Leadership"
        title="Advocate-led counsel with courtroom experience"
        description="The firm is led by Abhay Boadlia, Advocate and member of the Delhi High Court Bar Association."
      />
      <div className="two-column">
        <div>
          <h3>Managing Partner</h3>
          <p>
            Abhay Boadlia leads the firm with a focus on corporate advisory, litigation strategy,
            and regulatory matters.
          </p>
        </div>
        <div>
          <h3>Professional affiliation</h3>
          <p>Delhi High Court Bar Association, Sher Shah Road, New Delhi - 110503.</p>
        </div>
      </div>
    </section>

    <section className="section muted">
      <SectionTitle
        eyebrow="Awards & Accolades"
        title="Recognized for corporate excellence"
        description="A curated snapshot of the accolades and rankings that reflect our commitment to quality."
      />
      <div className="grid three">
        {awards.map((award) => (
          <article className="card award-card" key={award.title}>
            <h3>{award.title}</h3>
            <p>{award.description}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="section">
      <SectionTitle
        eyebrow="Global Experience"
        title="Cross-border matters, local precision"
        description="We routinely advise international clients across technology, real estate, healthcare, and manufacturing sectors entering or expanding in India."
      />
      <div className="two-column">
        <div>
          <h3>International desks</h3>
          <p>
            Dedicated advisory teams supporting US, UK, EU, and APAC clients with regulatory
            readiness, market-entry strategy, and contract localization.
          </p>
        </div>
        <div>
          <h3>Sector depth</h3>
          <p>
            Strong exposure to energy & infrastructure, sports & entertainment, IT, and
            cross-border M&A with multilingual coordination.
          </p>
        </div>
      </div>
    </section>
  </div>
)
