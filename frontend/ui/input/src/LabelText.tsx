import React      from 'react'
import { Layout } from '@atlantis-lab/layout'

import { Text }   from '@ui/text'
import { theme }  from '@ui/theme'

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
