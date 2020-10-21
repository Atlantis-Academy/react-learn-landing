import React             from 'react'
import { ThemeProvider } from 'emotion-theming'
import { IntlProvider }  from 'react-intl'

import { theme }         from '@ui/theme'

import { App }           from './App'
import { Seo }           from './Seo'

export default () => (
  <>
    <IntlProvider locale='ru' defaultLocale='ru'>
      <Seo />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </IntlProvider>
  </>
)
