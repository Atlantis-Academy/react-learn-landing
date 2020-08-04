import styled    from '@emotion/styled'

import { theme } from '../theme'

export const TextArea = styled('textarea')(() => ({
  height: '130px',
  border: `${theme.border.s}px solid ${theme.colors.borderInput}`,
  borderRadius: theme.borderRadius.s,
}))
