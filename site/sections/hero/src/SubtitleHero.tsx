import React          from 'react'
import { injectIntl } from 'react-intl'

import messages       from './Messages'
import { Box }        from '../../../ui/layout/Box'
import { Text }       from '../../../ui/text/Text'
import { SubTitle }   from '../../../ui/text/Title'
import { theme }      from '../../../ui/theme'

const SubTitleHero = ({ intl }) => {
  return (
    <Box width={570}>
      <SubTitle>
        <Text
          color={theme.colors.white}
          fontFamily={theme.fontFamily.title}
          fontSize={theme.fontSize.l}
          lineHeight={`${theme.lineHeight.l}px`}
          letterSpacing={-1.5}
        >
          {intl.formatMessage(messages.subTitle)}
        </Text>
      </SubTitle>
    </Box>
  )
}

export default injectIntl(SubTitleHero)
