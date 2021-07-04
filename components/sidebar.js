import Link from 'next/link'
import PageSelect from './page_select'

export default function Sidebar({tree, currentPostId}) {
  const renderTree = (node) => {
    let klass = [
      (node.title == currentPostId) ? "is-active" : "",
      (node.format == 'directory') ? 'is-directory' : ""
    ].join(' ')

    return (
      <>
        <li key={node.path}>
          <Link href={`/posts/${node.path}`}>
            <a className={klass}>{node.path}</a>
          </Link>
        </li>
        {node.children && node.children.map((node) => renderTree(node))}
      </>
    )
  }

  return (
    <aside className="menu is-hidden-mobile">
      <p className="menu-label"><Link href="/">EGGC NOTE</Link></p>
      <PageSelect tree={tree} />
      <hr />
      <ul className="menu-list">
        {tree.children.map((node) => renderTree(node))}
      </ul>
    </aside>
  )
}
