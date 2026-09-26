import { alpha, createTheme } from '@mui/material/styles'

import { accents, glassBase, glassTokens } from './glass'

/* ------------------------------------------------------------------ *
 * Frosted-glass tokens -> MUI theme.
 *
 * Every value below is carried over verbatim from the original
 * `global.css` design tokens, so the migration is a re-implementation
 * rather than a redesign.
 * ------------------------------------------------------------------ */

/** Display + body stacks, loaded via the Google Fonts link in `index.html`. */
export const displayFont = "'Sora', 'Inter', system-ui, sans-serif"
export const bodyFont = "'Inter', system-ui, -apple-system, sans-serif"

const accentA = accents.a
const accentB = accents.b
const accentC = accents.c

const textHigh = 'rgba(255, 255, 255, 0.94)'
const textMid = 'rgba(255, 255, 255, 0.70)'
const textLow = 'rgba(255, 255, 255, 0.50)'

/** Shared page shell: 1120px content column with 24px gutters. */
export const contentWidth = 1120
export const gutter = 24

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: accentA },
    secondary: { main: accentB },
    warning: { main: accentC },
    background: {
      default: glassTokens.page,
      // Translucent paper keeps any MUI surface (menus, popovers) on-theme.
      paper: glassTokens.bg,
    },
    text: { primary: textHigh, secondary: textMid, disabled: textLow },
    divider: glassTokens.border,
  },

  shape: { borderRadius: glassTokens.radius },

  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: displayFont,
      fontWeight: 800,
      fontSize: 'clamp(34px, 5.5vw, 54px)',
      lineHeight: 1.25,
    },
    h2: {
      fontFamily: displayFont,
      fontWeight: 700,
      fontSize: 'clamp(26px, 4vw, 36px)',
      lineHeight: 1.25,
    },
    h3: { fontFamily: displayFont, fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.25 },
    h4: { fontFamily: displayFont, fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.25 },
    body1: { lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600 },
  },

  components: {
    /* Every <Card> is a pane of frosted glass. */
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: glassBase },
    },

    /* Dark mode adds an elevation wash to Paper; the glass fill replaces it. */
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },

    /* Sticky, blurred header. */
    MuiAppBar: {
      defaultProps: { elevation: 0, color: 'transparent' },
      styleOverrides: {
        root: {
          background: glassTokens.navbar,
          backgroundImage: 'none',
          borderBottom: `1px solid ${glassTokens.border}`,
          backdropFilter: `blur(${glassTokens.blur})`,
          WebkitBackdropFilter: `blur(${glassTokens.blur})`,
        },
      },
    },

    MuiToolbar: {
      styleOverrides: { root: { minHeight: 64, height: 64 } },
    },

    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: contentWidth,
          paddingLeft: gutter,
          paddingRight: gutter,
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 22px',
          fontSize: '14.5px',
          fontWeight: 600,
          // Icon slots sit inside the flex row, so the root `gap` spaces them.
          gap: 8,
          transition: 'transform .2s ease, box-shadow .2s ease, background .2s ease',
          '& .MuiButton-startIcon, & .MuiButton-endIcon': { margin: 0 },
          '&:active': { transform: 'translateY(1px)' },
          '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
        },
        /** `.btn-primary` — accent gradient on a dark ink label. */
        containedPrimary: {
          background: `linear-gradient(135deg, ${accentA}, ${accentB})`,
          color: '#0a0b12',
          boxShadow: `0 8px 24px ${alpha(accentA, 0.2)}`,
          '&:hover': {
            background: `linear-gradient(135deg, ${accentA}, ${accentB})`,
            boxShadow: `0 10px 32px ${alpha(accentB, 0.35)}`,
            transform: 'translateY(-2px)',
          },
          '&:active': { transform: 'translateY(1px)' },
        },
        /** `.btn-ghost` — a small pane of glass. */
        outlined: {
          background: glassTokens.bg,
          borderColor: glassTokens.border,
          color: textHigh,
          backdropFilter: `blur(${glassTokens.blur})`,
          WebkitBackdropFilter: `blur(${glassTokens.blur})`,
          '&:hover': {
            background: glassTokens.bgStrong,
            borderColor: glassTokens.border,
            transform: 'translateY(-2px)',
          },
          '&:active': { transform: 'translateY(1px)' },
        },
      },
    },

    MuiChip: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          height: 'auto',
          padding: '6px 13px',
          borderRadius: 999,
          border: '1px solid',
          borderColor: glassTokens.border,
          background: glassTokens.bg,
          color: textMid,
          fontSize: 13,
          fontWeight: 500,
          transition: 'color .2s ease, border-color .2s ease, background .2s ease',
          '&:hover': {
            color: textHigh,
            borderColor: alpha(accentA, 0.4),
            background: glassTokens.bgStrong,
          },
          '& .MuiChip-icon, & .MuiChip-deleteIcon': { margin: 0, color: 'inherit' },
          '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
        },
        label: { padding: 0, display: 'inline-flex', alignItems: 'center' },
      },
    },

    MuiDivider: {
      styleOverrides: { root: { borderColor: glassTokens.border } },
    },

    MuiLink: {
      defaultProps: { underline: 'none' },
      styleOverrides: { root: { color: 'inherit' } },
    },
  },
})

export default theme
