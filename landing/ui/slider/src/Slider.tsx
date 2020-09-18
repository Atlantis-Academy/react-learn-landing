import React                from 'react'
import styled               from '@emotion/styled'
import { Box, Layout, Row } from '@atlantis-lab/layout'

import { SliderIcon }       from '@ui/icons'
import { theme }            from '@ui/theme'

export const slides = [
  { name: <SliderIcon />, id: 1 },
  { name: <SliderIcon />, id: 2 },
  { name: <SliderIcon />, id: 3 },
]

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

const Slider = ({ transX, children }) => {
  return (
    <Container show={children.length !== 0}>
      {slides.map(item => {
        return (
          <StyledSlider key={item.id} transX={transX}>
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
                {item.name}
              </Box>
              {children}
            </Row>
          </StyledSlider>
        )
      })}
    </Container>
  )
}

export default Slider
