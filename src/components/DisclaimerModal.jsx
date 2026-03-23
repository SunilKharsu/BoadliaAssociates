import { firm } from '../utils/constants'

export const DisclaimerModal = ({ open, onAccept }) => {
  if (!open) return null

  return (
    <div className="disclaimer-backdrop" role="dialog" aria-modal="true">
      <div className="disclaimer-modal">
        <h2>Disclaimer</h2>
        <p>
          The Bar Council of India does not permit advertisement or solicitation by advocates. By
          accessing this website ({firm.website}), you acknowledge and confirm that you are seeking
          information relating to {firm.name}, Advocates and Legal Consultants (hereinafter
          referred to as “{firm.name}”), of your own accord and that there has been no form of
          solicitation, advertisement, or inducement by {firm.name}, or its members.
        </p>
        <p>
          The content of this website is for informational purposes only and should not be
          interpreted as soliciting or advertising. No material or information provided on this
          website should be construed as legal advice. {firm.name} shall not be liable for the
          consequences of any action taken by relying on the material or information provided on
          this website.
        </p>
        <button className="btn btn-primary" type="button" onClick={onAccept}>
          I accept the above
        </button>
      </div>
    </div>
  )
}
