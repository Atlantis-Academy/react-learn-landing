import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'

import { Header }                   from '@sections/header'
import { Hero }                     from '@sections/hero'
import { theme }                    from '@ui/theme'

export const App = () => (
  <Layout maxWidth={1440} mx='auto'>
    <Row>
      <Box maxWidth={105} width='100%' bg={theme.colors.darkBlue} />
      <Column>
        <Header />
        <Hero />
      </Column>
      <Box maxWidth={105} width='100%' bg={theme.colors.darkBlue} />
    </Row>
  </Layout>
)
