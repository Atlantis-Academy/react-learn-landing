import React from 'react'
import MaskedInput from 'react-text-mask'

export const InputPhone: any = () => {
  return (
    <MaskedInput
      mask={[
        '+',
        '7',
        ' ',
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
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
