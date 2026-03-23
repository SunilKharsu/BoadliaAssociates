export const validateContact = (form) => {
  const errors = {}

  if (!form.name?.trim()) {
    errors.name = 'Please enter your full name.'
  }

  if (!form.email?.trim()) {
    errors.email = 'Please enter a work email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!form.message?.trim()) {
    errors.message = 'Tell us a bit about your matter.'
  }

  return errors
}
