import React     from 'react'

import { Text }  from '../../../ui/text/Text'
import { Title } from '../../../ui/text/Title'
import { theme } from '../../../ui/theme'

const TitleHero = () => {
  return (
    <Title>
      <Text
        color={theme.colors.whiteBlue}
        fontFamily={theme.fontFamily.title}
        fontSize={theme.fontSize.xxl}
        lineHeight={`${theme.lineHeight.xl}px`}
      >
        Riverdoc
      </Text>
    </Title>
  )
}

export default TitleHero
