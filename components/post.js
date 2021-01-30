export default function Post({post}) {
  return (
    <section class="section">
      <div class="container">
        <h1 class="title">{post.title || "no title"}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body || "no body" }} />
      </div>
    </section>
  )
}
