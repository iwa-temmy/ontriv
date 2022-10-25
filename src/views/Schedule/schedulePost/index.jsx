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
import { useEffect } from 'react'

const ScheduleSteps = (props) => {
  const [currentStep, UpdateCurrentStep] = useState(1)
  const [socialMedia, setSocialMedia] = useState([])
  const [postDate, setPostDate] = useState()
  const [captions, setCaptions] = useState()

  const { scheduledPost,postScheduleLoading, postScheduleData,postScheduleError } = props

  console.log(postScheduleLoading, postScheduleData,postScheduleError,'111')

  const [postType, setPostType] = useState()
  const [postTime, setPostTime] = useState()
  const [igDate, setIgDate] = useState()
  const [igcaptions, setIgCaptions] = useState()
  const [fbDate, setfbDate] = useState()
  const [fbcaptions, setfbCaptions] = useState()
  const [linkedinDate, setLinkedinDate] = useState()
  const [linkedincaptions, setLinkedinCaptions] = useState()
  const [url, setUrl] = useState()


  const { id } = useParams()

  const result = useSelector((state) => state?.postSchedule);
  console.log(result,'ddd')

  const postToSocial = socialMedia.length ? {
    facebook: socialMedia.includes('facebook') ? true : false,
    instagram: socialMedia.includes('instagram') ? true : false,
    linkedin: socialMedia.includes('linkedin') ? true : false,
    twitter: socialMedia.includes('twitter') ? true : false,
  } : null


  const onHandleSubmit = (type) => {
    const payload = {
      "user": id,
      "linkedin_caption": linkedincaptions === undefined ? '' : linkedincaptions,
      "linkedin_date_time": linkedinDate === undefined ? '' : linkedinDate,
      "facebook_caption": fbcaptions === undefined ? '' : fbcaptions,
      "facebook_date_time": fbDate === undefined ? '' : fbDate,
      "instagram_caption": igcaptions === undefined ? '' : igcaptions,
      "instagram_date_time": igDate === undefined ? '' : igDate,
      "media": url,
      "media_type": postType,
      "post_status": type,
      "post_to_facebook": postToSocial?.facebook,
      "post_to_linkedin": postToSocial?.linkedin,
      "post_to_instagram": postToSocial?.instagram,
      "is_carousel": url?.length > 1 ? true : false,
    }
    // console.log(payload)
    scheduledPost(payload)
  }

  useEffect(()=>{

  },[])

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

  function nextPostDetails(date,time) {
    setPostDate(date);
    setPostTime(time);
    UpdateCurrentStep(currentStep + 1);
  }

  function nextGenericDetails(caption, url, postType) {
    setCaptions(caption);
    setUrl(url)
    setPostType(postType)
    UpdateCurrentStep(currentStep + 1);
  }

  function nextGotItDetails(igText, igDate, fbText, fbDate, lnText, lnDate) {
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
      name: "Set Post Timing",
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
      content: <CreatePost onSubmit={onHandleSubmit} />
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
  const {postScheduleLoading, postScheduleData,postScheduleError  } = postSchedule
  console.log(postScheduleLoading, postScheduleData,postScheduleError)
  return { postScheduleLoading, postScheduleData,postScheduleError}
}

export default connect(mapStateToProps, { scheduledPost })(ScheduleSteps)