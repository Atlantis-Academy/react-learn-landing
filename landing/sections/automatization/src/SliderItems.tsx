import React                   from 'react'
import { Box, Column, Layout } from '@atlantis-lab/layout'
import { injectIntl }          from 'react-intl'

import { Background }          from '@ui/background'
import { Button }              from '@ui/button'
import { Text }                from '@ui/text'
import { theme }               from '@ui/theme'

import messages                from './Messages'

const SliderItems = ({ intl, slide, showModal }) => (
  <>
    <Layout flexBasis={135} />
    <Box
      width={495}
      height={370}
      bg={theme.colors.dark}
      borderRadius={theme.borderRadius.m}
      alignItems='center'
      justifyContent='center'
    >
      <Background
        width='100%'
        height='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center'
        backgroundImage={`url(/img/${slide.name})`}
      />
    </Box>
    <Layout flexBasis={30} />
    <Layout flexBasis={390}>
      <Column>
        <Text
          color={theme.colors.dark}
          fontFamily={theme.fontFamily.text}
          fontSize={theme.fontSize.s}
          lineHeight={`${theme.lineHeight.xs}px`}
        >
          {intl.formatMessage(messages.description)}
        </Text>
        <Layout flexBasis={71} />
        <Button
          onClick={showModal}
          width={210}
          height={50}
          border='none'
          bg={theme.colors.whiteBlue}
        >
          <Text
            color={theme.colors.white}
            fontFamily={theme.fontFamily.text}
            fontSize={theme.fontSize.xs}
            letterSpacing='0.05em'
          >
            {intl.formatMessage(messages.button)}
          </Text>
        </Button>
      </Column>
    </Layout>
  </>
)

export default injectIntl(SliderItems)
