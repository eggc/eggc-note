export default function Post({post}) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{post.title || "no title"}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body || "no body" }} />
      </div>
    </section>
  )
}
