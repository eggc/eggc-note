import Page from '../components/page'
import OrgReader from '../lib/OrgReader'

export default function Index({posts}) {
  return (
    <Page posts={posts}>
      <h1>EGGC NOTE</h1>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = new OrgReader().getPosts()

  return {
    props: { posts }
  }
}
