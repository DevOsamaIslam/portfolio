import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import Box from '@mui/material/Box'
import type { SxProps, Theme } from '@mui/material/styles'

type RevealProps = {
  children: ReactNode
  /** Styles for the revealed element, e.g. `glassSurface({ hover: true })`. */
  sx?: SxProps<Theme>
  /** Stagger the fade-in, in milliseconds. */
  delay?: number
  /** Element or MUI component to render; defaults to a `div`. */
  component?: ElementType
}

/**
 * Wraps content in a `.reveal` element (see `theme/globalStyles.ts`) and adds
 * `.is-visible` once it scrolls into view.
 *
 * The stylesheet already neutralises the animation under
 * `prefers-reduced-motion: reduce`, and we reveal immediately when
 * `IntersectionObserver` is unavailable so content is never left hidden.
 */
export default function Reveal({
  children,
  sx,
  delay = 0,
  component = 'div',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    let revealed = false
    let frame = 0

    const reveal = () => {
      if (revealed) return
      revealed = true
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      setVisible(true)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) reveal()
      },
      // `threshold: 0` so tall elements still trigger; the negative bottom
      // margin starts the fade slightly inside the viewport.
      { rootMargin: '0px 0px -10% 0px', threshold: 0 },
    )
    observer.observe(element)

    // IntersectionObserver only reports threshold *crossings*, so an element
    // that is jumped past — keyboard paging, `End`, an anchor deep link, a
    // restored scroll position — can move from below the viewport to above it
    // without ever intersecting, and would stay invisible forever. This cheap
    // rAF-throttled guard also covers the page loading already scrolled past.
    const check = () => {
      frame = 0
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) reveal()
    }

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(check)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    check()

    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <Box
      ref={ref}
      component={component}
      className={visible ? 'reveal is-visible' : 'reveal'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      sx={sx}
    >
      {children}
    </Box>
  )
}

