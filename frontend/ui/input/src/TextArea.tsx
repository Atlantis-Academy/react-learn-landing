import styled                 from '@emotion/styled'
import { layout, typography } from 'styled-system'

import { theme }              from '@ui/theme'

export const TextArea = styled('textarea')(
  () => ({
    border: theme.borders.gray,
    borderRadius: theme.radii.small,
    fontFamily: theme.fonts.text,
    padding: '10px',
  }),
  layout,
  typography
)
