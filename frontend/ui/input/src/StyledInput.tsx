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
    paddingLeft: '10px',
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
  }),
  layout,
  typography
)
