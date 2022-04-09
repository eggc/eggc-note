import Link from 'next/link'

type HeaderProps = {
  title: string
}

export default function Header({title}: HeaderProps) {
  return <>
    <nav className="sticky-top navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            {title}
          </a>
        </Link>
      </div>
    </nav>
  </>
}
