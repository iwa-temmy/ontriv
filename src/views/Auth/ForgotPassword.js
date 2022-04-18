import React, { useState,useEffect } from 'react';
import {
    Container,
    // Row,
    Card,
    // Input,
    Form,
    // Col,
    Button
} from 'reactstrap';
import { TiEye } from 'react-icons/ti'
import { IoMdEyeOff } from 'react-icons/io'
import logo from '../../assets/img/logo.png'
import { ThreeDots } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { forgotPassword } from "../../redux/actions";
import createNotification from '../../utils/Notification';



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

    const { handleSubmit, register, watch, formState: { errors } } = useForm();

    const handlePasswordReset = (values) => {
        const token=localStorage.getItem('ontrivUserToken')
        const uid=JSON.parse(localStorage.getItem('ontrivCurrentUser')).pk;
        forgotPassword({...values,token,uid});
    }

    return (
        <div className='auth'>
            <div className='auth-logo'>
                <img src={logo} alt='ontriv-logo' />
            </div>
            <div className='reset-password'>
                <Container>
                    <div className='mx-auto reset-password-wrapper'>
                        <div className='text-center reset-password-text'>
                            <h4>Resest password</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                        <Card className='p-5 signin-form-card '>

                            <Form onSubmit={handleSubmit(handlePasswordReset)}>

                                {errors.new_password1 && <span className='text-danger text-left'>Enter Password</span>}
                                <div className='password-container'>
                                    <div className='password-icon'>
                                        {
                                            inputType1 === 'password' ?
                                                <TiEye
                                                    color='#E5E9F2'
                                                    size='30px'
                                                    onClick={() => { setInputType1('text') }}
                                                /> :
                                                <IoMdEyeOff
                                                    color='#000'
                                                    size='25px'
                                                    onClick={() => { setInputType1('password') }}
                                                />


                                        }
                                    </div>
                                    <input
                                        type={inputType1}
                                        placeholder='Create password'
                                        name='new_password1'
                                        className={`w-100 ${errors.new_password1 ? 'border-danger' : ""}`}

                                        {...register('new_password1'
                                            , {
                                                required: true,
                                            }
                                        )}
                                    />
                                </div>

                                {errors.new_password2 && <span className='text-danger text-left'>{errors.new_password2?.message}</span>}
                                <div className='password-container'>
                                    <div className='password-icon'>
                                        {
                                            inputType2 === 'password' ?
                                                <TiEye
                                                    color='#E5E9F2'
                                                    size='30px'
                                                    onClick={() => { setInputType2('text') }}
                                                /> :
                                                <IoMdEyeOff
                                                    color='#000'
                                                    size='25px'
                                                    onClick={() => { setInputType2('password') }}
                                                />


                                        }

                                    </div>

                                    <input
                                        type={inputType2}
                                        placeholder='Confirm password'
                                        name='new_password2'
                                        className={`w-100 ${errors.new_password2 ? 'border-danger' : ""}`}
                                        {...register('new_password2'
                                            , {
                                                required: true,
                                                validate: (val) => {
                                                    if (watch('new_password1') !== val) {
                                                        return "Passwords do not match"
                                                    }
                                                }
                                            }
                                        )}
                                    />

                                </div>

                                <div>
                                    <Button className='py-3 mb-4 mt-1'>
                                        {loading ?
                                            <div className='text-center w-100 align-items-center'>
                                                <ThreeDots color='white' height={'12px'} wrapperStyle={{ display: 'block' }} />
                                            </div>
                                            : 'Reset'}
                                    </Button>
                                </div>

                            </Form>

                        </Card>
                        <div className='no-account my-4 py-4 text-center'>
                            <p className='mb-0'>Remember Password?
                                <span className='register-link'>
                                    <a href='/auth/login'> Login</a>
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
    return ({ forgotPasswordError, message, loading })
}
export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);