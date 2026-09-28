import createCache, { type EmotionCache } from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

import type { Direction } from '../i18n/locales'

/**
 * One Emotion cache per writing direction.
 *
 * Emotion turns every MUI style — `sx` props, theme `styleOverrides` and
 * `GlobalStyles` alike — into CSS, so an RTL-aware stylis plugin is what mirrors
 * physical properties across the whole app at once. `stylis-plugin-rtl` runs
 * cssjanus over each rule, flipping `left`/`right`, `margin-*`/`padding-*`,
 * `text-align`, `border-*`, `float`, `background-position` and the X offset of
 * `translate`/`translateX`.
 *
 * `prefixer` has to be listed explicitly: passing `stylisPlugins` replaces
 * Emotion's own default list rather than extending it.
 *
 * The two caches use distinct keys so they own separate stylesheets. Switching
 * language swaps the `<CacheProvider>` value in `AppThemeProvider`, which makes
 * Emotion re-inject the rules through the matching plugin list.
 */
const createDirectionCache = (direction: Direction): EmotionCache =>
  createCache({
    key: direction === 'rtl' ? 'muirtl' : 'muiltr',
    stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : [prefixer],
  })

/** The cache to hand to `<CacheProvider>`, keyed by the direction being rendered. */
export const cacheByDirection: Record<Direction, EmotionCache> = {
  ltr: createDirectionCache('ltr'),
  rtl: createDirectionCache('rtl'),
}
