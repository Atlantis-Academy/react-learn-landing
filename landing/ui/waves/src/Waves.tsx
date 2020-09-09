import styled   from '@emotion/styled'

import { Wave } from '../../icon/Wave'

export const WaveTop = styled('div')(() => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url("${Wave}")`,
  backgroundSize: '285px 276px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '288px 50px',
}))

export const WaveBottom = styled(WaveTop)(() => ({
  backgroundSize: '285px 197px',
  backgroundPosition: '-32px 360px',
}))
