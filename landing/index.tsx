import React              from 'react'
import { ThemeProvider }  from 'emotion-theming'
import { IntlProvider }   from 'react-intl'
import { render }         from 'react-dom'

import Header             from './sections/header/Header'
import Hero               from './sections/hero/Hero'
import { Column, Layout } from './ui/layout/Layout'
import { theme }          from './ui/theme'

render(
  <IntlProvider locale='ru' defaultLocale='ru'>
    <ThemeProvider theme={theme}>
      <Layout maxWidth={1440} mx='auto'>
        <Column>
          <Header />
          <Hero />
        </Column>
      </Layout>
    </ThemeProvider>
  </IntlProvider>,
  document.body.firstElementChild
)
