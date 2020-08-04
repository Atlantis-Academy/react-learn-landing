import React              from 'react'
import ReactDOM           from 'react-dom'
import { ThemeProvider }  from 'emotion-theming'
import { IntlProvider }   from 'react-intl'

import Header             from './sections/header/Header'
import Hero               from './sections/hero/Hero'
import { Column, Layout } from './ui/layout/Layout'
import { theme }          from './ui/theme'

ReactDOM.render(
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
  document.body.firstElementChild // HtmlWebpackPlugin creates element with ID, now I don't need to know which ID
)
