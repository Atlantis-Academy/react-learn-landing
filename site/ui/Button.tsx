import styled                    from '@emotion/styled'
import { borders, color, space } from 'styled-system'

import { theme }                 from './theme'

export const Button = styled('button')(
  {
    borderRadius: theme.borderRadius.s,
    padding: '15px 25px',
    background: theme.colors.whiteBlue,
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    ':hover': { background: theme.colors.hoverButton },
  },
  space,
  color,
  borders
)
