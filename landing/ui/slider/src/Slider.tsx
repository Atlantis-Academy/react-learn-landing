import React        from 'react'
import { Box, Row } from '@atlantis-lab/layout'

import { theme }    from '@ui/theme'

export const slides = [
  { name: 'Slide1', id: 1 },
  { name: 'Slide2', id: 2 },
  { name: 'Slide3', id: 3 },
]

const Slider = ({ transX, children }) => {
  return (
    <Row position='relative' overflow='hidden'>
      {slides.map(item => {
        return (
          <Box key={item.id} style={{ transform: `translateX(${transX}%)`, transition: '0.5s' }}>
            <Row width={1050}>
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
          </Box>
        )
      })}
    </Row>
  )
}

export default Slider
