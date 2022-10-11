import React,{useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Button from '../../../../components/Button';
import InputField from '../../../../components/Input';
import PostHeader from '../PostHeader';


const PostDetails = ({next}) => {
  const [startDate, setStartDate] = useState();

  return (
    <div className='postDetails'>
      <PostHeader title="Post Details"/>
          <DatePicker className='scheduleDateInput' minDate={new Date()} placeholderText="Scheduled date & time" selected={startDate} onChange={(date) => setStartDate(date)} /><br/><br/>
          <InputField type="text" id="postsubject" name="postsubject" placeholder="Subject (For Ontriv reference)" disabled/><br/><br/><br/>
          <Button text="Next" onButtonClick={()=>next(startDate)} disabled={!startDate}/>
    </div>
  )
}

export default PostDetails