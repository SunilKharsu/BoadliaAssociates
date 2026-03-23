import { simulateFetch } from './api'
import services from '../data/services.json'

export const getServices = async () => simulateFetch(services)

export const getServiceBySlug = async (slug) => {
  const data = await simulateFetch(services)
  return data.find((service) => service.slug === slug)
}
