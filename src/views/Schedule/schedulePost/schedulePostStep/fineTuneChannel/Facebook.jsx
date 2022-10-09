import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row } from 'reactstrap'
import Button from '../../../../../components/Button';
import TextArea from '../../../../../components/textArea/TextArea';
import ToggleButton from '../../../../../components/toggleButton/ToggleButton';

const FineTuneFacebook = ({ socialchannel, setOpenModal, activeTab, setActiveTab, postDate, caption, facebookData }) => {
  const [facebookStartDate, setFacebookStartDate] = useState(postDate);
  const [facebookCaption, setFacebookCaption] = useState(caption)
  const [count, setCount] = useState(2200)
  const [isOn, setIsOn] = useState(false);

  const onChangeTextArea = (e) => {
    const value = e.target.value
    const valueLength = e.target.value.length
    setFacebookCaption(value)
    setCount(2200 - valueLength)
  }

  const handleToggle = (e) => {
    setIsOn(prev => !prev)
  }

  const nextButton = (tab) => {
    if (socialchannel.length === activeTab) {
      facebookData(facebookCaption, facebookStartDate)
      setOpenModal(true)
    }
    else {
      if (activeTab !== tab) {
        facebookData(facebookCaption, facebookStartDate)
        setActiveTab(tab)
      }
    }
  }

  return (
    <Row>
      <Col xs="12"
        md="7"
        sm="12">
        FineTuneFacebook Image
      </Col>
      <Col xs="12"
        md="5"
        sm="12">
        <div>
          <DatePicker className='datePickerStyle' minDate={new Date()} placeholderText="Facebook date & time  " selected={facebookStartDate} onChange={(date) => setFacebookStartDate(date)} /><br /><br />
          <TextArea maxLength="2200" placeholder='Caption' value={facebookCaption} onChangeTextArea={onChangeTextArea} count={count} />

          <ToggleButton isOn={isOn} handleToggle={handleToggle} title="Location" id="location" htmlFor="location" />
          <Button text="Next" onButtonClick={() => nextButton(activeTab + 1)} />
        </div>
      </Col>

    </Row>
  )
}

export default FineTuneFacebook