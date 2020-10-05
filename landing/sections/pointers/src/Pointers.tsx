import React, { useState }                                from 'react'
import { Column, Layout, Row }                            from '@atlantis-lab/layout'
import { injectIntl }                                     from 'react-intl'

import { CenterTab, LeftTab, RightTab }                   from '@ui/tabs'
import { Text }                                           from '@ui/text'
import { theme }                                          from '@ui/theme'

import messages                                           from './Messages'
import { BeginnersItems, BusinessItems, EnterpriseItems } from './TabsItems'

const TABS = {
  beginners: <BeginnersItems />,
  business: <BusinessItems />,
  enterprise: <EnterpriseItems />,
}

const Pointers = ({ intl }) => {
  const [selectedTab, setSelectedTab] = useState('beginners')
  return (
    <Column>
      <Row justifyContent='center' alignItems='center'>
        <LeftTab
          theme={selectedTab === 'beginners' ? 'active' : null}
          onClick={() => setSelectedTab('beginners')}
        >
          <Text fontFamily={theme.fontFamily.text} fontSize={theme.fontSize.xs}>
            {intl.formatMessage(messages.leftTab)}
          </Text>
        </LeftTab>
        <CenterTab
          theme={selectedTab === 'business' ? 'active' : null}
          onClick={() => setSelectedTab('business')}
        >
          <Text fontFamily={theme.fontFamily.text} fontSize={theme.fontSize.xs}>
            {intl.formatMessage(messages.centerTab)}
          </Text>
        </CenterTab>
        <RightTab
          theme={selectedTab === 'enterprise' ? 'active' : null}
          onClick={() => setSelectedTab('enterprise')}
        >
          <Text fontFamily={theme.fontFamily.text} fontSize={theme.fontSize.xs}>
            {intl.formatMessage(messages.rightTab)}
          </Text>
        </RightTab>
      </Row>
      <Layout flexBasis={90} />
      {TABS[selectedTab]}
      <Layout flexBasis={180} />
    </Column>
  )
}

export default injectIntl(Pointers)
