import React                   from 'react'
import { Box, Column, Layout } from '@atlantis-lab/layout'
import { injectIntl }          from 'react-intl'

import { HeaderModalForm }     from '@fragments/header-modal-form'
import { Text }                from '@ui/text'
import { theme }               from '@ui/theme'

import messages                from './Messages'
import { CloseModal }          from './CloseModal'

const ModalBox = ({ showModal, intl }) => {
  return (
    <Box width={510} height={700} bg={theme.colors.white} mx='auto'>
      <Column>
        <CloseModal showModal={showModal} />
        <Layout flexBasis={390} mx='auto'>
          <Column>
            <Text fontFamily={theme.fontFamily.title} fontSize={theme.fontSize.l}>
              {intl.formatMessage(messages.title)}
            </Text>
            <Layout flexBasis={50} />
            <HeaderModalForm showModal={showModal} />
          </Column>
        </Layout>
      </Column>
    </Box>
  )
}

export default injectIntl(ModalBox)
