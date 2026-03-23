import { simulateFetch } from './api'
import posts from '../data/blogs.json'

export const getBlogs = async () => simulateFetch(posts)

export const getBlogBySlug = async (slug) => {
  const data = await simulateFetch(posts)
  return data.find((post) => post.slug === slug)
}
