import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { Button }                   from '@ui/button'
import { Text }                     from '@ui/text'
import { theme }                    from '@ui/theme'

import messages                     from './Messages'

export const slides = [
  { name: 'Slide1', id: 1 },
  { name: 'Slide2', id: 2 },
  { name: 'Slide3', id: 3 },
]

const Slider = ({ intl, transX }) => {
  return (
    <Row overflow='hidden' position='relative'>
      {slides.map(item => {
        return (
          <Box
            key={item.id}
            width={1050}
            style={{ transform: `translateX(${transX}%)`, transition: '0.5s' }}
          >
            <Row>
              <Box
                width='495px'
                height='370px'
                bg={theme.colors.dark}
                borderRadius={theme.borderRadius.m}
              >
                {item.name}
              </Box>
              <Layout width={30} />
              <Layout width={390}>
                <Column>
                  <Text
                    color={theme.colors.dark}
                    fontFamily={theme.fontFamily.text}
                    fontSize={theme.fontSize.s}
                    lineHeight={`${theme.lineHeight.xs}px`}
                  >
                    {intl.formatMessage(messages.sliderText)}
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
              <Layout width={135} />
            </Row>
          </Box>
        )
      })}
    </Row>
  )
}

export default injectIntl(Slider)
