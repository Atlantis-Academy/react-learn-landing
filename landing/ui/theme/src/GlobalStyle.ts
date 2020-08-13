import { injectGlobal } from 'emotion'

import { fontFaces }    from './FontFaces'

const fontFace = (family, type) => {
  return `@font-face {
    font-family: ${family};
    src: local(${family}),
      url('../fonts/${family}-${type}.woff2')
        format('woff2'); 
  }`
}

fontFaces.map(({ family, type }) => {
  return injectGlobal(fontFace(family, type))
})

export default injectGlobal(`
  * {box-sizing: border-box;}
  button, input, textarea {outline: none;}
  body, h1, h2, p{margin: 0}
  img {object-fit: cover; width: 100%; height: 100%;}
  `)
