import React                   from 'react'

import WaveL                   from '../../ui/icon/WaveL'
import FormBg                  from './src/FormBg'
import SubTitle                from './src/Subtitle'
import TextBox                 from './src/TextBox'
import TitleBox                from './src/TitleBox'
import { Box }                 from '../../ui/layout/Box'
import { Column, Layout, Row } from '../../ui/layout/Layout'
import { theme }               from '../../ui/theme'

const Hero = () => {
  return (
    <Layout bg={theme.colors.darkBlue}>
      <Box maxWidth={112} />
      <Row alignItems='center'>
        <Column>
          <TitleBox />
          <SubTitle />
          <Box height={36} />
          <WaveL />
          <Box height={19} />
          <TextBox />
        </Column>
        <Column>
          <FormBg />
        </Column>
      </Row>
    </Layout>
  )
}

export default Hero
