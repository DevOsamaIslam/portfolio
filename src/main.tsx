import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'

import App from './App'
import I18nProvider from './i18n/I18nProvider'
import { globalStyles } from './theme/globalStyles'
import theme from './theme/theme'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root element #root was not found in index.html')
}

createRoot(container).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <I18nProvider>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <App />
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
)

