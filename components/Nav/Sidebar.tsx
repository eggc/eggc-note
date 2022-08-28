import React from "react"
import NavItem, {NavItemProps} from './NavItem'
import Nav from 'react-bootstrap/Nav'

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
    <Nav variant="pills" className="flex-column h-100 mt-1">
      {items.map(renderItem)}
    </Nav>
  </>
}
