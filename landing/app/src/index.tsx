import React             from 'react'
import { ThemeProvider } from 'emotion-theming'
import { IntlProvider }  from 'react-intl'
import { render }        from 'react-dom'

import { theme }         from '@ui/theme'

import { App }           from './App'

render(
  <IntlProvider locale='ru' defaultLocale='ru'>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </IntlProvider>,
  document.body.firstElementChild
)
