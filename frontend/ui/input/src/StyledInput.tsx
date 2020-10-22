import styled                 from '@emotion/styled'
import { layout, typography } from 'styled-system'
import { switchProp }         from 'styled-tools'

import { theme }              from '@ui/theme'

export const StyledInput = styled.input(
  {
    overflow: 'hidden',
    outline: 'none',
    width: '100%',
    borderRadius: theme.radii.small,
    fontFamily: theme.fonts.text,
    height: '55px',
    padding: '0 10px 0 10px',
  },
  switchProp('context', {
    hero: {
      backgroundColor: theme.colors.dark,
      color: theme.colors.white,
      border: theme.borders.gray,
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0px 10em ${theme.colors.dark} inset !important`,
        WebkitTextFillColor: `${theme.colors.white} !important`,
        caretColor: theme.colors.white,
      },
    },
    modal: {
      border: theme.borders.gray,
      '&:-webkit-autofill': {
        WebkitBoxShadow: `0 0 0px 10em ${theme.colors.white} inset !important`,
        WebkitTextFillColor: `${theme.colors.dark} !important`,
        caretColor: theme.colors.dark,
      },
    },
  }),
  layout,
  typography
)
