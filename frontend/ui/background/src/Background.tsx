import styled                                           from '@emotion/styled'
import { background, display, layout, position, space } from 'styled-system'

import { Pattern }                                      from './Pattern'

export const Background = styled.div(layout, background, position, space, display)

export const Top = styled('div')(() => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url("${Pattern}")`,
  backgroundSize: '46% 37%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '98% 10%',
}))

export const Bottom = styled(Top)(() => ({
  backgroundSize: '30% 28%',
  backgroundPosition: '0% 68%',
}))
