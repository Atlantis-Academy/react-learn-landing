import React                           from 'react'

import FormBox                         from './FormBox'
import { BgForm }                      from '@ui/bg-form-hero'
import { FormWaveBottom, FormWaveTop } from '@ui/form-waves'
import { Box, Row }                         from '@ui/layout'

const FormBg = () => {
  return (
    <BgForm maxWidth={677} height={694}>
      <FormWaveTop>
        <FormWaveBottom>
          <Box height={100} />
          <Row>
            <Box maxWidth={65} />
            <FormBox />
          </Row>
        </FormWaveBottom>
      </FormWaveTop>
    </BgForm>
  )
}

export default FormBg
