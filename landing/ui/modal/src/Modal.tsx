import styled            from '@emotion/styled'
import React, { useRef } from 'react'
import { createPortal }  from 'react-dom'

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

export const Modal = ({ display, children }: any) => {
  const node = useRef(null)

  const handleClick = event => {
    if (!(node.current && node.current.children[0].contains(event.target))) {
      display()
    }
  }

  return createPortal(
    <StyledContainer onClick={handleClick} ref={node}>
      {children}
    </StyledContainer>,
    document.body
  )
}
