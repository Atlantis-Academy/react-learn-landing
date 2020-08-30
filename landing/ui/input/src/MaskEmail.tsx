import React       from 'react'
import MaskedInput from 'react-text-mask'
import emailMask   from 'text-mask-addons/dist/emailMask'

export const MaskEmail: any = props => {
  return <MaskedInput mask={emailMask} style={props} />
}
