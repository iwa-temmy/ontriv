import React, { useState } from 'react'
import StepNavigation from './StepNavigation'
import "./stepstyle.css"
import CreatePost from './schedulePostStep/CreatePost'
import SelectSocialChannels from './schedulePostStep/SelectSocialChannels'
import FineTuneChannel from './schedulePostStep/FineTuneChannel'
import GenericChannel from './schedulePostStep/GenericChannel'
import PostDetails from './schedulePostStep/PostDetails'
import { Col, Row } from 'reactstrap'

const ScheduleSteps = () => {
  const [currentStep, UpdateCurrentStep] = useState(1)
  const [socialMedia, setSocialMedia] = useState()




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

  const labelArray = [
    {
      name: "Set Post Details",
      content: <PostDetails next={next} />
    },
    {
      name: "Select Social Channels",
      content: <SelectSocialChannels next={nextSocial} />
    },
    {
      name: "Define Generic Content",
      content: <GenericChannel next={next} prev={prev} />
    },
    {
      name: "Fine-tune Each Channel",
      content: <FineTuneChannel socialMedia={socialMedia} next={next} prev={prev} />
    },
    {
      name: "Create Post",
      content: <CreatePost prev={prev} next={next} />
    },
  ]

  return (
    <Row mt="5">
      <Col xs="12"
        md="3"
        sm="12">
        <div className='stepHolder'>
        <StepNavigation labelArray={labelArray} currentStep={currentStep} />
        </div>
      </Col>

      <Col xs="12"
        md="9"
        sm="12">
        <div className='postStepContent'>
          {labelArray[currentStep - 1].content}

        </div>
      </Col>

      {/* <button className='primaryButton' onClick={() => updateStep(currentStep - 1)}>Previous Step</button>
      {currentStep === labelArray.length  ? <button className='primaryButton'>Submit</button> : <button className='primaryButton' onClick={() => next(currentStep)}>next Step</button>} */}

      {/* <button className='primaryButton' onClick={() => prev(currentStep)}>next Step</button> */}
    </Row>
  )
}

export default ScheduleSteps