import Link from 'next/link'

function renderLink(node) {
  return (
    <li key={node.path}>
      <Link href={`/posts/${node.path}`}>{node.title}</Link>
    </li>
  )
}

function findNode(tree, post) {
  const queue = [tree]
  let node

  while(node = queue.pop()) {
    if(node.path == post.path) {
      return node
    } else {
      node.children && node.children.forEach((child) => queue.push(child))
    }
  }
  return undefined
}

export default function Post({post, tree}) {
  const node = findNode(tree, post)
  if(node.children) {
    return (
      <div>
        <Link href="/">戻る</Link>
        <hr />
        <ul> {node.children.map(renderLink)} </ul>
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
