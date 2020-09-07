import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'

import { WaveL }                    from '@icons/wave-l'
import { theme }                    from '@ui/theme'

import FormBg                       from './FormBg'
import Subtitle                     from './Subtitle'
import TextHero                     from './TextHero'
import Title                        from './Title'

const Hero = () => {
  return (
    <Layout bg={theme.colors.darkBlue}>
      <Box width={112} />
      <Row alignItems='center'>
        <Column>
          <Title />
          <Subtitle />
          <Box height={36} />
          <WaveL />
          <Box height={19} />
          <TextHero />
        </Column>
        <Column>
          <FormBg />
        </Column>
      </Row>
    </Layout>
  )
}

export default Hero
