import React, { useState } from 'react';
import {
    Container,
    // Row,
    Card,
    Input,
    Form,
    // Col,
    Button
} from 'reactstrap';
import { TiEye } from 'react-icons/ti'
import { IoMdEyeOff } from 'react-icons/io'
import logo from '../../assets/img/logo.png'


const ForgotPassword = () => {
    const [inputType1, setInputType1] = useState('password')
    const [inputType2, setInputType2] = useState('password')

    return (
        <div className='auth'>
            <div className='auth-logo'>
                <img src={logo} alt='ontriv-logo'/>
            </div>
            <div className='reset-password'>
                <Container>
                    <div className='mx-auto reset-password-wrapper'>
                        <div className='text-center reset-password-text'>
                            <h4>Resest password</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                        </div>
                        <Card className='p-5 signin-form-card text-center'>

                            <Form>
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
                                    <Input type={inputType1} placeholder='Create password' />
                                </div>

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
                                    <Input type={inputType2} placeholder='Confirm password' />

                                </div>

                                <div>
                                    <Button className='py-3 mb-4 mt-1'>
                                        Reset
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
export default ForgotPassword