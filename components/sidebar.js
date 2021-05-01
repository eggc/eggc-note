import Link from 'next/link'

export default function Sidebar(props) {
  const renderPostLinks = (post, i) => {
    const linkStyle = (props.currentPost == post.name) ? "is-active" : ""
    return (
      <li key={i}>
        <Link href={`/posts/${post.name}`}>
          <a className={linkStyle}>{post.name}</a>
        </Link>
      </li>
    )
  }

  return (
    <aside className="menu is-hidden-mobile">
      <p className="menu-label">Eggc note</p>
      <ul className="menu-list">
        {props.posts.map(renderPostLinks)}
      </ul>
    </aside>
  )
}
