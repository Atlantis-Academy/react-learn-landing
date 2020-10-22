import styled        from '@emotion/styled'
import React, { FC } from 'react'
import { ifProp }    from 'styled-tools'

interface Props {
  left?: boolean
  disabled: boolean
  onClick: () => void
}

const StyledButton = styled.div`
  position: absolute;
  z-index: 9;
  cursor: pointer;
  opacity: ${ifProp('disabled', '1', '0.5')};
`

export const SliderButton: FC<Props> = ({ children, onClick, disabled, left }) => (
  <StyledButton left={left} disabled={disabled} onClick={onClick} {...left}>
    {children}
  </StyledButton>
)
