import React from 'react'
import noschedule from "../../assets/img/nopostschedule.png"

const NoPostSchedule = ({text,buttonProps}) => {
  return (
    <div className='noscheduleholder'>
        <div className='content'>
            <img src={noschedule} alt="" />
            <h4>{text}</h4>
            {buttonProps && buttonProps}
        </div>
    </div>
  )
}

export default NoPostSchedule