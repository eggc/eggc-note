export default function Post({post}) {
  return (
    <div className="eggc-post-container" dangerouslySetInnerHTML={{ __html: post.body || "no body" }} />
  )
}
