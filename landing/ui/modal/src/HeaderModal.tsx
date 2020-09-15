import React                   from 'react'
import { Box, Column, Layout } from '@atlantis-lab/layout'
import { injectIntl }          from 'react-intl'

import { HeaderModalForm }     from '@fragments/header-modal-form'
import { Text }                from '@ui/text'
import { theme }               from '@ui/theme'

import messages                from './Messages'
import { CloseModal }          from './CloseModal'
import { Modal }               from './Modal'

const HeaderModal = ({ display, intl }) => {
  return (
    <Modal display={display}>
      <Box width={510} height={700} bg={theme.colors.white} mx='auto'>
        <Column>
          <CloseModal showModal={display} />
          <Layout flexBasis={390} mx='auto'>
            <Column>
              <Text fontFamily={theme.fontFamily.title} fontSize={theme.fontSize.l}>
                {intl.formatMessage(messages.title)}
              </Text>
              <Layout flexBasis={50} />
              <HeaderModalForm showModal={display} />
            </Column>
          </Layout>
        </Column>
      </Box>
    </Modal>
  )
}

export default injectIntl(HeaderModal)
