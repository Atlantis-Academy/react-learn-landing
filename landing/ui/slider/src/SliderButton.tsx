import styled        from '@emotion/styled'
import React, { FC } from 'react'
import { ifProp }    from 'styled-tools'

interface Props {
  left?: boolean
  disabled: boolean
  onClick: () => void
}

const StyledButton = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  z-index: 9;
  cursor: pointer;
  top: -150px;
  opacity: ${ifProp('disabled', '1', '0.5')};
  left: ${ifProp('left', '105px', '188px')};
`

export const SliderButton: FC<Props> = ({ children, onClick, disabled, left }) => (
  <StyledButton left={left} disabled={disabled} onClick={onClick} {...left}>
    {children}
  </StyledButton>
)
