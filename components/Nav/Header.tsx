import Link from 'next/link'
import NavItem from './NavItem'

type HeaderProps = {
  title: string
}

export default function Header({title}: HeaderProps) {
  return <>
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/"><a className="navbar-brand">{title}</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem title="memo" href="/memo" isActive></NavItem>
            <NavItem title="labo" href="/labo"></NavItem>
            <NavItem title="archive" href="/archive"></NavItem>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
