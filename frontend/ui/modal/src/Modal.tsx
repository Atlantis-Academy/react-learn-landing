import styled                  from '@emotion/styled'
import React, { useRef }       from 'react'
import { Box, Column, Layout } from '@atlantis-lab/layout'
import { createPortal }        from 'react-dom'
import { injectIntl }          from 'react-intl'

import { Form }                from '@ui/form'
import { CloseIcon }           from '@ui/icons'
import { Text }                from '@ui/text'

import messages                from './Messages'

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

const Modal = ({ onClose, intl }: any) => {
  const node = useRef(null)

  const handleClick = event => {
    if (!(node.current && node.current.children[0].contains(event.target))) {
      onClose()
    }
  }

  const handleClickButton = () => {
    onClose()
  }

  return createPortal(
    <StyledContainer onClick={handleClick} ref={node}>
      <Box width={[250, 310, 510]} height={[316, 400, 700]} bg='white' mx='auto'>
        <Column>
          <Layout flexBasis={[40, 45, 60]} alignItems='center' justifyContent='flex-end'>
            <Box width={23} height={23} onClick={handleClickButton}>
              <CloseIcon />
            </Box>
            <Layout flexBasis={20} />
          </Layout>
          <Box width={[200, 250, 390]} mx='auto'>
            <Column>
              <Text fontFamily='title' fontSize={['giant', 'massive', 'semiBig']}>
                {intl.formatMessage(messages.title)}
              </Text>
              <Layout flexBasis={[10, 15, 50]} />
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
