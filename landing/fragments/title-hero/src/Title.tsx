import React          from 'react'
import { injectIntl } from 'react-intl'

import messages       from './Messages'
import { Text }       from '@ui/text'
import { theme }      from '@ui/theme'

const Title = ({ intl }) => {
  return (
    <>
      <Text
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
