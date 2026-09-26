import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Extra classes to merge with `.reveal`. */
  className?: string
  /** Stagger the fade-in, in milliseconds. */
  delay?: number
}

/**
 * Wraps content in a `.reveal` element and adds `.is-visible` once it scrolls
 * into view. The stylesheet already neutralises the animation under
 * `prefers-reduced-motion: reduce`, and we reveal immediately when
 * `IntersectionObserver` is unavailable so content is never left hidden.
 */
export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
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

  const classes = ['reveal', visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ')

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  )
}
