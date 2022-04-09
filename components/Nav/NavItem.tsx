import Link from 'next/link'

export type NavItemProps = {
  title: string
  href: string
  isActive?: boolean
  children?: NavItemProps[]
}

export default function NavItem({title, href, isActive}: NavItemProps) {
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
