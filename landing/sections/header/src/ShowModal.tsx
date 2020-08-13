import React          from 'react'
import { injectIntl } from 'react-intl'

import { Button }     from '@ui/header-button'
import { Text }       from '@ui/text'
import { theme }      from '@ui/theme'

import messages       from './Messages'

const ShowModal = ({ intl, showModal }) => {
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

export default injectIntl(ShowModal)
