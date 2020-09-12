import React                from 'react'
import { Box, Layout, Row } from '@atlantis-lab/layout'

import { CloseCross }       from '@ui/icons'

import { CloseButton }      from './CloseButton'

export const CloseModal = ({ showModal }) => {
  return (
    <>
      <Box height={26} />
      <Row>
        <Layout width={1} height={23} justifyContent='flex-end'>
          <CloseButton onClick={showModal}>
            <CloseCross />
          </CloseButton>
          <Box width={23} />
        </Layout>
      </Row>
    </>
  )
}
