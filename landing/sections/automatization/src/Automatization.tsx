import React, { useState }             from 'react'
import { Box, Column, Layout, Row }    from '@atlantis-lab/layout'
import { injectIntl }                  from 'react-intl'

import { Background }                  from '@ui/background'
import { BackgroundPattern, Divider }  from '@ui/icons'
import { Modal }                       from '@ui/modal'
import { Slider, SliderItems, slides } from '@ui/slider'
import { Text }                        from '@ui/text'
import { theme }                       from '@ui/theme'

import messages                        from './Messages'

const Automatization = ({ intl, length = 1050 }) => {
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
        <Slider step={length} slides={slides}>
          {slides.map(slide => (
            <Box key={slide.id} width={length}>
              <SliderItems slide={slide} showModal={showModal} />
            </Box>
          ))}
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
