import { useRouter } from "next/router"
import Sidebar from "./Sidebar"
import {NavItemProps} from './NavItem'

const SIDEBAR_ITEMS: NavItemProps[] = [
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

function findItems(items: NavItemProps[], path: string): NavItemProps[] {
  let result: NavItemProps[] = items

  items.forEach((item) => {
    if (path.startsWith(item.href)) {
      if (item.children) {
        result = item.children
        findItems(item.children, path)
      }
    }
  })
  return result
}

export default function AppSidebar() {
  const router = useRouter();
  const currentPath = router.pathname
  const items = findItems(SIDEBAR_ITEMS, currentPath)

  return <Sidebar items={items}></Sidebar>
}
