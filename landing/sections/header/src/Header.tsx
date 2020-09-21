import React, { useState }          from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Logo }                     from '@ui/logo'
import { ModalLanding }             from '@ui/modal'
import { theme }                    from '@ui/theme'

import ShowModal                    from './ShowModal'

const Header = () => {
  const [display, setDisplay] = useState(false)

  const showModal = () => {
    setDisplay(true)
  }

  return (
    <Box bg={theme.colors.darkBlue}>
      <Column>
        <Layout flexBasis={['8px', '8px', '40px']} />
        <Row justifyContent='center'>
          <Logo />
          <Layout flexBasis={['100px', '340px', '870px']} />
          <ShowModal showModal={showModal} />
        </Row>
        {display ? <ModalLanding onClose={setDisplay} /> : null}
      </Column>
    </Box>
  )
}

export default injectIntl(Header)
