export default function Post({post}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: post.body || "no body" }} />
  )
}
