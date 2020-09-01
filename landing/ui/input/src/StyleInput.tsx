import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

import { theme }      from '../../theme/src'

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
  switchProp('theme', {
    hero: {
      backgroundColor: theme.colors.dark,
      color: theme.colors.white,
      border: `${theme.border.s}px solid ${theme.colors.whiteBlue}`,
      width: '310px',
    },
    modal: {
      border: `${theme.border.s}px solid ${theme.colors.borderInput}`,
    },
  })
)
