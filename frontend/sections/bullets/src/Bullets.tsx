import React                               from 'react'
import { Box, Column, Layout, Row }        from '@atlantis-lab/layout'
import { injectIntl }                      from 'react-intl'

import { CostIcon, PlusesIcon, SpeedIcon } from '@ui/icons'
import { Tabs }                            from '@ui/tabs'
import { Text }                            from '@ui/text'
import { theme }                           from '@ui/theme'

import messages                            from './Messages'

const Bullets = ({ intl }) => {
  return (
    <Column>
      <Tabs heightTab={40} widthTab={200} tabRadius={theme.radii.large}>
        <Row title={intl.formatMessage(messages.beginnersTab)} type='left' justifyContent='center'>
          <Box width={280}>
            <Column>
              <SpeedIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='semiBig'>
                {intl.formatMessage(messages.beginnersSpeedTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersSpeedText)}</Text>
            </Column>
          </Box>
          <Layout flexBasis={140} />
          <Box width={280}>
            <Column>
              <PlusesIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='semiBig'>
                {intl.formatMessage(messages.beginnersPlusTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersPlusText)}</Text>
            </Column>
          </Box>
          <Layout flexBasis={140} />
          <Box width={280}>
            <Column>
              <CostIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='semiBig'>
                {intl.formatMessage(messages.beginnersCostTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersCostText)}</Text>
            </Column>
          </Box>
        </Row>
        <Row title={intl.formatMessage(messages.businessTab)} type='center' justifyContent='center'>
          <Box width={280}>
            <Column>
              <PlusesIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='semiBig'>
                {intl.formatMessage(messages.beginnersPlusTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersPlusText)}</Text>
            </Column>
          </Box>
          <Layout flexBasis={140} />
          <Box width={280}>
            <Column>
              <SpeedIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='s'>
                {intl.formatMessage(messages.beginnersSpeedTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersSpeedText)}</Text>
            </Column>
          </Box>
          <Layout flexBasis={140} />
          <Box width={280}>
            <Column>
              <CostIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='semiBig'>
                {intl.formatMessage(messages.beginnersCostTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersCostText)}</Text>
            </Column>
          </Box>
        </Row>
        <Row
          title={intl.formatMessage(messages.enterpriseTab)}
          type='right'
          justifyContent='center'
        >
          <Box width={280}>
            <Column>
              <CostIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='semiBig'>
                {intl.formatMessage(messages.beginnersCostTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersCostText)}</Text>
            </Column>
          </Box>
          <Layout flexBasis={140} />
          <Box width={280}>
            <Column>
              <PlusesIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='semiBig'>
                {intl.formatMessage(messages.beginnersPlusTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersPlusText)}</Text>
            </Column>
          </Box>
          <Layout flexBasis={140} />
          <Box width={280}>
            <Column>
              <SpeedIcon width={110} height={110} />
              <Layout flexBasis={30} />
              <Text fontFamily='title' fontSize='semiBig'>
                {intl.formatMessage(messages.beginnersSpeedTitle)}
              </Text>
              <Layout flexBasis={20} />
              <Text fontSize='extra'>{intl.formatMessage(messages.beginnersSpeedText)}</Text>
            </Column>
          </Box>
        </Row>
      </Tabs>
      <Layout flexBasis={180} />
    </Column>
  )
}

export default injectIntl(Bullets)
