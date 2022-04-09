import Header from './Header'
import {NavItemProps} from './Header/Item'
import Main from './Main'
import Sidebar from './Sidebar'
import AppSidebar from './AppSidebar'

export type PageProps = {
  appTitle: string
  sidebarItems?: NavItemProps[]
  children?: any
}

function Column(props: any) {
  const style = props.fixed ? { flex: "0 0 200px"} : {}
  return <div className="col" style={style}>
    {props.children}
  </div>
}

export default function Page(props: PageProps) {
  return <>
    <Header title={props.appTitle}></Header>
    <div className="container-fluid">
      <div className="row">
        <Column fixed>
          {props.sidebarItems ? <Sidebar items={props.sidebarItems}></Sidebar> : <AppSidebar></AppSidebar>}
        </Column>
        <Column>
          <Main>{props.children}</Main>
        </Column>
      </div>
    </div>
  </>
}
