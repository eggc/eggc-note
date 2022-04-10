import React from "react"
import NavItem, {NavItemProps} from './NavItem'

export type SidebarProps = {
  items: NavItemProps[],
  children?: any
}

function renderItem(itemProps: NavItemProps) {
  return <React.Fragment key={itemProps.title}>
    <NavItem {...itemProps}></NavItem>
  </React.Fragment>
}

export default function Sidebar({items}: SidebarProps) {
  return <>
    <ul className="nav nav-pills flex-column h-100">
      {items.map(renderItem)}
    </ul>
  </>
}
