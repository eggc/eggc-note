import Link from 'next/link'

export default function Sidebar({tree, currentPostId}) {
  const renderTree = (node) => {
    let klass = [
      'nav-link',
      (node.path == currentPostId) ? "active" : "",
      (node.format == 'directory') ? 'is-directory' : ""
    ].join(' ')

    return (
      <>
        <li className="nav-item">
          <Link href={`/posts/${node.path}`}>
            <a className={klass}>{node.path}</a>
          </Link>
        </li>
        {node.children && node.children.map((node) => renderTree(node))}
      </>
    )
  }

  return (
    <aside>
      <ul className="nav flex-column">
        {tree.children.map((node) => renderTree(node))}
      </ul>
    </aside>
  )
}
