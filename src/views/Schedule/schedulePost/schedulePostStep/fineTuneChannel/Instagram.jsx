import React from 'react'
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row } from 'reactstrap'
import Button from '../../../../../components/Button';
import InputField from '../../../../../components/Input'
import TextArea from '../../../../../components/textArea/TextArea';
import ToggleButton from '../../../../../components/toggleButton/ToggleButton';

const FineTuneInstagram = ({socialchannel,setOpenModal,activeTab,setActiveTab,index}) => {
  const [startDate, setStartDate] = useState();
  const [baseCaption, setBaseCaption] = useState('')
  const [firstComment, setFirstComment] = useState('')
  const [count, setCount] = useState(2200)
  const [firstCommentCount, setFirstCommentCount] = useState(2200)
  const [isOn, setIsOn] = useState(false);

  const onChangeTextArea = (e)=>{
    const value = e.target.value
    const valueLength = e.target.value.length
    setBaseCaption(value)
    setCount(2200 - valueLength)
    console.log(baseCaption, count)
  }

  const onChangeFirstComment = (e)=>{
    const value = e.target.value
    const valueLength = e.target.value.length
    setFirstComment(value)
    setFirstCommentCount(2200 - valueLength)
    console.log(baseCaption, count)
  }
  const handleToggle = (e) => {

    if (e.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }

      setIsOn(prev => !prev)
  }

  const nextButton = (tab) => {
    console.log(activeTab, socialchannel.length)
    if (socialchannel.length === activeTab ) {
      setOpenModal(true)
    }
    else{
      // console.log("nnnnn")
      if (activeTab !== tab) {
        setActiveTab(tab)
      }
    }
  }
  return (
    <Row>
      <Col  xs="12"
          md="7"
          sm="12">
      FineTuneInstagram Image
      </Col>
      <Col  xs="12"
          md="5"
          sm="12">
      <div>
      <InputField type="text" id="posttype" name="posttype" placeholder="Post type"/><br/><br/>
      <DatePicker className='datePickerStyle' placeholderText="Instagram date & time" selected={startDate} onChange={(date) => setStartDate(date)} /><br/><br/>
      <TextArea maxLength="2200" placeholder='Caption' value={baseCaption} onChangeTextArea={onChangeTextArea} count={count}/>

     <ToggleButton isOn={isOn} handleToggle={handleToggle} title="First Comment" id="firstComment" htmlFor="FirstComment"/>
     <TextArea maxLength="2200" value={firstComment} onChangeTextArea={onChangeFirstComment} count={firstCommentCount} style={{height:"97px"}}/>

<ToggleButton isOn={isOn} handleToggle={handleToggle} title="Location" id="location" htmlFor="location"/>
<Button text="Next" onButtonClick={() => nextButton(activeTab + 1)} />
      </div>
      </Col>
        
    </Row>
  )
}

export default FineTuneInstagram