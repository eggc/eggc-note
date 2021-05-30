import Link from 'next/link'

function renderFile(post) {
  return post.files.map(file => {
    return (
      <li key={file}>
        <Link href={`/posts/${post.title}/${file}`}>{file}</Link>
      </li>
    )
  })
}

export default function Post({post}) {
  if(post.files) {
    return (
      <div>
        <Link href="/">戻る</Link>
        <hr />
        <ul> {renderFile(post)} </ul>
      </div>
    )
  } else {
    const extraClass = (post.title == '日記') ? 'eggc-diary' : ''

    return (
      <div>
        <Link href="/">戻る</Link>
        <hr />
        <div className={`eggc-post-container ${extraClass}`} dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}
