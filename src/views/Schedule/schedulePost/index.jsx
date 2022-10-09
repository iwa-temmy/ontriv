import React, { useState } from 'react'
import StepNavigation from './StepNavigation'
import CreatePost from './schedulePostStep/CreatePost'
import SelectSocialChannels from './schedulePostStep/SelectSocialChannels'
import FineTuneChannel from './schedulePostStep/FineTuneChannel'
import GenericChannel from './schedulePostStep/GenericChannel'
import PostDetails from './schedulePostStep/PostDetails'
import { Col, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { scheduledPost } from '../../../redux/actions'
import { connect, useSelector } from 'react-redux'

const ScheduleSteps = () => {
  const [currentStep, UpdateCurrentStep] = useState(1)
  const [socialMedia, setSocialMedia] = useState([])
  const [postDate, setPostDate] = useState()
  const [captions, setCaptions] = useState()
  const [postStatus, setPostStatus] = useState('')

  console.log(postStatus)

  const [postType, setPostType] = useState()
  const [igDate, setIgDate] = useState()
  const [igcaptions, setIgCaptions] = useState()
  const [fbDate, setfbDate] = useState()
  const [fbcaptions, setfbCaptions] = useState()
  const [linkedinDate, setLinkedinDate] = useState()
  const [linkedincaptions, setLinkedinCaptions] = useState()
  const [url, setUrl] = useState()
  // console.log(postDate,'indexxx',captions,url,'urlll',postType)

  const {id} = useParams()

  console.log(id)

  const result = useSelector((state) => state?.postSchedule?.postScheduleData);
  console.log(result) 

  // console.log(igDate,igcaptions,'insta', fbDate,fbcaptions,'faceee',linkedinDate,linkedincaptions,'linkeddd')

  const postToSocial = socialMedia.length ? {
    facebook: socialMedia.includes('facebook') ? true : false,
    instagram: socialMedia.includes('instagram') ? true : false,
    linkedin: socialMedia.includes('linkedin') ? true : false,
    twitter: socialMedia.includes('twitter') ? true : false,
  } : null


  const onHandleSubmit = (e) => {
    e.preventDefault()
    // setPostStatus(text)
console.log('fireee call')
    const payload = {
      user:id,
      "Linkedin caption": linkedincaptions === undefined ? '' : linkedincaptions,
      "Linkedin date time": linkedinDate === undefined ? '' : linkedinDate,
      "Facebook caption": fbcaptions === undefined ? '' : fbcaptions,
      "Facebook date time": fbDate === undefined ? '' : fbDate,
     "Instagram caption": igcaptions === undefined ? '' : igcaptions,
     "Instagram date time": igDate === undefined ? '' : igDate,
      Media:url,
     "Media type":postType,
     "Post status":'schedule',
     "Post to facebook":postToSocial?.facebook,
     "Post to linkedin":postToSocial?.linkedin,
     "Post to instagram":postToSocial?.instagram,
     "Is carousel":'',
    }
  scheduledPost(payload)

   // console.log(postData,'dfgh')
}

  

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

  function nextPostDetails(date) {
    setPostDate(date);
    UpdateCurrentStep(currentStep + 1);
  }

  function nextGenericDetails(caption,url,postType) {
    setCaptions(caption);
    setUrl(url)
    setPostType(postType)
    UpdateCurrentStep(currentStep + 1);
  }

  function nextGotItDetails(igText,igDate,fbText,fbDate,lnText,lnDate) {
    setIgCaptions(igText)
    setIgDate(igDate)
    setfbCaptions(fbText)
    setfbDate(fbDate)
    setLinkedinCaptions(lnText)
    setLinkedinDate(lnDate)
    UpdateCurrentStep(currentStep + 1);
  }
  const labelArray = [
    {
      name: "Set Post Details",
      content: <PostDetails next={nextPostDetails} />
    },
    {
      name: "Select Social Channels",
      content: <SelectSocialChannels next={nextSocial} />
    },
    {
      name: "Define Generic Content",
      content: <GenericChannel next={nextGenericDetails} prev={prev} />
    },
    {
      name: "Fine-tune Each Channel",
      content: <FineTuneChannel postDate={postDate} baseCaption={captions} socialMedia={socialMedia} next={nextGotItDetails} prev={prev} />
    },
    {
      name: "Create Post",
      content: <CreatePost onSubmit={onHandleSubmit}/>
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
    </Row>
  )
}

const mapStateToProps = (state) => {
const {postSchedule} = state
console.log(postSchedule  ,'map state')
return {
  ...state
}
}

export default connect(mapStateToProps,{scheduledPost})(ScheduleSteps)