import React from 'react'
import Button from '../../../../components/Button'
import PostHeader from '../PostHeader'

const GotItModal = ({closeModal}) => {
  return (
    <div className='schedulePost-modalWrapper'>
        <div className='modalHeader'>
        <PostHeader title="Creating your post" style={{color:"black",marginBottom:"5px"}}/>
        <p>Done finetuning for your selected platforms? Now you can now select one of the following options:</p>
        </div>

        <div>
            <h5>Save as draft</h5>
            <p>Save your post as draft so you can return to it later for editing.</p>
        </div>
        <div>
            <h5>Submit for approval</h5>
            <p>If you have collaborators, submit your post for approval to signal it is ready for review. You can assign your post to collaborators on the next page (Post View).</p>
        </div>
        <div>
            <h5>Schedule</h5>
            <p>If your post doesn't need approval or has already been approved, schedule it. Loomly will natively publish it at the scheduled date & time for you.</p>
        </div>
        <div>
            <h5>Publish Now</h5>
            <p>Ready to publish your post right now? Select this option to have Loomly publish it immediately for you.</p>
        </div>
        <Button text="Got It" onButtonClick={() => closeModal(false)}/>
    </div>
  )
}

export default GotItModal 
