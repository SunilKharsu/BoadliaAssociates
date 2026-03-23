import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeroSection } from '../components/HeroSection'
import { SectionTitle } from '../components/SectionTitle'
import { ServiceCard } from '../components/ServiceCard'
import { TeamCard } from '../components/TeamCard'
import { TestimonialCard } from '../components/TestimonialCard'
import { BlogCard } from '../components/BlogCard'
import { getServices } from '../services/serviceService'
import { getTeamMembers } from '../services/teamService'
import { getBlogs } from '../services/blogService'
import { testimonials, values } from '../utils/constants'

export const Home = () => {
  const [services, setServices] = useState([])
  const [team, setTeam] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getServices().then((data) => setServices(data.slice(0, 3)))
    getTeamMembers().then((data) => setTeam(data.slice(0, 3)))
    getBlogs().then((data) => setPosts(data.slice(0, 3)))
  }, [])

  return (
    <div className="page">
      <HeroSection
        title="Expert legal advisory built for boardroom decisions."
        subtitle="Boadlia Associates is a full-service corporate law firm headquartered in New Delhi, guiding founders, investors, and enterprises across transactions, disputes, and regulatory mandates."
        ctaPrimary={{ label: 'Explore practice areas', href: '/services' }}
        ctaSecondary={{ label: 'Meet the team', href: '/team' }}
      />

      <section className="section">
        <SectionTitle
          eyebrow="Practice Areas"
          title="Every sector, every legal need"
          description="A focused practice mix modeled after top corporate firms with deep expertise in transactions, litigation, and IP."
        />
        <div className="grid three">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="section-actions">
          <Link className="btn btn-outline" to="/services">
            View all services
          </Link>
        </div>
      </section>

      <section className="section muted">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="A partner who listens, anticipates, and delivers"
          description="Inspired by the structured, client-first positioning seen in leading firms, we blend strategic counsel with hands-on execution."
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

      <section className="section">
        <SectionTitle
          eyebrow="Leadership"
          title="Meet the attorneys shaping outcomes"
          description="Seasoned professionals across corporate law, litigation, technology, and infrastructure."
        />
        <div className="grid three">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
        <div className="section-actions">
          <Link className="btn btn-outline" to="/team">
            Meet the full team
          </Link>
        </div>
      </section>

      <section className="section dark">
        <SectionTitle
          eyebrow="Client Voices"
          title="Trusted by founders and global enterprises"
          description="The credibility and testimonial-forward approach of leading firms, tailored to Boadlia Associates."
          align="center"
        />
        <div className="grid three">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Insights"
          title="Legal updates for decision-makers"
          description="Briefings on IP, litigation, and technology law with a business lens."
        />
        <div className="grid three">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="section-actions">
          <Link className="btn btn-outline" to="/blog">
            Read more insights
          </Link>
        </div>
      </section>

      <section className="section cta">
        <div>
          <h2>Ready for a legal partner who truly listens?</h2>
          <p>Share your business context and we will propose a tailored advisory plan.</p>
        </div>
        <Link className="btn btn-primary" to="/contact">
          Contact us
        </Link>
      </section>
    </div>
  )
}
