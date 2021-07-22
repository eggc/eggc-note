import Link from 'next/link'

function treeToArray(tree) {
  const list = [tree]

  for(let i=0; list[i]; i++) {
    const node = list[i]

    node.children && node.children.forEach((child) => list.push(child))
  }

  return list
}



export default function Sidebar({tree, currentPostId}) {
  const renderNode = (node) => {
    let klass = [
      'nav-link',
      (node.path == currentPostId) ? "active" : "",
      (node.format == 'directory') ? 'is-directory' : ""
    ].join(' ')

    return (
      <li className="nav-item" key={node.path}>
        <Link href={`/posts/${node.path}`}>
          <a className={klass}>{node.path}</a>
        </Link>
      </li>
    )
  }

  return (
    <aside>
      <ul className="nav flex-column">
        {treeToArray(tree).map((node) => renderNode(node))}
      </ul>
    </aside>
  )
}
