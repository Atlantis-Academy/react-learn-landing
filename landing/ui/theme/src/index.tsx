import border         from './Border'
import borderRadius   from './BorderRadius'
import fontSize       from './FontSize'
import globalStyle    from './GlobalStyle'
import lineHeight     from './LineHeight'
import { colors }     from './Colors'
import { fontFamily } from './FontFamily'

export const theme = {
  fontSize,
  colors,
  fontFamily,
  borderRadius,
  lineHeight,
  border,
  breakpoints: ['375px', '768px', '1440px'],
  globalStyle,
}
