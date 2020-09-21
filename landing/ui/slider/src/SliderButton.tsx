import React      from 'react'
import styled     from '@emotion/styled'
import { ifProp } from 'styled-tools'

const StyledButton: any = styled.div`
  width: 70px;
  height: 70px;
  opacity: ${ifProp('disabled', '1', '0.5')};
`

export const SliderButton = ({ children, onClick, disabled }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
)
