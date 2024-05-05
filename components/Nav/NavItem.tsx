import Link from 'next/link'
import { useRouter } from "next/router"
import Nav from 'react-bootstrap/Nav'

export const NAV_ITEMS: NavItemProps[] = [
  { href: "/about", title: "about" },
  { href: "/memo", title: "memo" },
  { href: "/labo", title: "labo", children: [
    { href: "/labo/anime_js", title: "anime.js" },
    { href: "/labo/twitter-api", title: "twitter-api" },
    { href: "/labo/twitter-archives", title: "twitter-archives" },
  ]},
  { href: "/archive", title: "archive", children: [
    { href: "/archive/4th", title: "4th" },
    { href: "/archive/3rd", title: "3rd" }
  ]}
]

export type NavItemProps = {
  title: string
  href: string
  children?: NavItemProps[]
}

export default function NavItem({title, href, children}: NavItemProps) {
  const router = useRouter();
  const currentPath = router.asPath
  const isActive = currentPath.startsWith(href)
  const fileType = (children && children.length > 0) ? 'is-directory' : 'is-file'

  return <>
    <Link href={href}>
      <Nav.Link href={href} active={isActive} className={fileType}>
        {title}
      </Nav.Link>
    </Link>
  </>
}
