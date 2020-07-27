import React              from 'react'
import { ThemeProvider }  from 'emotion-theming'

import Header             from './sections/header/Header'
import Hero               from './sections/hero/Hero'
import { Column, Layout } from './ui/layout/Layout'
import { theme }          from './ui/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth={1440} m='auto'>
        <Column>
          <Header />
          <Hero />
        </Column>
      </Layout>
    </ThemeProvider>
  )
}

export default App
