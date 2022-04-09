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
    <ul className="nav flex-column">
      {items.map(renderItem)}
    </ul>
  </>
}
