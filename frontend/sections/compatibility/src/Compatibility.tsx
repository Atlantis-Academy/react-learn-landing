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
    <Box bg='beige' justifyContent='center'>
      <Box position='relative' maxWidth={[375, 768, 1440]} width='100%' mx='auto'>
        <Background
          height={[56, 95, 180]}
          width={[107, 120, 285]}
          position='absolute'
          top={['15%', '-8%', '-8%']}
          right={['6%', '11%', '11%']}
          backgroundImage={`url("${Pattern}")`}
        />
        <Column>
          <Layout flexBasis={[23, 63, 120]} />
          <Row justifyContent='center' flexDirection={['column', 'row', 'row']} pl={[25, 0, 0]}>
            <Box width={[280, 216, 390]}>
              <Column>
                <Divider width={[36, 42, 80]} height={[3, 4, 10]} stroke={theme.colors.dark} />
                <Layout flexBasis={[16, 12, 30]} />
                <Text
                  fontSize={['huge', 'huge', 'semiBiggest']}
                  lineHeight={['normal', 'extra', 'medium']}
                  fontWeight={500}
                  fontFamily='title'
                >
                  {intl.formatMessage(messages.title)}
                </Text>
              </Column>
            </Box>
            <Layout flexBasis={[30, 0, 30]} />
            <Box
              justifyContent='center'
              borderRadius='small'
              alignItems='center'
              width={[322, 432, 810]}
              height={[163, 218, 410]}
              bg='white'
            >
              <Box
                width={[294, 400, 770]}
                height={[135, 190, 370]}
                justifyContent='center'
                alignItems='center'
                bg='beige'
              >
                <Column>
                  <Row alignItems='center' justifyContent='center'>
                    <WordIcon width={[25, 34, 64]} height={[25, 34, 64]} />
                    <Layout flexBasis={[52, 70, 125]} />
                    <ExcelIcon width={[25, 34, 64]} height={[25, 34, 64]} />
                    <Layout flexBasis={[52, 70, 125]} />
                    <PowerPointIcon width={[25, 34, 64]} height={[25, 34, 64]} />
                    <Layout flexBasis={[52, 70, 125]} />
                    <AdobeIcon width={[23, 32, 60]} height={[23, 32, 60]} />
                  </Row>
                  <Layout flexBasis={[44, 58, 117]} />
                  <Row alignItems='center' justifyContent='center'>
                    <AmoCrmIcon width={[72, 96, 179]} height={[14, 19, 35]} />
                    <Layout flexBasis={[34, 45, 80]} />
                    <BitrixIcon width={[70, 94, 176]} height={[13, 17, 32]} />
                    <Layout flexBasis={[34, 45, 80]} />
                    <OneCIcon width={[33, 44, 82]} height={[16, 22, 40]} />
                  </Row>
                </Column>
              </Box>
            </Box>
          </Row>
          <Layout flexBasis={[29, 26, 50]} />
          <Row>
            <Layout flexBasis={[108, 280, 525]} />
            <Box width={[250, 426, 495]}>
              <Text
                fontSize={['normal', 'extra', 'extra']}
                lineHeight={['small', 'small', 'medium']}
              >
                {intl.formatMessage(messages.description)}
              </Text>
            </Box>
          </Row>
          <Layout flexBasis={[30, 30, 145]} />
        </Column>
        <Background
          height={[79, 90, 120]}
          width={[89, 120, 285]}
          position='absolute'
          top={['70%', '92%', '92%']}
          left={['4%', '8%', '8%']}
          backgroundImage={`url("${Pattern}")`}
        />
      </Box>
    </Box>
  )
}

export default injectIntl(Compatibility)
