import { useState } from 'react'
import { validateContact } from '../utils/validation'

const initialState = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

export const ContactForm = () => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ loading: false, error: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validation = validateContact(form)
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      return
    }

    try {
      setStatus({ loading: true, error: '' })
      setForm(initialState)
      event.currentTarget.submit()
    } catch (error) {
      setStatus({
        loading: false,
        error: 'Unable to submit right now. Please call or email us directly.',
      })
    }
  }

  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="hidden">
        Don’t fill this out
        <input name="bot-field" onChange={handleChange} />
      </label>
      <div className="form-row">
        <label>
          Full name
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name ? <span className="error">{errors.name}</span> : null}
        </label>
        <label>
          Work email
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email ? <span className="error">{errors.email}</span> : null}
        </label>
      </div>
      <div className="form-row">
        <label>
          Company
          <input name="company" value={form.company} onChange={handleChange} />
        </label>
        <label>
          Service of interest
          <input name="service" value={form.service} onChange={handleChange} />
        </label>
      </div>
      <label>
        How can we help?
        <textarea name="message" value={form.message} onChange={handleChange} />
        {errors.message ? <span className="error">{errors.message}</span> : null}
      </label>
      <button className="btn btn-primary" type="submit" disabled={status.loading}>
        {status.loading ? 'Sending…' : 'Submit inquiry'}
      </button>
      {status.error ? <p className="error">{status.error}</p> : null}
    </form>
  )
}
