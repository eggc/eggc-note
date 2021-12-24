import Page from '../../components/page'
import Post from '../../components/post'
import getSidebarItems from '../../lib/getSidebarItems'
import getPostPaths from '../../lib/getPostPaths'
import FileReader from '../../lib/FileReader'

export default function Index({post, tree, id}) {
  return (
    <Page tree={tree} currentPostId={id}>
      <Post tree={tree} post={post} />
    </Page>
  )
}

export async function getStaticProps({params}) {
  const id = params.keys.join("/")
  const tree = await getSidebarItems()
  let post

  try {
    const fileReader = new FileReader()
    const file = await fileReader.readFile(...params.keys)
    post = file.serialize()
  } catch {
    post = { path: id }
  }

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
