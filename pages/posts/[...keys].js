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
  const posts = new OrgReader().getPosts()
  return {
    props: {
      keys: params.keys,
      posts: posts,
      post: await getPost(params.keys.join("/"))
    }
  }
}

export async function getStaticPaths() {
  const postNames = new OrgReader().getPosts().map((post) => post.name)
  const paths = postNames.map((postName) => {
    return { params: { keys: postName.split('/')} }
  })

  return { paths, fallback: false }
}
