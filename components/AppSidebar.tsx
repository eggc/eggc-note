import { useRouter } from "next/router"
import Sidebar from "./Sidebar"
import {NavItemProps} from './Header/Item'

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

function updateItems(items: NavItemProps[], path: string): NavItemProps[] {
  let result: NavItemProps[] = items

  items.forEach((item) => {
    if (path.startsWith(item.href)) {
      item.isActive = true
      if (item.children) {
        result = item.children
        updateItems(item.children, path)
      }
    }
  })
  return result
}

export default function AppSidebar() {
  const router = useRouter();
  const currentPath = router.pathname
  const itemsClone = JSON.parse(JSON.stringify(SIDEBAR_ITEMS))
  const items = updateItems(itemsClone, currentPath)

  return <Sidebar items={items}></Sidebar>
}
