import Link from 'next/link'

type ItemProps = {
  title: string
  href: string
  isActive?: boolean
}

export default function Item({title, href, isActive}: ItemProps) {
  const aProps = {
    className: `nav-link ${isActive ? 'active' : ''}`,
    "aria-current": isActive ? "page" : ''
  }

  return <>
    <li className="nav-item">
      <Link href={href}>
        <a {...aProps as any} >
          {title}
        </a>
      </Link>
    </li>
  </>
}
