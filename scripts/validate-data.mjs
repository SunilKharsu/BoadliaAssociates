import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const readJson = async (path) => {
  const raw = await readFile(path, 'utf-8')
  return JSON.parse(raw)
}

const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0

const assert = (condition, message, errors) => {
  if (!condition) {
    errors.push(message)
  }
}

const validateServices = (services) => {
  const errors = []
  assert(Array.isArray(services), 'services.json must be an array', errors)
  if (!Array.isArray(services)) return errors

  const slugs = new Set()
  services.forEach((service, index) => {
    const prefix = `services[${index}]`
    assert(service && typeof service === 'object', `${prefix} must be an object`, errors)
    if (!service || typeof service !== 'object') return

    assert(isNonEmptyString(service.slug), `${prefix}.slug must be a non-empty string`, errors)
    assert(isNonEmptyString(service.title), `${prefix}.title must be a non-empty string`, errors)
    assert(isNonEmptyString(service.summary), `${prefix}.summary must be a non-empty string`, errors)
    assert(Array.isArray(service.highlights), `${prefix}.highlights must be an array`, errors)

    if (isNonEmptyString(service.slug)) {
      if (slugs.has(service.slug)) {
        errors.push(`${prefix}.slug must be unique (duplicate: ${service.slug})`)
      }
      slugs.add(service.slug)
    }

    if (Array.isArray(service.highlights)) {
      service.highlights.forEach((item, highlightIndex) => {
        assert(
          isNonEmptyString(item),
          `${prefix}.highlights[${highlightIndex}] must be a non-empty string`,
          errors
        )
      })
    }
  })

  return errors
}

const validateBlogs = (blogs) => {
  const errors = []
  assert(Array.isArray(blogs), 'blogs.json must be an array', errors)
  if (!Array.isArray(blogs)) return errors

  const slugs = new Set()
  blogs.forEach((post, index) => {
    const prefix = `blogs[${index}]`
    assert(post && typeof post === 'object', `${prefix} must be an object`, errors)
    if (!post || typeof post !== 'object') return

    assert(isNonEmptyString(post.slug), `${prefix}.slug must be a non-empty string`, errors)
    assert(isNonEmptyString(post.title), `${prefix}.title must be a non-empty string`, errors)
    assert(isNonEmptyString(post.excerpt), `${prefix}.excerpt must be a non-empty string`, errors)
    assert(isNonEmptyString(post.category), `${prefix}.category must be a non-empty string`, errors)
    assert(isNonEmptyString(post.date), `${prefix}.date must be a non-empty string`, errors)
    assert(Array.isArray(post.content), `${prefix}.content must be an array`, errors)

    if (isNonEmptyString(post.slug)) {
      if (slugs.has(post.slug)) {
        errors.push(`${prefix}.slug must be unique (duplicate: ${post.slug})`)
      }
      slugs.add(post.slug)
    }

    if (isNonEmptyString(post.date)) {
      const parsed = new Date(post.date)
      if (Number.isNaN(parsed.getTime())) {
        errors.push(`${prefix}.date must be a valid date string (YYYY-MM-DD)`) 
      }
    }

    if (Array.isArray(post.content)) {
      post.content.forEach((paragraph, paragraphIndex) => {
        assert(
          isNonEmptyString(paragraph),
          `${prefix}.content[${paragraphIndex}] must be a non-empty string`,
          errors
        )
      })
    }
  })

  return errors
}

const run = async () => {
  const servicesPath = join(root, 'src', 'data', 'services.json')
  const blogsPath = join(root, 'src', 'data', 'blogs.json')

  const [services, blogs] = await Promise.all([
    readJson(servicesPath),
    readJson(blogsPath),
  ])

  const errors = [...validateServices(services), ...validateBlogs(blogs)]

  if (errors.length > 0) {
    console.error('CMS data validation failed:')
    errors.forEach((error) => console.error(`- ${error}`))
    process.exit(1)
  }

  console.log('CMS data validation passed.')
}

run().catch((error) => {
  console.error('Validation script error:', error)
  process.exit(1)
})
