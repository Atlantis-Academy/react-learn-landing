import React, { useState }             from 'react'
import { Box, Column, Layout, Row }    from '@atlantis-lab/layout'
import { injectIntl }                  from 'react-intl'

import { Background, Pattern }         from '@ui/background'
import { Divider }                     from '@ui/divider'
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
    <Box bg={['white', 'beige', 'white']} justifyContent='center'>
      <Box maxWidth={[375, 768, 1440]} width='100%' mx='auto'>
        <Column alignItems='center' position='relative'>
          <Layout flexBasis={[30, 80, 96]} />
          <Row justifyContent={['start', 'center', 'center']}>
            <Layout flexBasis={[20, 0, 0]} />
            <Divider width={[35, 42, 80]} height={10} stroke={theme.colors.dark} />
          </Row>
          <Layout flexBasis={[13, 30, 30]} />
          <Row alignItems='center'>
            <Layout flexBasis={[14, 360, 656]} />
            <Layout flexBasis={[210, 320, 390]}>
              <Text
                as='h2'
                fontFamily='title'
                fontSize={['huge', 'huge', 'semiBiggest']}
                lineHeight={['normal', 'normal', 'medium']}
              >
                {intl.formatMessage(messages.title)}
              </Text>
            </Layout>
          </Row>
          <Layout flexBasis={[3, 40, 80]} />
          <Slider step={length} slides={slides}>
            {slides.map((slide, index) => (
              <Box key={slide.name + index.toString()} width={1050}>
                <SliderItems slide={slide} showModal={showModal} />
              </Box>
            ))}
          </Slider>
          <Background
            display={['none', 'none', 'block']}
            width={285}
            height={118}
            backgroundImage={`url("${Pattern}")`}
            position='absolute'
            left='5%'
            top='67%'
          />
          <Layout flexBasis={[0, 58, 234]} />
          {visible ? <Modal onClose={setVisible} /> : null}
        </Column>
      </Box>
    </Box>
  )
}
export default injectIntl(Automatization)
