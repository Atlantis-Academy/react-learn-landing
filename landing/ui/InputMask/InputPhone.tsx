import React         from 'react'
import MaskedInput   from 'react-text-mask'

import { phoneMask } from './PhoneMask'

export const InputPhone: any = () => {
  return (
    <MaskedInput
      mask={phoneMask}
      name='phone'
      style={{
        width: 'inherit',
        height: 'inherit',
        background: 'inherit',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        border: 'none',
      }}
    />
  )
}
