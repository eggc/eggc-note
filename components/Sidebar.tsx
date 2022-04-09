import React from "react"
import Item, {ItemProps} from './Header/Item'

export type SidebarProps = {
  items: ItemProps[],
  children?: any
}

function renderItem(itemProps: ItemProps) {
  return <React.Fragment key={itemProps.title}>
    <Item {...itemProps}></Item>
  </React.Fragment>
}

export default function Sidebar({items}: SidebarProps) {
  return <>
    <ul className="nav flex-column">
      {items.map(renderItem)}
    </ul>
  </>
}
