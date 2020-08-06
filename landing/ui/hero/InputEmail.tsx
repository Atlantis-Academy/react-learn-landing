import React         from 'react'
import MaskedInput   from 'react-text-mask'
import emailMask     from 'text-mask-addons/dist/emailMask'

import { InputForm } from './InputForm'

export const InputEmail: any = () => {
  return (
    <MaskedInput
      mask={emailMask}
      name='email'
      render={(ref, props) => <InputForm ref={ref} {...props} />}
    />
  )
}
