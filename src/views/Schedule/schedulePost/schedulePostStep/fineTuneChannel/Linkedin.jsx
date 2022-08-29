import React from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row } from 'reactstrap'
import TextArea from '../../../../../components/textArea/TextArea';
import ToggleButton from '../../../../../components/toggleButton/ToggleButton';

const FineTuneLinkedin = () => {
  const [startDate, setStartDate] = useState();
  const [baseCaption, setBaseCaption] = useState('')
  const [count, setCount] = useState(2200)
  const [isOn, setIsOn] = useState(false);

  const onChangeTextArea = (e)=>{
    const value = e.target.value
    const valueLength = e.target.value.length
    setBaseCaption(value)
    setCount(2200 - valueLength)
    console.log(baseCaption, count)
  }

  const handleToggle = (e) => {
      setIsOn(prev => !prev)
  }
  return (
    <Row>
      <Col  xs="12"
          md="7"
          sm="12">
      FineTuneLinkedin Image
      </Col>
      <Col  xs="12"
          md="5"
          sm="12">
      <div>
      <DatePicker className='datePickerStyle' placeholderText="Linkedin date & time  " selected={startDate} onChange={(date) => setStartDate(date)} /><br/><br/>
      <TextArea maxLength="2200" placeholder='Caption' value={baseCaption} onChangeTextArea={onChangeTextArea} count={count}/>

<ToggleButton isOn={isOn} handleToggle={handleToggle} title="Location" id="location" htmlFor="location"/>

      </div>
      </Col>
        
    </Row>
  )
}

export default FineTuneLinkedin