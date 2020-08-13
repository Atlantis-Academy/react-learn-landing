import React from 'react'
import { injectIntl } from 'react-intl'

import { Box } from '@ui/layout'
import { Text } from '@ui/text'
import { theme } from '@ui/theme'
import messages from './Messages'

const TextHero = ({intl}) => {
  return (
    <Box maxWidth={600}>
      <Text
        color={theme.colors.white}
        fontSize={theme.fontSize.m}
        fontFamily={theme.fontFamily.text}
        lineHeight={`${theme.lineHeight.s}px`}
      >
        {intl.formatMessage(messages.text)}
      </Text>
    </Box>
  )
}

export default injectIntl(TextHero)
