import React           from 'react'

import { StyledInput } from './StyleInput'
import { useMask }     from './hooks/useMask'

export const Input = props => {
  const hooksProps = useMask(props)
  const finalProps = { ...props, ...hooksProps }

  return <StyledInput {...finalProps} />
}
