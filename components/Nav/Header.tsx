import React from 'react'
import Link from 'next/link'
import NavItem, {NAV_ITEMS, NavItemProps} from './NavItem'
import Navbar from 'react-bootstrap/Navbar';

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
      <div className="container-fluid">
        <Link href="/"><Navbar.Brand href="#">{title}</Navbar.Brand></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {NAV_ITEMS.map(renderNavItem)}
          </ul>
        </div>
      </div>
    </Navbar>
  </>
}
