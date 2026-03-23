import { useEffect, useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { BlogCard } from '../components/BlogCard'
import { getBlogs } from '../services/blogService'

export const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getBlogs().then(setPosts)
  }, [])

  return (
    <div className="page">
      <section className="section hero-secondary">
        <div>
          <span className="eyebrow">Insights</span>
          <h1>Practical guidance for legal and business leaders.</h1>
          <p>
            Our blog covers corporate law, litigation readiness, IP strategy, and technology
            compliance with an executive lens.
          </p>
        </div>
        <div className="info-card">
          <h3>Recent focus</h3>
          <p>IP strategy, dispute management, and regulatory risk mitigation.</p>
          <h3>For decision-makers</h3>
          <p>Short, direct updates you can use in leadership discussions.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Latest articles"
          title="Legal updates and boardroom insights"
          description="Explore recent briefings and analysis from the Boadlia Associates team."
        />
        <div className="grid three">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
