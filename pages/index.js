import Posts from '../components/posts'
import getPosts from '../lib/getPosts'
import Link from 'next/link'

export default function Index({posts}) {
  const renderPostLinks = (post, i) => {
    return (
      <div key={i}>
        <Link href={`/posts/${post.name}`}>{post.name}</Link>
        {post.tags.map((tag, j) => <span key={j} className="tag is-light">{tag}</span>)}
        <hr />
      </div>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Posts</h1>
        {posts.map(renderPostLinks)}
      </div>
    </section>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts()
    }
  }
}
