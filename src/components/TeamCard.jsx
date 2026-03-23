export const TeamCard = ({ member }) => (
  <article className="card team-card">
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
