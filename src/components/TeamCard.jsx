export const TeamCard = ({ member, delay = 0 }) => (
  <article className="card team-card reveal" style={{ '--reveal-delay': `${delay}ms` }}>
    <div className="avatar" aria-hidden="true">
      {member.name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')}
    </div>
    <div>
      <h3>{member.name}</h3>
      <span className="role">{member.role}</span>
      <p>{member.focus}</p>
    </div>
  </article>
)
