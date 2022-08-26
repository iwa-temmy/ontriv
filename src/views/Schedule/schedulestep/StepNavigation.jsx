import React,{useState} from 'react'
import Step from './Step'

const StepNavigation = (props) => {
  return (
    <div className='stepWrapper'>
        {props.labelArray.map((item,index) => <Step key={index} index={index} label={item.name} selected ={props.currentStep === index + 1 || index <= props.currentStep-1 } updateStep={props.updateStep}></Step>)}
        
    </div>
  )
}

export default StepNavigation