import styled from '@emotion/styled'

export const FormWaveTop = styled('div')(() => ({
  width: '100%',
  height: '100%',
  background: "url('landing/ui/icon/Wave.svg')",
  backgroundSize: '285px 276px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '288px 50px',
}))

export const FormWaveBottom = styled(FormWaveTop)(() => ({
  backgroundSize: '285px 197px',
  backgroundPosition: '6px 360px',
}))
