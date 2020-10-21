import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Background, Pattern }      from '@ui/background'
import { Divider }                  from '@ui/divider'
import {
  AdobeIcon,
  AmoCrmIcon,
  BitrixIcon,
  ExcelIcon,
  OneCIcon,
  PowerPointIcon,
  WordIcon,
} from '@ui/icons'
import { Text }                     from '@ui/text'
import { theme }                    from '@ui/theme'

import messages                     from './messages'

const Compatibility = ({ intl }) => {
  return (
    <Box position='relative' bg='beige'>
      <Background
        height={180}
        width={285}
        position='absolute'
        top='-8%'
        right='11%'
        backgroundImage={`url("${Pattern}")`}
      />
      <Column>
        <Layout flexBasis={120} />
        <Row justifyContent='center'>
          <Box width={390}>
            <Column>
              <Divider width={80} height={10} stroke={theme.colors.dark} />
              <Layout flexBasis={30} />
              <Text fontSize='semiBiggest' lineHeight='medium' fontFamily='title'>
                {intl.formatMessage(messages.title)}
              </Text>
            </Column>
          </Box>
          <Layout flexBasis={30} />
          <Box justifyContent='center' alignItems='center' width={810} height={410} bg='white'>
            <Box width={770} height={370} justifyContent='center' alignItems='center' bg='beige'>
              <Column>
                <Row alignItems='center' justifyContent='center'>
                  <WordIcon width={64} height={64} />
                  <Layout flexBasis={125} />
                  <ExcelIcon width={64} height={64} />
                  <Layout flexBasis={125} />
                  <PowerPointIcon width={64} height={64} />
                  <Layout flexBasis={125} />
                  <AdobeIcon width={60} height={60} />
                </Row>
                <Layout flexBasis={117} />
                <Row alignItems='center' justifyContent='center'>
                  <AmoCrmIcon width={179} height={35} />
                  <Layout flexBasis={80} />
                  <BitrixIcon width={176} height={32} />
                  <Layout flexBasis={80} />
                  <OneCIcon width={82} height={40} />
                </Row>
              </Column>
            </Box>
          </Box>
        </Row>
        <Layout flexBasis={50} />
        <Row>
          <Layout flexBasis={525} />
          <Box width={495}>
            <Text fontSize='extra' lineHeight='medium'>
              {intl.formatMessage(messages.description)}
            </Text>
          </Box>
        </Row>
        <Layout flexBasis={145} />
      </Column>
      <Background
        height={120}
        width={285}
        position='absolute'
        top='92%'
        left='8%'
        backgroundImage={`url("${Pattern}")`}
      />
    </Box>
  )
}

export default injectIntl(Compatibility)
