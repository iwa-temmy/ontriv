import React, {  useEffect, useMemo } from 'react'
import { HiUser } from 'react-icons/hi'
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

  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm()

  const addClient = values => {
    // const { fullname, email, country, password } = values

    console.log(values)
    // createClient(data)
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
                inputRef={ref}
                // value={options.filter(c => value.includes(c.value))}
            className={`w-100 ${errors.country ? 'border-danger' : ''} mb-3`}

                onChange={val => onChange(val.map(c => c.value))}
                options={options}
                isMulti
              />
            )}
            {...register('country', {
              required: true
            })}
          />

          {errors.password && (
            <span className='text-danger text-left'>Enter password</span>
          )}
          <input
            type='password'
            name='password'
            placeholder='Set password'
            className={`w-100 ${errors.password ? 'border-danger' : ''}`}
            {...register('password', {
              required: true
            })}
          />

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
