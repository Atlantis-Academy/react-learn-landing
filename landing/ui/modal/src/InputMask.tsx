import styled    from '@emotion/styled'

import { theme } from '../../theme'

export const InputMask = styled('div')(() => ({
  height: '55px',
  width: '100%',
  border: `${theme.border.s}px solid ${theme.colors.borderInput}`,
  borderRadius: theme.borderRadius.s,
}))
