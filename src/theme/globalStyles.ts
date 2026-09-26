import { alpha, type CSSObject } from '@mui/material/styles'

import { accents, glassTokens } from './glass'

/**
 * Global CSS that cannot live in a component `sx`: page-level scroll
 * behaviour, the ambient background wash, text selection and focus rings.
 *
 * Values are carried over verbatim from the original `global.css` base layer.
 */
export const globalStyles: CSSObject = {
  html: {
    scrollBehavior: 'smooth',
    scrollPaddingTop: 84,
  },
  body: {
    background: [
      `radial-gradient(ellipse 80% 50% at 50% -20%, ${alpha(accents.b, 0.14)}, transparent)`,
      `radial-gradient(ellipse 60% 40% at 90% 90%, ${alpha(accents.a, 0.08)}, transparent)`,
      glassTokens.page,
    ].join(', '),
    WebkitFontSmoothing: 'antialiased',
  },
  '::selection': {
    background: alpha(accents.a, 0.3),
    color: '#fff',
  },
  'a:focus-visible, button:focus-visible': {
    outline: `2px solid ${accents.a}`,
    outlineOffset: 3,
  },
  'img, svg': { display: 'block' },

  /**
   * Scroll-reveal utility applied by `<Reveal>`. A utility class (rather than
   * inline `sx`) lets the consumer keep full control of the element's own `sx`
   * without the two style objects having to be merged.
   */
  '.reveal': {
    opacity: 0,
    transform: 'translateY(18px)',
    transition: 'opacity .6s ease, transform .6s ease',
  },
  '.reveal.is-visible': {
    opacity: 1,
    transform: 'none',
  },

  '@media (prefers-reduced-motion: reduce)': {
    html: { scrollBehavior: 'auto' },
    '.reveal': { opacity: 1, transform: 'none', transition: 'none' },
  },
}
