import { alpha, type CSSObject, type Theme } from '@mui/material/styles'
import type { SystemStyleObject } from '@mui/system'

/** The three accent hues that drive the frosted-glass palette. */
export const accents = {
  /** Mint — primary actions, kickers, active nav. */
  a: '#6ee7d8',
  /** Violet — secondary actions, list bullets, gradient partner. */
  b: '#a78bfa',
  /** Amber — the "Live" flag. */
  c: '#fbbf24',
} as const

/**
 * Frosted-glass design primitives.
 *
 * These are the raw values lifted from the original `global.css` token block.
 * `theme.ts` feeds most of them into MUI's `palette` / `shape` so MUI
 * components inherit the look automatically; the objects below are the escape
 * hatch for surfaces that need the full glass treatment (blur + sheen) and for
 * one-off hover affordances.
 */
export const glassTokens = {
  /** Translucent surface fill. */
  bg: 'rgba(255, 255, 255, 0.06)',
  /** Brighter fill used on hover. */
  bgStrong: 'rgba(255, 255, 255, 0.10)',
  /** Hairline edge. */
  border: 'rgba(255, 255, 255, 0.12)',
  /** Top-edge sheen colour. */
  highlight: 'rgba(255, 255, 255, 0.28)',
  /** Inset highlight that reads as thickness. */
  inner: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
  /** Backdrop blur radius. */
  blur: '22px',
  /** Ambient drop shadow. */
  shadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
  /** Corner radius (mirrors `theme.shape.borderRadius`). */
  radius: 18,
  /** Accent ring applied on hover. */
  accentRing: `0 0 0 1px ${alpha(accents.a, 0.18)}`,
  /** Opaque chrome behind the sticky header. */
  navbar: 'rgba(7, 8, 15, 0.65)',
  /** Page background. */
  page: '#07080f',
} as const

/**
 * Translucent fill, hairline border, backdrop blur and the ambient + inner
 * shadows. Shared by `glassBase` and `glassSurface`.
 *
 * Typed as `CSSObject` rather than `SystemStyleObject` so it can also be used as
 * a slot's `styleOverrides` in the theme.
 */
const glassSurfaceCore: CSSObject = {
  position: 'relative',
  background: glassTokens.bg,
  border: `1px solid ${glassTokens.border}`,
  borderRadius: `${glassTokens.radius}px`,
  backdropFilter: `blur(${glassTokens.blur})`,
  WebkitBackdropFilter: `blur(${glassTokens.blur})`,
  boxShadow: `${glassTokens.shadow}, ${glassTokens.inner}`,
  // Neutralise the dark-mode elevation overlay MUI paints on Paper/Card.
  backgroundImage: 'none',
}

/**
 * A masked `::before` gradient that mimics light catching the top edge of a
 * real pane. Uses `mask-composite: exclude` so it reads as a 1px inner border
 * rather than a solid film.
 */
const glassSheen: CSSObject = {
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    background: `linear-gradient(to bottom, ${glassTokens.highlight}, transparent 22%)`,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    padding: '1px',
    pointerEvents: 'none',
    opacity: 0.45,
  },
}

/**
 * The full glass recipe: surface + sheen. Applied to every MUI `Card` by the
 * theme.
 */
export const glassBase: CSSObject = {
  ...glassSurfaceCore,
  ...glassSheen,
}

/** Lift + brighten a glass surface on hover. */
export const glassHover: SystemStyleObject<Theme> = {
  transition: 'transform .25s ease, box-shadow .25s ease, background .25s ease',
  '&:hover': {
    background: glassTokens.bgStrong,
    transform: 'translateY(-3px)',
    boxShadow: `${glassTokens.shadow}, ${glassTokens.inner}, ${glassTokens.accentRing}`,
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
    '&:hover': { transform: 'none' },
  },
}

type GlassSurfaceOptions = {
  /** Lift and brighten the surface on hover. */
  hover?: boolean
  /** Corner radius in px; defaults to `glassTokens.radius`. */
  radius?: number
  /** Render the top sheen (defaults to `true`). */
  sheen?: boolean
}

/**
 * Full glass surface as an `sx` object, for elements that are not a MUI
 * `Card` (e.g. the `AppBar` shell or the brand logo tile).
 */
export const glassSurface = ({
  hover = false,
  radius,
  sheen = true,
}: GlassSurfaceOptions = {}): SystemStyleObject<Theme> => ({
  ...glassSurfaceCore,
  ...(radius !== undefined && { borderRadius: `${radius}px` }),
  ...(sheen && glassSheen),
  ...(hover && glassHover),
})

/** Accent-tinted tile fill used for the hero badge / logo mark. */
export const accentTile = (from: string, to: string) =>
  `linear-gradient(135deg, ${alpha(from, 0.18)}, ${alpha(to, 0.22)})`
