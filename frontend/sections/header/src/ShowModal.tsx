import React          from 'react'
import { injectIntl } from 'react-intl'

import { Button }     from '@ui/button'
import { Text }       from '@ui/text'
import { theme }      from '@ui/theme'

import messages       from './Messages'

const ShowModal = ({ intl, showModal }) => {
  return (
    <>
      <Button
        onClick={showModal}
        bg='transparent'
        border={`${theme.border.s}px solid ${theme.colors.white}`}
      >
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

export default injectIntl(ShowModal)
