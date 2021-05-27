import Page from '../../components/page'
import Post from '../../components/post'
import getSidebarItems from '../../lib/getSidebarItems'
import OrgReader from '../../lib/OrgReader'

export default function Index({post, posts, id}) {
  return (
    <Page posts={posts} currentPostId={id}>
      <Post post={post} />
    </Page>
  )
}

export async function getStaticProps({params}) {
  const orgReader = new OrgReader()
  const id = params.keys.join("/")
  const posts = await getSidebarItems(params.keys)
  const post = await orgReader.getPost(id)

  return {
    props: { id, posts, post }
  }
}

export async function getStaticPaths() {
  const orgReader = new OrgReader()
  const names = orgReader.getPosts('', true).map((post) => post.name)
  const paths = names.map((name) => {
    return { params: { keys: name.split('/')} }
  })

  return { paths, fallback: false }
}
