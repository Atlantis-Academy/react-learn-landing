import React          from 'react'
import { injectIntl } from 'react-intl'

import Form           from './Form'
import messages       from './Messages'
import { FormBg }     from '../../../ui/hero/FormBg'
import { Box }        from '../../../ui/layout/Box'
import { Column }     from '../../../ui/layout/Layout'
import { Text }       from '../../../ui/text/Text'
import { theme }      from '../../../ui/theme'

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
