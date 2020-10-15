import styled    from '@emotion/styled'

import { theme } from '@ui/theme'

export const TextArea = styled('textarea')(() => ({
  height: '130px',
  border: theme.borders.gray,
  borderRadius: theme.radii.s,
}))
