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
    <Column alignItems='center' position='relative'>
      <Layout flexBasis={96} />
      <Divider width={80} height={10} stroke={theme.colors.dark} />
      <Layout flexBasis={30} />
      <Row alignItems='center'>
        <Layout flexBasis={656} />
        <Layout flexBasis={390}>
          <Text as='h2' fontFamily='title' fontSize='semiBiggest' lineHeight='medium'>
            {intl.formatMessage(messages.title)}
          </Text>
        </Layout>
      </Row>
      <Layout flexBasis={80} />
      <Slider step={length} slides={slides}>
        {slides.map((slide, index) => (
          <Box key={slide.name + index.toString()} width={length}>
            <SliderItems slide={slide} showModal={showModal} />
          </Box>
        ))}
      </Slider>
      <Background
        width={285}
        height={118}
        backgroundImage={`url("${Pattern}")`}
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
