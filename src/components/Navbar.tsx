import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import { alpha } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'

import { profile } from '../data/cv'
import { accents, glassTokens } from '../theme/glass'
import { displayFont } from '../theme/theme'

/** Anchor ids must match the `id` on each `<Section>` in the page. */
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
] as const

const brandSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontFamily: displayFont,
  fontWeight: 700,
  fontSize: 16,
  color: 'inherit',
}

const logoSx: SxProps<Theme> = {
  width: 30,
  height: 30,
  borderRadius: '9px',
  display: 'grid',
  placeItems: 'center',
  fontSize: 12,
  fontWeight: 800,
  color: 'primary.main',
  background: `linear-gradient(135deg, ${alpha(accents.a, 0.18)}, ${alpha(accents.b, 0.22)})`,
  border: `1px solid ${glassTokens.border}`,
  boxShadow: glassTokens.inner,
}

const navLinkSx = (isActive: boolean): SxProps<Theme> => ({
  px: '14px',
  py: '8px',
  borderRadius: '10px',
  fontSize: 14,
  fontWeight: 500,
  color: isActive ? 'primary.main' : 'text.secondary',
  background: isActive ? glassTokens.bg : 'transparent',
  border: '1px solid',
  borderColor: isActive ? alpha(accents.a, 0.25) : 'transparent',
  transition: 'color .2s ease, background .2s ease',
  '&:hover': {
    color: 'text.primary',
    background: glassTokens.bg,
  },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
})

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
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box component="a" href="#home" sx={brandSx}>
            <Box sx={logoSx} aria-hidden>
              {profile.initials}
            </Box>
            {profile.name}
          </Box>

          <Stack
            component="nav"
            aria-label="Primary"
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  sx={navLinkSx(isActive)}
                >
                  {link.label}
                </Link>
              )
            })}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

