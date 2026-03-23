import { useEffect, useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { TeamCard } from '../components/TeamCard'
import { getTeamMembers } from '../services/teamService'

export const Team = () => {
  const [team, setTeam] = useState([])

  useEffect(() => {
    getTeamMembers().then(setTeam)
  }, [])

  return (
    <div className="page">
    <section className="section hero-secondary reveal">
        <div>
          <span className="eyebrow">Our team</span>
          <h1>Trusted advisors, seasoned litigators, strategic partners.</h1>
          <p>
            Each engagement is led by senior attorneys with deep sector expertise and a
            relationship-first approach.
          </p>
        </div>
        <div className="info-card">
          <h3>Collaborative bench</h3>
          <p>Integrated teams across corporate, litigation, IP, and technology law.</p>
          <h3>Client care</h3>
          <p>Direct partner access and structured status reporting.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Leadership"
          title="Meet the people behind Boadlia Associates"
          description="Experienced professionals leading complex deals, disputes, and advisory matters."
        />
      <div className="grid three">
        {team.map((member, index) => (
          <TeamCard key={member.name} member={member} delay={index * 80} />
        ))}
      </div>
    </section>
  </div>
)
}
