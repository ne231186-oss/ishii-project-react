export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#top" aria-label="Ishii Project トップへ">
          <img src="/images/logo.png" alt="" />

          <span>
            ISHII PROJECT
            <small>SENSHU UNIVERSITY · 2026</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="メインナビゲーション">
          <a href="#about">About</a>
          <a href="#activity">Activity</a>
          <a href="#members">Members</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
