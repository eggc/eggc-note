import Page from '../components/page'
import getPosts from '../lib/getPosts'

export default function Index({posts}) {
  return (
    <Page posts={posts}>
      <h1>EGGC NOTE</h1>
    </Page>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts()
    }
  }
}
