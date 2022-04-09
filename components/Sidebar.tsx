import Item, {ItemProps} from './Header/Item'

export type SidebarProps = {
  items: ItemProps[]
}

function renderItem(itemProps: ItemProps) {
  return <Item {...itemProps}></Item>
}

export default function Sidebar({items}: SidebarProps) {
  return <>
    <ul className="nav flex-column">
      {items.map(renderItem)}
    </ul>
  </>
}
