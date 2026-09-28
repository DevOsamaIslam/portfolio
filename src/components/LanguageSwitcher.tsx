import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { alpha } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'

import { useI18n } from '../i18n/I18nProvider'
import { LOCALES, localeMeta, type Locale } from '../i18n/locales'
import { accents, glassTokens } from '../theme/glass'

/**
 * A pill of frosted glass holding one segment per locale. It replaces the
 * outlined button recipe MUI ships so the control matches the navbar, and it
 * stays visible at every breakpoint — the nav links collapse on small screens,
 * but the language control must not.
 */
const groupSx: SxProps<Theme> = {
  borderRadius: 999,
  padding: '3px',
  gap: '2px',
  border: `1px solid ${glassTokens.border}`,
  background: glassTokens.bg,
  backdropFilter: `blur(${glassTokens.blur})`,
  WebkitBackdropFilter: `blur(${glassTokens.blur})`,
  boxShadow: glassTokens.inner,
  '& .MuiToggleButton-root': {
    border: 'none',
    borderRadius: 999,
    padding: '3px 10px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.06em',
    lineHeight: 1.7,
    color: 'text.secondary',
    background: 'transparent',
    transition: 'color .2s ease, background .2s ease',
    '&:hover': { color: 'text.primary', background: glassTokens.bgStrong },
    '&.Mui-selected': {
      color: 'primary.main',
      background: alpha(accents.a, 0.14),
      '&:hover': { background: alpha(accents.a, 0.2) },
    },
    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
  },
}

/**
 * Segmented EN / ES control for the navbar.
 *
 * Each option is labelled in its own language (the convention for language
 * pickers — a Spanish speaker hunting for Spanish looks for "Español"), while
 * the group's accessible name follows the active locale.
 */
export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={locale}
      aria-label={t.a11y.language}
      onChange={(_event, next: Locale | null) => {
        // `exclusive` lets a second click clear the selection; keep the
        // current language in that case instead of ending up with none.
        if (next) setLocale(next)
      }}
      sx={groupSx}
    >
      {LOCALES.map((code) => (
        <ToggleButton
          key={code}
          value={code}
          title={localeMeta[code].label}
          aria-label={localeMeta[code].label}
        >
          {localeMeta[code].short}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}