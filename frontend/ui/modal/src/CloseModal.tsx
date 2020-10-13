import React           from 'react'
import { Layout }      from '@atlantis-lab/layout'

import { CloseIcon }   from '@ui/icons'

import { CloseButton } from './CloseButton'

export const CloseModal = ({ onClose }) => {
  const handleClick = () => {
    onClose()
  }

  return (
    <Layout flexBasis={60} alignItems='center' justifyContent='flex-end'>
      <CloseButton onClick={handleClick}>
        <CloseIcon />
      </CloseButton>
      <Layout flexBasis={20} />
    </Layout>
  )
}
