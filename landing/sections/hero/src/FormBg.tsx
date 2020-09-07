import React                           from 'react'
import { Box, Row }                    from '@atlantis-lab/layout'

import { BgForm }                      from '@ui/bg-form-hero'
import { FormWaveBottom, FormWaveTop } from '@ui/form-waves'

import FormBox                         from './FormBox'

const FormBg = () => {
  return (
    <BgForm width={677} height={694}>
      <FormWaveTop>
        <FormWaveBottom>
          <Box height={100} />
          <Row>
            <Box width={65} />
            <FormBox />
          </Row>
        </FormWaveBottom>
      </FormWaveTop>
    </BgForm>
  )
}

export default FormBg
