import React      from 'react'

import { Layout } from '../../../ui/layout/Layout'
import { Text }   from '../../../ui/text/Text'
import { theme }  from '../../../ui/theme'

const LabelText = ({ text }) => {
  return (
    <Layout position='relative' top={2} left={3} bg={theme.colors.white} width='fit-content' px={2}>
      <Text
        color={theme.colors.black}
        fontFamily={theme.fontFamily.text}
        fontSize={theme.fontSize.xs}
      >
        {text}
      </Text>
    </Layout>
  )
}

export default LabelText
