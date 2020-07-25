import styled               from 'styled-components'
import { prop, switchProp } from 'styled-tools'

import { theme }            from './theme'

export const Text: any = styled.span`
  color: ${prop('color', `${theme.colors.dark}`)};
  font-size: ${prop('size', `${theme.fontSize.m}`)};
  line-height: ${prop('lineHeight')};
  font-family: ${prop('font', `${theme.fontFamily.text}`)};
  width: ${prop('width')};
  ${switchProp('themeText', {
    h1: {
      color: theme.colors.whiteBlue,
      fontFamily: theme.fontFamily.title,
      fontWeight: 'bold',
      fontSize: theme.fontSize.xxl,
    },
    h2: {
      fontFamily: theme.fontFamily.title,
      fontSize: theme.fontSize.l,
    },
    sectionTitle: {
      fontFamily: theme.fontFamily.title,
      fontSize: theme.fontSize.l,
      lineHeight: theme.lineHeight.l,
      color: theme.colors.dark,
    },
    buttonText: {
      textTransform: 'uppercase',
      cursor: 'pointer',
      color: theme.colors.white,
      fontSize: theme.fontSize.xs,
      fontFamily: theme.fontFamily.text,
      letterSpacing: '0.05em',
    },
  })}
`
