import Header from './Header'
import {ItemProps} from './Header/Item'
import Main from './Main'
import Sidebar from './Sidebar'

export type PageProps = {
  sidebarItems: ItemProps[],
  appTitle: string,
  children?: any
}

function SidebarColumn(sidebarItems: ItemProps[]) {
  return <div className="col" style={{ flexBasis: "300px" } as any}>
    <Sidebar items={sidebarItems}></Sidebar>
  </div>
}

function MainColumn(children: any) {
  return <div className="col">
    <Main children={children}></Main>
  </div>
}

export default function Page(props: PageProps) {
  return <>
    <Header title={props.appTitle}></Header>
    <div className="container-fluid">
      <div className="row">
        {props.sidebarItems && SidebarColumn(props.sidebarItems)}
        {props.children && MainColumn(props.children)}
      </div>
    </div>
  </>
}
