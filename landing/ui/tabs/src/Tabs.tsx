import React, { useState } from 'react'
import { Layout, Row }     from '@atlantis-lab/layout'

import { Text }            from '@ui/text'
import { theme }           from '@ui/theme'

import { TabsStyle }       from './TabsStyle'

export const Tabs = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <>
      <Row justifyContent='center'>
        {children.map((tab, i) => (
          <TabsStyle
            width={200}
            height={40}
            theme={activeTabIndex === i ? 'active' : null}
            type={tab.props.type}
            onClick={() => {
              setActiveTabIndex(i)
            }}
            key={tab + i.toString()}
          >
            <Text fontFamily={theme.fontFamily.text} fontSize={theme.fontSize.xs}>
              {tab.props.title}
            </Text>
          </TabsStyle>
        ))}
      </Row>
      <Layout flexBasis={80} />
      {children[activeTabIndex]}
    </>
  )
}
