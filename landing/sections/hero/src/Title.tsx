import React          from 'react'
import { injectIntl } from 'react-intl'

import { Text }       from '@ui/text'
import { theme }      from '@ui/theme'

import messages       from './Messages'

const Title = ({ intl }) => {
  return (
    <>
      <Text
        as='h1' // it works! can I save it?
        color={theme.colors.whiteBlue}
        fontFamily={theme.fontFamily.title}
        fontSize={theme.fontSize.xxl}
        lineHeight={`${theme.lineHeight.xl}px`}
      >
        {intl.formatMessage(messages.title)}
      </Text>
    </>
  )
}

export default injectIntl(Title)
