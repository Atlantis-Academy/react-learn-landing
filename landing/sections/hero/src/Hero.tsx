import React                   from 'react'

import { WaveL }                   from '@icons/wave-l'
import FormBg                  from '../../../fragments/form-hero/src/FormBg'
import { Subtitle }                from '@fragmets/subtitle-hero'
import {TextHero}                 from '@fragments/text-hero'
import { Title }                from '@fragmets/title-hero'
import { Box, Column, Layout, Row }                 from '@ui/layout'
import { theme }               from '@ui/theme'

const Hero = () => {
  return (
    <Layout bg={theme.colors.darkBlue}>
      <Box maxWidth={112} />
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
