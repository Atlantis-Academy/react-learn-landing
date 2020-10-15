import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

import { theme }      from '@ui/theme'

export const StyledInput = styled.input(
  {
    overflow: 'hidden',
    outline: 'none',
    width: '100%',
    borderRadius: theme.radii.s,
    fontFamily: theme.fonts.text,
    fontSize: theme.fontSizes.xs,
    height: '55px',
  },
  switchProp('context', {
    hero: {
      backgroundColor: theme.colors.dark,
      color: theme.colors.white,
      border: theme.borders.gray,
    },
    modal: {
      border: theme.borders.gray,
    },
  })
)
