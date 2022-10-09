import React from 'react'
import { useState } from 'react'
import { Col, Row } from 'reactstrap'
import Button from '../../../../components/Button'
import PostHeader from '../PostHeader'

const CreatePost = ({onSubmit}) => {

  return (
    <div className='createPost'>
      <PostHeader title="Creating your post" /><br />
      <Row>
        <Col>
          <Button text="Save to Drafts" className="Button_Wrap draftbtn" onButtonClick={onSubmit} />
        </Col>
        <Col>
          <Button text="Publish Now" className="Button_Wrap draftbtn" onButtonClick={()=>onSubmit('Publish Now')} />
        </Col>
      </Row><br />
      <Row>
        <Col>
          <Button text="Schedule" className="Button_Wrap submitbtn" onButtonClick={()=>onSubmit('Schedule')}/>
        </Col>
        <Col>
          <Button text="Submit for Approval" className="Button_Wrap submitbtn" onButtonClick={()=>onSubmit('Submit for Approval')} />
        </Col>
      </Row>
    </div>

  )
}

export default CreatePost