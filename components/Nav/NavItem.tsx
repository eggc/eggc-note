import Link from 'next/link'
import { useRouter } from "next/router"

export const NAV_ITEMS: NavItemProps[] = [
  { href: "/memo", title: "memo" },
  { href: "/labo", title: "labo", children: [
    { href: "/labo/anime_js", title: "anime.js" },
    { href: "/labo/tweets", title: "twitter-api" },
    { href: "/labo/tweets/archives", title: "twitter-archives" }
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
