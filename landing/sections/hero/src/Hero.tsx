import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'

import { theme }                    from '@ui/theme'

import Background                   from './Background'
import TextBlock                    from './TextBlock'

const Hero = () => {
  return (
    <Layout bg={theme.colors.darkBlue}>
      <Row alignItems='center'>
        <Column>
          <TextBlock />
        </Column>
        <Box maxWidth={70} width='100%' />
        <Column>
          <Background />
        </Column>
      </Row>
    </Layout>
  )
}

export default Hero
