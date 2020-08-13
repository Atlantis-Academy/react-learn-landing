import styled     from '@emotion/styled'
import { layout } from 'styled-system'

import { theme }  from '@ui/theme'

export const FormBg = styled('div')(
  () => ({
    background: theme.colors.dark,
    borderRadius: theme.borderRadius.m,
  }),
  layout
)
