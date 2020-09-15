import styled                 from '@emotion/styled'
import { background, layout } from 'styled-system'

import { BackgroundPattern }  from '@ui/icons'

export const Background = styled.div(layout, background)

export const BackgroundTop = styled('div')(() => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url("${BackgroundPattern}")`,
  backgroundSize: '285px 276px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '288px 50px',
}))

export const BackgroundBottom = styled(BackgroundTop)(() => ({
  backgroundSize: '285px 197px',
  backgroundPosition: '-32px 360px',
}))
