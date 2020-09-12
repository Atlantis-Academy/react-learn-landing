import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Form }                     from '@fragments/form-hero'
import { Background }               from '@ui/background'
import { Divider }                  from '@ui/icons'
import { Text }                     from '@ui/text'
import { WaveBottom, WaveTop }      from '@ui/waves'
import { theme }                    from '@ui/theme'

import messages                     from './Messages'

const Hero = ({ intl }) => {
  return (
    <Layout bg={theme.colors.darkBlue}>
      <Row alignItems='center' justifyContent='center'>
        <Layout flexBasis={600}>
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
              <Text
                color={theme.colors.white}
                fontSize={theme.fontSize.m}
                fontFamily={theme.fontFamily.text}
                lineHeight={`${theme.lineHeight.s}px`}
              >
                {intl.formatMessage(messages.text)}
              </Text>
            </Row>
          </Column>
        </Layout>
        <Box maxWidth={70} width='100%' />
        <Background maxWidth={573} width='100%' height={694} background={theme.colors.gradient}>
          <WaveTop>
            <WaveBottom>
              <Box height={100} />
              <Row>
                <Box maxWidth={65} width='100%' />
                <Box width={390} bg={theme.colors.dark} borderRadius={theme.borderRadius.m}>
                  <Column alignItems='center'>
                    <Box height={36} />
                    <Text
                      fontFamily={theme.fontFamily.title}
                      color={theme.colors.white}
                      fontSize={theme.fontSize.ml}
                    >
                      {intl.formatMessage(messages.formTitle)}
                    </Text>
                    <Box height={19} />
                    <Form />
                    <Box height={40} />
                  </Column>
                </Box>
              </Row>
            </WaveBottom>
          </WaveTop>
        </Background>
      </Row>
    </Layout>
  )
}

export default injectIntl(Hero)
