import ReactDOM             from 'react-dom'
import React, { useEffect } from 'react'

import ModalBox             from './src/ModalBox'
import { Layout }           from '../../ui/layout/Layout'

const Portal = ({ children }: any) => {
  const el = document.createElement('div')

  useEffect(() => {
    document.body.appendChild(el)
  }, [])

  return ReactDOM.createPortal(children, el)
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
