import React,{ useState }  from 'react';
import {
    Container,
    Row,
    Card,
    Input,
    Form,
    Col,
    Button
} from 'reactstrap';
import SigninImg from '../../assets/img/sign2.png';
import { AiFillApple, AiFillTwitterCircle } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { TiEye } from 'react-icons/ti'
import { IoMdEyeOff } from 'react-icons/io'


const Signin = () => {
    const [inputType, setInputType] = useState('password')

    return (
        <div className='auth'>
            <Row className='gx-0'>
                <Col md='5' sm='12' className='pr-0'>
                    <div className='signin-left'>
                        <Container>
                            <div className='signin-img-container'>
                                <img src={SigninImg} alt='signin-img' className='signin-img' />
                            </div>
                            <div className='signin-text text-white pl-5 w-75 mx-auto'>
                                <h2 className='signin-header-text mt-5 mb-3'>
                                    Content Manager Dream Tool.
                                </h2>
                                <h4 className='signin-subhead-text'>
                                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem.
                                </h4>
                            </div>

                        </Container>
                    </div>
                </Col>
                <Col md='7' sm='12' className='pl-0'>
                    <div className='signin-right'>
                        <Container>
                            <div className='mx-auto w-75 signin-form-wrapper'>
                                <Card className='p-5 signin-form-card text-center'>
                                    <h4>Welcome Back!</h4>
                                    <p>Login with your Account Details</p>
                                    <Form>
                                        <Input type='email' placeholder='Email Address' className='' />
                                        <div className='password-container'>
                                            <div className='password-icon'>
                                            {
                                            inputType === 'password' ?
                                                <TiEye
                                                    color='#E5E9F2'
                                                    size='30px'
                                                    onClick={() => { setInputType('text') }}
                                                /> :
                                                <IoMdEyeOff
                                                    color='#000'
                                                    size='25px'
                                                    onClick={() => { setInputType('password') }}
                                                />


                                        }
                                            </div>
                                            <Input type={inputType} placeholder='Create password' />
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center '>
                                            <div className='d-flex  align-items-center'>
                                                <div className='input-check'>
                                                    <input type="checkbox" id="forgotPassword" name="forgotPassword" value="forgotPassword" className='mb-0' />
                                                </div>
                                                <div className='ml-3 '>
                                                    <p className='mb-0'>Remember me</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='forgot-password mb-0'>
                                                    {/* <span> */}
                                                    <a className='forgot-password-link' href='/auth/forgot-password'>Forgot Password?</a>
                                                    {/* </span> */}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <Button className='py-3'>
                                                Log in
                                            </Button>
                                        </div>
                                        <div className='py-3 mx-auto w-75'>
                                            <p className='easy-login'>Easy Login</p>
                                        </div>
                                        <div className='mx-auto w-75 social-login d-flex justify-content-between'>
                                            <div>
                                                <FcGoogle
                                                    size='22px'
                                                />
                                            </div>
                                            <div>
                                                <AiFillApple
                                                    size='24px'

                                                />
                                            </div>
                                            <div>
                                                <BsFacebook
                                                    size='22px'
                                                    color='#3C5A9A'
                                                />
                                            </div>
                                            <div>
                                                <AiFillTwitterCircle
                                                    size='26px'
                                                    color='#1DA1F2'
                                                />

                                            </div>
                                            {/* <p className='easy-login'>Easy Login</p> */}
                                        </div>
                                    </Form>

                                </Card>
                                <div className='no-account my-4 py-4 text-center'>
                                    <p className='mb-0'>Don’t have an account yet?
                                        <span className='register-link'>
                                            <a href='/auth/register'>Sign Up</a>
                                        </span>
                                    </p>

                                </div>
                            </div>

                        </Container>


                    </div>
                </Col>
            </Row>

        </div>
    )
}
export default Signin