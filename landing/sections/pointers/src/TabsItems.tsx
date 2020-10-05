import React                               from 'react'
import { Box, Column, Layout, Row }        from '@atlantis-lab/layout'
import { injectIntl }                      from 'react-intl'

import { CostIcon, PlusesIcon, SpeedIcon } from '@ui/icons'
import { Text }                            from '@ui/text'
import { theme }                           from '@ui/theme'

import messages                            from './Messages'

const tabsItemsBeginners = [
  {
    icon: <SpeedIcon width={110} height={110} />,
    title: messages.beginnersSpeedTitle,
    text: messages.beginnersSpeedText,
  },
  {
    icon: <PlusesIcon width={110} height={110} />,
    title: messages.beginnersPlusTitle,
    text: messages.beginnersPlusText,
  },
  {
    icon: <CostIcon width={110} height={110} />,
    title: messages.beginnersCostTitle,
    text: messages.beginnersCostText,
  },
]

const tabsItemsBusiness = [
  {
    icon: <PlusesIcon width={110} height={110} />,
    title: messages.beginnersPlusTitle,
    text: messages.beginnersPlusText,
  },
  {
    icon: <SpeedIcon width={110} height={110} />,
    title: messages.beginnersSpeedTitle,
    text: messages.beginnersSpeedText,
  },
  {
    icon: <CostIcon width={110} height={110} />,
    title: messages.beginnersCostTitle,
    text: messages.beginnersCostText,
  },
]

const tabsItemsEnterprise = [
  {
    icon: <SpeedIcon width={110} height={110} />,
    title: messages.beginnersSpeedTitle,
    text: messages.beginnersSpeedText,
  },
  {
    icon: <CostIcon width={110} height={110} />,
    title: messages.beginnersCostTitle,
    text: messages.beginnersCostText,
  },
  {
    icon: <PlusesIcon width={110} height={110} />,
    title: messages.beginnersPlusTitle,
    text: messages.beginnersPlusText,
  },
]

const Beginners = ({ intl }) => (
  <Row justifyContent='center'>
    {tabsItemsBeginners.map((item, index) => {
      return (
        <React.Fragment key={item + index.toString()}>
          <Layout flexBasis={70} />
          <Box width='100%' maxWidth={280}>
            <Column>
              {item.icon}
              <Layout flexBasis={30} />
              <Text
                fontFamily={theme.fontFamily.title}
                fontSize={theme.fontSize.l}
                color={theme.colors.colorDark}
              >
                {intl.formatMessage(item.title)}
              </Text>
              <Layout flexBasis={20} />
              <Text
                fontFamily={theme.fontFamily.text}
                fontSize={theme.fontSize.s}
                color={theme.colors.colorDark}
              >
                {intl.formatMessage(item.text)}
              </Text>
            </Column>
          </Box>
          <Layout flexBasis={70} />
        </React.Fragment>
      )
    })}
  </Row>
)

const Business = ({ intl }) => (
  <Row justifyContent='center'>
    {tabsItemsBusiness.map((item, index) => {
      return (
        <React.Fragment key={item + index.toString()}>
          <Layout flexBasis={70} />
          <Box width={280}>
            <Column>
              {item.icon}
              <Layout flexBasis={30} />
              <Text
                fontFamily={theme.fontFamily.title}
                fontSize={theme.fontSize.l}
                color={theme.colors.colorDark}
              >
                {intl.formatMessage(item.title)}
              </Text>
              <Layout flexBasis={20} />
              <Text
                fontFamily={theme.fontFamily.text}
                fontSize={theme.fontSize.s}
                color={theme.colors.colorDark}
              >
                {intl.formatMessage(item.text)}
              </Text>
            </Column>
          </Box>
          <Layout flexBasis={70} />
        </React.Fragment>
      )
    })}
  </Row>
)

const Enterprise = ({ intl }) => (
  <Row justifyContent='center'>
    {tabsItemsEnterprise.map((item, index) => {
      return (
        <React.Fragment key={item + index.toString()}>
          <Layout flexBasis={70} />
          <Box width={280}>
            <Column>
              {item.icon}
              <Layout flexBasis={30} />
              <Text
                fontFamily={theme.fontFamily.title}
                fontSize={theme.fontSize.l}
                color={theme.colors.colorDark}
              >
                {intl.formatMessage(item.title)}
              </Text>
              <Layout flexBasis={20} />
              <Text
                fontFamily={theme.fontFamily.text}
                fontSize={theme.fontSize.s}
                color={theme.colors.colorDark}
              >
                {intl.formatMessage(item.text)}
              </Text>
            </Column>
          </Box>
          <Layout flexBasis={70} />
        </React.Fragment>
      )
    })}
  </Row>
)

export const BeginnersItems = injectIntl(Beginners)
export const BusinessItems = injectIntl(Business)
export const EnterpriseItems = injectIntl(Enterprise)
