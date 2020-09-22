import React      from 'react'
import styled     from '@emotion/styled'
import { ifProp } from 'styled-tools'

const StyledButton: any = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  z-index: 9;
  cursor: pointer;
  top: -38%;
  opacity: ${ifProp('disabled', '1', '0.5')};
  left: ${ifProp('left', '105px', '188px')};
`

export const SliderButton = ({ children, onClick, disabled, left }) => (
  <StyledButton left={left} disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
)
