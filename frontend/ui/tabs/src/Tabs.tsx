import React, { useState } from 'react'
import { Layout, Row }     from '@atlantis-lab/layout'

import { Text }            from '@ui/text'

import { TabsStyle }       from './TabsStyle'

export const Tabs = ({ children, widthTab, heightTab, tabRadius }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <>
      <Row justifyContent='center'>
        {children.map((tab, i) => (
          <TabsStyle
            width={widthTab}
            height={heightTab}
            borderTopLeftRadius={tab.props.type === 'left' ? tabRadius : null}
            borderBottomLeftRadius={tab.props.type === 'left' ? tabRadius : null}
            borderTopRightRadius={tab.props.type === 'right' ? tabRadius : null}
            borderBottomRightRadius={tab.props.type === 'right' ? tabRadius : null}
            theme={activeTabIndex === i ? 'active' : null}
            type={tab.props.type}
            onClick={() => {
              setActiveTabIndex(i)
            }}
            key={tab + i.toString()}
          >
            <Text fontSize='normal' color={activeTabIndex === i ? 'white' : 'dark'}>
              {tab.props.title}
            </Text>
          </TabsStyle>
        ))}
      </Row>
      <Layout flexBasis={[32, 50, 80]} />
      {children[activeTabIndex]}
    </>
  )
}
