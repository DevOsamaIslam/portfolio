import { useMemo, type ReactNode } from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

import { useI18n } from '../i18n/I18nProvider'
import { localeMeta } from '../i18n/locales'
import { cacheByDirection } from './rtlCache'
import { createAppTheme } from './theme'

/**
 * Puts the direction-sensitive half of the app shell in place.
 *
 * MUI needs three things to render right-to-left, and all three derive from the
 * active locale:
 *
 *   1. a theme built with `direction: 'rtl'`, which components such as `Button`
 *      (icon slots) and `MenuList` (arrow-key handling) read directly;
 *   2. an Emotion cache whose stylis plugin list mirrors the CSS it generates,
 *      so `sx` shorthands like `pl`/`ml` and theme `styleOverrides` flip too;
 *   3. `dir`/`lang` on `<html>`, applied by `I18nProvider` — that attribute is
 *      what makes the browser lay text and flex rows out right-to-left.
 *
 * Because they all read the same locale, picking Arabic re-places the whole page
 * in a single commit: no reload, no duplicated markup, and no second set of
 * components kept in step by hand.
 */
export default function AppThemeProvider({ children }: { children: ReactNode }) {
  const { locale } = useI18n()
  const direction = localeMeta[locale].direction
  const theme = useMemo(() => createAppTheme(direction), [direction])

  return (
    <CacheProvider value={cacheByDirection[direction]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}
