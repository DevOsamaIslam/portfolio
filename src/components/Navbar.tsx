import { useEffect, useState } from 'react'

import { profile } from '../data/cv'

/** Anchor ids must match the `id` on each `<section>` in `App.tsx`. */
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
] as const

export default function Navbar() {
  const [active, setActive] = useState<string>(links[0].id)

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (current) setActive(current.target.id)
      },
      // A thin horizontal "reading line" at ~45% of the viewport: whichever
      // section the line sits inside wins. Direction-agnostic, and it still
      // works for the final section when the page cannot scroll any further.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a className="nav-brand" href="#home">
          <span className="nav-logo" aria-hidden="true">
            {profile.initials}
          </span>
          {profile.name}
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={isActive ? 'active' : undefined}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
