import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">Eggc.diary</a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link href="/"><a className="navbar-item">Home</a></Link>
        </div>
      </div>
    </nav>
  )
}
