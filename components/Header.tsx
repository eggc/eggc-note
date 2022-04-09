import Link from 'next/link'
import Item from './Header/Item'

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
            <Item title="memo" href="/memo" isActive></Item>
            <Item title="labo" href="/labo"></Item>
            <Item title="archive" href="/archive"></Item>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
