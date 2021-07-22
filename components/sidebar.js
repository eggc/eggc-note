import Link from 'next/link'

export default function Sidebar({tree, currentPostId}) {
  const renderTree = (node) => {
    let klass = [
      (node.title == currentPostId) ? "is-active" : "",
      (node.format == 'directory') ? 'is-directory' : ""
    ].join(' ')

    return (
      <div key={node.path}>
        <li>
          <Link href={`/posts/${node.path}`}>
            <a className={klass}>{node.path}</a>
          </Link>
        </li>
        {node.children && node.children.map((node) => renderTree(node))}
      </div>
    )
  }

  return (
    <aside>
      <ul>
        {tree.children.map((node) => renderTree(node))}
      </ul>
    </aside>
  )
}
