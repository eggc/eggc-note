import Posts from '../components/posts'
import getPosts from '../lib/getPosts'
import Link from 'next/link'

export default function Index({posts}) {
  const renderPostLinks = (post, i) => {
    return (
      <div className="columns" key={i}>
        <div className="column is-two-fifths">
          <Link href={`/posts/${post.name}`}>{post.name}</Link>
        </div>
        <div className="column">
          {post.tags.map((tag, j) => <span key={j} className="tag is-light">{tag}</span>)}
        </div>
      </div>
    )
  }

  return (
    <section>
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
