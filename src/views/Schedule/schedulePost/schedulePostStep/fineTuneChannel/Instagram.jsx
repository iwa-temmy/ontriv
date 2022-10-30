import React from 'react'
import { useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row } from 'reactstrap'
import Button from '../../../../../components/Button';
import InputField from '../../../../../components/Input'
import TextArea from '../../../../../components/textArea/TextArea';
import ToggleButton from '../../../../../components/toggleButton/ToggleButton';

const FineTuneInstagram = ({ socialchannel, setOpenModal, activeTab, setActiveTab, postDate, caption, instagramData }) => {
  const [instagramstartDate, setInstagramStartDate] = useState(postDate);
  const [instagramCaption, setInstagramCaption] = useState(caption)
  const [firstComment, setFirstComment] = useState('')
  const [count, setCount] = useState(2200)
  const [firstCommentCount, setFirstCommentCount] = useState(2200)
  const [isOn, setIsOn] = useState(false);

  const onChangeTextArea = (e) => {
    const value = e.target.value
    const valueLength = e.target.value.length
    setInstagramCaption(value)
    setCount(2200 - valueLength)
  }

  const onChangeFirstComment = (e) => {
    const value = e.target.value
    const valueLength = e.target.value.length
    setFirstComment(value)
    setFirstCommentCount(2200 - valueLength)
  }

  const nextButton = (tab) => {
    if (socialchannel.length === activeTab) {
      instagramData(instagramCaption, instagramstartDate)
      setOpenModal(true)
    }
    else {
      if (activeTab !== tab) {
        instagramData(instagramCaption, instagramstartDate)
        setActiveTab(tab)
      }
    }
  }
  return (
    <div style={{padding:'1.5rem'}}>
      <Row>
      <Col xs="12"
        md="7"
        sm="12">
        FineTuneInstagram Image
      </Col>
      <Col xs="12"
        md="5"
        sm="12">
        <div>
          {/* <InputField type="text" id="posttype" name="posttype" placeholder="Post type"/><br/><br/> */}
          <DatePicker className='datePickerStyle' minDate={new Date()} placeholderText="Instagram date & time" selected={instagramstartDate} onChange={(date) => setInstagramStartDate(date)} /><br /><br />
          <TextArea maxLength="2200" placeholder='Caption' value={instagramCaption} onChangeTextArea={onChangeTextArea} count={count} />

          {/* <ToggleButton isOn={isOn} handleToggle={handleToggle} title="First Comment" id="firstComment" htmlFor="FirstComment"/>
     <TextArea maxLength="2200" value={firstComment} onChangeTextArea={onChangeFirstComment} count={firstCommentCount} style={{height:"97px"}}/> */}

          {/* <ToggleButton isOn={isOn} handleToggle={handleToggle} title="Location" id="location" htmlFor="location"/> */}
          <Button text="Next" onButtonClick={() => nextButton(activeTab + 1)} />
        </div>
      </Col>

    </Row>
    </div>
  )
}

export default FineTuneInstagram