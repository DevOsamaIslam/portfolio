import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'

import App from './App'
import I18nProvider from './i18n/I18nProvider'
import AppThemeProvider from './theme/AppThemeProvider'
import { globalStyles } from './theme/globalStyles'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root element #root was not found in index.html')
}

createRoot(container).render(
  <StrictMode>
    {/* The locale decides the direction, so i18n wraps the theme rather than
        the other way around: `AppThemeProvider` reads it and swaps the theme,
        the Emotion cache and (via I18nProvider) `<html dir>` together. */}
    <I18nProvider>
      <AppThemeProvider>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <App />
      </AppThemeProvider>
    </I18nProvider>
  </StrictMode>,
)

