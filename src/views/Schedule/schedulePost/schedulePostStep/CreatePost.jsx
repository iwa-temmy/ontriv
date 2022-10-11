import React from 'react'
import { Col, Row } from 'reactstrap'
import Button from '../../../../components/Button'
import PostHeader from '../PostHeader'

const CreatePost = ({onSubmit}) => {

  return (
    <div className='createPost'>
      <PostHeader title="Creating your post" /><br />
      <Row>
        <Col>
          <Button text="Schedule" className="Button_Wrap submitbtn" onButtonClick={()=>onSubmit('scheduled')}/>
        </Col>
        <Col>
          <Button text="Submit for Approval" className="Button_Wrap submitbtn" onButtonClick={()=>onSubmit('pending')} />
        </Col>
      </Row><br/>

      <Row>
        <div style={{width:'50%',margin:'auto'}}>
        <Button text="Save to Drafts" className="Button_Wrap draftbtn" onButtonClick={() =>onSubmit('draft')} />
        </div>
      {/* <Col></Col>
        <Col>
          
        </Col> */}
        {/* <Col>
          <Button text="Publish Now" className="Button_Wrap draftbtn" onButtonClick={()=>onSubmit('published')} />
        </Col> */}
      </Row>
    </div>

  )
}

export default CreatePost