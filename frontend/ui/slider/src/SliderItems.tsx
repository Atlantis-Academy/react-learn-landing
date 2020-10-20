import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Background }               from '@ui/background'
import { Button }                   from '@ui/button'
import { Text }                     from '@ui/text'

import messages                     from './Messages'

export const slides = []
const context = require.context('./img/', false, /\.jpg/)
context.keys().map(key => slides.push(key.slice(2)))

const SliderItems = ({ intl, slide, showModal }) => (
  <Column>
    <Row flexDirection={['column', 'row', 'row']}>
      <Layout flexBasis={[15, 23, 135]} />
      <Box
        width={[346, 309, 495]}
        height={[177, 230, 370]}
        bg='dark'
        borderRadius='medium'
        alignItems='center'
        justifyContent='center'
      >
        <Background
          width='100%'
          height='100%'
          backgroundRepeat='no-repeat'
          backgroundPosition='center'
          backgroundImage={`url('/static/img/${slide}')`}
        />
      </Box>
      <Layout flexBasis={30} />
      <Layout flexBasis={[60, 380, 390]}>
        <Column width={[346, '100%', '100%']} justifyContent='space-between'>
          <Text fontSize={['extra', 'normal', 'extra']} lineHeight='small'>
            {intl.formatMessage(messages.description)}
          </Text>
          <Button
            display={['none', 'none', 'flex']}
            onClick={showModal}
            width={210}
            height={50}
            border='none'
            bg='whiteBlue'
          >
            <Text color='white' fontSize='normal' letterSpacing='0.05em'>
              {intl.formatMessage(messages.button)}
            </Text>
          </Button>
        </Column>
      </Layout>
    </Row>
    <Layout flexBasis={[14, 23, 0]} />
    <Row>
      <Layout flexBasis={[0, 273, 0]} />
      <Button
        display={['flex', 'flex', 'none']}
        onClick={showModal}
        width={[346, 210, 210]}
        height={[56, 50, 50]}
        border='none'
        bg='whiteBlue'
      >
        <Text color='white' fontSize='normal' letterSpacing='0.05em'>
          {intl.formatMessage(messages.button)}
        </Text>
      </Button>
    </Row>
  </Column>
)

export default injectIntl(SliderItems)
