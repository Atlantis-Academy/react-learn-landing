import React                   from 'react'
import { Column, Layout, Row } from '@atlantis-lab/layout'

import { CloseCross }          from '@ui/icons'

import { CloseButton }         from './CloseButton'

export const CloseModal = ({ showModal }) => {
  return (
    <Column>
      <Layout flexBasis={26} />
      <Row justifyContent='flex-end'>
        <CloseButton onClick={showModal}>
          <CloseCross />
        </CloseButton>
        <Layout flexBasis={23} />
      </Row>
    </Column>
  )
}
