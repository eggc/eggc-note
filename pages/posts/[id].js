import Page from '../../components/page'
import Post from '../../components/post'
import getPost from '../../lib/getPost'
import getPosts from '../../lib/getPosts'

export default function Index({post, posts, id}) {
  return (
    <Page posts={posts} currentPost={id}>
      <Post post={post} />
    </Page>
  )
}

export async function getStaticProps({params}) {
  return {
    props: {
      id: params.id,
      posts: getPosts(),
      post: await getPost(params.id)
    }
  }
}

export async function getStaticPaths() {
  const postNames = getPosts().map((post) => post.name)
  const paths = postNames.map((postName) => {
    return { params: {id: postName} }
  })

  return { paths, fallback: false }
}
