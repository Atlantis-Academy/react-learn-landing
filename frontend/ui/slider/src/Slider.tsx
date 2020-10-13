import styled                            from '@emotion/styled'
import React, { useEffect, useState }    from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '@ui/icons'

import { SliderButton }                  from './SliderButton'

const Container = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}))

const SliderContainer = styled('div')(({ show }: any) => ({
  display: show ? 'flex' : 'none',
  position: 'relative',
  flexDirection: 'row',
  width: '100%',
}))

const StyledSlider = styled.div(({ transX }: any) => ({
  position: 'relative',
  display: 'flex',
  transform: `translateX(${transX}px)`,
  transition: '0.3s',
}))

const Slider = ({ children, slides, step }) => {
  const [transX, setTransX] = useState(0)
  const [goLeft, setGoLeft] = useState(false)
  const [goRight, setGoRight] = useState(true)

  const handleClick = direction => {
    if (direction === 'left') {
      if (transX === 0) {
        setTransX(-step * (slides.length - 1))
      } else {
        setTransX(transX + step)
      }
    }

    if (direction === 'right') {
      if (transX === -step * (slides.length - 1)) {
        setTransX(0)
      } else {
        setTransX(transX - step)
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
    if (transX === -step * (slides.length - 1)) {
      setGoRight(false)
    }
  }, [transX, setGoRight, setGoLeft])

  return (
    <SliderContainer show={children.length !== 0}>
      <SliderButton left disabled={goLeft} onClick={() => handleClick('left')}>
        <ArrowLeftIcon width={70} height={70} />
      </SliderButton>
      <SliderButton disabled={goRight} onClick={() => handleClick('right')}>
        <ArrowRightIcon width={70} height={70} />
      </SliderButton>
      <Container>
        <StyledSlider transX={transX}>{children}</StyledSlider>
      </Container>
    </SliderContainer>
  )
}

export default Slider
