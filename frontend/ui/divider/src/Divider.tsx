/* eslint-disable */
import React      from 'react'
import styled     from '@emotion/styled'
import { layout } from 'styled-system'

const Container = styled.div(layout)

export const Divider = ({ width, height, stroke }) => (
  <Container width={width} height={height}>
    <svg width='100%' height='100%' viewBox='0 0 82 12' fill='none' stroke={stroke}>
      <path
        d='M1 1C12.3834 1 10.6306 11 20.5669 11C30.5032 11 30.493 1 41 1'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
      />
      <path
        d='M41 1C52.3834 1 50.6306 11 60.5669 11C70.5032 11 70.493 1 81 1'
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap='round'
      />
    </svg>
  </Container>
)
