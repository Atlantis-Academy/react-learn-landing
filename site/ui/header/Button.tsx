import styled             from '@emotion/styled'
import { borders, color } from 'styled-system'

import { theme }          from '../theme'

export const Button = styled('button')(
  () => ({
    borderRadius: theme.borderRadius.s,
    padding: '10px 30px',
    background: 'transparent',
    border: `${theme.border.s}px solid ${theme.colors.white}`,
    textTransform: 'uppercase',
    cursor: 'pointer',
    ':hover': { background: theme.colors.hoverButton },
  }),
  color,
  borders
)
