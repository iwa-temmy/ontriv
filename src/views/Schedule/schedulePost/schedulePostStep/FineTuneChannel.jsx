import React from 'react'

const FineTuneChannel = ({socialMedia,next,prev}) => {
  return (
    <div>
        {socialMedia[0]}hj
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
  )
}

export default FineTuneChannel