import React                        from 'react'
import { Box, Column, Layout, Row } from '@atlantis-lab/layout'
import { injectIntl }               from 'react-intl'

import { HeaderModalForm }          from '@fragments/header-modal-form'
import { Text }                     from '@ui/text'
import { theme }                    from '@ui/theme'

import messages                     from './Messages'
import { CloseModal }               from './CloseModal'

const ModalBox = ({ showModal, intl }) => {
  return (
    <Box
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
        <Layout flexBasis={10} />
        <Column alignItems='center'>
          <Row>
            <Layout flexBasis={60} />
            <Text fontFamily={theme.fontFamily.title} fontSize={theme.fontSize.l}>
              {intl.formatMessage(messages.title)}
            </Text>
          </Row>
          <Layout flexBasis={50} />
          <HeaderModalForm showModal={showModal} />
        </Column>
      </Column>
    </Box>
  )
}

export default injectIntl(ModalBox)
