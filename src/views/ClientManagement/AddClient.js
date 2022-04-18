import React, { useState, useEffect } from 'react'
import { HiUser } from 'react-icons/hi'
import {
  //  Input,
  // Button,
  Row,
  Col
} from 'reactstrap'
import { CenteredModal as Modal } from '../../components/Modal'
import { ThreeDots } from 'react-loader-spinner'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { createClient, createTag } from '../../redux/actions'
import createNotification from '../../utils/Notification'
import Select from 'react-select'
import AddTag from './AddTag'

const AddNewClient = ({
  addState,
  createClient,
  setAddState,
  creationError,
  message,
  tags,
  getTag,
  createTag,
  loading
}) => {
  const [tagValue, setTagsValue] = useState('')
  const [addTagModal, setAddTagModal] = useState('')

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const handleTagsChange = value => {
    // console.log(value);
    //     setTagsValue(value)

    if (value.value === 'Create New Tag') {
      setAddTagModal(true)
    } else {
      setTagsValue(value)
    }
  }

  const addClient = values => {
    const {
      client_business_name,
      client_email,
      end_date,
      phone_number,
      start_date
      // tags,
    } = values

    const proj = [
      {
        end_date,
        start_date,
        tags: tagValue.value
      }
    ]
    const data = {
      client_business_name,
      client_email,
      phone_number,
      proj
    }

    // console.log(data)
    createClient(data)
  }

  useEffect(() => {
    console.log(creationError, message, loading)
    if (creationError.length > 0) {
      createNotification('error', creationError)
    }
    if (message.length > 0) {
      createNotification('info', message)
    }
  }, [creationError, message, loading])

  useEffect(() => {
    setAddTagModal(false)
  }, [tags])

  return (
    <Modal modalState={addState} setModalState={setAddState}>
      <div className='add-client-wrapper text-center '>
        <div className='text-center user-icon-container '>
          <HiUser className=' text-center' color='#49A8F8' size='45px' />
        </div>
        <div className='add-client-text text-center'>
          <h3>Add new client</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <form
          className='business-form text-left'
          onSubmit={handleSubmit(addClient)}
        >
          {errors.client_business_name && (
            <span className='text-danger text-left'>Enter business name</span>
          )}
          <input
            type='text'
            name='client_business_name'
            placeholder='Business Name'
            className={`w-100 ${
              errors.client_business_name ? 'border-danger' : ''
            }`}
            {...register('client_business_name', {
              required: true
            })}
          />
          {errors.client_email && (
            <span className='text-danger text-left'>Enter a valid Email</span>
          )}
          <input
            type='email'
            name='client_email'
            placeholder='Email Address'
            className={`w-100 ${errors.client_email ? 'border-danger' : ''}`}
            {...register('client_email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email'
              }
            })}
          />
          {errors.phone_number && (
            <span className='text-danger text-left'>Enter phone number</span>
          )}
          <input
            type='tel'
            name='phone_number'
            placeholder='Phone Number'
            className={`w-100 ${errors.phone_number ? 'border-danger' : ''}`}
            {...register('phone_number', {
              required: true
            })}
          />

          {errors.tags && (
            <span className='text-danger text-left'>Enter tag</span>
          )}
          {/* <input
                        type='tel'
                        name='tags'
                        placeholder='Project Tag'
                        className={`w-100 ${errors.tags ? 'border-danger' : ""}`}
                        {...register('tags'
                            , {
                                required: true,
                            }
                        )}
                    /> */}
          <Select
            options={tags}
            // placeholder='Role'
            name='tags'
            value={tagValue}
            onChange={e => handleTagsChange(e)}
            // name='country'
            placeholder='Select Tag'
            className={`w-100 ${errors.tag ? 'border-danger' : ''} mb-3`}

            // {...register('country'
            //     , {
            //         required: true,

            //     }
            // )}
          />

          <Row>
            <Col sm='12' md='6'>
              {errors.start_date && (
                <span className='text-danger text-left'>Enter Start Date </span>
              )}
              <input
                type='date'
                name='start_date'
                placeholder='Start Date'
                className={`w-100 ${errors.start_date ? 'border-danger' : ''}`}
                {...register('start_date', {
                  required: true
                })}
              />
            </Col>
            <Col sm='12' md='6'>
              {errors.end_date && (
                <span className='text-danger text-left'>Enter End Date </span>
              )}
              <input
                type='date'
                name='end_date'
                placeholder='End Date'
                className={`w-100 ${errors.end_date ? 'border-danger' : ''}`}
                {...register('end_date', {
                  required: true
                })}
              />
            </Col>
          </Row>

          <div className='pt-2 pb-3'>
            <button className='w-100 btn-primary btn' type='submit' disabled={loading}>
              {loading ? (
                <div className='text-center w-100 align-items-center'>
                  <ThreeDots
                    color='white'
                    height={'12px'}
                    wrapperStyle={{ display: 'block' }}
                  />
                </div>
              ) : (
                'Add Client'
              )}
            </button>
          </div>
        </form>
      </div>

      {addTagModal && (
        <AddTag
          addState={addTagModal}
          setAddState={setAddTagModal}
          createTag={createTag}
        />
      )}
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
