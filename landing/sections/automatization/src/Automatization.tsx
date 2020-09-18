import React, { useState }                   from 'react'
import { Column, Layout, Row }               from '@atlantis-lab/layout'
import { injectIntl }                        from 'react-intl'

import { Button }                            from '@ui/button'
import { ArroRight, ArrowLeft, DividerDark } from '@ui/icons'
import { Slider, slides }                    from '@ui/slider'
import { Text }                              from '@ui/text'
import { theme }                             from '@ui/theme'

import messages                              from './Messages'

const Automatization = ({ intl }) => {
  const [transX, setTransX] = useState(0)

  const sliderShowLeft = () => {
    if (transX === 0) {
      setTransX(-100 * (slides.length - 1))
    } else {
      setTransX(transX + 100)
    }
  }

  const sliderShowRight = () => {
    if (transX === -100 * (slides.length - 1)) {
      setTransX(0)
    } else {
      setTransX(transX - 100)
    }
  }

  return (
    <Column alignItems='center'>
      <Layout flexBasis={96} />
      <DividerDark />
      <Layout flexBasis={30} />
      <Row alignItems='center'>
        <Layout flexBasis={105} />
        <ArrowLeft onClick={sliderShowLeft} />
        <Layout flexBasis={10} />
        <ArroRight onClick={sliderShowRight} />
        <Layout flexBasis={448} />
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
      <Row>
        <Layout width={210} />
        <Slider transX={transX}>
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
              <Button width={210} height={50} border='none' bg={theme.colors.whiteBlue}>
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
          <Layout flexBasis={135} />
        </Slider>
      </Row>
      <Layout flexBasis={234} />
    </Column>
  )
}
export default injectIntl(Automatization)
