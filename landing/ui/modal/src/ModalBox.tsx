import React from 'react'
import { injectIntl } from 'react-intl'

import { theme } from '@ui/theme'
import FormModal from './FormModal'
import { Box, Column, Layout } from '@ui/layout'
import { Text } from '@ui/text'
import { CloseModal } from './CloseModal'
import messages from './Messages'

const ModalBox = ({showModal, intl}) => {
  return (
    <Layout
      width={510}
      height={700}
      bg={theme.colors.white}
      position='fixed'
      zIndex={10}
      m='auto'
      top={40}
      left='37%'
    >
      <Column>
        <CloseModal showModal={showModal} />
        <Box height={10} />
        <Layout
          width={390}
          m='0 auto'
        >
          <Column>
            <Text
              fontFamily={theme.fontFamily.title}
              fontSize={theme.fontSize.l}
            >
              {intl.formatMessage(messages.title)}
            </Text>
            <Box height={50} />
            <FormModal showModal={showModal} />
          </Column>
        </Layout>
      </Column>
    </Layout>
  )
}

export default injectIntl(ModalBox)
