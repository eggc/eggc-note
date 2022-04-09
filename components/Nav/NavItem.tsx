import Link from 'next/link'
import { useRouter } from "next/router"

export type NavItemProps = {
  title: string
  href: string
  children?: NavItemProps[]
}

export default function NavItem({title, href}: NavItemProps) {
  const router = useRouter();
  const currentPath = router.pathname
  const isActive = currentPath.startsWith(href)

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
