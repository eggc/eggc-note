import Page from '../../components/page'
import Post from '../../components/post'
import getSidebarItems from '../../lib/getSidebarItems'
import getPostPaths from '../../lib/getPostPaths'
import OrgReader from '../../lib/OrgReader'

export default function Index({post, tree, id}) {
  return (
    <Page tree={tree} currentPostId={id}>
      <Post tree={tree} post={post} />
    </Page>
  )
}

export async function getStaticProps({params}) {
  const orgReader = new OrgReader()
  const id = params.keys.join("/")
  const tree = await getSidebarItems()
  const post = await orgReader.getPost(id)

  return {
    props: { id, tree, post }
  }
}

export async function getStaticPaths() {
  const paths = getPostPaths().map((path) => {
    return { params: { keys: path.split('/') } }
  })

  return { paths, fallback: false }
}
