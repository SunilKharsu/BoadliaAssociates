import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formatDate'

export const BlogCard = ({ post }) => (
  <article className="card blog-card">
    <span className="tag">{post.category}</span>
    <h3>{post.title}</h3>
    <p>{post.excerpt}</p>
    <div className="blog-meta">
      <span>{formatDate(post.date)}</span>
      <Link className="text-link" to={`/blog/${post.slug}`}>
        Read article
      </Link>
    </div>
  </article>
)
