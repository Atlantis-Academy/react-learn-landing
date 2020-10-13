import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

import { theme }      from '@ui/theme'

export const StyledInput = styled.input(
  {
    overflow: 'hidden',
    outline: 'none',
    width: '100%',
    borderRadius: theme.borderRadius.s,
    fontFamily: theme.fontFamily.text,
    fontSize: theme.fontSize.xs,
    height: '55px',
  },
  switchProp('context', {
    hero: {
      backgroundColor: theme.colors.dark,
      color: theme.colors.white,
      border: `${theme.border.s}px solid ${theme.colors.whiteBlue}`,
    },
    modal: {
      border: `${theme.border.s}px solid ${theme.colors.borderInput}`,
    },
  })
)
