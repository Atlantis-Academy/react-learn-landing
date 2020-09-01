import React from 'react'

const CloseCross = props => {
  return (
    <svg width={25} height={25} viewBox='0 0 25 25' fill='none' {...props}>
      <path
        d='M11.469 12.5L1.047 2.078C.359 1.391 1.39.36 2.078 1.047L12.5 11.469 22.922 1.047c.687-.687 1.719.344 1.031 1.031L13.531 12.5l10.422 10.422c.688.688-.344 1.719-1.031 1.031L12.5 13.531 2.078 23.953c-.687.688-1.719-.343-1.031-1.031L11.469 12.5z'
        fill='#A7A9AC'
      />
    </svg>
  )
}

export default CloseCross
