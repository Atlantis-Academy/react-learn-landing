import React, { useState }                                   from 'react'
import { Column, Layout, Row }                               from '@atlantis-lab/layout'
import { injectIntl }                                        from 'react-intl'

import { Background }                                        from '@ui/background'
import { Button }                                            from '@ui/button'
import { ArrowLeft, ArrowRight, BackgroundPattern, Divider } from '@ui/icons'
import { Slider, slides }                                    from '@ui/slider'
import { SliderButton }                                      from '@ui/slider'
import { Text }                                              from '@ui/text'
import { theme }                                             from '@ui/theme'

import messages                                              from './Messages'

const Automatization = ({ intl }) => {
  const [transX, setTransX] = useState(0)
  const [goLeft, setGoLeft] = useState(false)
  const [goRight, setGoRight] = useState(true)

  const sliderShowLeft = () => {
    if (transX === 0) {
      setTransX(-100 * (slides.length - 1))
      setGoLeft(false)
      setGoRight(true)
    } else {
      setTransX(transX + 100)
    }
    if (transX !== 0) {
      setGoLeft(true)
    }
    if (transX === -100 * (slides.length - 1)) {
      setGoRight(false)
    }
  }

  const sliderShowRight = () => {
    if (transX === -100 * (slides.length - 1)) {
      setTransX(0)
      setGoRight(false)
    } else {
      setTransX(transX - 100)
    }
    if (transX !== 0) {
      setGoLeft(true)
    }
    if (transX === 0) {
      setGoLeft(false)
      setGoRight(true)
    }
  }

  return (
    <Column alignItems='center' position='relative'>
      <Layout flexBasis={96} />
      <Divider stroke={theme.colors.dark} />
      <Layout flexBasis={30} />
      <Row alignItems='center'>
        <Layout flexBasis={105} />
        <SliderButton disabled={goLeft} onClick={sliderShowLeft}>
          <ArrowLeft />
        </SliderButton>
        <Layout flexBasis={10} />
        <SliderButton disabled={goRight} onClick={sliderShowRight}>
          <ArrowRight />
        </SliderButton>
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
    </Column>
  )
}
export default injectIntl(Automatization)
