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
  if(post.body) {
    const extraClass = (post.title == '日記') ? 'eggc-diary' : ''

    return (
      <div>
        <div className={`eggc-post-container ${extraClass}`} dangerouslySetInnerHTML={{ __html: post.body }} />
        <Link href="/">戻る</Link>
      </div>
    )
  } else {
    const node = findNode(tree, post)

    return (
      <div>
        <ul> {node.children.map(renderLink)} </ul>
      </div>
    )
  }
}
