import React       from 'react'
import MaskedInput from 'react-text-mask'

export const MaskPhone: any = props => {
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
      style={props}
    />
  )
}
