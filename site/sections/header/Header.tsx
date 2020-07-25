import React           from 'react'
import { injectIntl }  from 'react-intl'

import Logo            from '../../ui/icon/Logo'
import messages        from './Messages'
import { Button }      from '../../ui/header/Button'
import { HeaderStyle } from '../../ui/header/Header'
import { Box }         from '../../ui/layout/Box'
import { Row }         from '../../ui/layout/Layout'
import { Text }        from '../../ui/Text'

const Header = ({ intl }: any) => {
  return (
    <HeaderStyle>
      <Box height={40} />
      <Row justifyContent='center'>
        <Logo />
        <Box maxWidth={875} />
        <Button>
          <Text themeText='buttonText'>{intl.formatMessage(messages.headerButton)}</Text>
        </Button>
      </Row>
    </HeaderStyle>
  )
}

export default injectIntl(Header)
