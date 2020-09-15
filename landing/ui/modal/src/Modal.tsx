import React, { useRef } from 'react'
import { Box }           from '@atlantis-lab/layout'
import { createPortal }  from 'react-dom'

import ModalBox          from './ModalBox'

export const Modal = ({ display }: any) => {
  const node = useRef(null)

  const handleClick = event => {
    if (!(node.current && node.current.children[0].contains(event.target))) {
      display()
    }
  }

  return createPortal(
    <Box
      width={1}
      height='100%'
      position='fixed'
      zIndex={5}
      top={0}
      left={0}
      bg='rgba(0, 0, 0, 0.8)'
      justifyContent='center'
      alignItems='center'
      onClick={handleClick}
      ref={node}
    >
      <ModalBox showModal={display} />
    </Box>,
    document.body
  )
}
