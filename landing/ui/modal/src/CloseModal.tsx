import React           from 'react'

import CloseCross      from '../../icon/CloseCross'
import { Box }         from '../../layout/Box'
import { Layout, Row } from '../../layout/Layout'
import { CloseButton } from './CloseButton'

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
