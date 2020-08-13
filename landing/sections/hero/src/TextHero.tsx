import React           from 'react'
import { Layout, Row } from '@ui/layout/src'
import { injectIntl }  from 'react-intl'

import { Text }        from '@ui/text'
import { theme }       from '@ui/theme'

import messages        from './Messages'

const TextHero = ({ intl }) => {
  return (
    <Row>
      <Layout flexBasis='600px'>
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
  )
}

export default injectIntl(TextHero)