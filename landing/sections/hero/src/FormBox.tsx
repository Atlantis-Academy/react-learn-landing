import React           from 'react'
import { Box, Column } from '@atlantis-lab/layout'
import { injectIntl }  from 'react-intl'

import { Form }        from '@fragments/form-hero'
import { FormBg }      from '@ui/form-color'
import { Text }        from '@ui/text'
import { theme }       from '@ui/theme'

import messages        from './Messages'

const FormBox = ({ intl }) => {
  return (
    <FormBg width={390}>
      <Column alignItems='center'>
        <Box height={36} />
        <Text
          fontFamily={theme.fontFamily.title}
          color={theme.colors.white}
          fontSize={theme.fontSize.ml}
        >
          {intl.formatMessage(messages.formTitle)}
        </Text>
        <Box height={19} />
        <Form />
        <Box height={40} />
      </Column>
    </FormBg>
  )
}

export default injectIntl(FormBox)
