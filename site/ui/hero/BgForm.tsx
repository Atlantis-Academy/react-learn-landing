import styled              from '@emotion/styled'
import { flexbox, layout } from 'styled-system'

export const BgForm = styled('div')(
  () => ({
    background: 'radial-gradient(50.75% 50.75% at 50% 49.25%, #006D8D 0%, #0A4759 100%)',
  }),
  layout,
  flexbox
)
