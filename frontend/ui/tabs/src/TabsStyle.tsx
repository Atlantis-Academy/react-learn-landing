import styled                      from '@emotion/styled'
import { border, flexbox, layout } from 'styled-system'
import { switchProp }              from 'styled-tools'

import { theme }                   from '@ui/theme'

export const TabsStyle: any = styled.div(
  () => ({
    border: theme.borders.gray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textAlign: 'center',
  }),
  switchProp('theme', () => ({
    active: {
      backgroundColor: theme.colors.dark,
      border: 'none',
    },
  })),
  layout,
  border
)

export const TabContainer = styled.div(
  {
    overflowX: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  flexbox
)
