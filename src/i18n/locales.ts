/**
 * Supported locales and the metadata the language switcher renders.
 *
 * Adding a language is a three-step change:
 *   1. add its code below,
 *   2. add its UI copy to `messages.ts`,
 *   3. add its CV copy to `data/cv.ts`.
 * Both files are typed `Record<Locale, …>`, so the build fails until all three
 * are done — a language can never half-ship.
 */

export const LOCALES = ['en', 'es'] as const

export type Locale = (typeof LOCALES)[number]

/** The language the page is authored in and falls back to. */
export const DEFAULT_LOCALE: Locale = 'en'

/** `localStorage` key holding the visitor's explicit choice. */
export const LOCALE_STORAGE_KEY = 'osama-portfolio:locale'

type LocaleMeta = {
  /** The language's name *in that language* — never translated. */
  readonly label: string
  /** Two-letter code shown in the switcher pill. */
  readonly short: string
  /** BCP-47 tag written to `<html lang>`. */
  readonly tag: string
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { label: 'English', short: 'EN', tag: 'en' },
  es: { label: 'Español', short: 'ES', tag: 'es' },
}

/** Narrows an arbitrary string (e.g. from storage) to a supported locale. */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

/**
 * Resolves the locale to start with: a saved choice wins, then the first
 * browser language we support, then `DEFAULT_LOCALE`. Only the primary subtag
 * is compared, so `es-419`, `es-ES` and `en-GB` all resolve correctly.
 *
 * Both reads are guarded because `localStorage` throws when storage is
 * unavailable (private mode, blocked third-party cookies).
 */
export function detectLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // Storage unavailable — fall through to browser-language detection.
  }

  // `navigator.languages` is empty in a few embedded browsers, so fall back to
  // the single `navigator.language` value.
  const preferred: readonly string[] =
    window.navigator.languages.length > 0
      ? window.navigator.languages
      : [window.navigator.language]

  for (const language of preferred) {
    // Compare primary subtags only: `es-419`/`es-ES` → `es`, `en-GB` → `en`.
    const base = language.toLowerCase().split('-')[0]
    if (isLocale(base)) return base
  }

  return DEFAULT_LOCALE
}