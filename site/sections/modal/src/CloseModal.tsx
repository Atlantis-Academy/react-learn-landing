import React                                from 'react'

import { Box }                              from '../../../ui/layout/Box'
import { Layout, Row }                      from '../../../ui/layout/Layout'
import { CloseButton, LeftLine, RightLine } from '../../../ui/modal/ClozeButton'

export const CloseModal = ({ showModal }) => {
  return (
    <>
      <Box height={26} />
      <Row>
        <Layout width={1} height={23} justifyContent='flex-end'>
          <CloseButton onClick={showModal}>
            <LeftLine />
            <RightLine />
          </CloseButton>
          <Box width={23} />
        </Layout>
      </Row>
    </>
  )
}
