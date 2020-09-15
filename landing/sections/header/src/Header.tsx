import React, { useState }          from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Logo }                     from '@ui/logo'
import { HeaderModal }              from '@ui/modal'
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
        <Layout flexBasis={40} />
        <Row justifyContent='center'>
          <Logo />
          <Layout flexBasis={870} />
          <ShowModal showModal={showModal} />
        </Row>
        {display ? <HeaderModal display={setDisplay} /> : null}
      </Column>
    </Box>
  )
}

export default injectIntl(Header)
