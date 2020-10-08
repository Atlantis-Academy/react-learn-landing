import React          from 'react'
import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

import { Text }       from '@ui/text'
import { theme }      from '@ui/theme'

const LabelBackground: any = styled.div(
  {
    position: 'relative',
    top: 8,
    left: 16,
    width: 'fit-content',
    padding: '0 8px',
  },
  switchProp('context', {
    hero: {
      backgroundColor: theme.colors.dark,
      color: theme.colors.white,
    },
    modal: {
      backgroundColor: theme.colors.white,
      color: theme.colors.dark,
    },
  })
)

const LabelText = ({ text, context }) => {
  return (
    <LabelBackground context={context}>
      <Text fontFamily={theme.fontFamily.text} fontSize={theme.fontSize.xs}>
        {text}
      </Text>
    </LabelBackground>
  )
}

export default LabelText
