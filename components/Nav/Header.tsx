import React from 'react'
import Link from 'next/link'
import NavItem, {NAV_ITEMS, NavItemProps} from './NavItem'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

type HeaderProps = {
  title: string
}

function renderNavItem(navItem: NavItemProps) {
  return <React.Fragment key={navItem.title}>
    <NavItem {...navItem}></NavItem>
  </React.Fragment>
}

export default function Header({title}: HeaderProps) {
  return <>
    <Navbar bg="primary" expand="lg" variant="dark" sticky="top" >
      <Container fluid>
        <Link href="/"><Navbar.Brand href="#">{title}</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NAV_ITEMS.map(renderNavItem)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}
