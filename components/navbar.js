export default function Navbar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">EGGC</a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Profile</a>
          <a class="navbar-item">Memorandum</a>
        </div>
      </div>
    </nav>
  )
}
