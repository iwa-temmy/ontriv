import React from 'react'

const Step = (props) => {
  return (
 <div className={`stepBlock ${props.selected ? 'selected' : ''}`}>
       <div className={'circleWrapper'} onClick={() => props.updateStep(props.index + 1)}>
        <div className='circle'>{props.index + 1}</div>
        <span>{props.label}</span>
       </div>
       
 </div>
  )
}

export default Step