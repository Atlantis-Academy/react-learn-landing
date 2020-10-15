import React, { useState }          from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Button }                   from '@ui/button'
import { Logo }                     from '@ui/logo'
import { Modal }                    from '@ui/modal'
import { Text }                     from '@ui/text'

import messages                     from './Messages'

const Header = ({ intl }) => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(!visible)
  }

  return (
    <Box bg='darkBlue'>
      <Column>
        <Layout flexBasis={['8px', '8px', '40px']} />
        <Row justifyContent='center'>
          <Logo />
          <Layout flexBasis={['100px', '340px', '870px']} />
          <Button onClick={showModal} bg='transparent' border='gray'>
            <Text color='white' fontFamily='text' fontSize='xs' letterSpacing='0.05em'>
              {intl.formatMessage(messages.headerButton)}
            </Text>
          </Button>
        </Row>
        {visible ? <Modal onClose={setVisible} /> : null}
      </Column>
    </Box>
  )
}

export default injectIntl(Header)
