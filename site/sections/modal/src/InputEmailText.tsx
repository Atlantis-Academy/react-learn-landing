import React          from 'react'
import { injectIntl } from 'react-intl'

import messages       from './Messages'
import { Layout }     from '../../../ui/layout/Layout'
import { Text }       from '../../../ui/text/Text'
import { theme }      from '../../../ui/theme'

const InputNameText = ({ intl }) => {
  return (
    <Layout position='relative' top={2} left={3} bg={theme.colors.white} width='fit-content' px={2}>
      <Text
        color={theme.colors.black}
        fontFamily={theme.fontFamily.text}
        fontSize={theme.fontSize.xs}
      >
        {intl.formatMessage(messages.formEmail)}
      </Text>
    </Layout>
  )
}

export default injectIntl(InputNameText)
