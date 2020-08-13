import React from 'react'
import { Text } from '@ui/text'
import { theme } from '@ui/theme'
import messages from './Messages'
import { Button } from '@ui/header-button'
import { injectIntl } from 'react-intl'

const ButtonHeader = ({intl, showModal}) => {
  return (
    <>
      <Button onClick={showModal}>
        <Text
          color={theme.colors.white}
          fontFamily={theme.fontFamily.text}
          fontSize={theme.fontSize.xs}
          letterSpacing='0.05em'
        >
          {intl.formatMessage(messages.headerButton)}
        </Text>
      </Button>
    </>
  )
}

export default injectIntl(ButtonHeader)
