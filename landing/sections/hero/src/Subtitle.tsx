import React          from 'react'
import { Box }        from '@atlantis-lab/layout'
import { injectIntl } from 'react-intl'

import { Text }       from '@ui/text'
import { theme }      from '@ui/theme'

import messages       from './Messages'

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
