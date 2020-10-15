import React                   from 'react'
import { Box, Column, Layout } from '@atlantis-lab/layout'
import { injectIntl }          from 'react-intl'

import { Background }          from '@ui/background'
import { Button }              from '@ui/button'
import { Text }                from '@ui/text'

import messages                from './Messages'

export const slides = []
const context = require.context('./img/', false, /\.jpg/)
context.keys().map(key => slides.push(key.slice(2)))

const SliderItems = ({ intl, slide, showModal }) => (
  <>
    <Layout flexBasis={135} />
    <Box
      width={495}
      height={370}
      bg='dark'
      borderRadius='m'
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
    <Layout flexBasis={390}>
      <Column>
        <Text fontSize='s' lineHeight='xs'>
          {intl.formatMessage(messages.description)}
        </Text>
        <Layout flexBasis={71} />
        <Button onClick={showModal} width={210} height={50} border='none' bg='whiteBlue'>
          <Text color='white' fontSize='xs' letterSpacing='0.05em'>
            {intl.formatMessage(messages.button)}
          </Text>
        </Button>
      </Column>
    </Layout>
  </>
)

export default injectIntl(SliderItems)
