import React      from 'react'
import ReactDOM   from 'react-dom'
import { Layout } from '@atlantis-lab/layout'

import ModalBox   from './ModalBox'

const Portal = ({ children }: any) => {
  return ReactDOM.createPortal(children, document.body)
}

const Modal: any = ({ display }: any) => {
  const showModal = () => {
    display(false)
  }

  return (
    <Portal>
      <Layout
        width={1}
        height='100%'
        position='fixed'
        zIndex={5}
        top={0}
        left={0}
        bg='rgba(0, 0, 0, 0.4)'
        onClick={showModal}
      />
      <ModalBox showModal={showModal} />
    </Portal>
  )
}

export default Modal
