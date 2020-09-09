import React           from 'react'
import { Box, Column } from '@atlantis-lab/layout'
import { injectIntl }  from 'react-intl'

import { Form }        from '@fragments/form-hero'
import { Text }        from '@ui/text'
import { theme }       from '@ui/theme'

import messages        from './Messages'

const FormBox = ({ intl }) => {
  return (
    <Box width={390} bg={theme.colors.dark} borderRadius={theme.borderRadius.m}>
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
    </Box>
  )
}

export default injectIntl(FormBox)
