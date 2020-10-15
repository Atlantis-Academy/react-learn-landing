import styled             from '@emotion/styled'
import { border, layout } from 'styled-system'
import { switchProp }     from 'styled-tools'

import { theme }          from '@ui/theme'

export const TabsStyle: any = styled.div(
  () => ({
    border: theme.borders.gray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }),
  switchProp('theme', {
    active: {
      backgroundColor: theme.colors.dark,
      border: 'none',
    },
  }),
  layout,
  border
)
