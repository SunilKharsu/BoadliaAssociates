import { simulateFetch } from './api'

export const submitContactForm = async (payload) => {
  const response = {
    ok: true,
    reference: `BA-${Math.floor(100000 + Math.random() * 900000)}`,
    receivedAt: new Date().toISOString(),
    payload,
  }

  return simulateFetch(response, 600)
}
