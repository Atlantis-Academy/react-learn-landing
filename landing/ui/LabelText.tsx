import React      from 'react'

import { Layout } from './layout/Layout'
import { Text }   from './text/Text'
import { theme }  from './theme'

const LabelText = ({ text, bg, color }) => {
  return (
    <Layout position='relative' top={2} left={3} bg={bg} width='fit-content' px={2}>
      <Text color={color} fontFamily={theme.fontFamily.text} fontSize={theme.fontSize.xs}>
        {text}
      </Text>
    </Layout>
  )
}

export default LabelText
