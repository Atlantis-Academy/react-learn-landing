import React                   from 'react'
import { Box, Layout, Row }    from '@atlantis-lab/layout'

import { WaveBottom, WaveTop } from '@ui/waves'
import { theme }               from '@ui/theme'

import FormBox                 from './FormBox'

const Background = () => {
  return (
    <Layout
      maxWidth={677}
      width='100%'
      height={694}
      style={{ background: theme.colors.gradient }} // for this to work need to add a property background
    >
      <WaveTop>
        <WaveBottom>
          <Box height={100} />
          <Row>
            <Box maxWidth={65} width='100%' />
            <FormBox />
          </Row>
        </WaveBottom>
      </WaveTop>
    </Layout>
  )
}

export default Background
