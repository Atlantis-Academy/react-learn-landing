import styled                    from '@emotion/styled'
import { borders, color, space } from 'styled-system'

import { theme }                 from '@ui/theme'

export const Button = styled('div')(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.s,
    width: '310px',
    height: '50px',
    background: theme.colors.whiteBlue,
    textTransform: 'uppercase',
    cursor: 'pointer',
    ':hover': { background: theme.colors.hoverButton },
  },
  space,
  color,
  borders
)
