import styled                                      from '@emotion/styled'
import { color, flexbox, layout, position, space } from 'styled-system'

export const Column = styled.div(layout, space, flexbox, position)

Column.defaultProps = {
  width: '100%',
  flexDirection: 'column',
  display: 'flex',
}

export const Row = styled.div(layout, space, flexbox, position)

Row.defaultProps = {
  width: '100%',
  flexDirection: 'row',
  display: 'flex',
}

export const Layout = styled.div(layout, space, flexbox, position, color)

Layout.defaultProps = {
  display: 'flex',
}
