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
  let node = queue.pop()

  while(node) {
    if(node.path) {
      return node
    } else {
      node.children && node.children.forEach((child) => queue.push(child))
    }

    node = queue.pop()
  }
  return undefined
}

export default function Post({post, tree}) {
  if(post.body) {
    const extraClass = (post.title == 'diary') ? 'eggc-diary' : ''

    return (
      <div>
        <h1 className="page-title">{post.title}</h1>
        <div className={`eggc-post-container ${extraClass}`} dangerouslySetInnerHTML={{ __html: post.body }} />
        <Link href="/">戻る</Link>
      </div>
    )
  } else {
    const node = findNode(tree, post)

    return (
      <div>
        <h1 className="page-title">{node.title}</h1>
        <ul> {node.children.map(renderLink)} </ul>
      </div>
    )
  }
}
