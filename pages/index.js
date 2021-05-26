import Page from '../components/page'
import getSidebarItems from '../lib/getSidebarItems'

export default function Index({posts}) {
  return (
    <Page posts={posts}>
      <h1>EGGC NOTE</h1>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = await getSidebarItems()

  return {
    props: { posts }
  }
}
