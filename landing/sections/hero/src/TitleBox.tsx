import React          from 'react'
import { injectIntl } from 'react-intl'

import messages       from './Messages'
import { Text }       from '../../../ui/text/Text'
import { Title }      from '../../../ui/text/Title'
import { theme }      from '../../../ui/theme'

const TitleBox = ({ intl }) => {
  return (
    <Title>
      <Text
        color={theme.colors.whiteBlue}
        fontFamily={theme.fontFamily.title}
        fontSize={theme.fontSize.xxl}
        lineHeight={`${theme.lineHeight.xl}px`}
      >
        {intl.formatMessage(messages.title)}
      </Text>
    </Title>
  )
}

export default injectIntl(TitleBox)
