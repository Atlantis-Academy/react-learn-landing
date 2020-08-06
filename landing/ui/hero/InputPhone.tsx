import React         from 'react'
import MaskedInput   from 'react-text-mask'

import { InputForm } from './InputForm'
import { phoneMask } from '../InputPhoneMask'

export const InputPhone: any = () => {
  return (
    <MaskedInput
      mask={phoneMask}
      name='phone'
      render={(ref, props) => {
        return <InputForm ref={ref} {...props} />
      }}
    />
  )
}
