import React          from 'react'
import { injectIntl } from 'react-intl'

import messages       from './Messages'
import { Box }        from '@ui/layout'
import { Text }       from '@ui/text'
import { theme }      from '@ui/theme'

const Subtitle = ({ intl }) => {
  return (
    <Box width={570}>
        <Text
          color={theme.colors.white}
          fontFamily={theme.fontFamily.title}
          fontSize={theme.fontSize.l}
          lineHeight={`${theme.lineHeight.l}px`}
          letterSpacing={-1.5}
        >
          {intl.formatMessage(messages.subTitle)}
        </Text>
    </Box>
  )
}

export default injectIntl(Subtitle)
