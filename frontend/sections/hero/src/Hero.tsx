import React                                                    from 'react'
import { Box, Column, Layout, Row }                             from '@atlantis-lab/layout'
import { injectIntl }                                           from 'react-intl'

import { Background, BackgroundBottom, BackgroundTop, Divider } from '@ui/background'
import { Form }                                                 from '@ui/form'
import { Text }                                                 from '@ui/text'
import { theme }                                                from '@ui/theme'

import messages                                                 from './Messages'

const Hero = ({ intl }) => {
  return (
    <Box bg={theme.colors.darkBlue} justifyContent='center'>
      <Row alignItems='center' justifyContent='center'>
        <Layout flexBasis='43%'>
          <Column>
            <Text
              as='h1'
              color={theme.colors.whiteBlue}
              fontFamily={theme.fontFamily.title}
              fontSize={theme.fontSize.xxl}
              lineHeight={`${theme.lineHeight.xl}px`}
            >
              {intl.formatMessage(messages.title)}
            </Text>
            <Box maxWidth={464} width='100%'>
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
            <Layout flexBasis={36} />
            <Divider width={80} height={10} />
            <Layout flexBasis={19} />
            <Text
              color={theme.colors.white}
              fontSize={theme.fontSize.m}
              fontFamily={theme.fontFamily.text}
              lineHeight={`${theme.lineHeight.s}px`}
            >
              {intl.formatMessage(messages.text)}
            </Text>
          </Column>
        </Layout>
        <Layout flexBasis='43%'>
          <Background width='100%' background={theme.colors.gradient}>
            <BackgroundTop>
              <BackgroundBottom>
                <Column justifyContent='center' alignItems='center'>
                  <Layout flexBasis={100} />
                  <Box width={390} bg={theme.colors.dark} borderRadius={theme.borderRadius.m}>
                    <Column alignItems='center'>
                      <Layout flexBasis={36} />
                      <Text
                        fontFamily={theme.fontFamily.title}
                        color={theme.colors.white}
                        fontSize={theme.fontSize.ml}
                      >
                        {intl.formatMessage(messages.formTitle)}
                      </Text>
                      <Layout flexBasis={19} />
                      <Form context='hero' textButton={intl.formatMessage(messages.button)} />
                      <Layout flexBasis={40} />
                    </Column>
                  </Box>
                  <Layout flexBasis={110} />
                </Column>
              </BackgroundBottom>
            </BackgroundTop>
          </Background>
        </Layout>
      </Row>
    </Box>
  )
}

export default injectIntl(Hero)
