import styled         from '@emotion/styled'
import { layout }     from 'styled-system'
import { switchProp } from 'styled-tools'

import { theme }      from '@ui/theme'

export const TabsStyle: any = styled.div(
  {
    border: `1px solid ${theme.colors.gray}`,
    color: theme.colors.colorDark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  switchProp('type', {
    left: {
      borderTopLeftRadius: theme.borderRadius.l,
      borderBottomLeftRadius: theme.borderRadius.l,
    },
    center: {
      borderRadius: 0,
    },
    right: {
      borderTopRightRadius: theme.borderRadius.l,
      borderBottomRightRadius: theme.borderRadius.l,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }),
  switchProp('theme', {
    active: {
      backgroundColor: theme.colors.colorDark,
      color: theme.colors.white,
      border: 'none',
    },
  }),
  layout
)
