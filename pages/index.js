import Posts from '../components/posts'
import getPosts from '../lib/getPosts'
import Link from 'next/link'

export default function Index({posts}) {
  const renderPostLinks = (post, i) => {
    const name = post.name
    const tags = post.tags
    return <li key={i}><Link href={`/posts/${name}`}>{name}</Link></li>
  }

  return (
    <section>
      <div className="container">
        <h1 className="title">Posts</h1>
        <ul>
          {posts.map(renderPostLinks)}
        </ul>
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
