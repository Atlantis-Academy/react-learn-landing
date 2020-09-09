import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'

import { WaveSmall }                from '@icons/wave-small'
import { theme }                    from '@ui/theme'

import RightSide                    from './RightSide'
import Subtitle                     from './Subtitle'
import TextHero                     from './TextHero'
import Title                        from './Title'

const Hero = () => {
  return (
    <Layout bg={theme.colors.darkBlue}>
      <Box maxWidth={112} width='100%' />
      <Row alignItems='center'>
        <Column>
          <Title />
          <Subtitle />
          <Box height={36} />
          <WaveSmall />
          <Box height={19} />
          <TextHero />
        </Column>
        <Box maxWidth={70} />
        <Column>
          <RightSide />
        </Column>
      </Row>
    </Layout>
  )
}

export default Hero
