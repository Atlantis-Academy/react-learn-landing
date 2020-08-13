import React, { useState }          from 'react'
import { injectIntl }               from 'react-intl'

import { ButtonHeader }             from '@fragmets/button-header'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Logo }                     from '@ui/logo'
import { Modal }                    from '@ui/modal'
import { theme }                    from '@ui/theme'

const Header = () => {
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
          <ButtonHeader showModal={showModal} />
        </Row>
        {display ? <Modal display={setDisplay} /> : null}
      </Column>
    </Layout>
  )
}

export default injectIntl(Header)
