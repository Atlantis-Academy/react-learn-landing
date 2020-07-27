import React                           from 'react'

import FormBox                         from './FormBox'
import { BgForm }                      from '../../../ui/hero/BgForm'
import { FormWaveBottom, FormWaveTop } from '../../../ui/hero/FormWave'
import { Box }                         from '../../../ui/layout/Box'
import { Row }                         from '../../../ui/layout/Layout'

const FormLayout = () => {
  return (
    <BgForm width={677} height={694}>
      <FormWaveTop>
        <FormWaveBottom>
          <Box height={100} />
          <Row>
            <Box width={79} />
            <FormBox />
          </Row>
        </FormWaveBottom>
      </FormWaveTop>
    </BgForm>
  )
}

export default FormLayout
