import React, { useState }     from 'react'
import { injectIntl }          from 'react-intl'

import Modal                   from '../../modal/Modal'
import Logo                    from '../../ui/icon/Logo'
import messages                from './Messages'
import { Button }              from '../../ui/header/Button'
import { Box }                 from '../../ui/layout/Box'
import { Column, Layout, Row } from '../../ui/layout/Layout'
import { Text }                from '../../ui/text/Text'
import { theme }               from '../../ui/theme'

const Header = ({ intl }: any) => {
  const [display, setDisplay] = useState(false)

  const showModal = () => {
    setDisplay(true)
  }

  return (
    <Layout bg={theme.colors.darkBlue}>
      <Column>
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
      </Column>
    </Layout>
  )
}

export default injectIntl(Header)
