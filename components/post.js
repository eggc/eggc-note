import Link from 'next/link'

export default function Post({post}) {
  return (
    <div>
      <div>
        <Link href="/">戻る</Link>
      </div>
      <hr />
      <div className="eggc-post-container" dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  )
}
