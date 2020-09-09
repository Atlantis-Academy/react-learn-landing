import React                           from 'react'
import { Box, Row }                    from '@atlantis-lab/layout'

import { FormWaveBottom, FormWaveTop } from '@ui/form-waves'
import { RightSideBg }                 from '@ui/right-side-bg'

import FormBox                         from './FormBox'

const RightSide = () => {
  return (
    <RightSideBg maxWidth={677} width='100%' height={694}>
      <FormWaveTop>
        <FormWaveBottom>
          <Box height={100} />
          <Row>
            <Box width={65} />
            <FormBox />
          </Row>
        </FormWaveBottom>
      </FormWaveTop>
    </RightSideBg>
  )
}

export default RightSide
