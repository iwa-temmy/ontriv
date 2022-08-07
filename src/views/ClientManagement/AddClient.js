import React, { useState, useEffect } from 'react'
import { HiUser } from 'react-icons/hi'

import { CenteredModal as Modal } from '../../components/Modal'

import { connect } from 'react-redux'
import { createClient, createTag } from '../../redux/actions'
import createNotification from '../../utils/Notification'
import ManualAdd from './ManualAdd.js'
import Invite from './Invite.js'
import ClientSuccess from './ClientSuccess'

const AddNewClient = ({
  addState,
  createClient,
  setAddState,
  creationError,
  message,
  tags,
  getTag,
  createTag,
  setAddClient,
  loading
}) => {
  // const [tagValue, setTagsValue] = useState('')
  const [manualModal, setManualModal] = useState(false)
  const [inviteModal, setInviteModal] = useState(false)
  // const [addTagModal, setAddTagModal] = useState('')
  const [clientSuccess, setClientSuccess] = useState(false)
  const toggleSuccess = () => {
    setClientSuccess(!clientSuccess)
  }

  const toggleManual = () => {
    setManualModal(!manualModal)
  }

  const toggleInvite = () => {
    setInviteModal(!inviteModal)
  }

  useEffect(() => {
    console.log(creationError, message, loading)
    if (creationError.length > 0) {
      createNotification('error', creationError)
    }
    if (message.length > 0) {
      createNotification('info', message)
      setInviteModal(false)
      setManualModal(false)
      toggleSuccess()
    }
    // eslint-disable-next-line
  }, [creationError, message, loading])

  return (
    <>
      <Modal modalState={addState} setModalState={setAddState}>
        <div className='add-client-wrapper text-center '>
          <div className='text-center user-icon-container '>
            <HiUser className=' text-center' color='#49A8F8' size='45px' />
          </div>
          <div className='add-client-text text-center'>
            <h3>Add new client</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div>
            <div className='pt-2 pb-2 mb-1'>
              <button
                className='w-100 btn-primary btn'
                onClick={() => {
                  toggleInvite()
                  // setAddClient(false)
                }}
              >
                Send Invite
              </button>
            </div>
            <div className='pt-2 pb-2'>
              <button
                className='w-100 btn-outline-primary btn'
                onClick={() => {
                  toggleManual()
                  // setAddClient(false)
                }}
              >
                Manually add client
              </button>
            </div>
          </div>

          {manualModal && (
            <ManualAdd
              addState={manualModal}
              setAddState={toggleManual}

              // createTag={createTag}
            />
          )}

          {inviteModal && (
            <Invite
              addState={inviteModal}
              setAddState={toggleInvite}
              // createTag={createTag}
            />
          )}
        </div>
      </Modal>
      <ClientSuccess addState={clientSuccess} setAddState={toggleSuccess} setAddClient={setAddClient} />
    </>
  )
}

const mapStateToProps = ({ client }) => {
  const { creationError, message, loading } = client
  return { creationError, message, loading }
}
export default connect(mapStateToProps, { createClient, createTag })(
  AddNewClient
)
