import React           from 'react'
import { Layout }      from '@atlantis-lab/layout'

import { CloseCross }  from '@ui/icons'

import { CloseButton } from './CloseButton'

export const CloseModal = ({ showModal }) => {
  return (
    <Layout flexBasis={60} alignItems='center' justifyContent='flex-end'>
      <CloseButton onClick={showModal}>
        <CloseCross />
      </CloseButton>
      <Layout flexBasis={20} />
    </Layout>
  )
}
