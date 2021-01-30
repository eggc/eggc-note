export default function Post({post}) {
  return (
    <div>
      <p>{post.title || "no title"}</p>
      <p>{post.body || "no body"}</p>
    </div>
  )
}
