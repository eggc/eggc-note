import Post from './post'

export default function Posts({posts}) {
  return (
    posts.map(post => <Post key={post.title} post={post} />)
  )
}
