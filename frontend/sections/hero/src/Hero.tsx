import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Background, Bottom, Top }  from '@ui/background'
import { Divider }                  from '@ui/divider'
import { Form }                     from '@ui/form'
import { Text }                     from '@ui/text'
import { theme }                    from '@ui/theme'

import messages                     from './Messages'

const Hero = ({ intl }) => {
  return (
    <Box bg='darkBlue' justifyContent='center'>
      <Row alignItems='center' justifyContent='center'>
        <Layout flexBasis='43%'>
          <Column>
            <Text as='h1' color='whiteBlue' fontFamily='title' fontSize='xxl' lineHeight='xl'>
              {intl.formatMessage(messages.title)}
            </Text>
            <Box maxWidth={464} width='100%'>
              <Text
                as='h2'
                color={theme.colors.white}
                fontFamily='title'
                fontSize='l'
                lineHeight='l'
                letterSpacing={-1.5}
              >
                {intl.formatMessage(messages.subTitle)}
              </Text>
            </Box>
            <Layout flexBasis={36} />
            <Divider width={80} height={10} />
            <Layout flexBasis={19} />
            <Text color='white' fontSize='m' fontFamily='text' lineHeight='s'>
              {intl.formatMessage(messages.text)}
            </Text>
          </Column>
        </Layout>
        <Layout flexBasis='43%'>
          <Background width='100%' background={theme.colors.gradient}>
            <Top>
              <Bottom>
                <Column justifyContent='center' alignItems='center'>
                  <Layout flexBasis={100} />
                  <Box width={390} bg='dark' borderRadius='m'>
                    <Column alignItems='center'>
                      <Layout flexBasis={36} />
                      <Text fontFamily='title' color='white' fontSize='ml'>
                        {intl.formatMessage(messages.formTitle)}
                      </Text>
                      <Layout flexBasis={19} />
                      <Form context='hero' textButton={intl.formatMessage(messages.button)} />
                      <Layout flexBasis={40} />
                    </Column>
                  </Box>
                  <Layout flexBasis={110} />
                </Column>
              </Bottom>
            </Top>
          </Background>
        </Layout>
      </Row>
    </Box>
  )
}

export default injectIntl(Hero)
