import Header from './Nav/Header'
import {NavItemProps} from './Nav/NavItem'
import Main from './Main'
import Sidebar from './Nav/Sidebar'
import AppSidebar from './Nav/AppSidebar'

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
