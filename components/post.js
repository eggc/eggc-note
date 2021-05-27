import Link from 'next/link'

export default function Post({post}) {
  const extraClass = (post.title == '日記') ? 'eggc-diary' : ''

  return (
    <div>
      <div>
        <Link href="/">戻る</Link>
      </div>
      <hr />
      <div className={`eggc-post-container ${extraClass}`} dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  )
}
