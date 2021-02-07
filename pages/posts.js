import Posts from '../components/posts'
import getPosts from '../lib/getPosts'

export default function Index({posts}) {
  return (
    <Posts posts={posts} />
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts()
    }
  }
}
