import styled                                from '@emotion/styled'
import { border, color, layout, typography } from 'styled-system'

export const StyledInput = styled.input(color, typography, border, layout)

StyledInput.defaultProps = {
  overflow: 'hidden',
  outline: 'none',
  width: '100%',
}
