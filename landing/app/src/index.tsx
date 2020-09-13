import Head              from 'next/head'
import React             from 'react'
import { ThemeProvider } from 'emotion-theming'
import { IntlProvider }  from 'react-intl'

import { theme }         from '@ui/theme'

import { App }           from './App'

export default () => (
  <>
    <Head>
      <title>Riverdoc</title>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0'
      />
    </Head>
    <IntlProvider locale='ru' defaultLocale='ru'>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </IntlProvider>
  </>
)
