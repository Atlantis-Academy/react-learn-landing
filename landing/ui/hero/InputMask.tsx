import styled    from '@emotion/styled'

import { theme } from '../theme'

export const InputMask = styled.div(() => ({
  width: '310px',
  height: '55px',
  background: theme.colors.dark,
  border: `${theme.border.s}px solid ${theme.colors.whiteBlue}`,
  borderRadius: theme.borderRadius.s,
  overflow: 'hidden',
  outline: 'none',
  color: theme.colors.white,
  fontFamily: theme.fontFamily.text,
  fontSize: theme.fontSize.xs,
}))
