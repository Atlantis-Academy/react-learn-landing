import React, { useState }          from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Logo }                     from '@ui/logo'
import { Modal }                    from '@ui/modal'
import { theme }                    from '@ui/theme'

import ShowModal                    from './ShowModal'

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
          <Box width={870} />
          <ShowModal showModal={showModal} />
        </Row>
        {display ? <Modal display={setDisplay} /> : null}
      </Column>
    </Layout>
  )
}

export default injectIntl(Header)
