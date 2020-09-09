import React                from 'react'
import { Box, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }       from 'react-intl'

import { Divider }          from '@icons/divider'
import { Text }             from '@ui/text'
import { theme }            from '@ui/theme'

import messages             from './Messages'

const TextBlock = ({ intl }) => (
  <>
    <Text
      as='h1'
      color={theme.colors.whiteBlue}
      fontFamily={theme.fontFamily.title}
      fontSize={theme.fontSize.xxl}
      lineHeight={`${theme.lineHeight.xl}px`}
    >
      {intl.formatMessage(messages.title)}
    </Text>
    <Box width={570}>
      <Text
        as='h2'
        color={theme.colors.white}
        fontFamily={theme.fontFamily.title}
        fontSize={theme.fontSize.l}
        lineHeight={`${theme.lineHeight.l}px`}
        letterSpacing={-1.5}
      >
        {intl.formatMessage(messages.subTitle)}
      </Text>
    </Box>
    <Box height={36} />
    <Divider />
    <Box height={19} />
    <Row>
      <Layout flexBasis={600}>
        <Text
          color={theme.colors.white}
          fontSize={theme.fontSize.m}
          fontFamily={theme.fontFamily.text}
          lineHeight={`${theme.lineHeight.s}px`}
        >
          {intl.formatMessage(messages.text)}
        </Text>
      </Layout>
    </Row>
  </>
)

export default injectIntl(TextBlock)
