import { useRouter } from "next/router"
import Sidebar from "./Sidebar"
import {NavItemProps, NAV_ITEMS} from './NavItem'

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
  const items = findItems(NAV_ITEMS, currentPath)

  return <Sidebar items={items}></Sidebar>
}
