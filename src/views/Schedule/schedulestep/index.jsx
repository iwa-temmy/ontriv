import React, { useState } from 'react'
import StepNavigation from './StepNavigation'
import "./stepstyle.css"
import SocialSelect from "./fel"

const ScheduleSteps = () => {
  const [currentStep, UpdateCurrentStep] = useState(1)
  const [socialMedia, setSocialMedia] = useState()

  const labelArray = [
    {
      name: "step1",
      content: <div>heloo1
        <button onClick={next}>next</button>
      </div>
    },
    {
      name: "step2",
      content: <SocialSelect next={nextSocial}/>
    },
    {
      name: "step3",
      content: <div>{socialMedia}
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    },
    {
      name: "step4",
      content: <h2>heloo4</h2>
    },
    {
      name: "step5",
      content: <h2>heloo5</h2>
    },
    // {
    //   name: "step6",
    //   content: <h2>heloo6</h2>
    // }
  ]


  

  // function updateStep(step){
  //   console.log(step, "dfghjkl")
  //   if(currentStep === labelArray.length-1)(
  //     console.log(labelArray.length, "it is true")
  //   )
  //      UpdateCurrentStep(step)
  // }

  function prev() {
    UpdateCurrentStep(currentStep - 1);
  }
function next() {
    UpdateCurrentStep(currentStep + 1);
  }

  function nextSocial(social) {
    setSocialMedia(social);
    UpdateCurrentStep(currentStep + 1);
  }

  // function next(step) {
  //   console.log(step)
  //    updateStep(step + 1)
  // }

  return (
    <div>
      {/* <div>welcome</div> */}
      <StepNavigation labelArray={labelArray} currentStep={currentStep} />
      <p>selected step: {currentStep}</p>
      <div>{labelArray[currentStep-1].content}</div>

      {/* <button className='primaryButton' onClick={() => updateStep(currentStep - 1)}>Previous Step</button>
      {currentStep === labelArray.length  ? <button className='primaryButton'>Submit</button> : <button className='primaryButton' onClick={() => next(currentStep)}>next Step</button>} */}

      {/* <button className='primaryButton' onClick={() => prev(currentStep)}>next Step</button> */}
    </div>
  )
}

export default ScheduleSteps