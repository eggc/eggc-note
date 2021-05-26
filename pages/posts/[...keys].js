import Page from '../../components/page'
import Post from '../../components/post'
import getPost from '../../lib/getPost'
import OrgReader from '../../lib/OrgReader'

export default function Index({post, posts, id}) {
  return (
    <Page posts={posts} currentPost={id}>
      <Post post={post} />
    </Page>
  )
}

export async function getStaticProps({params}) {
  const path = params.keys.join("/")
  const posts = new OrgReader().getPosts(path)
  const post = await getPost(path)

  return {
    props: {
      keys: params.keys,
      posts: posts,
      post: post
    }
  }
}

export async function getStaticPaths() {
  const orgReader = new OrgReader()
  const posts = orgReader.getPosts()
  const directories = orgReader.getDirectories()
  const names = posts.concat(directories).map((post) => post.name)
  const paths = names.map((name) => {
    return { params: { keys: name.split('/')} }
  })

  return { paths, fallback: false }
}
