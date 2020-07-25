import styled    from '@emotion/styled'

import { theme } from '../theme'

export const CloseButton = styled('div')(() => ({
  cursor: 'pointer',
}))

export const LeftLine = styled('div')(() => ({
  width: '23px',
  height: '1px',
  background: theme.colors.dark,
  transform: 'rotate(45deg)',
  position: 'relative',
  top: '12px',
}))

export const RightLine = styled(LeftLine)(() => ({
  transform: 'rotate(-45deg)',
}))
