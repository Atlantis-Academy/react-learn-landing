import React, { useState }          from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Background }               from '@ui/background'
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
    <>
      <Background
        width={768}
        height={576}
        mx='auto'
        display={['none', 'block', 'none']}
        backgroundImage={'url("/static/img/Mockup.jpg")'}
      />
      <Background
        width={375}
        height={281}
        mx='auto'
        display={['block', 'none', 'none']}
        backgroundImage={'url("/static/img/Iphone_Mockup.jpg")'}
      />
      <Box bg='darkBlue' justifyContent='center'>
        <Layout maxWidth={[375, 768, 1440]} width='100%' mx='auto'>
          <Column>
            <Layout flexBasis={[8, 8, 40]} />
            <Row justifyContent='center'>
              <Logo width={[158, 150, 156]} height={[25, 24, 26]} />
              <Layout flexBasis={[202, 340, 870]} />
              <Button
                display={['none', 'flex', 'flex']}
                width={[null, 230, 200]}
                onClick={showModal}
                bg='transparent'
                border='gray'
              >
                <Text
                  color='white'
                  fontWeight={600}
                  fontFamily='text'
                  fontSize='normal'
                  letterSpacing='0.05em'
                >
                  {intl.formatMessage(messages.headerButton)}
                </Text>
              </Button>
            </Row>
            {visible ? <Modal onClose={setVisible} /> : null}
            <Layout display={['flex', 'none', 'none']} flexBasis={[98, null, null]} />
          </Column>
        </Layout>
      </Box>
    </>
  )
}

export default injectIntl(Header)
