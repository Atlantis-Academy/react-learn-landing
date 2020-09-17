import React, { useState }                      from 'react'
import { Column, Layout, Row }                  from '@atlantis-lab/layout'
import { injectIntl }                           from 'react-intl'

import { DividerDark, LeftButton, RightButton } from '@ui/icons'
import { Text }                                 from '@ui/text'
import { theme }                                from '@ui/theme'

import messages                                 from './Messages'
import Slider, { slides }                       from './Slider'

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
        <LeftButton onClick={sliderShowLeft} />
        <Layout flexBasis={10} />
        <RightButton onClick={sliderShowRight} />
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
        <Layout flexBasis={210} />
        <Slider transX={transX} />
      </Row>
      <Layout flexBasis={234} />
    </Column>
  )
}
export default injectIntl(Automatization)
