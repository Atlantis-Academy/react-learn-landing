import styled                         from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Box, Layout, Row }           from '@atlantis-lab/layout'

import { ArrowBackwardIcon }          from '@ui/icons'
import { ArrowForwardIcon }           from '@ui/icons'
import { theme }                      from '@ui/theme'

import { SliderButton }               from './SliderButton'

const Container = styled('div')(({ show }: any) => ({
  display: show ? 'flex' : 'none',
  position: 'relative',
  overflow: 'hidden',
}))

const StyledSlider = styled.div(({ transX }: any) => ({
  position: 'relative',
  display: 'flex',
  transform: `translateX(${transX}%)`,
  transition: '0.5s',
}))

const Slider = ({ children, slides }) => {
  const [transX, setTransX] = useState(0)
  const [goLeft, setGoLeft] = useState(false)
  const [goRight, setGoRight] = useState(true)

  const handleClick = direction => {
    if (direction === 'left') {
      if (transX === 0) {
        setTransX(-100 * (slides.length - 1))
      } else {
        setTransX(transX + 100)
      }
    }

    if (direction === 'right') {
      if (transX === -100 * (slides.length - 1)) {
        setTransX(0)
      } else {
        setTransX(transX - 100)
      }
    }
  }

  useEffect(() => {
    if (transX === 0) {
      setGoLeft(false)
      setGoRight(true)
    }
    if (transX !== 0) {
      setGoLeft(true)
      setGoRight(true)
    }
    if (transX === -100 * (slides.length - 1)) {
      setGoRight(false)
    }
  }, [transX, setGoRight, setGoLeft])

  return (
    <>
      <SliderButton left disabled={goLeft} onClick={() => handleClick('left')}>
        <ArrowBackwardIcon />
      </SliderButton>
      <SliderButton left={false} disabled={goRight} onClick={() => handleClick('right')}>
        <ArrowForwardIcon />
      </SliderButton>
      <Container show={children.length !== 0}>
        {slides.map(items => (
          <StyledSlider key={items.id} transX={transX}>
            <Row width={1050}>
              <Layout flexBasis={135} />
              <Box
                width='495px'
                height='370px'
                bg={theme.colors.dark}
                borderRadius={theme.borderRadius.m}
                alignItems='center'
                justifyContent='center'
              >
                {items.name}
              </Box>
              {children}
            </Row>
          </StyledSlider>
        ))}
      </Container>
    </>
  )
}

export default Slider
