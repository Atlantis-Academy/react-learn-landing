/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-empty */
import { injectGlobal } from 'emotion'

import { fontFaces }    from './theme'

const fontFace = (family, type) => ({
  '@font-face': {
    fontFamily: family,
    src: `local('${family}-${type}'),
          url('/static/fonts/${family}-${type}.woff2') format('woff2')`,
  },
})

fontFaces.map(({ family, type }) => {
  return injectGlobal(fontFace(family, type))
})

export const globalStyle = injectGlobal(`
  * {box-sizing: border-box;}
  button, input, textarea {outline: none;}
  body, h1, h2, p{margin: 0} 
  `)
