export default function Post({post}) {
  return (
    <div>
      <p>{post.title || "no title"}</p>
      <div dangerouslySetInnerHTML={{ __html: post.body || "no body" }} />
    </div>
  )
}
