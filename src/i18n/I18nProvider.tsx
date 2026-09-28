import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { cvByLocale, type Cv } from '../data/cv'
import {
  LOCALE_STORAGE_KEY,
  detectLocale,
  localeMeta,
  type Locale,
} from './locales'
import { messages as messagesByLocale, type Messages } from './messages'

type I18nContextValue = {
  /** The active language. */
  locale: Locale
  /** Switches language and remembers the choice for the next visit. */
  setLocale: (locale: Locale) => void
  /** UI chrome copy for the active locale. */
  t: Messages
  /** CV content for the active locale. */
  cv: Cv
}

const I18nContext = createContext<I18nContextValue | null>(null)

/**
 * Reads the active locale and its copy. Throws instead of silently returning
 * English when called outside `<I18nProvider>`, so a missing provider surfaces
 * during development rather than shipping a half-translated page.
 */
export function useI18n(): I18nContextValue {
  const value = useContext(I18nContext)

  if (!value) {
    throw new Error('useI18n() must be called inside <I18nProvider>')
  }

  return value
}

/**
 * Owns the active language: resolves the initial locale (saved choice →
 * browser language → English), persists changes, and keeps the document
 * metadata in step with what is rendered. `index.html` keeps the English
 * values as the first-paint default, which this effect then updates.
 */
export default function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (private mode, blocked cookies). The choice
      // still applies for this session, it just will not survive a reload.
    }
  }, [])

  useEffect(() => {
    const { title, description } = messagesByLocale[locale].meta

    document.documentElement.lang = localeMeta[locale].tag
    document.title = title
    document.head
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: messagesByLocale[locale],
      cv: cvByLocale[locale],
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}