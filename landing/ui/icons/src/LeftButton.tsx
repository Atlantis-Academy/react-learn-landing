import * as React from 'react'

const LeftButton = props => {
  return (
    <svg width={70} height={70} viewBox='0 0 70 70' fill='none' {...props}>
      <g>
        <circle cx={35} cy={35} r={34.5} stroke='#3BB3C4' />
        <path
          d='M23.68 35.833l.05.053 11.026 11.025a.833.833 0 01-1.179 1.178L22.552 37.065a2.905 2.905 0 01-.841-1.783.927.927 0 010-.566 2.905 2.905 0 01.839-1.775l11.01-11.03a.833.833 0 011.18 1.178l-11.01 11.03-.046.048h27.15c1.11 0 1.11 1.666 0 1.666H23.68z'
          fill='#3BB3C4'
        />
      </g>
    </svg>
  )
}

export default LeftButton
