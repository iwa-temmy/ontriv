import React,{useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Button from '../../../../components/Button';
import InputField from '../../../../components/Input';
import PostHeader from '../PostHeader';
import TimePicker from 'react-time-picker';
import 'react-clock/dist/Clock.css';


const PostDetails = ({next}) => {
  const [startDate, setStartDate] = useState();
  const [time, setTime] = useState('');

  const onChangeTime = (value) => {
    setTime(value)
  }

  return (
    <div className='postDetails'>
      <PostHeader title="Post Details"/>
          <DatePicker placeholder='Scheduled date' className='scheduleDateInput' minDate={new Date()} placeholderText="Scheduled date & time" selected={startDate} onChange={(date) => setStartDate(date)} /><br/><br/>
          <TimePicker hourPlaceholder='hh' minutePlaceholder='mm' className='scheduleTimeInput' onChange={onChangeTime} value={time} /><br/><br/><br/>
          <Button text="Next" onButtonClick={()=>next(startDate,time)} disabled={!startDate}/>
    </div>
  )
}

export default PostDetails