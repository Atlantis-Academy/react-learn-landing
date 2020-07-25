import React                   from 'react'

import WaveL                   from '../../ui/icon/WaveL'
import FormLayout              from './src/FormLayout'
import SubTitleHero            from './src/SubtitleHero'
import TextHero                from './src/TextHero'
import TitleHero               from './src/TitleHero'
import { Box }                 from '../../ui/layout/Box'
import { Column, Layout, Row } from '../../ui/layout/Layout'
import { theme }               from '../../ui/theme'

const Hero = () => {
  return (
    <Layout bg={theme.colors.darkBlue}>
      <Box maxWidth={112} />
      <Row alignItems='center'>
        <Column>
          <TitleHero />
          <SubTitleHero />
          <Box height={36} />
          <WaveL />
          <Box height={19} />
          <TextHero />
        </Column>
        <Column>
          <FormLayout />
        </Column>
      </Row>
    </Layout>
  )
}

export default Hero
