import React       from 'react'
import MaskedInput from 'react-text-mask'
import emailMask   from 'text-mask-addons/dist/emailMask'

export const InputEmail: any = () => {
  return (
    <MaskedInput
      mask={emailMask}
      name='email'
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
