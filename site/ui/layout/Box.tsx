import styled                     from '@emotion/styled'
import { flexbox, layout, space } from 'styled-system'

export const Box = styled('div')(layout, space, flexbox)

Box.defaultProps = {
  display: 'flex',
  width: '100%',
}
