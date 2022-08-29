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
  children?: any
}

export default function Page(props: PageProps) {
  return <>
    <Header title={props.appTitle}></Header>
    <Container fluid>
      <Row>
        <Col style={{ flex: "0 0 200px"}}>
          {sidebar}
        </Col>
        <Col>
          <Main>{props.children}</Main>
        </Col>
      </Row>
    </Container>
  </>
}
