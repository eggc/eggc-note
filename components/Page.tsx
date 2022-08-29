import Header from './Nav/Header'
import {NavItemProps} from './Nav/NavItem'
import Main from './Main'
import Sidebar from './Nav/Sidebar'
import AppSidebar from './Nav/AppSidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export type PageProps = {
  appTitle: string
  sidebarItems?: NavItemProps[]
  noSidebar?: boolean
  children?: any
}

export default function Page(props: PageProps) {
  let sidebar

  if(props.noSidebar) {
    sidebar = null
  } else if(props.sidebarItems) {
    sidebar = <Sidebar items={props.sidebarItems}></Sidebar>
  } else {
    sidebar = <AppSidebar></AppSidebar>
  }

  return <>
    <Header title={props.appTitle}></Header>
    <Container fluid>
      <Row>
        <Col style={{ flex: "0 0 200px"}} hidden={sidebar == null}>
          {sidebar}
        </Col>
        <Col>
          <Main>{props.children}</Main>
        </Col>
      </Row>
    </Container>
  </>
}
