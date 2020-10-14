import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { Box, Column, Layout } from '@atlantis-lab/layout'
import { createPortal } from 'react-dom'
import { injectIntl } from 'react-intl'

import { Form } from '@ui/form'
import { Text } from '@ui/text'
import { theme } from '@ui/theme'

import messages from './Messages'
import { CloseModal } from './CloseModal'

const StyledContainer = styled.div({
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  background: 'rgba(0, 0, 0, 0.8)',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflowY: 'scroll',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
})

const Modal = ({onClose, intl}: any) => {
  const node = useRef(null)

  const handleClick = event => {
    if (!(node.current && node.current.children[0].contains(event.target))) {
      onClose()
    }
  }

  return createPortal(
    <StyledContainer
      onClick={handleClick}
      ref={node}
    >
      <Box
        width={510}
        height={700}
        bg={theme.colors.white}
        mx='auto'
      >
        <Column>
          <CloseModal onClose={onClose} />
          <Box
            width={390}
            mx='auto'
          >
            <Column>
              <Text
                fontFamily={theme.fontFamily.title}
                fontSize={theme.fontSize.l}
              >
                {intl.formatMessage(messages.title)}
              </Text>
              <Layout flexBasis={50} />
              <Form
                textButton={intl.formatMessage(messages.button)}
                context='modal'
                onClose={onClose}
              />
            </Column>
          </Box>
        </Column>
      </Box>
    </StyledContainer>,
    document.body
  )
}

export default injectIntl(Modal)
