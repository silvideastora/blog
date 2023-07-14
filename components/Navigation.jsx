import Link from "next/link"

function Navigation() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary p-1" data-bs-theme="dark">
      <ul className="navbar-nav me-auto">
      <li className="nav-item" role="presentation">
        <Link class="nav-link active" aria-current="page" href="/about" aria-selected="true" role="tab">About</Link>
      </li>
      <li>
      <Link class="nav-link" aria-current="page" href="/projects">Projects</Link>
      </li>
      <li>
      <Link class="nav-link" aria-current="page" href="/experience">Experience</Link>
      </li>
      </ul>
  </nav>
  </>
  )
}

export default Navigation