import React, { useState }            from 'react'
import { Column, Layout, Row }        from '@atlantis-lab/layout'
import { injectIntl }                 from 'react-intl'

import { Background }                 from '@ui/background'
import { Button }                     from '@ui/button'
import { BackgroundPattern, Divider } from '@ui/icons'
import { Modal }                      from '@ui/modal'
import { Slider }                     from '@ui/slider'
import { Text }                       from '@ui/text'
import { theme }                      from '@ui/theme'

import messages                       from './Messages'
import { slides }                     from './Slides'

const Automatization = ({ intl }) => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(!visible)
  }

  return (
    <Column alignItems='center' position='relative'>
      <Layout flexBasis={96} />
      <Divider stroke={theme.colors.dark} />
      <Layout flexBasis={30} />
      <Row alignItems='center'>
        <Layout flexBasis={656} />
        <Layout flexBasis={390}>
          <Text
            as='h2'
            color={theme.colors.dark}
            fontFamily={theme.fontFamily.title}
            fontSize={theme.fontSize.xl}
            lineHeight={`${theme.lineHeight.l}px`}
          >
            {intl.formatMessage(messages.title)}
          </Text>
        </Layout>
      </Row>
      <Layout flexBasis={80} />
      <Row position='relative'>
        <Slider slides={slides}>
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
        </Slider>
      </Row>
      <Background
        width={285}
        height={118}
        backgroundImage={`url("${BackgroundPattern}")`}
        position='absolute'
        left='5%'
        top='67%'
      />
      <Layout flexBasis={234} />
      {visible ? <Modal onClose={setVisible} /> : null}
    </Column>
  )
}
export default injectIntl(Automatization)
