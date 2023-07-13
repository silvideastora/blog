import Link from "next/link"

function Navigation() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-primary p-2" data-bs-theme="dark">
      <ul class="navbar-nav me-auto">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="#about">About</Link>
      </li>
      <li>
      <Link class="nav-link" aria-current="page" href="#projects">Projects</Link>
      </li>
      <li>
      <Link class="nav-link" aria-current="page" href="#experience">Experience</Link>
      </li>
      </ul>
  </nav>
  </>
  )
}

export default Navigation