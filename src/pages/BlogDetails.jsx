import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBlogBySlug } from '../services/blogService'
import { formatDate } from '../utils/formatDate'

export const BlogDetails = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (!slug) return
    getBlogBySlug(slug).then(setPost)
  }, [slug])

  if (!post) {
    return (
      <div className="page">
        <section className="section">
          <h2>Article not found</h2>
          <p>Return to the insights page to explore the latest updates.</p>
          <Link className="btn btn-outline" to="/blog">
            Back to insights
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="section hero-secondary reveal">
        <div>
          <span className="eyebrow">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{formatDate(post.date)}</p>
        </div>
        <div className="info-card">
          <h3>Executive summary</h3>
          <p>{post.excerpt}</p>
        </div>
      </section>

      <section className="section reveal">
        <article className="article">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </section>
    </div>
  )
}
