import Post from '../../components/post'
import getPost from '../../lib/getPost'
import getPostNames from '../../lib/getPostNames'

export default function Index({post}) {
  return (
    <Post post={post} />
  )
}

export async function getStaticProps({params}) {
  return {
    props: {
      post: await getPost(params.id)
    }
  }
}

export async function getStaticPaths() {
  const postNames = getPostNames()
  // const paths = [{ params: { id: "Emacs" }}]
  const paths = postNames.map((postName) => {
    return { params: {id: postName} }
  })

  return { paths, fallback: false }
}
