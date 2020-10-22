import React, { useState }                  from 'react'
import { Box, Column, Layout, Row }         from '@atlantis-lab/layout'
import { injectIntl }                       from 'react-intl'

import { Background, Bottom, Pattern, Top } from '@ui/background'
import { Button }                           from '@ui/button'
import { Divider }                          from '@ui/divider'
import { Form }                             from '@ui/form'
import { ArrowBottomIcon }                  from '@ui/icons'
import { Modal }                            from '@ui/modal'
import { Text }                             from '@ui/text'
import { theme }                            from '@ui/theme'

import messages                             from './Messages'

const Hero = ({ intl }) => {
  const [visible, setVisible] = useState(false)

  const showForm = () => {
    setVisible(!visible)
  }

  const scroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <Box bg='darkBlue' justifyContent='center'>
      <Layout maxWidth={[375, 768, 1440]} width='100%' mx='auto'>
        <Column>
          <Row alignItems='center' justifyContent='center'>
            <Layout flexBasis={['94%', '43%', '43%']}>
              <Column position='relative'>
                <Text
                  as='h1'
                  color='whiteBlue'
                  fontFamily='title'
                  fontWeight={700}
                  fontSize={['biggest', 'semiBig', 'extraLarge']}
                  lineHeight={['medium', 'extra', 'large']}
                >
                  {intl.formatMessage(messages.title)}
                </Text>
                <Layout display={['flex', 'none', 'none']} flexBasis={27} />
                <Box maxWidth={[344, 210, 464]} width='100%'>
                  <Text
                    as='h2'
                    color='white'
                    fontFamily='title'
                    fontSize={['massive', 'extra', 'semiBig']}
                    lineHeight={['normal', 'small', 'medium']}
                    fontWeight={400}
                    letterSpacing={-1.5}
                  >
                    {intl.formatMessage(messages.subTitle)}
                  </Text>
                </Box>
                <Layout flexBasis={[36, 0, 30]} />
                <Divider width={[35, 42, 80]} height={10} stroke='white' />
                <Layout flexBasis={[30, 10, 19]} />
                <Text
                  color='white'
                  fontSize={['medium', 'normal', 'large']}
                  fontFamily='text'
                  fontWeight={400}
                  lineHeight='small'
                >
                  {intl.formatMessage(messages.text)}
                </Text>
                <Layout display={['flex', 'none', 'none']} flexBasis={27} />
                <Button
                  position='relative'
                  zIndex={2}
                  display={['flex', 'none', 'none']}
                  width={346}
                  height={56}
                  onClick={showForm}
                  bg='whiteBlue'
                >
                  <Text
                    color='white'
                    fontWeight={600}
                    fontFamily='text'
                    fontSize='normal'
                    letterSpacing='0.05em'
                  >
                    {intl.formatMessage(messages.buttonMobile)}
                  </Text>
                </Button>
                {visible ? <Modal onClose={setVisible} /> : null}
                <Background
                  width={170}
                  height={90}
                  display={['flex', 'none', 'none']}
                  backgroundImage={`url("${Pattern}")`}
                  position='absolute'
                  left='55%'
                  top='-21%'
                />
                <Background
                  width={147}
                  height={140}
                  zIndex={1}
                  display={['flex', 'none', 'none']}
                  backgroundImage={`url("${Pattern}")`}
                  position='absolute'
                  left='-3%'
                  top='76%'
                />
                <Layout display={['flex', 'none', 'none']} flexBasis={74} />
                <Row display={['flex', 'none', 'none']} justifyContent='center'>
                  <Box onClick={scroll}>
                    <ArrowBottomIcon width={22} height={10} />
                  </Box>
                </Row>
                <Layout display={['flex', 'none', 'none']} flexBasis={40} />
              </Column>
            </Layout>
            <Layout display={['none', 'flex', 'flex']} flexBasis='43%'>
              <Background width='100%' background={theme.colors.gradient}>
                <Top>
                  <Bottom>
                    <Column justifyContent='center' alignItems='center'>
                      <Layout flexBasis={[null, 58, 100]} />
                      <Box width={[null, 208, 390]} bg='dark' borderRadius='medium'>
                        <Column alignItems='center'>
                          <Layout flexBasis={[null, 21, 36]} />
                          <Text
                            fontFamily='title'
                            fontWeight={400}
                            color='white'
                            fontSize={[null, 'extra', 'giant']}
                          >
                            {intl.formatMessage(messages.formTitle)}
                          </Text>
                          <Layout flexBasis={[null, 0, 19]} />
                          <Box width={[165, 165, 310]}>
                            <Form context='hero' textButton={intl.formatMessage(messages.button)} />
                          </Box>
                          <Layout flexBasis={[null, 21, 40]} />
                        </Column>
                      </Box>
                      <Layout flexBasis={[51, 51, 110]} />
                    </Column>
                  </Bottom>
                </Top>
              </Background>
            </Layout>
          </Row>
        </Column>
      </Layout>
    </Box>
  )
}

export default injectIntl(Hero)
