import styled from '@emotion/styled'
import { borders, color } from 'styled-system'

import { theme } from '@ui/theme'

export const Button = styled('div')(
  () => ({
    borderRadius: theme.borderRadius.s,
    width: '200px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: `${theme.border.s}px solid ${theme.colors.white}`,
    textTransform: 'uppercase',
    cursor: 'pointer',
    ':hover': {background: theme.colors.hoverButton},
  }),
  color,
  borders
)
