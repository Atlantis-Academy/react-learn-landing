import styled                           from '@emotion/styled'
import { background, layout, position } from 'styled-system'

import { Pattern }                      from './Pattern'

export const Background = styled.div(layout, background, position)

export const Top = styled('div')(() => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url("${Pattern}")`,
  backgroundSize: '285px 276px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '288px 50px',
}))

export const Bottom = styled(Top)(() => ({
  backgroundSize: '285px 197px',
  backgroundPosition: '-32px 360px',
}))
