export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">EGGC</a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Profile</a>
          <a className="navbar-item">Memorandum</a>
        </div>
      </div>
    </nav>
  )
}
