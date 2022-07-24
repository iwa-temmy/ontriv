import React, { useEffect, useState, useMemo } from 'react'
import { HiUser, HiPlusCircle } from 'react-icons/hi'
import { CenteredModal as Modal } from '../../components/Modal'
import { ThreeDots } from 'react-loader-spinner'
import { useForm, Controller } from 'react-hook-form'
import { connect } from 'react-redux'
import { createClient, createTag } from '../../redux/actions'
import createNotification from '../../utils/Notification'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const AddNewClient = ({
  addState,
  createClient,
  setAddState,
  creationError,
  message,
  loading
}) => {
  const options = useMemo(() => countryList().getData(), [])
  const [uploadedImage, setUploadedImage] = useState(null)

  const handlePictureUpload = e => {
    // setPhoto(e.target.files[0])
    setUploadedImage(URL.createObjectURL(e.target.files[0]))
  }

  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm()

  const addClient = values => {
    createClient(values)
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
          {errors.fullname && (
            <span className='text-danger text-left'>Enter client name</span>
          )}
          <input
            type='text'
            name='fullname'
            placeholder='Client Name'
            className={`w-100 ${errors.fullname ? 'border-danger' : ''}`}
            {...register('fullname', {
              required: true
            })}
          />
          {errors.email && (
            <span className='text-danger text-left'>Enter a valid Email</span>
          )}
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            className={`w-100 ${errors.email ? 'border-danger' : ''}`}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email'
              }
            })}
          />

          {errors.country && (
            <span className='text-danger text-left'>Select Country</span>
          )}

          <Controller
            control={control}
            // defaultValue={options.map(c => c.value)}
            name='country'
            className={`w-100 ${errors.country ? 'border-danger' : ''} mb-3`}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                placeholder='Country'
                inputRef={ref}
                // value={options.filter(c => value.includes(c.value))}
                className={`w-100 ${
                  errors.country ? 'border-danger' : ''
                } mb-3`}
                onChange={(e, val) => {
                  onChange(e.value)
                }}
                options={options}
              />
            )}
            {...register('country', {
              required: true
            })}
          />

          {errors.project_tag && (
            <span className='text-danger text-left'>Enter project tag</span>
          )}
          <input
            type='text'
            name='project_tag'
            placeholder='Project Tag'
            className={`w-100 ${errors.project_tag ? 'border-danger' : ''}`}
            {...register('project_tag', {
              required: true
            })}
          />

          <div  className='mb-2 d-flex justify-content-end'>
            <div
              className='img-holder'
              style={{
                marginRight: '30px'
              }}
            >
              {uploadedImage && <img src={uploadedImage} alt='client-logo' className='add-client-logo' />}
            </div>
            <div>
              <div className='d-flex justify-content-center align-items-center' role='button'>
                <HiPlusCircle color='#2062F4' size='20' />
                <div role='button'>
                  <label
                  role='button'
                    for='client_logo'
                    className='mb-0 cursor-pointer'
                    style={{
                      fontWeight: ' 700',
                      fontSize: '15px',
                      color: '#2062F4'
                    }}
                  >
                    Upload Logo
                  </label>
                </div>
              </div>
              <input
                type='file'
                name='client_logo'
                id='client_logo'
                accept=''
                className='d-none'
                onChange={e => handlePictureUpload(e)}
              />
              <p
                style={{
                  fontWeight: '300',
                  fontSize: '12px'
                }}
              >
                3MB max size (500 x500)
              </p>
            </div>
          </div>

          <div className='pt-2 pb-3'>
            <button
              className='w-100 btn-primary btn'
              type='submit'
              disabled={loading}
            >
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
