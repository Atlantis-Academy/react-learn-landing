import React, { useState } from 'react'
import { injectIntl }      from 'react-intl'

import Logo                from '../../ui/icon/Logo'
import Modal               from '../modal/Modal'
import messages            from './Messages'
import { Button }          from '../../ui/header/Button'
import { HeaderStyle }     from '../../ui/header/Header'
import { Box }             from '../../ui/layout/Box'
import { Row }             from '../../ui/layout/Layout'
import { Text }            from '../../ui/text/Text'
import { theme }           from '../../ui/theme'

const Header = ({ intl }: any) => {
  const [display, setDisplay] = useState(false)

  const showModal = () => {
    setDisplay(true)
  }

  return (
    <HeaderStyle>
      <Box height={40} />
      <Row justifyContent='center'>
        <Logo />
        <Box maxWidth={870} />
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
      </Row>
      {display ? <Modal display={setDisplay} /> : null}
    </HeaderStyle>
  )
}

export default injectIntl(Header)
