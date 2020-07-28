import React              from 'react'
import { injectIntl }     from 'react-intl'

import FormModal          from './FormModal'
import messages           from './Messages'
import { Box }            from '../../../ui/layout/Box'
import { Column, Layout } from '../../../ui/layout/Layout'
import { Text }           from '../../../ui/text/Text'
import { CloseModal }     from './CloseModal'
import { theme }          from '../../../ui/theme'

const ModalBox = ({ showModal, intl }) => {
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
        <Layout width={390} m='0 auto'>
          <Column>
            <Text fontFamily={theme.fontFamily.title} fontSize={theme.fontSize.l}>
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
