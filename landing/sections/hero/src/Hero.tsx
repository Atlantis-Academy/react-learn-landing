import React                        from 'react'

import { TextHero }                 from '@fragments/text-hero'
import { FormBg }                   from '@fragmets/form-hero'
import { Subtitle }                 from '@fragmets/subtitle-hero'
import { Title }                    from '@fragmets/title-hero'
import { WaveL }                    from '@icons/wave-l'
import { Box, Column, Layout, Row } from '@ui/layout'
import { theme }                    from '@ui/theme'

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
