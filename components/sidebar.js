import Link from 'next/link'

export default function Sidebar(props) {

  const renderPostLinks = (post, i) => {
    let klass = [
      (props.currentPostId == post.title) ? "is-active" : "",
      (post.format == 'directory') ? 'is-directory' : ""
    ].join(' ')

    return (
      <li key={i}>
        <Link href={`/posts/${post.path}`}>
          <a className={klass}>{post.title}</a>
        </Link>
      </li>
    )
  }

  return (
    <aside className="menu is-hidden-mobile">
      <p className="menu-label"><Link href="/">EGGC NOTE</Link></p>
      <ul className="menu-list">
        {props.posts.map(renderPostLinks)}
      </ul>
    </aside>
  )
}
