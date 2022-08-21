import React, { useState, useEffect } from 'react'
import {
  Container,
  // Row,
  Card,
  // Input,
  Form,
  // Col,
  Button
} from 'reactstrap'
import { TiEye } from 'react-icons/ti'
import { IoMdEyeOff } from 'react-icons/io'
import logo from '../../assets/img/logo.png'
import { ThreeDots } from 'react-loader-spinner'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { forgotPassword } from '../../redux/actions'
import createNotification from '../../utils/Notification'

const ForgotPassword = ({
  loading,
  forgotPassword,
  forgotPasswordError,
  message
}) => {
  useEffect(() => {
    // console.log(forgotPasswordError, message, loading)
    if (forgotPasswordError.length > 0) {
      createNotification('error', forgotPasswordError)
    }
    if (message.length > 0) {
      createNotification('info', forgotPasswordError)
    }
  }, [forgotPasswordError, message, loading])

  const [inputType1, setInputType1] = useState('password')
  const [inputType2, setInputType2] = useState('password')

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm()

  const handlePasswordReset = values => {
    const token = localStorage.getItem('ontrivUserToken')
    const uid = JSON.parse(localStorage.getItem('ontrivCurrentUser')).pk
    forgotPassword({ ...values, token, uid })
  }

  return (
    <div className='auth'>
      <div className='auth-logo'>
        <img src={logo} alt='ontriv-logo' width='150px' />
      </div>
      <div className='reset-password'>
        <Container>
          <div className='mx-auto reset-password-wrapper'>
            <div className='text-center reset-password-text'>
              <h3
                className='mb-0'
                style={{
                  fontSize: '34px',
                  opacity: '0.8'
                }}
              >
                Forgot your password? 😅
              </h3>
              <div className='mt-4 mb-5'>
                <p
                  className='mb-0'
                  style={{
                    fontSize: '14px',
                    color: '#111317',
                    opacity: '0.8'
                  }}
                >
                  Enter your registered email address, and we'll
                </p>
                <p
                  className='mb-0'
                  style={{
                    fontSize: '14px',
                    color: '#111317',
                    opacity: '0.8'
                  }}
                >
                  {' '}
                  send you a link to reset your password
                </p>
              </div>
            </div>
            <Card className='p-5 signin-form-card '>
              <Form onSubmit={handleSubmit(handlePasswordReset)}>
                {errors.email && (
                  <span className='text-danger text-left'>
                    Enter a valid email addres
                  </span>
                )}
                <div className='password-container'>
                  <input
                    style={{
                      border: '1px solid #49A8F8'
                    }}
                    type='email'
                    placeholder='Email address'
                    name='email'
                    className={`w-100 ${errors.email ? 'border-danger' : ''}`}
                    {...register('email', {
                      required: true
                    })}
                  />
                </div>

                <div>
                  <Button className='py-3  mt-1'>
                    {loading ? (
                      <div className='text-center w-100 align-items-center'>
                        <ThreeDots
                          color='white'
                          height={'12px'}
                          wrapperStyle={{ display: 'block' }}
                        />
                      </div>
                    ) : (
                      'Reset Password'
                    )}
                  </Button>
                </div>
              </Form>
            </Card>
            <div className='no-account my-4 py-4 text-center'>
              <p
                className='mb-0'
                style={{
                  fontSize: '15px',
                  fontWeight:'400'
                }}
              >
                Remember Password?
                <span className='register-link'>
                  <a href='/auth/login' style={{
                    fontSize:'16px',
                    fontWeight:'600'
                  }}> Login</a>
                </span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  const { forgotPasswordError, message, loading } = auth
  return { forgotPasswordError, message, loading }
}
export default connect(mapStateToProps, { forgotPassword })(ForgotPassword)
