import React                               from 'react'
import { Box, Column, Layout, Row }        from '@atlantis-lab/layout'
import { injectIntl }                      from 'react-intl'

import { CostIcon, PlusesIcon, SpeedIcon } from '@ui/icons'
import { TabContainer, Tabs }              from '@ui/tabs'
import { Text }                            from '@ui/text'

import messages                            from './Messages'

const Bullets = ({ intl }) => {
  return (
    <Column position='relative'>
      <Layout flexBasis={[53, 53, 0]} />
      <Tabs heightTab={[50, 50, 40]} widthTab={[114, 150, 200]} tabRadius={[5, 10, 20]}>
        <TabContainer
          title={intl.formatMessage(messages.beginnersTab)}
          type='left'
          justifyContent={[null, 'center', 'center']}
        >
          <Box width={[890, 700, 1124]}>
            <Row justifyContent={[null, 'space-between', 'space-between']}>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <SpeedIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersSpeedTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersSpeedText)}
                  </Text>
                </Column>
              </Box>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <PlusesIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersPlusTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersPlusText)}
                  </Text>
                </Column>
              </Box>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <CostIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersCostTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersCostText)}
                  </Text>
                </Column>
              </Box>
            </Row>
          </Box>
        </TabContainer>
        <TabContainer
          title={intl.formatMessage(messages.businessTab)}
          type='center'
          justifyContent={[null, 'center', 'center']}
        >
          <Box width={[890, 700, 1124]}>
            <Row justifyContent={[null, 'space-between', 'space-between']}>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <PlusesIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersPlusTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersPlusText)}
                  </Text>
                </Column>
              </Box>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <SpeedIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersSpeedTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersSpeedText)}
                  </Text>
                </Column>
              </Box>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <CostIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersCostTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersCostText)}
                  </Text>
                </Column>
              </Box>
            </Row>
          </Box>
        </TabContainer>
        <TabContainer
          title={intl.formatMessage(messages.enterpriseTab)}
          type='right'
          justifyContent={[null, 'center', 'center']}
        >
          <Box width={[890, 700, 1124]}>
            <Row justifyContent={[null, 'space-between', 'space-between']}>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <CostIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersCostTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersCostText)}
                  </Text>
                </Column>
              </Box>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <PlusesIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersPlusTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersPlusText)}
                  </Text>
                </Column>
              </Box>
              <Box px={[24, 0, 0]} width={[280, 180, 280]}>
                <Column>
                  <SpeedIcon width={[52, 67, 110]} height={[52, 67, 110]} />
                  <Layout flexBasis={30} />
                  <Text fontFamily='title' fontSize={['huge', 'huge', 'semiBig']}>
                    {intl.formatMessage(messages.beginnersSpeedTitle)}
                  </Text>
                  <Layout flexBasis={20} />
                  <Text fontSize={['extra', 'tiny', 'extra']}>
                    {intl.formatMessage(messages.beginnersSpeedText)}
                  </Text>
                </Column>
              </Box>
            </Row>
          </Box>
        </TabContainer>
      </Tabs>
      <Layout flexBasis={[53, 90, 180]} />
    </Column>
  )
}

export default injectIntl(Bullets)
