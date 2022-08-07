import React from 'react'
import { CenteredModal as Modal } from '../../components/Modal'
import { connect } from 'react-redux'
import { createClient, createTag } from '../../redux/actions'
// import createNotification from '../../utils/Notification'
// import Select from 'react-select
import clientSuccess from '../../assets/img/invite-success.png'

const AddNewClient = ({
  addState,
  createClient,
  setAddState,
  setAddClient,
  creationError,
  message,
  loading
}) => {
  return (
    <Modal modalState={addState} setModalState={setAddState}>
      <div className='add-client-wrapper text-center '>
        <div className='text-center  '>
          <img src={clientSuccess} alt='...' />
        </div>
        <div className='add-client-text text-center'>
          <h3>Client Added</h3>
          <p>Please check the email used to activate the account. </p>
        </div>
        <div className='pt-2 pb-3'>
          <button
            className='w-100 btn-primary btn'
            type='submit'
            onClick={() => {
              setAddState()
              setAddClient(false)
            }}
          >
            Done
          </button>
        </div>
      </div>
    </Modal>
  )
}

const mapStateToProps = ({ client }) => {
  const { creationError, message, loading } = client
  return { creationError, message, loading }
}
export default connect(mapStateToProps, { createClient, createTag })(
  AddNewClient
)
