export const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={`section-title ${align === 'center' ? 'section-title-center' : ''}`.trim()}>
    {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
    <h2>{title}</h2>
    {description ? <p>{description}</p> : null}
  </div>
)
