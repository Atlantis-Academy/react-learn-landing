import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

import { theme }      from '@ui/theme'

export const LeftTab: any = styled.div(
  {
    width: '200px',
    height: '40px',
    border: `1px solid ${theme.colors.gray}`,
    borderTopLeftRadius: theme.borderRadius.l,
    borderBottomLeftRadius: theme.borderRadius.l,
    color: theme.colors.colorDark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  switchProp('theme', {
    active: {
      backgroundColor: theme.colors.colorDark,
      color: theme.colors.white,
      border: 'none',
    },
  })
)

export const CenterTab: any = styled(LeftTab)({
  borderRadius: 0,
})

export const RightTab: any = styled(LeftTab)({
  borderTopRightRadius: theme.borderRadius.l,
  borderBottomRightRadius: theme.borderRadius.l,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
})
