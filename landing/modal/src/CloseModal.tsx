import React           from 'react'

import CloseCross      from '../../ui/icon/CloseCross'
import { Box }         from '../../ui/layout/Box'
import { Layout, Row } from '../../ui/layout/Layout'
import { CloseButton } from '../../ui/modal/CloseButton'

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
